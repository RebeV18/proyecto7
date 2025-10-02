import { 
  doc, 
  setDoc, 
  getDoc, 
  deleteDoc,
  serverTimestamp 
} from 'firebase/firestore';
import { db, auth } from '../../../config/firebase';

// Guardar carrito del usuario en Firestore
export const saveUserCart = async (cartData) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      console.log("Usuario no autenticado, usando localStorage únicamente");
      return { success: false, message: "Usuario no autenticado" };
    }

    const cartDoc = {
      userId: user.uid,
      products: cartData.products || [],
      totalItems: cartData.totalItems || 0,
      totalPrice: cartData.totalPrice || 0,
      updatedAt: serverTimestamp()
    };

    await setDoc(doc(db, 'carts', user.uid), cartDoc);

    return { 
      success: true, 
      message: "Carrito guardado correctamente" 
    };
  } catch (error) {
    console.error("Error guardando carrito:", error);
    return { 
      success: false, 
      message: error.message || "Error al guardar carrito" 
    };
  }
};

// Obtener carrito del usuario desde Firestore
export const getUserCart = async () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      return { 
        success: false, 
        message: "Usuario no autenticado",
        cart: null 
      };
    }

    const cartDoc = await getDoc(doc(db, 'carts', user.uid));
    
    if (!cartDoc.exists()) {
      return { 
        success: true, 
        message: "No hay carrito guardado",
        cart: {
          products: [],
          totalItems: 0,
          totalPrice: 0
        }
      };
    }

    const cartData = cartDoc.data();
    return { 
      success: true, 
      message: "Carrito obtenido correctamente",
      cart: {
        products: cartData.products || [],
        totalItems: cartData.totalItems || 0,
        totalPrice: cartData.totalPrice || 0
      }
    };
  } catch (error) {
    console.error("Error obteniendo carrito:", error);
    return { 
      success: false, 
      message: error.message || "Error al obtener carrito",
      cart: null 
    };
  }
};

// Sincronizar carrito local con Firestore al hacer login
export const syncCartOnLogin = async (localCart) => {
  try {
    const user = auth.currentUser;
    if (!user) return { success: false };

    // Obtener carrito guardado en Firestore
    const firestoreResult = await getUserCart();
    
    if (!firestoreResult.success || !firestoreResult.cart) {
      // No hay carrito en Firestore, guardar el local
      await saveUserCart(localCart);
      return { 
        success: true, 
        cart: localCart,
        message: "Carrito local sincronizado con Firestore" 
      };
    }

    const firestoreCart = firestoreResult.cart;
    
    // Si ambos carritos tienen productos, combinarlos
    if (localCart.products.length > 0 && firestoreCart.products.length > 0) {
      const combinedProducts = [...firestoreCart.products];
      
      localCart.products.forEach(localProduct => {
        const existingIndex = combinedProducts.findIndex(
          p => p.id === localProduct.id
        );
        
        if (existingIndex >= 0) {
          // Si el producto ya existe, sumar cantidades
          combinedProducts[existingIndex].quantity += localProduct.quantity;
        } else {
          // Si no existe, agregarlo
          combinedProducts.push(localProduct);
        }
      });

      const combinedCart = {
        products: combinedProducts,
        totalItems: combinedProducts.reduce((sum, p) => sum + p.quantity, 0),
        totalPrice: combinedProducts.reduce((sum, p) => sum + (p.precio * p.quantity), 0)
      };

      await saveUserCart(combinedCart);
      return { 
        success: true, 
        cart: combinedCart,
        message: "Carritos combinados correctamente" 
      };
    }

    // Si solo uno tiene productos, usar ese
    const resultCart = localCart.products.length > 0 ? localCart : firestoreCart;
    await saveUserCart(resultCart);
    
    return { 
      success: true, 
      cart: resultCart,
      message: "Carrito sincronizado correctamente" 
    };

  } catch (error) {
    console.error("Error sincronizando carrito:", error);
    return { 
      success: false, 
      message: error.message || "Error al sincronizar carrito" 
    };
  }
};

// Limpiar carrito del usuario en Firestore
export const clearUserCart = async () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      return { success: false, message: "Usuario no autenticado" };
    }

    await deleteDoc(doc(db, 'carts', user.uid));

    return { 
      success: true, 
      message: "Carrito limpiado correctamente" 
    };
  } catch (error) {
    console.error("Error limpiando carrito:", error);
    return { 
      success: false, 
      message: error.message || "Error al limpiar carrito" 
    };
  }
};

// Auto-guardar carrito cuando hay cambios (para usuarios autenticados)
export const autoSaveCart = (cartData) => {
  const user = auth.currentUser;
  if (user) {
    // Usar debounce para no saturar Firestore
    clearTimeout(autoSaveCart.timeoutId);
    autoSaveCart.timeoutId = setTimeout(() => {
      saveUserCart(cartData);
    }, 1000); // Guardar después de 1 segundo de inactividad
  }
};
import { 
  collection, 
  getDocs, 
  doc, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc,
  query,
  where,
  orderBy,
  limit
} from 'firebase/firestore';
import { db } from "../../../config/firebase";
import { cache } from "react";

// Fetch all products from Firestore
export const fetchAllProducts = cache(async () => {
  try {
    const productsCollection = collection(db, 'products');
    const querySnapshot = await getDocs(productsCollection);
    
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return {
      success: true,
      data: products
    };
  } catch (error) {
    console.error("Error obteniendo los productos", error);
    throw new Error(error.message || "Error al obtener productos");
  }
});

// Fetch product by ID from Firestore
export const fetchProductById = cache(async (id) => {
  try {
    const productDoc = doc(db, 'products', id);
    const docSnapshot = await getDoc(productDoc);
    
    if (!docSnapshot.exists()) {
      throw new Error("Producto no encontrado");
    }
    
    return {
      success: true,
      data: {
        id: docSnapshot.id,
        ...docSnapshot.data()
      }
    };
  } catch (error) {
    console.error(`Error obteniendo el producto con el id: ${id}`, error);
    throw new Error(error.message || "Error al obtener producto");
  }
});

// Add new product to Firestore
export const addProduct = async (productData) => {
  try {
    const productsCollection = collection(db, 'products');
    const docRef = await addDoc(productsCollection, {
      ...productData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    return {
      success: true,
      data: {
        id: docRef.id,
        ...productData
      }
    };
  } catch (error) {
    console.error("Error agregando producto", error);
    throw new Error(error.message || "Error al agregar producto");
  }
};

// Update product in Firestore
export const updateProduct = async (id, productData) => {
  try {
    const productDoc = doc(db, 'products', id);
    await updateDoc(productDoc, {
      ...productData,
      updatedAt: new Date()
    });
    
    return {
      success: true,
      data: {
        id,
        ...productData
      }
    };
  } catch (error) {
    console.error("Error actualizando producto", error);
    throw new Error(error.message || "Error al actualizar producto");
  }
};

// Delete product from Firestore
export const deleteProduct = async (id) => {
  try {
    const productDoc = doc(db, 'products', id);
    await deleteDoc(productDoc);
    
    return {
      success: true,
      message: "Producto eliminado correctamente"
    };
  } catch (error) {
    console.error("Error eliminando producto", error);
    throw new Error(error.message || "Error al eliminar producto");
  }
};

// Fetch products by category
export const fetchProductsByCategory = async (category) => {
  try {
    const productsCollection = collection(db, 'products');
    const q = query(productsCollection, where("category", "==", category));
    const querySnapshot = await getDocs(q);
    
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return {
      success: true,
      data: products
    };
  } catch (error) {
    console.error("Error obteniendo productos por categoría", error);
    throw new Error(error.message || "Error al obtener productos por categoría");
  }
};

// Fetch featured products (limited quantity)
export const fetchFeaturedProducts = async (limitCount = 6) => {
  try {
    const productsCollection = collection(db, 'products');
    const q = query(
      productsCollection, 
      where("featured", "==", true), 
      orderBy("createdAt", "desc"),
      limit(limitCount)
    );
    const querySnapshot = await getDocs(q);
    
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return {
      success: true,
      data: products
    };
  } catch (error) {
    console.error("Error obteniendo productos destacados", error);
    throw new Error(error.message || "Error al obtener productos destacados");
  }
};

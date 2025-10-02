import { 
  collection, 
  addDoc, 
  doc, 
  getDoc,
  serverTimestamp 
} from 'firebase/firestore';
import { db, auth } from '../../../config/firebase';
import { apiClient } from '../../../shared/services/apiClient';

// Crear orden y procesar con MercadoPago usando tu backend
export const mercadoPagoPreference = async ({ cart }) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error("Usuario no autenticado");
    }

    // Obtener datos del usuario desde Firestore
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    const userData = userDoc.exists() ? userDoc.data() : {};

    // Calcular total del carrito
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Crear la orden en Firestore PRIMERO
    const orderData = {
      userId: user.uid,
      userEmail: user.email,
      userName: userData.nombre || user.displayName || 'Usuario',
      cart: cart,
      total: total,
      status: 'pending',
      paymentStatus: 'pending',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    const orderRef = await addDoc(collection(db, 'orders'), orderData);
    const orderId = orderRef.id;

    // Enviar datos a tu backend para procesar MercadoPago
    const paymentData = {
      cart: cart,
      total: total,
      orderId: orderId,
      user: {
        uid: user.uid,
        email: user.email,
        name: userData.nombre || user.displayName || 'Usuario',
        surname: userData.apellido || '',
        phone: userData.telefono || ''
      }
    };

    // Llamar a tu backend existente
    const response = await apiClient.post("/payment/mercadopago", paymentData);

    return {
      success: true,
      preferenceid: response.data.preferenceid || response.data.id,
      init_point: response.data.init_point,
      orderid: orderId,
      sandbox_init_point: response.data.sandbox_init_point,
      ...response.data
    };

  } catch (error) {
    console.error("Error al procesar pago con MercadoPago:", error);
    
    throw new Error(
      error.response?.data?.message || 
      error.message || 
      "Error al procesar el pago"
    );
  }
};

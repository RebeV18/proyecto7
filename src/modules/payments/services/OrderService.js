import { 
  collection, 
  addDoc, 
  doc, 
  getDoc, 
  getDocs, 
  updateDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp 
} from 'firebase/firestore';
import { db, auth } from '../../../config/firebase';

// Crear nueva orden
export const createOrder = async (orderData) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error("Usuario no autenticado");
    }

    // Obtener datos del usuario
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    const userData = userDoc.exists() ? userDoc.data() : {};

    const order = {
      userId: user.uid,
      userEmail: user.email,
      userName: userData.nombre || user.displayName || 'Usuario',
      userPhone: userData.telefono || '',
      userAddress: userData.direccion || '',
      ...orderData,
      status: 'pending',
      paymentStatus: 'pending',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    const orderRef = await addDoc(collection(db, 'orders'), order);

    return {
      success: true,
      orderId: orderRef.id,
      order: {
        id: orderRef.id,
        ...order
      }
    };
  } catch (error) {
    console.error("Error creando orden:", error);
    throw new Error(error.message || "Error al crear la orden");
  }
};

// Obtener orden por ID
export const getOrderById = async (orderId) => {
  try {
    const orderDoc = await getDoc(doc(db, 'orders', orderId));
    
    if (!orderDoc.exists()) {
      throw new Error("Orden no encontrada");
    }

    return {
      success: true,
      order: {
        id: orderDoc.id,
        ...orderDoc.data()
      }
    };
  } catch (error) {
    console.error("Error obteniendo orden:", error);
    throw new Error(error.message || "Error al obtener la orden");
  }
};

// Obtener órdenes del usuario actual
export const getUserOrders = async (limitCount = 10) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error("Usuario no autenticado");
    }

    const ordersRef = collection(db, 'orders');
    const q = query(
      ordersRef,
      where("userId", "==", user.uid),
      orderBy("createdAt", "desc"),
      limit(limitCount)
    );

    const querySnapshot = await getDocs(q);
    const orders = [];

    querySnapshot.forEach((doc) => {
      orders.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return {
      success: true,
      orders
    };
  } catch (error) {
    console.error("Error obteniendo órdenes del usuario:", error);
    throw new Error(error.message || "Error al obtener las órdenes");
  }
};

// Actualizar estado de la orden
export const updateOrderStatus = async (orderId, status, paymentStatus = null) => {
  try {
    const updateData = {
      status,
      updatedAt: serverTimestamp()
    };

    if (paymentStatus) {
      updateData.paymentStatus = paymentStatus;
    }

    await updateDoc(doc(db, 'orders', orderId), updateData);

    return {
      success: true,
      message: "Estado de orden actualizado correctamente"
    };
  } catch (error) {
    console.error("Error actualizando estado de orden:", error);
    throw new Error(error.message || "Error al actualizar la orden");
  }
};

// Actualizar orden con datos de pago de MercadoPago
export const updateOrderPayment = async (orderId, paymentData) => {
  try {
    const updateData = {
      paymentData,
      paymentStatus: paymentData.status || 'pending',
      updatedAt: serverTimestamp()
    };

    // Actualizar status general basado en el pago
    switch (paymentData.status) {
      case 'approved':
        updateData.status = 'paid';
        break;
      case 'rejected':
        updateData.status = 'cancelled';
        break;
      case 'pending':
        updateData.status = 'pending';
        break;
      default:
        updateData.status = 'pending';
    }

    await updateDoc(doc(db, 'orders', orderId), updateData);

    return {
      success: true,
      message: "Datos de pago actualizados correctamente"
    };
  } catch (error) {
    console.error("Error actualizando datos de pago:", error);
    throw new Error(error.message || "Error al actualizar los datos de pago");
  }
};

// Obtener todas las órdenes (solo para administradores)
export const getAllOrders = async (limitCount = 50) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error("Usuario no autenticado");
    }

    // Verificar si es admin (podrías usar la función isAdmin que creamos antes)
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    const userData = userDoc.exists() ? userDoc.data() : {};
    
    if (userData.role !== 'admin') {
      throw new Error("No tienes permisos para ver todas las órdenes");
    }

    const ordersRef = collection(db, 'orders');
    const q = query(
      ordersRef,
      orderBy("createdAt", "desc"),
      limit(limitCount)
    );

    const querySnapshot = await getDocs(q);
    const orders = [];

    querySnapshot.forEach((doc) => {
      orders.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return {
      success: true,
      orders
    };
  } catch (error) {
    console.error("Error obteniendo todas las órdenes:", error);
    throw new Error(error.message || "Error al obtener las órdenes");
  }
};

// Cancelar orden
export const cancelOrder = async (orderId) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error("Usuario no autenticado");
    }

    // Verificar que la orden pertenece al usuario
    const orderDoc = await getDoc(doc(db, 'orders', orderId));
    if (!orderDoc.exists()) {
      throw new Error("Orden no encontrada");
    }

    const orderData = orderDoc.data();
    if (orderData.userId !== user.uid) {
      throw new Error("No tienes permisos para cancelar esta orden");
    }

    // Solo se puede cancelar si está pendiente
    if (orderData.status !== 'pending') {
      throw new Error("Solo se pueden cancelar órdenes pendientes");
    }

    await updateDoc(doc(db, 'orders', orderId), {
      status: 'cancelled',
      paymentStatus: 'cancelled',
      cancelledAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });

    return {
      success: true,
      message: "Orden cancelada correctamente"
    };
  } catch (error) {
    console.error("Error cancelando orden:", error);
    throw new Error(error.message || "Error al cancelar la orden");
  }
};
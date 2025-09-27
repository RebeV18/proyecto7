import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc
} from 'firebase/firestore';
import { auth, db } from '../../../config/firebase';

// Login service using Firebase Authentication
export const loginService = async ({ email, password }) => {
  try {
    if (!auth || !db) {
      throw new Error('Firebase not initialized');
    }
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Obtener datos adicionales del usuario desde Firestore
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    const userData = userDoc.exists() ? userDoc.data() : {};
    
    return {
      success: true,
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        ...userData
      },
      token: await user.getIdToken()
    };
  } catch (error) {
    console.error("Error al accesar la cuenta:", error);
    throw new Error(error.message || "Error al iniciar sesión");
  }
};

// Register service using Firebase Authentication and Firestore
export const registerService = async ({
  nombre,
  apellido,
  pais,
  email,
  telefono,
  password,
  confirmPassword,
}) => {
  try {
    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      throw new Error("Las contraseñas no coinciden");
    }

    // Crear usuario en Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Actualizar el perfil con el nombre
    await updateProfile(user, {
      displayName: `${nombre} ${apellido}`
    });

    // Guardar datos adicionales en Firestore
    await setDoc(doc(db, 'users', user.uid), {
      nombre,
      apellido,
      pais,
      email,
      telefono,
      role: 'user', // Rol por defecto: 'user', los admins deben ser asignados manualmente
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return {
      success: true,
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        nombre,
        apellido,
        pais,
        telefono
      },
      token: await user.getIdToken()
    };
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    throw new Error(error.message || "Error al registrar usuario");
  }
};

// Update service using Firestore
export const updateService = async ({ nombre, apellido, pais, telefono }) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error("Usuario no autenticado");
    }

    // Actualizar el perfil en Authentication
    await updateProfile(user, {
      displayName: `${nombre} ${apellido}`
    });

    // Actualizar datos en Firestore
    await updateDoc(doc(db, 'users', user.uid), {
      nombre,
      apellido,
      pais,
      telefono,
      updatedAt: new Date()
    });

    // Obtener datos actualizados
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    const userData = userDoc.data();

    return {
      success: true,
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        ...userData
      }
    };
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    throw new Error(error.message || "Error al actualizar usuario");
  }
};

// Logout service
export const logoutService = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    throw new Error(error.message || "Error al cerrar sesión");
  }
};

// Get current user
export const getCurrentUser = () => {
  return auth.currentUser;
};

// Auth state observer
export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

// Check if current user is admin
export const isAdmin = async () => {
  try {
    const user = auth.currentUser;
    if (!user) return false;
    
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (!userDoc.exists()) return false;
    
    const userData = userDoc.data();
    return userData.role === 'admin';
  } catch (error) {
    console.error("Error verificando rol de admin:", error);
    return false;
  }
};

// Get user role
export const getUserRole = async (uid = null) => {
  try {
    const userId = uid || auth.currentUser?.uid;
    if (!userId) return null;
    
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (!userDoc.exists()) return null;
    
    const userData = userDoc.data();
    return userData.role || 'user';
  } catch (error) {
    console.error("Error obteniendo rol del usuario:", error);
    return null;
  }
};

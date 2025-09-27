import axios from "axios";
import { auth } from "../../config/firebase";
import { envLoader } from "../../config/envLoader";

// Legacy API client for external services (like MercadoPago)
const { backendUrl } = envLoader;

export const legacyApiClient = axios.create({
  baseURL: backendUrl,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Firebase-aware API client for external services that need Firebase auth
export const apiClient = axios.create({
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para añadir token de Firebase automáticamente
apiClient.interceptors.request.use(
  async (config) => {
    try {
      const user = auth.currentUser;
      if (user) {
        const token = await user.getIdToken();
        config.headers.authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.warn("Error obteniendo token de Firebase:", error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Token de autenticación inválido o expirado");
    }
    return Promise.reject(error);
  }
);

// Firebase Authentication helpers
export const FirebaseAuthHelper = {
  // Get current user
  getCurrentUser: () => auth.currentUser,
  
  // Get current user token
  getCurrentUserToken: async () => {
    const user = auth.currentUser;
    return user ? await user.getIdToken() : null;
  },
  
  // Check if user is authenticated
  isAuthenticated: () => !!auth.currentUser,
  
  // Get user data
  getCurrentUserData: () => {
    const user = auth.currentUser;
    return user ? {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified,
    } : null;
  }
};

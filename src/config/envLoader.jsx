export const envLoader = {
  // Firebase Configuration
  firebase: {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    ...(import.meta.env.VITE_FIREBASE_MEASUREMENT_ID && {
      measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
    }),
  },
  // Currency options
  optionsCurrency: {
    currency: import.meta.env.VITE_CURRENCY,
    locale: import.meta.env.VITE_LOCALE,
    minimumFractionDigits:
      Number(import.meta.env.VITE_MINIMUM_FRACTION_DIGITS) || 0,
    maximumFractionDigits:
      Number(import.meta.env.VITE_MAXIMUM_FRACTION_DIGITS) || 0,
  },
  // MercadoPago
  mp_publicKey: import.meta.env.VITE_MP_PUBLIC_KEY,
  // Legacy - mantenido por compatibilidad
  backendUrl: import.meta.env.VITE_BACKEND_URL,
};

// Firebase configuration and initialization
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { envLoader } from './envLoader.jsx';

// Validate Firebase configuration
const firebaseConfig = envLoader.firebase;

// Check if required Firebase config exists
if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  const errorMessage = 'Firebase configuration is missing. Please check your environment variables.';
  console.error(errorMessage);
  console.error('Required: VITE_FIREBASE_API_KEY, VITE_FIREBASE_PROJECT_ID');
  console.error('Current config:', firebaseConfig);
  
  // During build time, don't throw error - just log warning
  if (typeof window === 'undefined') {
    console.warn('⚠️ Firebase config missing during build - this may be expected if env vars are set during deployment');
  } else {
    throw new Error('Firebase configuration is incomplete');
  }
}

// Initialize Firebase only if config is valid
let app, auth, db, storage;

try {
  if (firebaseConfig.apiKey && firebaseConfig.projectId) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
  } else {
    console.warn('Firebase not initialized - missing configuration');
  }
} catch (error) {
  console.error('Error initializing Firebase:', error);
}

// Export Firebase services (may be undefined if not initialized)
export { auth, db, storage };
export default app;
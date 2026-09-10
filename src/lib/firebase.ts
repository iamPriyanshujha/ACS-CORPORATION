import { initializeApp, getApps } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { 
  initializeFirestore,
  setLogLevel,
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  orderBy,
  onSnapshot
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Suppress non-critical transport retry warnings in browser console
setLogLevel('error');

// Initialize Firestore with force long polling to prevent WebChannel stream disconnect errors in proxy/iframe environments
export const db = initializeFirestore(
  app, 
  {
    experimentalForceLongPolling: true,
  }, 
  firebaseConfig.firestoreDatabaseId || undefined
);

export { 
  signInWithPopup, 
  firebaseSignOut, 
  onAuthStateChanged, 
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  orderBy, 
  onSnapshot 
};
export type { FirebaseUser };

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {getAnalytics} from 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyBtW8l3Cr4C6dTaxi2NNuRRlF6cAys0x8M",
  authDomain: "vueapp-ee687.firebaseapp.com",
  projectId: "vueapp-ee687",
  storageBucket: "vueapp-ee687.firebasestorage.app",
  messagingSenderId: "312430500209",
  appId: "1:312430500209:web:d885ced52627956c2fbed0",
  measurementId: "G-FQ7F11X949"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
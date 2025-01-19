import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import type { Firestore } from "firebase/firestore";

// Firebase yapılandırması
const firebaseConfig = {
  apiKey: "AIzaSyDRjgDF8-GOR7VWdMp_yQ8PMfNmKy4NePg",
  authDomain: "watsons-app-45155.firebaseapp.com",
  projectId: "watsons-app-45155",
  storageBucket: "watsons-app-45155.firebasestorage.app",
  messagingSenderId: "880257643163",
  appId: "1:880257643163:web:f157c9b966a9d26bd84c3e",
  measurementId: "G-XHKCYWHJ8B"
};

// Firebase ve Firestore'u başlat
const firebaseApp = initializeApp(firebaseConfig);
const firestore: Firestore = getFirestore(firebaseApp);

// Firebase ve Firestore'u global olarak kullanılabilir hale getiriyoruz
export default defineNuxtPlugin(() => {
  return {
    provide: {
      firebaseApp,
      firestore,
    },
  };
});
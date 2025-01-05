import { initializeApp } from "firebase/app";
import type { FirebaseApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDRjgDF8-GOR7VWdMp_yQ8PMfNmKy4NePg",
    authDomain: "watsons-app-45155.firebaseapp.com",
    projectId: "watsons-app-45155",
    storageBucket: "watsons-app-45155.firebasestorage.app",
    messagingSenderId: "880257643163",
    appId: "1:880257643163:web:f157c9b966a9d26bd84c3e",
  };
    
// Firebase uygulamasını başlat
const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
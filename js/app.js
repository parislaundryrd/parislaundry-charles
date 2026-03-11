// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAjUUTLNrki_WMl-GCng-HDqML24ghCKrE",
  authDomain: "paris-laundry-charles.firebaseapp.com",
  projectId: "paris-laundry-charles",
  storageBucket: "paris-laundry-charles.firebasestorage.app",
  messagingSenderId: "60234256607",
  appId: "1:60234256607:web:840d7fcd64fe20778dd96a",
  measurementId: "G-94GW3JN5JB"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Configurar auth y db en el objeto window
window.auth = firebase.auth();
window.db = firebase.firestore();
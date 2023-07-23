// Importa las funciones de firebase app
import { initializeApp } from "firebase/app";
// importar la función de la tienda
import {getFirestore} from "firebase/firestore"; 


// Configuración de la app de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBkKJ1TPOFjOjdbaY3BCY8jbyxEsNqZV08",
  authDomain: "kuki-38945.firebaseapp.com",
  projectId: "kuki-38945",
  storageBucket: "kuki-38945.appspot.com",
  messagingSenderId: "881135571319",
  appId: "1:881135571319:web:99b3310c3b3951a1691172"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
//Exporto la base de datos
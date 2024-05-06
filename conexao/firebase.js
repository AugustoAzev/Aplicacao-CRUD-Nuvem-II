//Meus dados
const firebaseConfig = {
  apiKey: "AIzaSyDS-hGgUUtCsgTiS62WQ7eDeWMHdAem2eE",
  authDomain: "vendas-online-a3046.firebaseapp.com",
  projectId: "vendas-online-a3046",
  storageBucket: "vendas-online-a3046.appspot.com",
  messagingSenderId: "875469798919",
  appId: "1:875469798919:web:cfc27cbbde1bf314a8b4a2",
  measurementId: "G-VVJ1Z3G505"
};

//Inicializando o Firebase
firebase.initializeApp(firebaseConfig);

//Referência para o banco de dados Firestore
const db = firebase.firestore();

//Referência para o armazenamento do Firebase
const storage = firebase.storage();

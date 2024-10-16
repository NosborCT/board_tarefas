import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBGAvC4lMzYxtgKPe65voj1ZC_MNY-fMCc",
  authDomain: "boartarefas.firebaseapp.com",
  projectId: "boartarefas",
  storageBucket: "boartarefas.appspot.com",
  messagingSenderId: "315488765597",
  appId: "1:315488765597:web:879e861751346dbc75f674"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export {db};
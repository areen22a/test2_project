
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBgXAlbFrZnc-QBvJi58JlQjpZofNH_9SE",
  authDomain: "webproject-95af6.firebaseapp.com",
  projectId: "webproject-95af6",
  storageBucket: "webproject-95af6.appspot.com",
  messagingSenderId: "877965904527",
  appId: "1:877965904527:web:c61f7f164312c40cc13efa"
};


const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app);
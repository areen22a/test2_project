import "../App.css";
import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from './firebase';

export const useFireStore = (collectioName) => {
    const [data, setData] = useState([]);


    const getData = async () => {

        await getDocs(collection(db, collectioName))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setData(newData);
            })
    }


    const deleteData = async () => {
        await deleteDoc(doc(db, collectioName, id));
    }


    const addData = async (e, title, owner) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, collectioName), {
                title: title,
                owner: owner
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }




    useEffect(() => {
        getData();
    }, [data])
    return { data, addData, deleteData }
}
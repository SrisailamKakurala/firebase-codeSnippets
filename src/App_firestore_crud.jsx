import React from 'react'
import { app } from './configs/firebase.config.js'
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, updateDoc, deleteDoc  } from 'firebase/firestore'


const db = getFirestore(app)

export default function App() {

  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "ssl",
        last: "kace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);

      // get all data
      const querySnapshot = await getDocs(collection(db, "users"));
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


  const makeSubCollection = async () => {
    try {
      const docRef = await addDoc(collection(db, "users/ZDPcMscHyzVZ3GFD6SuI/parents"), {
        mother: "ssl_m",
        father: "ssl_f",
      });
      console.log("Document written with ID: ", docRef.id);

    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


  const getDocument = async () => {
    const docRef = doc(db, "users", "ZDPcMscHyzVZ3GFD6SuI");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }


  const queryDocs = async () => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("first", "==", "ssl"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  }


  const updateDocument = async () => {
    const docRef = doc(db, "users", "ZDPcMscHyzVZ3GFD6SuI");
    await updateDoc(docRef, {
      first: "ssl_showman",
    });
  }


  const deleteDocument = async () => {
    const docRef = doc(db, "users", "ZDPcMscHyzVZ3GFD6SuI");
    await deleteDoc(docRef);
  }

  return (
    <>
      <h1>hello fireabse</h1>
      <button onClick={addData}>add</button> 
      <button onClick={makeSubCollection}>make sub collection</button>
      <button onClick={getDocument}>get document</button>
      <button onClick={queryDocs}>query docs</button>
      <button onClick={updateDocument}>update document</button>
      <button onClick={deleteDocument}>delete document</button>
    </>
  )
}

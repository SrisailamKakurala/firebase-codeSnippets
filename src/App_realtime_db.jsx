import React, { useEffect } from 'react'
import { app } from './configs/firebase.config.js'
import { getDatabase, ref, set, onValue, get, child } from "firebase/database";


const db = getDatabase(app)


export default function App() {

  const [name, setName] = React.useState('')

  const putData = () => {
    set(ref(db, 'users/test'), [
      {
        name: 'test',
        age: 12
      },
      {
        name: 'test2',
        age: 13
      },
      {
        name: 'test3',
        age: 14
      }
    ])
  }


  const getData = () => {
    const dbRef = ref(db, "users/test/0");
    get(dbRef).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }


  // whenever this users/test/0/name value changes
  // this function will be called in real time
  // and the data on frontend will be updated in real time
  useEffect(() => {
    const dbRef = ref(db, "users/test/0/name");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setName(data)
    });
  }, [])
  
  
  return (
    <>
      <h1>hello fireabse</h1>
      <h2>{name}</h2>
      <button onClick={putData}>put data</button>
      <button onClick={getData}>get data</button>
    </>
  )
}

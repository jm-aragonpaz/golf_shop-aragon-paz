//@ts-check
import React, { useEffect, useState } from 'react'
import {collection, getDocs, getFirestore, query, where } from "firebase/firestore"

export default function TestConsultaCol() {
    const [items,setItems]=useState([]);
    useEffect(() => {
        const db = getFirestore();

        // Trae toda la colection
        // const collectionRef = collection(db, 'products')

        // Traer una parte de la coleccion
        const collectionRef = query(collection(db, 'products'), where('category', '==', 'set'))


        getDocs(collectionRef).then((res) =>{
            console.log(res.docs)
            const auxArray = res.docs.map((item)=>({...item.data(), id: item.id}));
            //setItem({ ...res.data(), id: res.id});
            // console.log(auxArray)
            setItems(auxArray);
        })
    }, [])
    
  return <div>{items && <>{JSON.stringify(items)}</>}</div>;
}

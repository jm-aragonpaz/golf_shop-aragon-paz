//@ts-check
import React, { useEffect, useState } from 'react'
import {doc, getDoc, getFirestore } from "firebase/firestore"

export default function TestConsulta() {
    const [item,setItem]=useState({});
    useEffect(() => {
        const db = getFirestore();
        const driverRef = doc(db, 'products','kpbdU8GrTHUrF4NYkSWL')
        getDoc(driverRef).then((res) =>{
            setItem({ ...res.data(), id: res.id});
        })
    }, [])
    
  return <div>{item && <>{JSON.stringify(item)}</>}</div>;
}

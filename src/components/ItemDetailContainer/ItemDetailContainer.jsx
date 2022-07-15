//@ts-check
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'

export default function ItemDetailContainer() {
  const [item, setItem]= useState({});
  const [error, setError]= useState(false);
  const [loading, setLoading] = useState(true);

  let { itemChosen } =  useParams();

  useEffect(()=>{
    const db = getFirestore();
    const itemCons= doc(db, 'products', itemChosen)
    // let promiseItem = new Promise((resolve, reject)=>{
      getDoc(itemCons).then((res) =>{
        setItem({ ...res.data(), id: res.id});
    })
    .catch((error)=>{
      setError(true);
    })
    .finally(()=>{
      setLoading(false);
    })
    // let promiseDetail= new Promise((resolve,reject)=>{
    //   setTimeout(()=>{
    //       fetch("http://localhost:3000/productList.json")
    //       .then((response)=> response.json())
    //       .then((data)=>{
    //         resolve(data);
    //       })
    //   },2000) 
    // });
    // promiseDetail
    // .then((resultado)=>{
    //   let aux = resultado.find((element) => element.id == itemChosen)
    //   setItem(aux);
    // })
    // .catch((error)=>{
    //   setError(true);
    //   console.log(error)
    // })
    // .finally(() =>{
    //   setLoading(false);
    // })
  },[itemChosen])
  return (
    <>
        {loading && "Loading..."}
        {error && "Hubo un error al cargar el producto"}
        {itemChosen && <ItemDetail item={itemChosen} />}
    </>
  )
}

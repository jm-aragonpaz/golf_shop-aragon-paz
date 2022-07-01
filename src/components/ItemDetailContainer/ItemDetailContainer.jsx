//@ts-check
import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'

export default function ItemDetailContainer() {
  const [item, setItem]= useState({});
  const [error, setError]= useState(false);
  const [loading, setLoading] = useState(true);

  let { itemChosen } =  useParams();

  useEffect(()=>{
    let promiseDetail= new Promise((resolve,reject)=>{
      setTimeout(()=>{
          fetch("http://localhost:3000/productList.json")
          .then((response)=> response.json())
          .then((data)=>{
            resolve(data);
            console.log(data);
          })
      },2000) 
    });
    promiseDetail
    .then((resultado)=>{
      console.log(resultado)
      let aux = resultado.find((element) => element.id == itemChosen)
      setItem(aux);
      console.log(item);
    })
    .catch((error)=>{
      setError(true);
      console.log(error)
    })
    .finally(() =>{
      setLoading(false);
    })
  },[itemChosen])
  return (
    <>
        {loading && "Loading..."}
        {error && "Hubo un error al cargar el producto"}
        {item && <ItemDetail item={item} />}
    </>
  )
}

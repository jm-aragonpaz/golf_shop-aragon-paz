import React, { useState} from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export default function CheckOut() {

  const [nombre, setNombre] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [idCompra, setIdCompra] = useState('');

  function handleClickComprar(){
  const pedido = { buyer: {nombre, tel, email}, 
  carrito:[
    {id:101, title:'zapato nike', price: 100 },//si tengo los productos los saco del cart context. Lo mismo el total
    {id:101, title:'zapato nike', price: 100 },
  ],
  total: 1000};
  
    // alert('Intenta comprar el usuario')
    // console.log(pedido);
    const db = getFirestore();
    const collectionRef= collection(db, 'pedidos');

    //Si quiero verificar que los campos no esten vacios los tengo que validar. Para eso se puede hacer:
    //
    //if(!nomrbe || !tel || !email) return; Aca simplemente sale de la funcion y no hace nada.
    //                                      No usar el prevent default. (no sirve para esto)

    addDoc(collectionRef, pedido).then(({id})=> setIdCompra(id))
  }
  return (
    <div>
      <p>Su id de compra es: {idCompra}</p>
      <h1>Complete para terminar su compra</h1>
      <input onChange={(e)=> setNombre(e.target.value)} type={'text'} placeholder={'Ingrese nombre'}></input><br/>
      <input onChange={(e)=> setTel(e.target.value)} type={'tel'} placeholder={'Ingrese tel'}></input><br/>
      <input onChange={(e)=> setEmail(e.target.value)} type={'email'} placeholder={'Ingrese su email'}></input><br/>
      <br/>
      <button onClick={handleClickComprar}>Comprar</button>
    </div>
  )
}

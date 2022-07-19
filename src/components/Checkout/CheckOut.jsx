import React, { useState, useContext} from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { MyCartContext } from '../../context/CartContext'; 


export default function CheckOut() {
  const {cart, totalPrice, clear} = useContext(MyCartContext);
  const [nombre, setNombre] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [idCompra, setIdCompra] = useState('');
  const [date, setDate] = useState('')

  function handleClickComprar(){
    const order = { buyer: {nombre, tel, email}, 
    items:[...cart], total: totalPrice, date:Date.now()}

    const db = getFirestore();
    const collectionRef= collection(db, 'orders');

    //Si quiero verificar que los campos no esten vacios los tengo que validar. Para eso se puede hacer:
    //
    if(!nombre || !tel || !email) return; //Aca simplemente sale de la funcion y no hace nada. Trabajar para que quede mejor.
    //                                      No usar el prevent default. (no sirve para esto)

    addDoc(collectionRef, order).then(({id})=> setIdCompra(id))
    setDate(Date())
    clear()
    clearData()
  }
  function clearData() {
    setNombre('');
    setTel('');
    setEmail('');
  }
  return (
    <div>
      <p>Su id de compra es: {idCompra}. Fecha de la compra: {date}</p>
      <h1>Complete para terminar su compra</h1>
      <input onChange={(e)=> setNombre(e.target.value)} type={'text'} placeholder={'Ingrese nombre'}></input><br/>
      <input onChange={(e)=> setTel(e.target.value)} type={'tel'} placeholder={'Ingrese tel'}></input><br/>
      <input onChange={(e)=> setEmail(e.target.value)} type={'email'} placeholder={'Ingrese su email'}></input><br/>
      <br/>
      <button onClick={handleClickComprar}>Comprar</button>
    </div>
  )
}

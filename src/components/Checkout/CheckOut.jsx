import React, { useState, useContext} from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { MyCartContext } from '../../context/CartContext'; 
import swal from 'sweetalert';


export default function CheckOut() {
  const {cart, clear} = useContext(MyCartContext);
  const [nombre, setNombre] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [idCompra, setIdCompra] = useState('');
  const [date, setDate] = useState('');
  const total = cart.reduce((previous,item)=> previous + (item.price*item.quantity),0);

  function handleClickComprar(){
    const order = { buyer: {nombre, tel, email}, 
    items:[...cart], total: total, date:Date.now()};

    let nameRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
    let phoneRegex = /^[0-9]/gm
    let emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

    if(!nameRegex.test(nombre) || !phoneRegex.test(tel) || !emailRegex.test(email)) {
      swal(`Error!`, `Por favor completa el formulario correctamente y verifica que el carrito este lleno.` , `error`);
      return;
    }
    
    const db = getFirestore();
    const collectionRef= collection(db, 'orders');
    addDoc(collectionRef, order).then(({id})=> {
      setIdCompra(id);
      setDate(Date())
    });
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

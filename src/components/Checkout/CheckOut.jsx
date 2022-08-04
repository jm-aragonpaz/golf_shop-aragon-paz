import React, { useState, useContext} from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { MyCartContext } from '../../context/CartContext'; 
import swal from 'sweetalert';
import './CheckOut.css'
import { Button, Input } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CheckOut() {
  const {cart, clear, emptyCart} = useContext(MyCartContext);
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

    if(!nameRegex.test(nombre) || !phoneRegex.test(tel) || !emailRegex.test(email) || emptyCart) {
      swal(`Error!`, `Por favor completa el formulario correctamente y verifica que el carrito este lleno.` , `error`);
      return;
    }

    const db = getFirestore();
    const collectionRef= collection(db, 'orders');
    addDoc(collectionRef, order).then(({id})=> {
      setIdCompra(id);
      setDate(Date())
      swal({
        title: 'Felicitaciones. Tu compra fue realizada',
        text:`Tu Id de compra es: ` + id + `. Anótelo en caso de necesitar realizar alguna gestión extra.`,
        icon:"success",
      });
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
      <h2>Completa el formulario para terminar tu compra</h2>
      <div className={"formulario"}>
      <Input style={{borderColor:'green'}} variant="contained" onChange={(e)=> setNombre(e.target.value)} type={'text'} placeholder={'Ingrese nombre'}></Input><br/>
      <Input onChange={(e)=> setTel(e.target.value)} type={'tel'} placeholder={'Ingrese tel'}></Input><br/>
      <Input onChange={(e)=> setEmail(e.target.value)} type={'email'} placeholder={'Ingrese su email'}></Input><br/>
      </div>
      <br/>
      <div className="compBut">
      <Button  style={{color:'green',borderColor:'green',marginInline:'1rem'}} variant="outlined" onClick={handleClickComprar}>Comprar</Button>
      <Button  style={{color:'green',borderColor:'green'}} variant="outlined">
      <Link to={'/'} style={{color:'inherit',textDecoration:'none'}}>Ir a Inicio</Link></Button>

      </div>
    
    </div>
  )
}

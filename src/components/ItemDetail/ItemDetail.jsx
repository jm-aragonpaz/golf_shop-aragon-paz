import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import swal from "sweetalert";
import { SettingsCellOutlined } from '@mui/icons-material';
import { MyCartContext } from '../../context/CartContext';

export default function ItemDetail({item}) {
  const [count, setCount] = useState({})
  const {addItem}=useContext(MyCartContext);  // console.log(item)
  function onAdd(cant,stock){
    
    if((cant>0)&&(stock>0)){
      swal({                 
        title: 'Información',
        text: `¿Estás seguro que queres agregar ` + cant +` unidad/es al carrito?`,
        icon: 'warning',
        buttons: true,
        dangerMode:false,
    // confirmButtonText: 'Ok',
        })
    .then((confirmation)=> {
        if(confirmation){
            swal(`Usted ha agregado`+ cant +` unidad/es al carrito`,{
                icon:"success",
            });
            addItem(item,cant);
            setCount(cant);
            
        }else{
            swal("Podés volver a seleccionar la cantidad deseada");
        }
    })
    }
}
  return (
    <div id="grid">
        <div>{item.title}</div>
        <div><img src={item.pictureUrl}/></div>
        <div>Stock: {item.stock}</div>
        <div>Precio: {item.price} USD</div>
        <div>{item.description}</div>
      <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
    </div>
  );
}

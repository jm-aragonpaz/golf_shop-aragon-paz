import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import swal from "sweetalert";
import { SettingsCellOutlined } from '@mui/icons-material';
import { MyCartContext } from '../../context/CartContext';
import './ItemDetail.css'
import { Box } from '@mui/material';

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
    <Box sx={{flexGrow:1}}>
    <div className={"gridDetail"}>
        <div className={"artImg"}><img className={"itImg"} src={item.pictureUrl} alt=""/></div>
        <div className={"itCard"}>
        <div className={"artTit"}>{item.title}</div>
        <div className={"artDes"}>{item.description}</div>
        <div className={"artPrice"}>Precio: {item.price} USD</div>
        <div>Stock: {item.stock}</div>
      <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
      </div>
    </div>
    </Box>
  );
}

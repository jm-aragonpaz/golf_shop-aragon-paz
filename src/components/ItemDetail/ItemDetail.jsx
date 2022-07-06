import React from 'react'
import Item from "../Item/Item"
import ItemCount from '../ItemCount/ItemCount';
import swal from "sweetalert";

export default function ItemDetail({item}) {
  // console.log(item)
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
        }else{
            swal("Podés volver a seleccionar la cantidad deseada");
        }
    })
    }
}
  return (
    <div id="grid">
        <Item key={item.id} id={item.id} title={item.title} price={item.price} 
        description={item.description} pictureUrl={item.pictureUrl} />
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </div>
  );
}

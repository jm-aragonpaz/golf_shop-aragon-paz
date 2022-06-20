import React, {useState} from "react";
import swal from "sweetalert";
import "./ItemCount.css";

export default function ItemCount({stock,initial,onAdd}){
    const [auxInitial, setAuxInitial] = useState(initial);

    function rest(){
        if ((auxInitial !== 1)&&(stock >=0)){
            setAuxInitial(auxInitial - 1);
        }
    }
    function suma(){
        if ((auxInitial !== stock)&& stock>=0){
            setAuxInitial(auxInitial +1);
        }
    }
    function onAdd(cant){
        // function mostrarAlertaErr() {
        return(
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
        )
    }
    if(stock ===0){
    return(
        
        <div>
        <div id="buttonBox">
            <div><button disabled={true}>-</button></div>
            <div>0</div>
            <div><button disabled={true}>+</button></div>
        </div>
            <button id="addButton" disabled={true}>Producto sin Stock</button>
        </div>
    )
    }else{
        return(
        
            <div>
            <div id="buttonBox">
                <div><button onClick={()=> rest()}>-</button></div>
                <div>{auxInitial}</div>
                <div><button onClick={()=> suma()}>+</button></div>
            </div>
                <button id="addButton" onClick={()=> onAdd(auxInitial)}>Agregar al carrito</button>
            </div>
        )
    }
}
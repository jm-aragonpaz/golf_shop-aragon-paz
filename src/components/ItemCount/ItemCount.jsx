import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css";
import swal from "sweetalert";

export default function ItemCount({stock,initial,onAdd}){
    const [auxInitial, setAuxInitial] = useState(initial);
    const [auxStock, setAuxStock] = useState({stock});
    useEffect(() => {setAuxStock(stock)}, [stock]);
    function rest(){
        if ((auxInitial >= 1)){
            setAuxInitial(auxInitial - 1);
            setAuxStock(auxStock+1)
        }
    }
    function suma(){
        if ((auxInitial < stock) && (auxStock>=0)){
            setAuxInitial(auxInitial +1);
            setAuxStock(auxStock -1);
        }else{
            swal({                 
                title: 'Información',
                text: `En este momento no disponemos de mas unidades de este producto`,
                icon: 'info',
                buttons: true,
                dangerMode:false,
                })
        }
    }
    
    return(
        
        <div>
            <div id="buttonBox">
                <div><button onClick={()=> rest()}>-</button></div>
                <div>{auxInitial}</div>
                <div><button onClick={()=> suma()}>+</button></div>
            </div>
            <div id="addButton">
                <button  onClick={()=> {onAdd(auxInitial,auxStock)}}>Agregar al carrito</button>
                <button ><Link to={'/'} style={{textDecoration:"none", color:"black"}}>Seguir comprando</Link></button>
                </div>
        </div>
    )
}

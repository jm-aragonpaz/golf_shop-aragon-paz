import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css";

export default function ItemCount({stock,initial,onAdd}){
    const [auxInitial, setAuxInitial] = useState(initial);
    const [auxStock, setAuxStock] = useState(stock);

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
                <button ><Link to={'/Cart'} style={{textDecoration:"none", color:"black"}}>Finalizar Compra</Link></button>
                </div>
        </div>
    )
}

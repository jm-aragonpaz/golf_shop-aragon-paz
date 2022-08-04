import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css";
import swal from "sweetalert";
import Button from '@mui/material/Button';

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
                <div><Button variant="outlined" style={{color:'green',borderColor:'green', width:'2rem'}}onClick={()=> rest()}>-</Button></div>
                <div>{auxInitial}</div>
                <div><Button variant="outlined" style={{color:'green',borderColor:'green',width:'2rem'}} onClick={()=> suma()}>+</Button></div>
            </div>
            <div id="addButton">
                <Button variant="outlined" style={{borderColor:'green',color:'green', height:'3rem'}} onClick={()=> {onAdd(auxInitial,auxStock)}}>Agregar al carrito</Button>
                <Button variant="outlined" style={{borderColor:'green',height:'3rem'}}><Link to={'/'} style={{textDecoration:"none", color:"green"}}>Seguir comprando</Link></Button>
                </div>
        </div>
    )
}

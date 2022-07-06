//@ts-check
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';

export default function ItemListContainer({ greeting }) {
    // const ItemListContainer = ({Title, Name, Desc, Price}) =>{
    const [itemList, setItemList] = useState([])
    const [error, setError]= useState(false);
    const [loading, setLoading] = useState(true);

    let { itemCategory } = useParams();

    useEffect(() => {
        let promiseProducts = new Promise((resolve,rej)=>{
            setTimeout(()=>{
                fetch("http://localhost:3000/productList.json")
                .then((response)=> response.json())
                .then((data)=>{
                    resolve(data);
                })
            },2000)
        });
        promiseProducts
        .then((resultado)=>{
            if(!itemCategory){
                setItemList(resultado);
            }else{
                let aux = resultado.filter((element)=> element.category == itemCategory)
                setItemList(aux);
            }
            })
        .catch((error)=>{
            setError(true);
            console.log(error)
        })
        .finally(()=>{
            setLoading(false);
        })
        },[itemCategory]);
        

    return (

        <div>
            <span className="itemListContainer">{greeting}</span>
            
            {loading && "Loading..."}
            {error && "Error al cargar, reintente luego"}
            {itemList && <ItemList itemCategory={itemList} />}
            
        </div>
    )
}

//@ts-check
import React, { useEffect, useState, useContext } from 'react'
import { resolvePath, useParams } from 'react-router-dom';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { MyCartContext } from '../../context/CartContext';
import { collection, getDocs, getFirestore, where, query } from 'firebase/firestore';
export default function ItemListContainer({ greeting }) {
    // const ItemListContainer = ({Title, Name, Desc, Price}) =>{
    const [itemList, setItemList] = useState([])
    const [error, setError]= useState(false);
    const [loading, setLoading] = useState(true);

    let { itemCategory } = useParams();
    // console.log(itemCategory)

    useEffect(() => {
            const db = getFirestore();
            const collList = collection(db, 'products');
            // console.log(collList)
            if(!itemCategory){
                let collectionFounded = new Promise((res, reject)=>{
                    setTimeout(()=>{res(getDocs(collList))},1000)
                })
                collectionFounded.then((res)=>{
                    const auxArray = res.docs.map((element)=>({...element.data(), id: element.id}));
                    setItemList(auxArray)
                })
                .catch((error) =>{
                    setError(true)
                })
                .finally(()=>{
                setLoading(false)
                })
            }else{
                let collectionfilt=query(collList, where('category', '==',itemCategory));
                let arrayFilt = new Promise((res,reject)=>{
                    setTimeout(()=>{res(getDocs(collectionfilt))},1000)
                })
                arrayFilt.then((res)=>{
                    const arrNormalizado = res.docs.map((element)=>({...element.data(),id: element.id}))
                    setItemList(arrNormalizado);
                })
                .catch((error) =>{
                    setError(true);
                })
                .finally(()=>{
                    setLoading(false);
                })
            }
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

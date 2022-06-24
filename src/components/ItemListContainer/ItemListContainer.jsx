import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

export default function ItemListContainer({ greeting }) {
    // const ItemListContainer = ({Title, Name, Desc, Price}) =>{
    const [itemList, setItemList] = useState([])
    useEffect(() => {
        let items = [{ id: 1, title: "IronSet", price: "700", description: "IronSet", pictureURL: "https://www.worldwidegolfshops.com/titleist-t200-iron-set-100013451/p" },
        { id: 2, title: "Driver", price: "200", description:"Driver Titleist", pictureURL: "https://www.a-alvarez.com/productsimages/driver1-golf-titleist-917-d2-GMI917D2ROGS85.jpg/450/fill/ffffff" },
        { id: 3, title: "Putter", price: "225", description:"Putter Scotty Cameron Newport 2", pictureURL: "../../assets/putter.jpg" }];
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(items)
            }, 2000)
        }).then((res) => {
            setItemList(res)
        })
    }, [])

    return (
        // <div id="greeting">
        //     <p>Hola soy {Title}</p>
        //     <p>Mi nombre es {Name}</p>
        //     <p>Esta es mi descripcion {Desc}</p>
        //     <p>Este es mi precio {Price}</p>
        //     <ItemCount stock={5} initial={1} onAdd="onAdd"/>
        //     {/* <ItemCount stock={0} initial={1} onAdd="onAdd"/> */}
        // </div>
        <>
            <span className="itemListContainer">{greeting}</span>
            <ItemList itemList={itemList}/>
        </>
    )
}

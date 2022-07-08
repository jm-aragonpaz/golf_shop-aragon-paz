import React, { createContext, useState } from 'react'


export const MyCartContext = createContext(null);

export default function CartContext({children}) {
    const [cart,setCart]=useState([]);

    function addItem(item,quantity) {
        const itemAdded = 
        {
            id:item.id,
            title: item.title,
            price: item.price,
            description: item.description,
            category: item.category,
            pictureURL: item.pictureURL,
            cant: quantity,
            subtotal: item.price*item.cant
        }
        isInCart(itemAdded)
        console.log("Se agrego; ", itemAdded.title, "por ", itemAdded.cant, "unidad/es")
        console.log("cart ", JSON.stringify(cart))
    }

    function removeItem(itemId){
        setCart(cart.filter((it)=>it.id !== itemId));
    }

    function clear(){
        setCart([])
    }

    const isInCart = (newItem) => {
        setCart( cart.reduce((adder,newItem)=>{
            let isOnCart = cart.find((it)=>it.id === newItem.id);
            if (isOnCart){
                return adder.map((it)=>{
                    if(it.id===isOnCart.id){
                        return{
                            ...it,
                            cant:(it.cant+newItem.cant)
                        }
                    }else{
                        return it;
                    }
                });
            }else{
                return[...adder,newItem];
            }
        },[]))
    }
    return (
        <>
            <MyCartContext.Provider value={{cart, addItem, removeItem, clear}}>{children}</MyCartContext.Provider>
        </>
    )
}

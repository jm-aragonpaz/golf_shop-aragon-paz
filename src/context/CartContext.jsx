import React, { createContext, useState } from 'react'


export const MyCartContext = createContext(null);

export default function CartContext({children}) {
    const [cart,setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cant,setCant]=useState(0)
    function addItem(item,quantity) {
        let duplicate = cart.find(cart=>cart.id === item.id)
        if (duplicate){
            // setCart(cart=>)
        }else{
            !duplicate && setCart(cart => [...cart,{...item, quantity: quantity, subtotal: item.price * quantity}])
            console.log(cart)
            setTotalPrice(totalPrice + item.price * quantity)
            setCant(quantity)
            console.log(item.price,quantity)
        }
    }

    function removeItem(item){
        
        console.log(item)
        setTotalPrice(totalPrice - item.price* item.quantity)
        setCart(cart.filter((cartIt) => {
            return (cartIt.id !== item.id)
        }));
    }

    function clear(){
        setCart([])
        setTotalPrice(0)
    }
    let data = {
        cart,
        addItem,
        removeItem,
        clear,
        totalPrice
    }
    // const isInCart = (newItem) => {
    //     setCart( cart.reduce((adder,newItem)=>{
    //         let isOnCart = cart.find((it)=>it.id == newItem.id);
    //         if (isOnCart){
    //             return adder.map((it)=>{
    //                 if(it.id===isOnCart.id){
    //                     return{
    //                         ...it,
    //                         cant:(it.cant+newItem.cant)
    //                     }
    //                 }else{
    //                     return it;
    //                 }
    //             });
    //         }else{
    //             return([...adder,newItem]);
    //         }
    //     },[]))
    // }
    return (
        <>
            <MyCartContext.Provider value={data}>{children}</MyCartContext.Provider>
        </>
    )
}

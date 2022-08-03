import React, { createContext, useState, useEffect } from 'react'
import swal from 'sweetalert';

export const MyCartContext = createContext(null);

export default function CartContext({children}) {
    const [cart,setCart] = useState(() => {
        const prodStorage = localStorage.getItem("carrito");
        try {
            return prodStorage ? JSON.parse(prodStorage):[];
        } catch (err){
            console.log(err);
        }
    });
    const [totalPrice, setTotalPrice] = useState(0);
    const [cant,setCant]=useState(0)
    useEffect(() =>{
        localStorage.setItem("carrito",JSON.stringify(cart));
    },[cart]);


    function addItem(item,quantity) {
        let duplicate = cart.find(cart=>cart.id === item.id)
        if (duplicate){
            swal({                 
                title: 'Atención',
                text: `Este producto ya se encuentra cargado en el carrito. Verifica que sea en la cantidad correcta que queres agregar`,
                icon: 'warning',
                buttons: true,
                dangerMode:false,
                })
        }else{
            !duplicate && setCart(cart => [...cart,{...item, quantity: quantity, subtotal: item.price * quantity}])
            setTotalPrice(totalPrice + item.price * quantity)
            setCant(quantity)
        }
    }

    function removeItem(item){
        
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
    return (
        <>
            <MyCartContext.Provider value={data}>{children}</MyCartContext.Provider>
        </>
    )
}

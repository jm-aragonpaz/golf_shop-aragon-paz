//@ts-check
import React from 'react'
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { MyCartContext } from './context/CartContext';
import CheckOut from './components/Checkout/CheckOut'
import Footer from './components/Footer/Footer';
function App() {
  const cart = useContext(MyCartContext)
  return (
    <BrowserRouter>
    <div className={"layout"}>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:itemCategory" element={<ItemListContainer/>} />
        <Route path="/item/:itemChosen" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

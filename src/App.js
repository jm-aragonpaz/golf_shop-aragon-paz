//@ts-check
import './App.css';
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <NavBar/>
    //   </header>
    //   <h2>Aqui podrás encontrar todo lo necesario para la práctica del Golf!</h2>  
    //   <ItemListContainer Title= "un Greeting" Name="Juan" Desc="de Productos" Price={20000}/>      
    // </div>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="hola" />} />
        <Route path="/category/:id" element={<ItemListContainer greeting="hola"/>} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      <div>Footer</div>
    </BrowserRouter>
  );
}

export default App;

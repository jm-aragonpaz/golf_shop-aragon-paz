//@ts-check
import './App.css';
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Hola, soy un greeting" />} />
        <Route path="/category/:id" element={<ItemListContainer greeting="hola"/>} />
        <Route path="/item/:itemChosen" element={<ItemDetailContainer />} />
      </Routes>
      <div>Footer</div>
      </div>
    </BrowserRouter>
  );
}

export default App;

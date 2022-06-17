//@ts-check
import './App.css';
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/Navbar/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <h2>Aqui podrás encontrar todo lo necesario para la práctica del Golf!</h2>  
      <ItemListContainer Title= "un Greeting" Name="Juan" Desc="de Productos" Price={20000}/>
    </div>
  );
}

export default App;

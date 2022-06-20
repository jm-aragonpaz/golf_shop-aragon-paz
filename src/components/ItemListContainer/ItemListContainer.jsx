import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({Title, Name, Desc, Price}) =>{
    return(
        <div id="greeting">
            <p>Hola soy {Title}</p>
            <p>Mi nombre es {Name}</p>
            <p>Esta es mi descripcion {Desc}</p>
            <p>Este es mi precio {Price}</p>
            <ItemCount stock={5} initial={1} onAdd="onAdd"/>
            {/* <ItemCount stock={0} initial={1} onAdd="onAdd"/> */}
        </div>
    )
}
export default ItemListContainer;
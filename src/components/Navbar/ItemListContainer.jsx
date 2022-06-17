import './ItemListContainer.css'

const ItemListContainer = ({Title, Name, Desc, Price}) =>{
    return(
        <div id="greeting">
            <p>Hola soy {Title}</p>
            <p>Mi nombre es {Name}</p>
            <p>Esta es mi descripcion {Desc}</p>
            <p>Este es mi precio {Price}</p>
        </div>
    )
}
export default ItemListContainer;
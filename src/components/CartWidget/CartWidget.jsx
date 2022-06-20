import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const CartWidget = ({Cant}) =>{
    return(
        <p><ShoppingCartIcon/> {Cant}</p>
    );
}
export default CartWidget;
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SvgIcon from '@mui/material/SvgIcon';

export const CartWidget = ({Cant}) =>{
    return(
        <p><ShoppingCartIcon/> {Cant}</p>
    );
}
export default CartWidget;
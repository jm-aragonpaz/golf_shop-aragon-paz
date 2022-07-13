
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react'
import { MyCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './CartWidget.css'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';

export const CartWidget = () =>{
    const { cart, removeItem, totalPrice } = useContext(MyCartContext)

    const [anchorIt, setAnchorIt] = React.useState(null);
    const open = Boolean(anchorIt);
    const handleClick = (event) => {
    setAnchorIt(event.currentTarget);
    };
    const handleClose=()=>{
        setAnchorIt(null);
    };

    return(
        <div>
            {/* <p><ShoppingCartIcon/> {Cant}</p> */}
            <Button
                    color="inherit"
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                <Link to={'./Cart'} style={{color:'inherit',textDecoration:'none'}}><ShoppingCartIcon  color='white'/></Link>
                        <p className='cart-text'>{cart.length}</p> 
                </Button>
        </div>
    );
}
export default CartWidget;
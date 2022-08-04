import React, { useContext } from 'react'
import { MyCartContext } from '../../context/CartContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import './Cart.css'
export default function Cart() {

    const { cart, removeItem, clear} = useContext(MyCartContext);
    let total= cart.reduce((previous, item)=> previous + (item.price*item.quantity),0)

    return (
        <>  
            <div className={"carrito"}>
                <TableContainer component={Paper} sx={{ width: 9.8 / 10, borderRadius: '10px'}}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="center">Producto</TableCell>
                                <TableCell align="center">Precio Unitario</TableCell>
                                <TableCell align="center">Subtotal</TableCell>
                                <TableCell align="center">Cantidad</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cart.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        src={row.pictureUrl}
                                        alt={row.description}
                                    />
                                    </TableCell>
                                    <TableCell align="right">{row.title}</TableCell>
                                    <TableCell align="right">{row.price}</TableCell>
                                    <TableCell align="right">{row.subtotal}</TableCell>
                                    <TableCell align="right">{row.quantity}</TableCell>
                                    <TableCell align="right"><Button style={{backgroundColor:'green',width:'3rem'}} variant="contained" onClick={() => { removeItem(row) }} ><DeleteForeverIcon/></Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <div className={"comprar"}>
                    <Typography variant="h5">Importe total {total} USD</Typography>
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" style={{backgroundColor:'green'}}>
                            <Link to={'../checkout'} style={{color:'inherit',textDecoration:'none'}}>Finalizar compra</Link>
                        </Button>
                        <Button variant="outlined" onClick={() => { clear() }} style={{color:"green",borderColor:"green"}} > Vaciar carrito</Button>
                        <Button variant="contained" style={{backgroundColor:'green'}}> 
                            <Link to={'../'} style={{color:'inherit',textDecoration:'none'}}>Seguir comprando</Link>
                        </Button>
                    </Stack>
                </div>

            </div>
        </>
    )
}

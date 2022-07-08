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

export default function Cart() {

    const { cart, removeItem, clear } = useContext(MyCartContext);
    console.log(JSON.stringify(cart));

    let total = (cart.reduce((acc, item) => acc + item.subTotal, 0));

    return (
        <>
            
            <div>
                <TableContainer component={Paper} sx={{ width: 8 / 10, borderRadius: '15px' }}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>FOTO</TableCell>
                                <TableCell align="right">Producto</TableCell>
                                <TableCell align="right">Precio Unitario</TableCell>
                                <TableCell align="right">Subtotal</TableCell>
                                <TableCell align="right">Cantidad agregada</TableCell>
                                <TableCell align="right">BOTON ELIMINAR</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cart.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.pictureURL}
                                    </TableCell>
                                    <TableCell align="right">{row.title}</TableCell>
                                    <TableCell align="right">{row.price}</TableCell>
                                    <TableCell align="right">{row.subtotal}</TableCell>
                                    <TableCell align="right">{row.cantidad}</TableCell>
                                    <TableCell align="right"><Button variant="contained" onClick={() => { removeItem(row.id) }} >Icono eliminar</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <div>
                    Importe total  $ {total}
                    <Stack spacing={2} direction="row">
                        <Button variant="contained">Finalizar compra</Button>
                        <Button variant="outlined" onClick={() => { clear() }} > Vaciar carrito</Button>
                    </Stack>
                </div>

            </div>
        </>
    )
}

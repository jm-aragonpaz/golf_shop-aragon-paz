import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "../ItemCount/ItemCount.css"
import "./Item.css"
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Item({ id, title, price, description, pictureUrl}) {
    return (
            <Card id="card" sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="340"
                        src={pictureUrl}
                        alt={description}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Precio: {price} USD
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Button size="small" color="primary">
                        <Link to={`/item/${id}`} style={{color:'green',textDecoration:'none'}}>Ver Detalle</Link>
                    </Button>
            </Card>
    );
}

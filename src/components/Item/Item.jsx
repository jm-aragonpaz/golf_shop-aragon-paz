import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';
import "../ItemCount/ItemCount.css"
import "./Item.css"
export default function Item({ id, title, price, description, pictureUrl}) {
    // console.log(description,pictureUrl)
    return (
        <div id="card">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="340"
                        src={pictureUrl}
                        alt={description}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {id}. {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}. Precio: {price} USD
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActionArea>
                    <ItemCount stock={5} initial={1} onAdd="onAdd"/>
                </CardActionArea>
            </Card>
            </div>
    );
}

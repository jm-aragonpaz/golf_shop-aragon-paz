import React from 'react'
import Item from "../Item/Item"

export default function ItemDetail({item}) {
  // console.log(item)
  return (
    <div id="grid">
        <Item key={item.id} id={item.id} title={item.title} price={item.price} 
        description={item.description} pictureUrl={item.pictureUrl} />
    </div>
  );
}

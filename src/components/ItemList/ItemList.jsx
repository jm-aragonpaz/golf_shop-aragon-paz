import React from "react";
import Item from "../Item/Item";

function ItemList({ itemList }) {
    console.log(itemList)
  return (
    <>
        {itemList.map((item) => 
        <Item key={item.id} id={item.id} title={item.title} price={item.price} 
        description={item.description} pictureUrl={item.pictureUrl} />
        )}
    </>
  );
}
export default ItemList;
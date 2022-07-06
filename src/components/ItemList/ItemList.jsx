import React from "react";
import Item from "../Item/Item";

function ItemList({ itemCategory }) {
    // console.log(itemList)
  return (
    <div id="grid">
        {itemCategory.map((item) => 
        <Item key={item.id} id={item.id} title={item.title} price={item.price} 
        description={item.description} pictureUrl={item.pictureUrl} />
        )}
    </div>
  );
}
export default ItemList;
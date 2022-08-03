import React from "react";
import Item from "../Item/Item";
import './ItemList.css'

function ItemList({ itemCategory }) {
    // console.log(itemList)
  return (
    <div id="grid">
        {itemCategory.map((item) => 
        <Item key={item.id} {...item} />
        )}
    </div>
  );
}
export default ItemList;
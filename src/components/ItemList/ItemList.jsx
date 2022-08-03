import React from "react";
import Item from "../Item/Item";
import './ItemList.css'

function ItemList({ itemCategory }) {
  return (
    <div id="grid">
        {itemCategory.map((item) => 
        <Item key={item.id} {...item} />
        )}
    </div>
  );
}
export default ItemList;
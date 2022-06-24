import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

export default function ItemList({ itemList }) {
  return (
    <div>
      {itemList.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          pictureUrl={item.pictureUrl}
        />
      ))}
      <Item />
    </div>
  );
}

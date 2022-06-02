import ListItem from "./ListItem";
import { useState } from "react";

const List = ({ items: items_props, render, renderItem }) => {
  const [items, setItems] = useState(items_props);

  console.log("LIST");
  const deleteItem = (item) => setItems(items.filter((i) => i !== item));
  const render_items = items.map((item) => (
    <ListItem
      key={JSON.stringify(item)}
      item={item}
      deleteItem={deleteItem}
      render={renderItem}
      items={items}
      setItems={setItems}
    />
  ));
  return <div>{render(render_items)}</div>;
};

export default List;

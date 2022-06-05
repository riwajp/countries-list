import ListItem from "./ListItem";
import { useState } from "react";

const List = ({ items: items_props }) => {
  const [items, setItems] = useState(items_props);

  const deleteItem = (item) =>
    setItems(items.filter((i) => i.key !== item.key));

  const storeItem = (item) => {
    const items_temp = items;
    const item_index = items.findIndex((i) => item.key == i.key);
    items_temp[item_index] = item;
    setItems(items_temp);
  };

  const addItem = () => {
    setItems([
      ...items,
      {
        key: Math.random(),
        name: "",
        ppulation: 0,
        language: "",
        pci: 0,
        new: true,
      },
    ]);
  };

  const render_items = items.map((item) => (
    <ListItem
      key={item.key}
      item={item}
      deleteItem={deleteItem}
      storeItem={storeItem}
    />
  ));

  return (
    <div className="list-container">
      <div className="list">
        <h1 className="list__title">Countries List</h1>

        {render_items}
      </div>
      <br />
      <button className="button button--add" onClick={() => addItem()}>
        Add
      </button>
    </div>
  );
};

export default List;

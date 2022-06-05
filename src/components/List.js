import ListItem from "./ListItem";
import { useState } from "react";

const List = ({ title, items: items_props }) => {
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
      },
    ]);
  };

  const render_items = items.map((item) => (
    <ListItem
      key={item.key}
      item={item}
      deleteItem={deleteItem}
      storeItem={storeItem}
      isNew={!items_props.includes(item)}
    />
  ));

  return (
    <div className="list-container">
      <div className="list">
        <h1 className="list__title">{title}</h1>

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

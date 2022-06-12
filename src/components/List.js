import ListItem from "./ListItem";
import { useState } from "react";

const List = ({ schema, title, items, setItems }) => {
  const [new_items_key, setNewItemsKey] = useState([]);

  const deleteItem = (item) =>
    setItems(items.filter((i) => i.key !== item.key));

  const saveItem = (item) => {
    const items_temp = items;
    const item_index = items.findIndex((i) => item.key == i.key);
    items_temp[item_index] = item;
    setNewItemsKey(new_items_key.filter((i) => i !== item.key));
    setItems(items_temp);
  };

  const addItem = () => {
    const key = Math.random();
    setNewItemsKey([...new_items_key, key]);

    setItems([
      ...items,
      {
        key: key,
        value: "Nepal",
        population: 10000,
        language: "Nepali",
        pci: 1000,
      },
    ]);
  };

  const render_items = items.map((item) => (
    <ListItem
      key={item.key}
      item={item}
      deleteItem={deleteItem}
      saveItem={saveItem}
      isNew={new_items_key.includes(item.key)}
      schema={schema}
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

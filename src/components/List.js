import ListItem from "./ListItem";
import { useState } from "react";

const List = ({ items: items_props, deleteBtn, editBtn }) => {
  const [items, setItems] = useState(items_props);
  const deleteItem = (item) =>
    setItems(items.filter((i) => i.key !== item.key));
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

  const render_items = items.map((item, index) => (
    <ListItem
      key={item.key}
      item={item}
      deleteItem={deleteItem}
      items={items}
      setItems={setItems}
      deleteBtn={deleteBtn}
      editBtn={editBtn}
      index={index}
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

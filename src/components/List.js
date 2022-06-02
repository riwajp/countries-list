import ListItem from "./ListItem";
import { useState } from "react";

const List = ({ items: items_props, deleteBtn, editBtn }) => {
  const [items, setItems] = useState(items_props);

  const deleteItem = (item) => setItems(items.filter((i) => i !== item));
  const render_items = items.map((item, index) => (
    <ListItem
      key={JSON.stringify(item)}
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
    </div>
  );
};

export default List;

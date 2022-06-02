import { useEffect } from "react";
import { useState } from "react";
const ListItem = ({
  item: item_props,
  deleteItem,
  deleteBtn,
  editBtn,
  items,
  setItems,
  index,
}) => {
  const [edit_mode, setEditMode] = useState(false);
  const [item, setItem] = useState(item_props);

  const toogleEditMode = () => setEditMode(!edit_mode);

  const saveItem = (item) => {
    const items_temp = [...items];
    items_temp[index] = item;
    setItems(items_temp);
  };
  return (
    <div className="list__item">
      {Object.keys(item).map((key) => (
        <div className="list__item__key" key={key}>
          {edit_mode ? (
            <input
              value={item[key]}
              onChange={(e) => setItem({ ...item, [key]: e.target.value })}
              style={{ maxWidth: "100%" }}
            />
          ) : (
            item[key]
          )}
        </div>
      ))}
      {deleteBtn(item, deleteItem, toogleEditMode)}

      {editBtn(toogleEditMode, edit_mode, saveItem, item)}
    </div>
  );
};

export default ListItem;

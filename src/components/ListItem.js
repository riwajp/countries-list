import { useState } from "react";
const ListItem = ({
  item: item_props,
  deleteItem,

  items,
  setItems,
  index,
}) => {
  const [edit_mode, setEditMode] = useState(item_props?.new);
  const [item, setItem] = useState(item_props);

  const toggleEditMode = () => setEditMode(!edit_mode);

  const cancel = () => {
    toggleEditMode();
    setItem(items[index]);
  };

  const deleteBtn = () => {
    const handleClick = () => {
      if (item?.new || !edit_mode) {
        deleteItem(item);
      } else {
        cancel();
      }
    };
    return (
      <button className="button button--delete--right" onClick={handleClick}>
        {item?.new || !edit_mode ? "Delete" : "Cancel"}
      </button>
    );
  };
  const editBtn = () => {
    const handleClick = () => {
      if (edit_mode) {
        const items_temp = [...items];
        items_temp[index] = item;
        if (item["new"]) {
          delete item["new"];
        }
        setItems(items_temp);
      }
      toggleEditMode();
    };
    return (
      <button className="button button--edit--right" onClick={handleClick}>
        {edit_mode ? "Save" : "Edit"}
      </button>
    );
  };

  return (
    <div className="list__item">
      {Object.keys(item)
        .filter((k) => k !== "new" && k !== "key") //do not display fields `key` and `new`
        .map((key) => (
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
      {deleteBtn()}

      {editBtn()}
    </div>
  );
};

export default ListItem;

import { useState, useEffect, useMemo } from "react";
const ListItem = ({ item: item_props, deleteItem, storeItem, isNew }) => {
  const [item, setItem] = useState(item_props);

  const [new_item, setNewItem] = useState(item_props);
  const [edit_mode, setEditMode] = useState(isNew);

  const delete_mode = useMemo(() => item?.new || !edit_mode, [edit_mode, item]);

  const toggleEditMode = () => setEditMode(!edit_mode);

  const cancel = () => {
    setNewItem(item);
    toggleEditMode();
  };
  const saveItem = () => {
    const temp_new_item = new_item;

    setItem(temp_new_item);
  };

  const deleteBtn = () => {
    const handleClick = () => {
      if (delete_mode) {
        deleteItem(item);
      } else {
        cancel();
      }
    };
    return (
      <button className="button button--delete--right" onClick={handleClick}>
        {delete_mode ? "Delete" : "Cancel"}
      </button>
    );
  };
  const editBtn = () => {
    const handleClick = () => {
      if (edit_mode) {
        setItem(new_item);
        saveItem(item);
      }
      toggleEditMode();
    };
    return (
      <button className="button button--edit--right" onClick={handleClick}>
        {edit_mode ? "Save" : "Edit"}
      </button>
    );
  };

  useEffect(() => {
    storeItem(item);
  }, [item]);

  return (
    <div className="list__item">
      {Object.keys(item)
        .filter((k) => k !== "new" && k !== "key") //do not display fields `key` and `new`
        .map((key) => (
          <div className="list__item__key" key={key}>
            {edit_mode ? (
              <input
                value={new_item ? new_item[key] : ""}
                onChange={(e) =>
                  setNewItem({ ...new_item, [key]: e.target.value })
                }
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

ListItem.defaultProps = {
  deleteItem: () => {},
  storeItem: () => {},
};

export default ListItem;

import { useState, useEffect, useMemo } from "react";
import ArrayField from "./ArrayField";
import TextField from "./TextField";
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

  const string_keys = useMemo(
    () =>
      Object.keys(item).filter(
        (key) => typeof item[key] == "string" || typeof item[key] == "number"
      ),
    [item]
  );
  const array_keys = useMemo(
    () => Object.keys(item).filter((key) => Array.isArray(item[key])),
    [item]
  );
  return (
    <div>
      <div className="list__item">
        {string_keys //do not display fields `key` and `new`
          .map((key) => (
            <div className="list__item__key" key={key}>
              <TextField
                edit_mode={edit_mode}
                handleChange={(val) => setNewItem({ ...new_item, [key]: val })}
                edit_value={new_item ? new_item[key] : ""}
                value={item[key]}
              />
            </div>
          ))}

        {array_keys.map((key) => (
          <ArrayField title={key} item={item[key]} />
        ))}

        {deleteBtn()}

        {editBtn()}
      </div>
    </div>
  );
};

ListItem.defaultProps = {
  deleteItem: () => {},
  storeItem: () => {},
};

export default ListItem;

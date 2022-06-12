import { useState, useEffect, useMemo } from "react";
import FormInput from "./FormInput";
const ListItem = ({
  item: item_props,
  deleteItem,
  saveItem,
  isNew,

  schema,
}) => {
  const [item, setItem] = useState(item_props);

  const [new_item, setNewItem] = useState(item_props);
  const [edit_mode, setEditMode] = useState(isNew);

  const delete_mode = useMemo(() => isNew || !edit_mode, [edit_mode]);

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
    saveItem(item);
  }, [item]);

  return (
    <div className="list__item">
      {Object.keys(item)
        .filter((k) => k !== "new" && k !== "key") //do not display fields `key` and `new`
        .map((key) => (
          <div className="list__item__key" key={key}>
            {edit_mode ? (
              <FormInput
                name={key}
                type={schema.find((s) => s.name == key)?.type}
                value={new_item ? new_item[key] : ""}
                controlled
                controlled_filters={new_item}
                setControlledFilters={setNewItem}
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
  saveItem: () => {},
};

export default ListItem;

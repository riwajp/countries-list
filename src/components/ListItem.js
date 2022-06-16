import { useState, useEffect, useMemo } from "react";
import FormInput from "./FormInput";
import List from "./List";
const ListItem = ({
  item: item_props,
  deleteItem,
  saveItem,
  isNew,
  default_values,
  schema,
  title,
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

  const keys = Object.keys(item).filter((k) => k !== "new" && k !== "key");
  const array_keys = keys.filter((k) => Array.isArray(item[k]));
  const other_keys = keys.filter((k) => !array_keys.includes(k));

  return (
    <div>
      <div className="list__item">
        {other_keys.map((key) => (
          <div className="list__item__key" key={key}>
            {edit_mode ? (
              <FormInput
                name={key}
                type={schema[title].find((s) => s.name == key)?.type}
                value={new_item ? new_item[key] : ""}
                controlled
                handleChange={(key, value) =>
                  setNewItem({ ...new_item, [key]: value })
                }
              />
            ) : (
              item[key]
            )}
          </div>
        ))}{" "}
        {deleteBtn()}
        {editBtn()}
        {array_keys.map((key) => (
          <List
            key={key}
            title={key}
            items={item[key]}
            setItems={(value) => {
              setItem({ ...item, [key]: value });
              setNewItem({ ...new_item, [key]: value });
            }}
            schema={schema}
            default_values={default_values}
          />
        ))}
      </div>
    </div>
  );
};

ListItem.defaultProps = {
  deleteItem: () => {},
  saveItem: () => {},
};

export default ListItem;

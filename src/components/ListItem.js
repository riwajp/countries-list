import { useState, useEffect, useMemo } from "react";
import DataRow from "./DataRow";
const ListItem = ({ item: item_props, deleteItem, storeItem, isNew }) => {
  const [item, setItem] = useState(item_props);

  const [new_item, setNewItem] = useState(item_props);
  const [edit_mode, setEditMode] = useState(isNew);

  const delete_mode = useMemo(() => item?.new || !edit_mode, [edit_mode, item]);

  const toggleEditMode = () => setEditMode(!edit_mode);

  const cancel = () => {
    setNewItem({ ...item });
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
      <button className="button button--delete" onClick={handleClick}>
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

  const handleArrayChange = (key, val, array_item_index, array_key) => {
    const new_item_temp = {
      ...new_item,
      [array_key]: [...new_item[array_key]],
    };

    new_item_temp[array_key][array_item_index] = {
      ...new_item[array_key][array_item_index],
      [key]: val,
    };

    setNewItem(new_item_temp);
  };

  const addArrayItem = (array_key) => {
    const new_item_temp = {
      ...new_item,
      [array_key]: [
        ...new_item[array_key],
        {
          key: Math.random(),
          value: "",
          population: 0,
          language: "",
        },
      ],
    };

    setNewItem(new_item_temp);
    !edit_mode && toggleEditMode();
  };

  const deleteArrayItem = (array_key, array_item_index) => {
    const new_item_temp = { ...new_item };
    new_item_temp[array_key].splice(array_item_index, 1);
    setNewItem(new_item_temp);
  };
  return (
    <div className="list__item">
      <DataRow
        item={item}
        keys={string_keys}
        editBtn={editBtn}
        deleteBtn={deleteBtn}
        edit_mode={edit_mode}
        new_item={new_item}
        handleChange={(key, val) => setNewItem({ ...new_item, [key]: val })}
      />
      {array_keys.map((array_key) => (
        <div className="sub" key={array_key}>
          <span className="title--small">{array_key}</span>
          {new_item[array_key].map((array_item, array_item_index) => (
            <div key={array_item.key}>
              <DataRow
                item={array_item}
                keys={Object.keys(array_item)}
                edit_mode={edit_mode}
                new_item={new_item[array_key][array_item_index]}
                handleChange={(key, val) =>
                  handleArrayChange(
                    key,
                    val,
                    array_item_index,
                    array_key,
                    array_item
                  )
                }
              />
              <button
                className="button button--delete"
                onClick={() => deleteArrayItem(array_key, array_item_index)}
              >
                Delete
              </button>
            </div>
          ))}
          <br />
          <button
            className="button button--add"
            onClick={() => addArrayItem(array_key)}
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
};

ListItem.defaultProps = {
  deleteItem: () => {},
  storeItem: () => {},
};

export default ListItem;

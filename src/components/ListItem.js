import { useEffect } from "react";
import { useState } from "react";
const ListItem = ({ item: item_props, deleteItem, render }) => {
  const [edit_mode, setEditMode] = useState(false);
  const [item, setItem] = useState(item_props);

  const editModeOn = () => setEditMode(true);
  const editModeOff = () => setEditMode(false);

  console.log("ITEM");
  return (
    <div>
      {render(item, deleteItem, edit_mode, editModeOff, editModeOn, setItem)}
    </div>
  );
};

export default ListItem;

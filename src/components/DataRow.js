import React from "react";
import TextField from "./TextField";
function DataRow({
  item,
  keys,

  edit_mode,
  deleteBtn,
  editBtn,
  handleChange,
  new_item,
}) {
  return (
    <div>
      <div className="data-row ">
        {keys
          .filter((k) => k !== "key") //do not display fields `key`
          .map((key) => (
            <div className="list__item__key" key={key}>
              <TextField
                name={key}
                edit_mode={edit_mode}
                handleChange={(val) => handleChange(key, val)}
                edit_value={new_item ? new_item[key] : ""}
                value={item[key]}
              />
            </div>
          ))}

        {deleteBtn && deleteBtn()}

        {editBtn && editBtn()}
      </div>
    </div>
  );
}

export default DataRow;

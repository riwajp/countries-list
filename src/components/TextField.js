import React from "react";

function TextField({ name, edit_mode, handleChange, value, edit_value }) {
  return (
    <div className="text-field">
      <div className="text-field__label">{name}</div>
      {edit_mode ? (
        <input
          value={edit_value}
          onChange={(e) => handleChange(e.target.value)}
          style={{ maxWidth: "100%" }}
        />
      ) : (
        <div className="text-field__value">{value}</div>
      )}
    </div>
  );
}

export default TextField;

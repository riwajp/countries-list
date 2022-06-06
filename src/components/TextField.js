import React from "react";

function TextField({ edit_mode, handleChange, value, edit_value }) {
  return (
    <div>
      {edit_mode ? (
        <input
          value={edit_value}
          onChange={(e) => handleChange(e.target.value)}
          style={{ maxWidth: "100%" }}
        />
      ) : (
        value
      )}
    </div>
  );
}

export default TextField;

import React from "react";
import { TextField } from "./TextField";

function ArrayField({ item, title }) {
  console.log(item, title);
  return (
    <div>
      {" "}
      <div className="list__item__key-array ">
        <div className="title--small">{title}</div>
        {item.map((i) => (
          <div className="list__item__key--array__member">
            {i}
            <button>Delete</button>
            <button>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArrayField;

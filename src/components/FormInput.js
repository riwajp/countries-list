import { forwardRef } from "react";
const FilterInput = forwardRef(
  (
    {
      name,
      type,
      placeholder,
      label,

      options,
      controlled,
      handleChange,
      ...field
    },
    ref
  ) => {
    let controlled_props = {};
    if (controlled) {
      controlled_props = {
        onChange: (e) => {
          handleChange(name, e.target.value);
        },
      };
    }
    switch (type) {
      case "text":
        return (
          <input
            name={name}
            type="input"
            placeholder={placeholder || ""}
            ref={ref}
            {...field}
            {...controlled_props}
          />
        );
        break;

      case "select":
        return (
          <select name={name} ref={ref} {...field} {...controlled_props}>
            {options.map((o) => (
              <option value={o.value} key={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        );
        break;

      case "number":
        return (
          <input
            type={"number"}
            ref={ref}
            placeholder={placeholder}
            {...field}
            {...controlled_props}
          />
        );
    }
  }
);

export default FilterInput;

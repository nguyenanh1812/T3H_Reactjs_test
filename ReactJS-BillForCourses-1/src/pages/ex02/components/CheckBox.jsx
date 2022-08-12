import React from "react";

export default function CheckBox({ elm, handleCheckbox }) {
  return (
    <div className="form-check form-switch">
      <input className="form-check-input w-100 m-auto"
        id={elm.name}
        type={"checkbox"}
        onClick={(event) => handleCheckbox(elm.id - 1, event)}
      />
    </div>
  );
}

import React from "react";

export default function ActionButton({ handleActionTodo, color, Icon }) {
  return (
    <button
      type='button'
      className={`btn  btn-${color} w-25 `}
      style={{ height: "36px" }}
      onClick={() => handleActionTodo()}
    >
      {Icon}
    </button>
  );
}

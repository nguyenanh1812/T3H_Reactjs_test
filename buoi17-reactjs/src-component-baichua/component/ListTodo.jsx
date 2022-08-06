import React from "react";
import ActionButton from "./AddButton";

export default function ListTodo({ todoList, handleCompleteTodo, removeTodo }) {
  return (
    <ul className='list-group'>
      {todoList.map((el, index) => (
        <li
          key={index}
          className={`list-group-item ${el.completed ? "active " : ""} `}
        >
          {el.name}

          <i onClick={() => handleCompleteTodo(index)}>Complete</i>
          <i onClick={() => removeTodo(index)}>Remove</i>
        </li>
      ))}
    </ul>
  );
}

import React, { useState } from "react";
import ActionButton from "./AddButton";
// import AddButton from "./AddButton";
import Input from "./Input";

//Có input và nut add
export default function AddTodo({ addTodo }) {
  const [todo, setStateTodo] = useState("");
  const onGetTodo = (event) => {
    const value = event.target.value; //lấy giá trị input
    setStateTodo(value);
  };
  //Hàm thực hiện add todo này vào cái listTodo
  const onAddTodo = () => {
    addTodo({
      name: todo,
      completed: false,
    });
    setStateTodo("");
  };

  const handleEnterInput = (event) => {
    const value = event.target.value;
    if (event.key === "Enter") {
      setStateTodo(value);
      onAddTodo();
    }
  };
  return (
    <div className='d-flex flex-row '>
      <Input
        placeholder='Input to do'
        className='w-75'
        handleGetTodo={onGetTodo}
        handleEnterInput={handleEnterInput}
        todo={todo}
      />
      <ActionButton handleActionTodo={onAddTodo} color='primary' Icon={"+"} />
    </div>
  );
}

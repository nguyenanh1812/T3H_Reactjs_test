import React, { useState } from "react";
import AddTodo from "./component/AddTodo";
import ListTodo from "./component/ListTodo";

export default function TodoApp() {
  const [todoList, setStateTodoList] = useState([]);
  //hàm để xử lý việc push todo vào list to
  const addTodo = (todo) => {
    console.log("todo", todo);
    setStateTodoList([...todoList, todo]);
  };

  const handleCompleteTodo = (index) => {
    todoList.splice(index, 1, {
      name: todoList[index].name,
      completed: !todoList[index].completed,
    });
    setStateTodoList([...todoList]);
  };

  const removeTodo = (index) => {
    // console.log("index remove", index);
    // todoList.slice(0, index);
    // todoList.slice(index + 1);
    todoList.splice(index, 1);
    // console.log(removeItem[index]);
    setStateTodoList([...todoList]);
  };

  console.log("todoList", todoList);
  return (
    <div className='d-flex flex-column align-items-center m-auto mt-5 rounded border border-info w-50'>
      <h2>To-do list</h2>
      <AddTodo addTodo={addTodo} />
      <ListTodo
        todoList={todoList}
        handleCompleteTodo={handleCompleteTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

/*
- khởi tạo 1 mảng chứa các việc todo
- item of todo:
todoList: [
    {
        name: 'tên của todo',
        completed: boole,
        
    }
]


*/

import React from "react";

export default function Input(props) {
  //props: {placeholder: 'Input to do'}
  //   gọi function xử lý việc lấy dữ liệu của input => cập nhật state

  return (
    <div className='mb-3'>
      <input
        className='form-control'
        placeholder={props.placeholder}
        onChange={(event) => props.handleGetTodo(event)}
        onKeyDown={(event) => props.handleEnterInput(event)}
        value={props.todo}
      />
    </div>
  );
}

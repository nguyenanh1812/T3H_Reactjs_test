import React from 'react'
import ToDo from './ToDo'

export default function ListToDo({list, onChangeCompleteButtonClick, onRemoveButtonClick}) {
  return (
    <div className='d-flex'>
        <div className='col-10 mx-2'>
          {list.map((todo, index) => (
            <ToDo todo= {todo} index={index} onChangeCompleteButtonClick={onChangeCompleteButtonClick} 
            onRemoveButtonClick={onRemoveButtonClick}
            />
          ))}
        </div>
      </div>
  )
}

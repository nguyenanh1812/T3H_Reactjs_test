import React from 'react'

const borderStyle = {
  // width: '88%',
  // maxWidth: "880px"
  borderRadius: '20px',
  border: 'none',
};

export default function todo({todo, index, onRemoveButtonClick , onChangeCompleteButtonClick}) {
  // console.log('index',index)
  return (
    <>
      <div key={index} className={`p-3 alert text-gray my-3 h6 row ${(todo.complete) ? 'alert-success' : 'alert-primary'}`} style={borderStyle}
        // onClick={() => onChangeCompleteButtonClick(todo, index)} 
      >
        <div className='col-10 d-flex justify-content-start align-items-center' style={{ paddingLeft: '50px' }}> {todo.name} </div>
        <div className='col-2 d-flex justify-content-around align-items-center h3'>
          <i onClick={() => onChangeCompleteButtonClick(todo, index)} className={`${(todo.complete) ? 'fas fa-check-circle' : 'fas fa-times-circle'}`}></i>
          <i onClick={() => onRemoveButtonClick(todo, index)} className="fas fa-trash"></i>
        </div>
      </div>
    </>
  )
}

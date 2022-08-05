import React from 'react'

export default function AddToDo({toDo, onAddButtonClick, handleChange}) {
  return (
    <div className='w-100 m-auto'>
        <div className='row mt-5'>
          <div className='col-10'>
            <input className="w-100 px-4 float-end h4" placeholder="Type to do..."
              style={{ outline: 'none', borderRadius: '20px', border: 'none', height: '60px' }}
              onChange={handleChange}
              value={toDo.name} />
          </div>
          <div className='col-2'>
            <button style={{ fontSize: '28px' }} className="w-75 p-2 btn btn-outline-success float-start rounded-pill" type="button" id="button-addon2" onClick={onAddButtonClick}><i className="fas fa-plus"></i></button>
          </div>
        </div>
      </div>
  )
}

import { useEffect, useState } from 'react';
import './App.css';
import AddToDo from './components/AddToDo';
import ListToDo from './components/ListToDo';

function App() {

  const [toDo, setToDo] = useState({
    name: '',
    complete: false
  })
  const [toDoList, setToDoList] = useState([
    {
      name: 'Học reactJs',
      complete: true
    },
    {
      name: 'Đi làm -.- lương 20 củ',
      complete: false
    },
  ])

  // const [toDoList, setToDoList] = useState([JSON.parse(localStorage.getItem("key_toDo"))])

  const handleChange = (e) => {
    setToDo({
      name: e.target.value,
      complete: false
    });
    // console.log('Todo value is:', e.target.value);
  };

  const onAddButtonClick = () => {
    if (toDo.name != '') {
      setToDoList([
        ...toDoList,
        toDo
      ])
      localStorage.setItem("key_toDo", JSON.stringify([...toDoList, toDo]))
      setToDo({
        name: '',
        complete: false
      })
      console.log(toDoList)
    }
    else {
      alert('Bạn chưa nhập công việc cần làm!')
    }
  }

  const onChangeCompleteButtonClick = (item, index) => {
    console.log(item)
    toDoList.splice(index, 1, {
      name: `${item.name}`,
      complete: !item.complete
    })
    setToDoList([
      ...toDoList
    ])
    localStorage.setItem("key_toDo", JSON.stringify(toDoList))
  }

  const onRemoveButtonClick = (item, index) => {
    console.log(item)
    if (window.confirm(`Bạn có chắc chắn muốn xóa "${item.name}" khỏi danh sách công việc? Sau khi xóa dữ liệu sẽ không thể phục hồi!`)) {
      console.log(index)
      toDoList.splice(index, 1)
      setToDoList([...toDoList])
    }
    console.log(toDoList)
    localStorage.setItem("key_toDo", JSON.stringify(toDoList))
  }

  //localstorage
  // localStorage.setItem("key_toDO", JSON.stringify(toDoList))
  // const a = localStorage.getItem('key_toDO')
  // console.log(a)
  // useEffect(()=> {
  //   localStorage.setItem("key_toDo", JSON.stringify(toDoList))
  // }, [toDoList])

  //Gọi 1 lần khi component mounted để lấy local storage
  useEffect(() => {
    const storageTodoList = localStorage.getItem("key_toDo");
    if (storageTodoList) {
      setToDoList(JSON.parse(storageTodoList));
      console.log('local', JSON.parse(storageTodoList))
    }
  }, [])

  return (
    <div className='text-center mt-5 w-50 m-auto'>
      <div style={{ color: '#2196f3', fontWeight: '700' }}>
        <h2 style={{ color: 'rgb(0 0 255)', fontWeight: '750' }}>To-Do List (Danh sách công việc cần làm)</h2>
        <p>Nhập văn bản vào ô input để thêm các mục vào danh sách của bạn.</p>
        <p>Nhấp vào " <i className="fas fa-trash"></i>" để xóa mục khỏi danh sách của bạn.</p>
        <p>
          Nhấn vào <i className="fas fa-check-circle"></i> - <i className="fas fa-times-circle"></i> để danh mục chuyển trạng thái  <br />
          Hoàn thành (<i className="fas fa-check-circle"></i>) - Chưa hoàn thành(<i className="fas fa-times-circle"></i>)
        </p>
      </div>

      <AddToDo toDo={toDo} handleChange={handleChange} onAddButtonClick={onAddButtonClick} />
      <ListToDo list={toDoList} onChangeCompleteButtonClick={onChangeCompleteButtonClick} onRemoveButtonClick={onRemoveButtonClick} />

      {/* <div className='w-100 m-auto'>
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

      
      <div className='d-flex'>
        <div className='col-10 mx-2'>
          {toDoList.map((todo, index) => (
            // {let {name, complete} = todo}
            <div key={index} className={`p-3 alert text-gray my-3 h6 row ${(todo.complete) ? 'alert-success' : 'alert-primary'}`} 
              // onClick={() => onChangeCompleteButtonClick(todo, index)}
            >
              <div className='col-10 d-flex justify-content-start align-items-center' style={{ paddingLeft: '50px' }}> {todo.name} </div>
              <div className='col-2 d-flex justify-content-around align-items-center h3'>
                <i onClick={() => onChangeCompleteButtonClick(todo, index)} className={`${(todo.complete) ? 'fas fa-check-circle' : 'fas fa-times-circle'}`}></i>
                <i onClick={() => onRemoveButtonClick(todo, index)} className="fas fa-trash"></i>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default App;

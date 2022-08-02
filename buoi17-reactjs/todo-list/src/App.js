import './App.css';

const mystyle = {
  // width: '88%',
  // maxWidth: "880px"
};


function App() {

  const todoList = ["viec 1", "viec 2"]
  const onAddButtonClick = (e) => {
    let todoItem = document.getElementById('inputText').value
    todoList.push(todoItem)
    console.log(todoList)
    document.getElementById('inputText').value = ''

  }

  return (
    <div className='text-center mt-5 w-50 m-auto'>
      <h2>To-Do List (Danh sách công việc cần làm)</h2>
      <p>Nhập văn bản vào ô input để thêm các mục vào danh sách của bạn.</p>
      <p>Nhấp vào "X" để xóa mục khỏi danh sách của bạn.</p>
      <p>Nhấp vào mục để đánh dấu là hoàn thành</p>

      <div className='w-75 m-auto'>
        <div className='row mt-5'>
          <div className='col-10'>
            <input className="w-100 rounded-5 p-2 px-4 rounded-2 float-end" placeholder="Type to do..." id='inputText' />
          </div>
          <div className='col-2'>
            <button className="w-75 p-2 btn btn-outline-success rounded-pill text-left float-start" type="button" id="button-addon2" onClick={onAddButtonClick}><i className="fas fa-plus"></i></button>
          </div>
        </div>
        <div className='row'>
          <div className='col-10'>
            {todoList.map((todo, index) => (
              <div key={index} className="p-3 bg-primary text-white my-3 rounded-3" style={mystyle}>{todo}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

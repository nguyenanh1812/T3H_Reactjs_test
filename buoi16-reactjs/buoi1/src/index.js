// import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './page/Home/home'

export default function index() {
  return (
    <div>index</div>
  )
}


//select root trong dom thật
//react sử dụng vitual dom
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode code nghiêm ngặt của js
  // <React.StrictMode>

  //component => <tên component/> nếu có thẻ children  thì sẽ có thẻ đóng
   <Home />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


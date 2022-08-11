import React, { useEffect } from "react";
import { useState } from "react";
import Courses from "./components/Courses";
import TotalMoney from "./components/TotalMoney";
import { data } from "../../constants";

const listOption = data.map((el, index) => (
  {
    id: index + 1,
    ...el.opt[0]
  }
));

export default function CoursesContainer() {
  const [listCourse, setListCourse] = useState([]);
  const listId = listCourse.map(a=>a.id)
  console.log('listID',listId);
  // console.log('list', listCourse);
  const [nameSelect, setNameSelect] = useState('')

  const [dataMoney, setDataMoney] = useState([...listOption])
  const [itemMoney, setItemMoney] = useState({...listOption[0]})
  console.log('itemMoney',itemMoney)
  console.log('dataMoney', dataMoney)
  // console.log(dataMoney[1].id === itemMoney.id);

  useEffect(() => {
    dataMoney.splice((itemMoney.id) - 1, 1, itemMoney)
    setItemMoney(...dataMoney)
  }, [itemMoney])

  useEffect(()=> {
   
    const name2 = listCourse.reduce((preV, current)=> {
      preV.push(current.name)
        return preV
    }, [])
    setNameSelect(name2.join(' + '))
  }, [listCourse])


  return (
    <div>
      <h3 className="my-5 text-center text-white fw-800 fw-bold">Mời bạn chọn khóa học</h3>
      <Courses setListCourse={setListCourse}  setItemMoney={setItemMoney} listOption={listOption} />
      <div className="container">
        <TotalMoney nameSelect={nameSelect} dataMoney={dataMoney} listId={listId}/>
      </div>
    </div>
  );
}


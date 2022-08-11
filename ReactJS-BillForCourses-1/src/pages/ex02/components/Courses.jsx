import React, { useState } from "react";
import { data } from "../../../constants";
import ItemCourse from "./ItemCourse";

const listCourse = data.map((el, index) => ({
  ...el,
  id: index + 1,
  checkPay: false,
}));

export default function Courses({ setListCourse, setItemMoney}) {
  const [courses, setCourses] = useState([...listCourse]);

  const btnCheckBox = (index, checked) => {
    courses[index] = {
      ...courses[index],
      checkPay: checked,
    };
    setListCourse(courses.filter((i) => i.checkPay));
  };
  return (
    <div>
      {courses.map((el,index1) => (
        <ItemCourse key={el.id} inforCourse={el} btnCheckBox={btnCheckBox} setItemMoney={setItemMoney} index1={index1}/>
      ))}
    </div>
  );
}

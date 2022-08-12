import React, { useState } from "react";
import { data } from "../../../constants";
import ItemCourse from "./ItemCourse";

const listCourse = data.map((el, index) => ({
  ...el,
  id: index + 1,
}));

export default function Courses() {
  const [courses, setCourses] = useState([...listCourse]);
  return (
    <div>
      {courses.map((el) => (
        <ItemCourse key={el.id} inforCourse={el} />
      ))}
    </div>
  );
}

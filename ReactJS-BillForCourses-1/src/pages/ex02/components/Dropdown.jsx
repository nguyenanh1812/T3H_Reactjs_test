import React from "react";

export const Dropdown = ({ inforCourse, handleOptChange }) => {
  return (
    <>
      <select key={inforCourse.id} className='w-100 p-2' style={{ fontWeight: "700"}} onChange={handleOptChange}>
        {inforCourse.opt.map((item) => {
          return (
            <option key={inforCourse.id + item.value} value={item.value}>
              {item.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

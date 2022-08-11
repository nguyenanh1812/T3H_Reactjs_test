import React, { useEffect } from "react";
import { useState } from "react";
import Img from "./Img";
import CheckBox from "./CheckBox";
import { Dropdown } from "./Dropdown";

export default function ItemCourse({
  inforCourse,
  btnCheckBox,
  setItemMoney,
  index1
}) {
  const [index, setIndex] = useState(0);
  const [option, setOption] = useState({})

  const handleCheckbox = (index, e) => {
    btnCheckBox(index, e.target.checked);
  };

  const { name, img, opt } = inforCourse;
  const crrItem = opt[index];

  const handleOptChange = (e) => {
    const value = inforCourse.opt.find(opt => opt.value == e.target.value)
    setOption(
      value
    )
  }

  // console.log(index1);
  useEffect(() => {
    setItemMoney({
      id: index1 + 1,
      ...option
    })
  }, [option])
  return (
    <div className='container my-3 border border-3 rounded p-2'>
      <div
        className='row d-flex align-items-center'
        style={{ cursor: "pointer" }}
      >
        <div className='col-6 d-flex align-items-center row'>
          <div className='col-2'>
            <CheckBox elm={inforCourse} handleCheckbox={handleCheckbox} />
          </div>
          <div className='col-5'>
            <label className="form-check-label" for={inforCourse.name}>
              <Img src={img} />
            </label>
          </div>
          <div className='col-5 d-flex flex-column justify-content-start'>
            <div className='text-start'>{name}</div>
            <div className='text-start'>{option.name || crrItem.name}</div>
            <div className='text-start w-100'>
              <Dropdown inforCourse={inforCourse} handleOptChange={handleOptChange} />
            </div>
          </div>
        </div>
        <div className='col-6 row d-flex align-items-center'>
          <div className='col-6'>
            <div className='fs-4'>${option.priceDiscount || crrItem.priceDiscount} /month</div>
            <div className='text-success'>( %{option.percentDiscount || crrItem.percentDiscount} off)</div>
            <div className='text-decoration-line-through'>
              $ {option.price || crrItem.price}/month
            </div>
          </div>
          <div className='col-6 fs-5 text-success'>
            - $ {(option.price - option.priceDiscount) || crrItem.price - crrItem.priceDiscount}
          </div>
        </div>
      </div>
    </div>
  );
}

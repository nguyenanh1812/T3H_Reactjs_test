import React from "react";
import { useState } from "react";
import Img from "./Img";
import Input from "./Input";
import Dropdown from "./Dropdown";

export default function ItemCourse({ inforCourse }) {
  const [indexOpt, setIndexOpt] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const { name, img, opt } = inforCourse;
  // const { name2, value, price, priceDiscount, percentDiscount } = opt[indexOpt];
  const crrItem = opt[indexOpt];
  const setIndexOption = (e) => {
    e.stopPropagation();
    setIndexOpt(e.target.value);
    setIsChecked(!true);
  };

  const handleUnchecked = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="container my-3">
      <div
        className="row d-flex align-items-center"
        style={{ cursor: "pointer" }}
        onClick={handleUnchecked}
      >
        <div className="col-6 d-flex align-items-center row">
          <div className="col-2">
            <Input type="checkbox" isChecked={isChecked} />
          </div>
          <div className="col-5">
            <Img src={img} />
          </div>
          <div className="col-5 d-flex flex-column justify-content-start">
            <div className="text-start">{name}</div>
            <div className="text-start">{crrItem.name}</div>
            <div className="text-start w-100">
              <Dropdown list={opt} setIndexOption={setIndexOption} />
            </div>
          </div>
        </div>
        <div className="col-6 row d-flex align-items-center">
          <div className="col-6">
            <div className="fs-4">$ {crrItem.priceDiscount}/month</div>
            <div className="text-success">
              ({crrItem.percentDiscount} % off)
            </div>
            <div className="text-decoration-line-through">
              $ {crrItem.price}/month
            </div>
          </div>
          <div className="col-6 fs-5 text-success">
            - $ {crrItem.price - crrItem.priceDiscount}
          </div>
        </div>
      </div>
    </div>
  );
}

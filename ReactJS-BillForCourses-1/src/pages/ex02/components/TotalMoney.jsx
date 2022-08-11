import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../../../App.css";

function TotalMoney({ nameSelect, listId, dataMoney}) {
  const listOptChoses = []
  useEffect(()=> {
    if (listId.length > 0) {
      for(let i of listId) {
        listOptChoses.push(dataMoney[i-1])
        console.log(listOptChoses)
      }
    }
  })
  const [billPrice, setBillPrice] = useState()
  const [billPriceDiscount, setBillPriceDiscount] = useState()
  useEffect(()=> {
    setBillPrice(listOptChoses.reduce((objBill, current) => objBill + current.price,0))
    setBillPriceDiscount(listOptChoses.reduce((objBill, current) => objBill + current.priceDiscount,0)) 
  }, [listOptChoses])
  
  return (
    <div className="row alert-success alert text-gray">
      <div className="col-md-6">
        <h6>Packges Includes</h6>
        <h6>Name: {nameSelect}</h6>
      </div>
      <div className="col-md-6">
        <div className="total-containt">
          <div className="d-flex justify-content-between mb-2">
            <div className="h5">Sub Total:</div>
            <div className="h5">$ {billPrice}</div>
            <div className="h5">-$ {billPrice - billPriceDiscount}</div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="h5">TOTAL AMOUNT:</div>
            <div className="h5">$ {billPriceDiscount}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TotalMoney;

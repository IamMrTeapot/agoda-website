import React, { useRef, useState } from "react";
import style from "@/styles/Budget.module.css";
import Image from "next/image";
import img from "@/public/budget_range.png";
import RangeSlider from "./RangeSlider";

const Budget = () => {
  //I made this state to change input focus mode ,
  ///But I changed the focus mode in global.css so this code is useless for now
  const [minIsClicked, setMinIsClicked] = useState(false);
  const [maxIsClicked, setMaxIsClicked] = useState(false);

  // const [minVal, setMinVal] = useState(0);
  // const [maxVal, setMaxVal] = useState(300000);

  const [value, setValue] = useState({ min: 0, max: 300000 });

  const setMaxValProperly = (number: number) => {
    if (number <= 300000 && number >= 0) {
      if (number < value.min) {
        alert("Max price must be greater than min price");
        return;
      }
      setValue({
        min: value.min,
        max: number,
      });
    } else {
      alert("Invalid Value.");
    }
  };

  const setMinValProperly = (number: number) => {
    if (number <= 300000 && number >= 0) {
      if (number > value.max) {
        alert("Min price must be less than max price");
        return;
      }
      setValue({
        min: number,
        max: value.max,
      });
    } else {
      alert("Invalid Value.");
    }
  };

  return (
    <div className={style.container}>
      <p>Your budget (per night)</p>
      <Image src={img} alt="Budget range" width={241} />
      <div className={style.range_slider}>
        <RangeSlider
          min={0}
          max={300000}
          step={1}
          value={value}
          onChange={setValue}
        />
      </div>

      <div className={style.range}>
        <div className={style.range__wrapper}>
          <span className={style.range__span}>฿</span>
          <label className={style.range__label}>MIN</label>
          <input
            type="text"
            className={`${style.range__box}`}
            value={value.min}
            onClick={() => setMinIsClicked(!minIsClicked)}
            onChange={(e) => {
              setMinValProperly(
                parseInt(e.target.value ? e.target.value : "0")
              );
            }}
          />
        </div>
        <hr className={style.line} />
        <div className={style.range__wrapper}>
          <span className={style.range__span}>฿</span>
          <label className={style.range__label}>MAX</label>
          <input
            type="text"
            className={`${style.range__box}`}
            value={value.max}
            onClick={() => setMaxIsClicked(!maxIsClicked)}
            onChange={(e) => {
              setMaxValProperly(
                parseInt(e.target.value ? e.target.value : "0")
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Budget;

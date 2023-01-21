import React, { useRef, useState } from "react";
import style from "@/styles/Budget.module.css";
import Image from "next/image";
import img from "@/public/budget_range.png";

const Budget = () => {
  //I made this state to change input focus mode ,
  ///But I changed the focus mode in global.css so this code is useless for now
  const [minIsClicked, setMinIsClicked] = useState(false);
  const [maxIsClicked, setMaxIsClicked] = useState(false);

  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(300000);

  return (
    <div className={style.container}>
      <p>Your budget (per night)</p>
      <Image src={img} alt="Budget range" width={247} />
      <div className={style.range}>
        <div className={style.range_box}>
          <span className={style.range__span}>฿</span>
          <label className={style.range__label}>MIN</label>
          <input
            type="text"
            className={`${style.range__box}`}
            value={minVal}
            onClick={() => setMinIsClicked(!minIsClicked)}
            onChange={(e) => {
              setMinVal(parseInt(e.target.value ? e.target.value : "0"));
            }}
          />
        </div>
        <hr className={style.line} />
        <div className={style.range_box}>
          <span className={style.range__span}>฿</span>
          <label className={style.range__label}>MAX</label>
          <input
            type="text"
            className={`${style.range__box}`}
            value={maxVal}
            onClick={() => setMaxIsClicked(!maxIsClicked)}
            onChange={(e) => {
              setMaxVal(parseInt(e.target.value ? e.target.value : "0"));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Budget;

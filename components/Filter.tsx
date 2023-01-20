import React from "react";
import style from "@/styles/Filter.module.css";
import CheckBox from "./CheckBox";

const Filter = () => {
  return (
    <div className={style.container}>
      <hr className={style.line} />
      <p className={style.topic}>Popular filters for Doha</p>
      <CheckBox />
    </div>
  );
};

export default Filter;

import React from "react";
import style from "@/styles/Contents.module.css";
import MapSearch from "./MapSearch";
import Budget from "./Budget";

const Contents = () => {
  return (
    <div className={style.contents_page}>
      <div className={style.contents_container}>
        <div className={style.contents_left}>
          <MapSearch />
          <Budget />
        </div>
        <div className={style.contents_right}></div>
      </div>
    </div>
  );
};

export default Contents;

import React from "react";
import style from "@/styles/Contents.module.css";

const Contents = () => {
  return (
    <div className={style.contents_page}>
      <div className={style.contents_container}>
        <div className={style.contents_left}></div>
        <div className={style.contents_right}></div>
      </div>
    </div>
  );
};

export default Contents;

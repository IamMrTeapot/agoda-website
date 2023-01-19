import React from "react";
import style from "@/styles/Banner.module.css";
import Image from "next/image";
import img from "@/public/banner_pic.png";

const Banner = () => {
  return (
    <div className={style.banner}>
      <div className={style.container}>
        <div className={style.leftSide}>
          <Image
            src={img}
            alt="Backpack"
            width={32}
            style={{ marginRight: "16px" }}
          />
          <p style={{ marginRight: "5px" }} className={style.bold_font}>
            Travelling to Qatar?
          </p>
          <p className={style.light_font}>
            Read all updated requirements before you book.
          </p>
        </div>
        <div className={style.rightSide}>
          <button className={`${style.light_font} ${style.button}`}>
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

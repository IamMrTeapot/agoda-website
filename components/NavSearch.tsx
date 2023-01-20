import React from "react";
import style from "@/styles/NavSearch.module.css";
import checkInImg from "@/public/checkin_icon.png";
import checkOutImg from "@/public/checkout_icon.png";
import peopleImg from "@/public/people_icon.png";
import arrowImg from "@/public/arrow_icon.png";
import Image from "next/image";

const NavSearch = () => {
  return (
    <div className={style.navbar}>
      <div className={style.container}>
        <input
          type="text"
          className={style.searchContainer}
          placeholder="Enter a destination or property"
        ></input>
        <div className={style.flex}>
          <div className={style.checkIn_date}>
            <Image src={checkInImg} alt="checkIn Icon" width={24} />

            <div className={style.detail}>
              <p className={style.bold_font}>20 Jan 2023</p>
              <p className={style.light_font}>Friday</p>
            </div>
          </div>
          <div className={style.checkOut_date}>
            <Image src={checkOutImg} alt="checkOut Icon" width={24} />
            <div className={style.detail}>
              <p className={style.bold_font}>22 Jan 2023</p>
              <p className={style.light_font}>Sunday</p>
            </div>
          </div>
        </div>
        <div className={style.room}>
          <div className={style.flex}>
            <Image src={peopleImg} alt="people Icon" width={25} />
            <div className={style.detail}>
              <p className={style.bold_font}>2 adults</p>
              <p className={style.light_font}>1 room</p>
            </div>
          </div>

          <Image src={arrowImg} alt="arrow Icon" width={15} />
        </div>
        <div className={`${style.btn_search}`}>SEARCH</div>
      </div>
    </div>
  );
};

export default NavSearch;

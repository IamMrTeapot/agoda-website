import React from "react";
import style from "@/styles/HotelCard.module.css";
import Image from "next/image";
import img from "@/public/Hotel_pics.png";

const HotelCard = () => {
  return (
    <div className={style.container}>
      <div className={style.images_wrapper}>
        <Image src={img} alt="Hotel images" height={230} />
      </div>
      <div className={style.content_wrapper}>
        <div className={style.hotel__name}>Hotel Name</div>
        <div className={style.data__wrapper}>
          <div className={style.stars}>4 starts</div>
          <div className={style.location__wrapper}>
            <div className={style.location__icon}></div>
            <div className={style.location__text}>Bangkok, Thailand</div>
          </div>
        </div>
        <div className={style.tags__wrapper}>
          <div className={style.tag}>Breakfast</div>
        </div>
      </div>
      <div className={style.price_wrapper}>
        <div className={style.rating_wrapper}>
          <div className={style.review_wrapper}>
            <p className={style.rating_text}></p>
            <p className={style.review_text}></p>
          </div>
          <div className={style.rating}></div>
        </div>
        <div className={style.price_text}></div>
        <button className={style.button}>Select Room</button>
      </div>
    </div>
  );
};

export default HotelCard;

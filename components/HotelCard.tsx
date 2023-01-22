import React from "react";
import style from "@/styles/HotelCard.module.css";
import Image from "next/image";
import img from "@/public/Hotel_pics.png";
import starImg from "@/public/star.png";
import locationImg from "@/public/location.png";

const HotelCard = () => {
  return (
    <div className={style.container}>
      <div className={style.images_wrapper}>
        <Image src={img} alt="Hotel images" height={230} />
      </div>
      <div className={style.content_wrapper}>
        <div className={style.hotel__name}>Waldorf Astoria Lusail, Doha</div>
        <div className={style.data__wrapper}>
          <div className={style.stars}>
            <Image src={starImg} alt="star" width={13} />
            <Image src={starImg} alt="star" width={13} />
            <Image src={starImg} alt="star" width={13} />
            <Image src={starImg} alt="star" width={13} />
          </div>
          <div className={style.location__wrapper}>
            <div className={style.location__icon}>
              <Image src={locationImg} alt="location icon" width={12} />
            </div>
            <div className={style.location__text}>Bangkok, Thailand</div>
          </div>
        </div>
        <div className={style.tags__wrapper}>
          <div className={style.tag}>Breakfast</div>
          <div className={style.tag}>Dinner Included</div>
        </div>
      </div>
      <div className={style.price_wrapper}>
        <div className={style.rating_wrapper}>
          <div className={style.review_wrapper}>
            <p className={style.rating_text}>Excellent</p>
            <p className={style.review_text}>101 reviews</p>
          </div>
          <div className={style.rating}>8.8</div>
        </div>
        <div className={style.price_text}>
          ฿<span>12,345</span>
        </div>
        <button className={style.button}>
          Select room
          <svg
            width="1em"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={style.arrow}
          >
            <path d="M15.485 12L6.293 2.808a1 1 0 0 1 1.414-1.415l9.9 9.9a1 1 0 0 1 0 1.414l-9.9 9.9a1 1 0 0 1-1.414-1.415L15.485 12z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HotelCard;

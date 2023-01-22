import React, { useEffect } from "react";
import style from "@/styles/HotelCard.module.css";
import Image from "next/image";
import img from "@/public/Hotel_pics.png";
import starImg from "@/public/star.png";
import locationImg from "@/public/location.png";
import { HotelData } from "@/data/hotelData";

type HotelCardProps = {
  data: HotelData;
};

const HotelCard = (props: HotelCardProps) => {
  const {
    hotelName: hotelName,
    stars: stars,
    location: location,
    price: price,
    tags: tags,
    rating: rating,
    reviews: reviews,
  } = props.data;

  const starsAsNumber: number = parseInt(stars ? stars : "0");
  console.log("starsAsNumber is " + starsAsNumber);

  const word: string =
    parseFloat(rating ? rating : "0") >= 9 ? "Exceptional" : "Excellent";

  return (
    <div className={style.container}>
      <div className={style.images_wrapper}>
        <Image src={img} alt="Hotel images" height={230} />
      </div>
      <div className={style.content_wrapper}>
        <div className={style.hotel__name}>{hotelName}</div>
        <div className={style.data__wrapper}>
          <div className={style.stars}>
            {Array(parseInt(stars ? stars : "")).fill(
              <Image src={starImg} alt="star" width={13} />
            )}
          </div>
          <div className={style.location__wrapper}>
            <div className={style.location__icon}>
              <Image src={locationImg} alt="location icon" width={12} />
            </div>
            <div className={style.location__text}>{location}</div>
          </div>
        </div>
        <div className={style.tags__wrapper}>
          {tags.map((eachTag, index) => {
            return (
              <div key={index} className={style.tag}>
                {eachTag}
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.price_wrapper}>
        <div className={style.rating_wrapper}>
          <div className={style.review_wrapper}>
            <p className={style.rating_text}>{word}</p>
            <p className={style.review_text}>{reviews} reviews</p>
          </div>
          <div className={style.rating}>{rating}</div>
        </div>
        <div className={style.price_text}>
          ฿<span>{price}</span>
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

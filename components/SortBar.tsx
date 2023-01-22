import React, { useState } from "react";
import style from "@/styles/SortBar.module.css";

const SortBar = () => {
  // handle filter property on hover for svg
  const [isTopReviewedHovered, setIsTopReviewedHovered] =
    useState<boolean>(false);
  const [isDistanceHovered, setIsDistanceHovered] = useState<boolean>(false);

  // handle onClicked
  const [isBestMatchClicked, setIsBestMatchClicked] = useState<boolean>(true);
  const [isTopReviewedClicked, setIsTopReviewedClicked] =
    useState<boolean>(false);
  const [isLowestPriceClicked, setIsLowestPriceClicked] =
    useState<boolean>(false);
  const [isDistanceClicked, setIsDistanceClicked] = useState<boolean>(false);
  const [isHotDealsClicked, setIsHotDealsClicked] = useState<boolean>(false);

  return (
    <div className={style.container}>
      <div className={style.sort}>Sort</div>
      <div
        className={`${style.topic} ${
          isBestMatchClicked ? style.topic__clicked : ""
        }`}
        onClick={() => {
          setIsBestMatchClicked(!isBestMatchClicked);
          setIsDistanceClicked(false);
          setIsHotDealsClicked(false);
          setIsLowestPriceClicked(false);
          setIsTopReviewedClicked(false);
        }}
      >
        Best match
      </div>
      <div className={style.divider}></div>
      <div
        className={`${style.topic} ${
          isTopReviewedClicked ? style.topic__clicked : ""
        }`}
        onMouseOver={() => setIsTopReviewedHovered(true)}
        onMouseLeave={() => setIsTopReviewedHovered(false)}
        onClick={() => {
          setIsBestMatchClicked(false);
          setIsDistanceClicked(false);
          setIsHotDealsClicked(false);
          setIsLowestPriceClicked(false);
          setIsTopReviewedClicked(!isTopReviewedClicked);
        }}
      >
        Top reviewed
        <svg
          width="1em"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`${style.arrow} ${
            isTopReviewedHovered ? style.arrow__hover : ""
          } ${isTopReviewedClicked ? style.arrow__onClicked : ""}`}
        >
          <path d="M3.06 6.839l8.84 8.839 8.838-8.84A1.5 1.5 0 1 1 22.86 8.96l-9.9 9.9a1.5 1.5 0 0 1-2.121 0l-9.9-9.9A1.5 1.5 0 0 1 3.061 6.84z"></path>
        </svg>
      </div>
      <div className={style.divider}></div>
      <div
        className={`${style.topic} ${
          isLowestPriceClicked ? style.topic__clicked : ""
        }`}
        onClick={() => {
          setIsBestMatchClicked(false);
          setIsDistanceClicked(false);
          setIsHotDealsClicked(false);
          setIsLowestPriceClicked(!isLowestPriceClicked);
          setIsTopReviewedClicked(false);
        }}
      >
        Lowest price first
      </div>
      <div className={style.divider}></div>
      <div
        className={`${style.topic} ${
          isDistanceClicked ? style.topic__clicked : ""
        }`}
        onMouseOver={() => setIsDistanceHovered(true)}
        onMouseLeave={() => setIsDistanceHovered(false)}
        onClick={() => {
          setIsBestMatchClicked(false);
          setIsDistanceClicked(!isDistanceClicked);
          setIsHotDealsClicked(false);
          setIsLowestPriceClicked(false);
          setIsTopReviewedClicked(false);
        }}
      >
        Distance
        <svg
          width="1em"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`${style.arrow} ${
            isDistanceHovered ? style.arrow__hover : ""
          } ${isDistanceClicked ? style.arrow__onClicked : ""}`}
        >
          <path d="M3.06 6.839l8.84 8.839 8.838-8.84A1.5 1.5 0 1 1 22.86 8.96l-9.9 9.9a1.5 1.5 0 0 1-2.121 0l-9.9-9.9A1.5 1.5 0 0 1 3.061 6.84z"></path>
        </svg>
      </div>
      <div className={style.divider}></div>
      <div
        className={`${style.topic} ${
          isHotDealsClicked ? style.topic__clicked : ""
        }`}
        onClick={() => {
          setIsBestMatchClicked(false);
          setIsDistanceClicked(false);
          setIsHotDealsClicked(!isHotDealsClicked);
          setIsLowestPriceClicked(false);
          setIsTopReviewedClicked(false);
        }}
      >
        Hot Deals!
      </div>
    </div>
  );
};

export default SortBar;

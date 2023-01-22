import React from "react";
import style from "@/styles/Contents.module.css";
import MapSearch from "./MapSearch";
import Budget from "./Budget";
import Filter from "./Filter";
import { filters } from "@/data/filters";
import SortBar from "./SortBar";
import HotelCard from "./HotelCard";

const Contents = () => {
  return (
    <div className={style.contents_page}>
      <div className={style.contents_container}>
        <div className={style.contents_left}>
          <MapSearch />
          <Budget />
          {filters.map((filter, index) => {
            return <Filter key={index} filter={filter} />;
          })}
        </div>
        <div className={style.contents_right}>
          <SortBar />
          <HotelCard />
        </div>
      </div>
    </div>
  );
};

export default Contents;

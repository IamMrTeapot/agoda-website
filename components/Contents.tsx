import React from "react";
import style from "@/styles/Contents.module.css";
import MapSearch from "./MapSearch";
import Budget from "./Budget";
import Filter from "./Filter";
import { filters, FiltersData } from "@/data/filters";

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
        <div className={style.contents_right}></div>
      </div>
    </div>
  );
};

export default Contents;

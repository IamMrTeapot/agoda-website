import React, { useEffect, useState } from "react";
import style from "@/styles/Contents.module.css";
import MapSearch from "./MapSearch";
import Budget from "./Budget";
import Filter from "./Filter";
import { filters } from "@/data/filters";
import SortBar from "./SortBar";
import HotelCard from "./HotelCard";
import { hotelData } from "@/data/hotelData";
import { HotelData } from "@/data/hotelData";
import axios from "axios";

const Contents = () => {
  const [hotelPostman, setHotelPostman] = useState<HotelData[]>([]);

  const url: string =
    "https://bd73337e-187b-4c29-b0e3-f860f7985027.mock.pstmn.io/hotel_data";

  // !!!!! I only generated two hotel data from fetching , I made the rest in data folders
  // because writing json files in postman is so painful TT
  // And also, I assume that you want me to sort data in frontend not in backend
  const FetchDataAndSort = async () => {
    const res = await axios.get(url);
    const data: HotelData[] = res.data;
    const newData = data.sort(
      (a, b) =>
        parseInt(a.price.replaceAll(",", "")) -
        parseInt(b.price.replaceAll(",", ""))
    );
    setHotelPostman(newData);
  };

  useEffect(() => {
    FetchDataAndSort();
  }, []);

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

          {hotelPostman.map((eachHotel, index) => {
            return <HotelCard key={index} data={eachHotel} />;
          })}

          {hotelData.map((eachHotel, index) => {
            return <HotelCard key={index} data={eachHotel} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Contents;

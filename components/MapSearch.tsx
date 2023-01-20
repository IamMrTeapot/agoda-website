import React from "react";
import style from "@/styles/MapSearch.module.css";
import Image from "next/image";
import mapImg from "@/public/map.png";

const MapSearch = () => {
  return (
    <div className={style.container}>
      <div className={style.image_container}>
        <Image src={mapImg} alt="search on map" className={style.picture} />
      </div>
      <input
        type="text"
        className={style.searchbox}
        placeholder="Text search"
      />
    </div>
  );
};

export default MapSearch;

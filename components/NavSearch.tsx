import React from "react";
import style from "@/styles/NavSearch.module.css";

const NavSearch = () => {
  return (
    <div className={style.navbar}>
      <div className={style.container}>
        <div>
          <input
            type="text"
            className={style.searchContainer}
            placeholder="Enter a destination or property"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default NavSearch;

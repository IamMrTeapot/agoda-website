import React from "react";
import style from "@/styles/Filter.module.css";
import CheckBox from "./CheckBox";
import { FiltersData } from "@/data/filters";

type FilterProps = {
  filter: FiltersData;
};

const Filter = (props: FilterProps) => {
  const filterName: string = props.filter.filterName;
  const filterSubtopics: string[] = props.filter.filterSubtopics;

  return (
    <div className={style.container}>
      <hr className={style.line} />
      <p className={style.topic}>{filterName}</p>
      {filterSubtopics.map((subtopic, index) => {
        return <CheckBox key={index} subtopic={subtopic} />;
      })}
    </div>
  );
};

export default Filter;

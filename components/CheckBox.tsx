import React, { useState } from "react";
import style from "@/styles/Checkbox.module.css";
import Image from "next/image";
import checkImg from "@/public/checked.png";

type CheckBoxProps = {
  subtopic: string;
};

const CheckBox = (props: CheckBoxProps) => {
  const subtopic = props.subtopic;

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <label
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={style.container}
    >
      <input
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <span
        className={`${style.checkbox} ${
          isHovered ? style.checkbox__hover : ""
        }`}
        aria-hidden="true"
      >
        {isChecked && <Image src={checkImg} alt="checked" width={16} />}
      </span>
      {subtopic}
    </label>
  );
};

export default CheckBox;

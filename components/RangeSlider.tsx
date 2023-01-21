import React, { useState } from "react";
import style from "@/styles/RangeSlider.module.scss";

type rangeData = {
  min: number;
  max: number;
};

type RangeSliderProps = {
  step: number;
  min: number;
  max: number;
  value: rangeData;
  onChange: Function;
};

const RangeSlider = (props: RangeSliderProps) => {
  const {
    step: step,
    min: min,
    max: max,
    value: value,
    onChange: onChange,
  } = props;

  const [minValue, setMinValue] = React.useState(value ? value.min : min);
  const [maxValue, setMaxValue] = React.useState(value ? value.max : max);

  React.useEffect(() => {
    if (value) {
      setMinValue(value.min);
      setMaxValue(value.max);
    }
  }, [value]);

  const handleMinChange = (e: any) => {
    e.preventDefault();
    const newMinVal = Math.min(+e.target.value, maxValue - step);
    if (!value) setMinValue(newMinVal);
    onChange({ min: newMinVal, max: maxValue });
  };

  const handleMaxChange = (e: any) => {
    e.preventDefault();
    const newMaxVal = Math.max(+e.target.value, minValue + step);
    if (!value) setMaxValue(newMaxVal);
    onChange({ min: minValue, max: newMaxVal });
  };

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className={style.wrapper}>
      <div className={style.input_wrapper}>
        <input
          className={style.input}
          type="range"
          value={minValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMinChange}
        />
        <input
          className={style.input}
          type="range"
          value={maxValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMaxChange}
        />
      </div>

      <div className={style.control_wrapper}>
        <div className={style.control} style={{ left: `${minPos}%` }} />
        <div className={style.rail}>
          <div
            className={style.inner_rail}
            style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
          />
        </div>
        <div className={style.control} style={{ left: `${maxPos}%` }} />
      </div>
    </div>
  );
};

export default RangeSlider;

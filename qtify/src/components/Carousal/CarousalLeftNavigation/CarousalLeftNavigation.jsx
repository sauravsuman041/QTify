import React, { useEffect, useState } from "react";
import { useSwiper } from 'swiper/react';
import { ReactComponent as LeftNav } from "../../../assets/leftNav.svg";
import style from "../Carousal.module.css";

export const CarousalLeftNavigation = () => {
    let swiper =useSwiper();
    const[isBeginning, setIsBeginning]=useState(swiper.isBeginning);
  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
    });
  }, [swiper]);
  return (
    <div className={style.leftNavigation}>
      {!isBeginning && (
        <LeftNav
          onClick={() => {
            swiper.slidePrev();
          }}
        />
      )}
    </div>
  );
};

export default CarousalLeftNavigation;
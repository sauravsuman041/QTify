import React, { useEffect, useState } from "react";
import { useSwiper } from 'swiper/react';
import { ReactComponent as RightNav } from "../../../assets/rightNav.svg";
import style from "../Carousal.module.css";

export const CarousalRightNavigation = () => {
    let swiper =useSwiper();
    const[isEnd, setIsEnd]=useState(swiper.isEnd);
  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, [swiper]);
  return (
    <div className={style.RightNavigation}>
      {!isEnd && (
        <RightNav
          onClick={() => {
            swiper.slideNext();
          }}
        />
      )}
    </div>
  );
};

export default CarousalRightNavigation;
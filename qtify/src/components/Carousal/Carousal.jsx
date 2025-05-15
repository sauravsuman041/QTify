import React, { useEffect } from 'react';

import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
import CarouselLeftNavigation from './CarousalLeftNavigation/CarousalLeftNavigation';
import CarouselRightNavigation from "./CarousalRightNavigation/CarousalRightNavigation";

import 'swiper/css';
import 'swiper/css/navigation';
import styles from "./Carousal.module.css";

import { Navigation } from 'swiper/modules';


const Controls=({data})=>{
    let swiper = useSwiper();
    
    useEffect(()=>{
        //swiper.slideTo(index, speed, runCallbacks(optional))
        swiper.slideTo(0,1)
    },[data,swiper])

    return <></>
}

const Carousal = ({data,renderCardComponent}) => {
  return (

    <div className={styles.wrapper}>
    <Swiper
        initialSlide={0}
        spaceBetween={40}
        slidesPerView={"auto"}
         modules={[Navigation]}
         allowTouchMove
        >
        <Controls data={data}/>
            <CarouselLeftNavigation />
         <CarouselRightNavigation />
         {/* since we need to show the cards of album inside the section, hence use SwiperSlide inside map on data array */}
      {data.map((item, index) => (
         // renderCardComponent is using the card component in it to show cards, see in section component
        <SwiperSlide key={index}>{renderCardComponent(item)}</SwiperSlide>
      ))}
       
    </Swiper>
    </div>
  )
}

export default Carousal;
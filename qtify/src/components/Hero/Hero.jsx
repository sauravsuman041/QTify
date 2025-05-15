import React from "react";
import Styles from "./Hero.module.css";
import { ReactComponent as VibratingHeadphone } from "../../assets/vibratingHeadphone.svg";

const HeroSection = () => {
  return (
    <div className={Styles.HeroContainer}>
      <div className={Styles.HeroText}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      {/* <img className={Styles.HeroImage} src={VibratingHeadphone} alt='headphone'/> */}
      <VibratingHeadphone />
    </div>
  );
};

export default HeroSection;
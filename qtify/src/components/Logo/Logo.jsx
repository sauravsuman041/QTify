import React from 'react'
import Styles from "./Logo.module.css";
import BrandLogo from "../../assets/BrandLogo.png"
const Logo = () => {
  return (
    <div className={Styles.logoDiv}>
        <img src={BrandLogo} alt='logo' width={67} />
        </div>
  )
}

export default Logo;
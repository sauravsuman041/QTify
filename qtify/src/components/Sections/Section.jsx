import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import Carousal from "../Carousal/Carousal";

const Section = ({ title, data, type ,toggle=true}) => {
  const [carosalToggle, setCarosalToggle] = useState(true); 
  const handleToggle = () => {
    setCarosalToggle(!carosalToggle);
  };
  return (
    <div>
      <div className={styles.sectionTop}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
        {toggle?(
                 carosalToggle?"Show All":"Collapse All"
            ):(
                <></>
            )}
        </h4>
      </div>
      {data.length === 0 ? (
        <div className={styles.progressBar}>
        {/* when no data recieved just show circular loading icon */}
        <CircularProgress />
        </div>
      ) : (
        <div className={styles.sectionInnerWrapper}>
          {!carosalToggle ? (
            <div className={styles.showAllWrapper} >
              {data.map((item) => (
                <Card key={item.id} data={item} type={type} />
              ))}
            </div>
          ) : (
            <Carousal data={data} renderCardComponent={(data)=> <Card key={data.id} data={data} type={type} />} />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
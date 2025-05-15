import React from 'react'
import styles from "./FilterSection.module.css";
//import Section from '../Section/Section';
import BasicTabs from '../BasicTabs/BasicTabs';
import Carousal from '../Carousal/Carousal';
import Card from '../Card/Card';
import { CircularProgress } from '@mui/material';
// import audio from '/some path'

const FilterSection = ({type, title, value, filteredData, handleChangeIndex}) => {

    // function playSound(){
    //     let sound = new Audio(audio)
    //     sound.play()
    // }


  return (
    <div className={styles.wrapper}>
       
            <div className={styles.heading}>
               <h3>{title}</h3> 
            </div>
            <BasicTabs handleChangeIndex={handleChangeIndex}/>
        {filteredData.length?(
                <div className={styles.cardsWrapper}>
                    <Carousal data={filteredData} renderCardComponent={(filteredData)=><Card data={filteredData} type={type}/>}/>
                </div>
        ):(
            <div  className={styles.progressBar}>
                <CircularProgress/>
            </div>
        )}

    </div>
  )
}

export default FilterSection
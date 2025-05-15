import { useEffect, useState } from "react";
import "./App.css";
import HeroSection from "./components/Hero/Hero";
//@ts-ignore
import NavBar from "./components/Navbar/Navbar";
import FilterSection from './components/FilterSection/Filtersection';
import {fetchTopAlbums, fetchNewAlbums, fetchSongs} from './components/api/api';
import Section from "./components/Sections/Section";

function App() {
  const[topAlbumSongs,setTopAlbumSongs]=useState([]);
  const[newAlbumSongs,setNewAlbumSongs]=useState([]);
  const[songsData, setSongsData]=useState([]);
  const[value,setValue]= useState(0);
  const[filteredData, setFilteredData]=useState([]);


  const generateTopAlbumSongs = async () => {
    try{
      const res= await fetchTopAlbums();
    setTopAlbumSongs(res);
    }
    catch(error){
      console.log(error);
      return null;
    } 
  };

  const generateNewAlbumSongs=async()=>{
    try{
      const res= await fetchNewAlbums();
    setNewAlbumSongs(res);
    }
    catch(error){
      console.log(error);
      return null;
    } 
  };

  const generateSongs=async()=>{
    try{
      console.log("generateSongs");
      const res=await fetchSongs();
      setSongsData(res);
      setFilteredData(res);
    }
    catch(error){
      return null;
    }
  };

  const generateNewSongs=(index)=>{

    let key="";
    if(index===0){
      // suppose someOne select 0th tab after 2nd tab 
      //set the default songsData as the final filtered data, bcz we need to show all of songs now
      generateSongs();
      return;
    }
    else if(index===1){
      key="rock";
    }
    else if(index===2){
      key="pop";
    }
  
    else if(index===3){
      key="jazz";
    }
    else if(index===4){
      key="blues";
    }
  
    let newSongsArray=songsData.filter((song)=>{
      console.log("key: ",key)
      return(song.genre.key===key);
    })
  
    console.log("generateNewSongs triggered and filtered this Data: ", newSongsArray)
    setFilteredData(newSongsArray);
  }

  //to handle any change in the selected tab of the songs section and call the generateNewSongs
 const handleChangeIndex= async(newValue)=>{
  console.log("handleChangeIndex triggered with newValue: ",newValue)
  setValue(newValue);
  generateNewSongs(newValue);
 }


useEffect(()=>{
  generateTopAlbumSongs();
  generateNewAlbumSongs();
  generateSongs();
},[]);



  //console.log(topAlbumSongs, "topAlbumSongs");
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <div className="sectionWrapper" >
      <Section type='album' title='Top Albums' data={topAlbumSongs}/>
      <Section type='album' title='New Albums' data={newAlbumSongs}/>
      <FilterSection  type='song' title='Songs' value={value} filteredData={filteredData} handleChangeIndex={handleChangeIndex}/>
      </div>
    </div>
  );
}

export default App;

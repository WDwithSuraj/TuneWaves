import React, { useEffect, useState } from "react";
import "../Style/AdminManageSong.css";
import { AdminSongCard } from "./AdminSongCard";
import axios from "axios"

export const AdminManageSong = () => {
  const [music,setMusic] = useState([])
  function getMusicData(){
    axios.get(`http://localhost:8080/tuneWaves/songs`)
    .then((res)=>{
      return setMusic(res.data.data)
    })
  }

  useEffect(()=>{
    getMusicData()
  },[])
// console.log(music)
  return (
    <div id="admin-manage-song">
      <h2>Manage Songs</h2>
      <div className="all-music">
        {music?.map((music)=><AdminSongCard music={music} getMusicData={getMusicData} />)}
      </div>
    </div>
  );
};

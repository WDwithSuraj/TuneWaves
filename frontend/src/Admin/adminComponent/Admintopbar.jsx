import React from 'react'
import { Crown } from 'lucide-react';
import "../Style/AdminTopBar.css";
import music_logo from "../AdminImage/tunewale-logo-removebg.png"



export const Admintopbar = () => {
  return (
    <div>
        <div id='admintopbar'>
          {/* <img src={music_logo} alt="" /> */}
        <Crown size={50} fill={"#48BB78"} color="#48BB78" />
      <h1
        style={{
          color: "#48BB78",
          // border: "1px solid",
          textAlign: "center",
          width:"8%"
        }}
        > 
        Admin
        </h1>
        
      </div>
    </div>
  )
}

import React from "react";
import { Crown } from 'lucide-react';

export const Admin = () => {
  return (
    <div>
      <div style={{border:"1px solid",display:"flex",alignItems:"center",justifyContent:"center"}}>
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
  );
};

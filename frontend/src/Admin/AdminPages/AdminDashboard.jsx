import React from 'react'
import "../Style/AdminDashboard.css"
import {Users2,Music4,ListMusic} from "lucide-react";

export const AdminDashboard = () => {
  return (
    <div id="Admin-dashboard">
        <h2>Dashboard Analytics</h2>
        <div id='detail'>
            <div className="detail-card">
                <div className='detail-logo' style={{backgroundColor:"#D3F4EA"}}><Users2 size={30} fill='#F681A8' color='#F681A8' /></div>
                <div className='detail-text'>
                    <p>Total Users</p>
                    <h3>{50}</h3>
                </div>
            </div>
            <div className="detail-card">
                <div className='detail-logo' style={{backgroundColor:"#ffd7d2"}}><Music4 size={30}  color='#3ce64d' /></div>
                <div className='detail-text'>
                    <p>Total Songs</p>
                    <h3>{500}</h3>
                </div>
            </div>
            <div className="detail-card">
                <div className='detail-logo' style={{backgroundColor:"#aaf2f2"}}><ListMusic size={30} fill='#F681A8' color='#F681A8' /></div>
                <div className='detail-text'>
                    <p>Total Cetagory</p>
                    <h3>{10}</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

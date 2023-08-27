import React from "react";
import "../Style/AdminDashboard.css";
import "../Style/AdminUsers.css";

import { Users2, Music4, ListMusic } from "lucide-react";

export const AdminDashboard = () => {
  const token = localStorage.getItem("token");
  // console.log(token)
  return (
    <div id="Admin-dashboard">
      <h2>Dashboard Analytics</h2>
      <div id="detail">
        <div className="detail-card">
          <div className="detail-logo" style={{ backgroundColor: "#D3F4EA" }}>
            <Users2 size={30} fill="#F681A8" color="#F681A8" />
          </div>
          <div className="detail-text">
            <p>Total Users</p>
            <h3>{50}</h3>
          </div>
        </div>
        <div className="detail-card">
          <div className="detail-logo" style={{ backgroundColor: "#ffd7d2" }}>
            <Music4 size={30} color="#3ce64d" />
          </div>
          <div className="detail-text">
            <p>Total Songs</p>
            <h3>{500}</h3>
          </div>
        </div>
        <div className="detail-card">
          <div className="detail-logo" style={{ backgroundColor: "#aaf2f2" }}>
            <ListMusic size={30} fill="#F681A8" color="#F681A8" />
          </div>
          <div className="detail-text">
            <p>Total Cetagory</p>
            <h3>{10}</h3>
          </div>
        </div>
      </div>
      <div id="admin-data-div">
        <h1 style={{fontSize:"x-large",fontWeight:"500",color:"rgb(73, 73, 73)",color:"orangered",}}>Admins</h1>
            <div id="admin-user-head">
                <div className="admin-user-logo">{"User"}</div>
                <div className="admin-user-name">{"Name"}</div>
                <div className="admin-user-email">{"E-mail"}</div>
                <div className="admin-user-gender">{"Mobile"}</div>
            </div>
            <div id="admin-data">
                <div id="admin-image">
                    <img src="https://avatars.githubusercontent.com/u/93611786?v=4" alt="" />
                </div>
                <h2 className="admin--name">Anshul</h2>
                <h2 className="admin--email">kushwahasg4450@gmain.com</h2>
                <h2 className="admin--gender">7906192050</h2>
            </div>
            <div id="admin-data">
                <div id="admin-image">
                    <img src="https://avatars.githubusercontent.com/u/112754218?s=96&v=4" alt="" />
                </div>
                <h2 className="admin--name">Ayush</h2>
                <h2 className="admin--email">ayushkumar111@gmain.com</h2>
                <h2 className="admin--gender">xxxxxxxxxx</h2>
            </div>
            <div id="admin-data">
                <div id="admin-image">
                    <img src="https://avatars.githubusercontent.com/u/119488668?s=60&v=4" alt="" />
                </div>
                <h2 className="admin--name">Rohit</h2>
                <h2 className="admin--email">rohitnayal123@gmain.com</h2>
                <h2 className="admin--gender">xxxxxxxxxx</h2>
            </div>
            <div id="admin-data">
                <div id="admin-image">
                    <img src="https://avatars.githubusercontent.com/u/111695568?s=60&v=4" alt="" />
                </div>
                <h2 className="admin--name">Suraj</h2>
                <h2 className="admin--email">surajkrsr98@gmain.com</h2>
                <h2 className="admin--gender">8584007663</h2>
            </div>
            <div id="admin-data">
                <div id="admin-image">
                    <img src="https://avatars.githubusercontent.com/u/119648587?s=60&v=4" alt="" />
                </div>
                <h2 className="admin--name">Rohan</h2>
                <h2 className="admin--email">rohankumar3053@gmain.com</h2>
                <h2 className="admin--gender">xxxxxxxxxx</h2>
            </div>
      </div>
    </div>
  );
};

// <a href="https://ibb.co/LJzWzf1"><img src="https://i.ibb.co/wwNXN14/1668355917347.jpg" alt="1668355917347" border="0" /></a>

import React, { useState, useEffect } from "react";
import "../Style/AdminUsers.css";
import { AdminUserCard } from "./AdminUserCard";
import axios from "axios";

export const AdminUsers = () => {
  const token = localStorage.getItem("token");
  const [userData, setUserData] = useState([]);

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  function getUsers() {
    axios
      .get(`http://localhost:8080/tuneWaves/users`, { headers })
      .then((res) => {
        setUserData(res.data.data);
      });
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div id="admin-user">
      <h2>User Details</h2>
      <div id="admin-user-head">
        <div className="admin-user-logo">{"User"}</div>
        <div className="admin-user-name">{"Name"}</div>
        <div className="admin-user-email">{"E-mail"}</div>
        <div className="admin-user-gender">{"Gender"}</div>
        <div className="admin-user-gender">{"Delete"}</div>
      </div>
      <div>
        {userData?.map((user) => (
          <AdminUserCard user={user} getUsers={getUsers} />
        ))}
      </div>
    </div>
  );
};

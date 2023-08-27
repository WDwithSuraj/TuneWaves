import React from "react";
import "../Style/AdminUsers.css";
import { User2, Trash2 } from "lucide-react";
import axios from "axios";

export const AdminUserCard = ({ user,getUsers }) => {
  const token = localStorage.getItem("token")

  const headers = {
    Authorization: `Bearer ${token}`
  };

  function handleDelete(id){
      axios.delete(`http://localhost:8080/tuneWaves/users/${id}`,{headers})
      .then(()=>getUsers())
  }

  return (
    <div id="admin-user-card">
      <div className="admin-user-logo">
        <User2 fill="orange" color="orange" size={25} />
      </div>
      <div className="admin-user-name">{user.name}</div>
      <div className="admin-user-email">{user.email}</div>
      <div className="admin-user-gender">{user.gender}</div>
      <div
        className="admin-user-gender"
        id="delete-user-btn"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Trash2 color="red" onClick={()=>handleDelete(user._id)} />
      </div>
    </div>
  );
};

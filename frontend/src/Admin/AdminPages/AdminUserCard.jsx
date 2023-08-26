import React from "react";
import "../Style/AdminUsers.css";
import { User2 } from "lucide-react";


export const AdminUserCard = ({ user }) => {
  return (
    <div id="admin-user-card">
      <div className="admin-user-logo"><User2 fill="orange" color="orange" size={25}/></div>
      <div className="admin-user-name">{user.name}</div>
      <div className="admin-user-email">{user.email}</div>
      <div className="admin-user-gender">{user.gender}</div>
    </div>
  );
};

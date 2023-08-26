import React from "react";
import "../Style/AdminUsers.css";
import { AdminUserCard } from "./AdminUserCard";

export const AdminUsers = () => {
  let userObj = [
    {
      name: "Goku",
      email: "goku123@gmail.com",
      gender: "male",
    },
    { name: "Gohan", email: "gohan123@gmail.com", gender: "female" },
  ];

  return (
    <div id="admin-user">
      <h2>User Details</h2>
      <div id="admin-user-head">
        <div className="admin-user-logo">{"User"}</div>
        <div className="admin-user-name">{"Name"}</div>
        <div className="admin-user-email">{"E-mail"}</div>
        <div className="admin-user-gender">{"Gender"}</div>
      </div>
      <div>
        {userObj.map((user) => (
          <AdminUserCard user={user} />
        ))}
      </div>
    </div>
  );
};

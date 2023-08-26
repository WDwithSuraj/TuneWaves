import React from "react";
import { Admintopbar } from "./adminComponent/Admintopbar";
import { Adminsidebar } from "./adminComponent/Adminsidebar";
import { AdminRoute } from "./AdminRoutes/AdminRoute";

export const Admin = () => {
  return (
    <div>
      <Admintopbar/>
      <div style={{display:"flex"}} >
        <Adminsidebar/>
        <AdminRoute/>
      </div>
    </div>
  );
};

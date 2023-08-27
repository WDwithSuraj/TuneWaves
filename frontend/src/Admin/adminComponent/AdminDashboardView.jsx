import React from "react";
import { Admintopbar } from "./Admintopbar";
import { Adminsidebar } from "./Adminsidebar";
import { AdminDashboard } from "../AdminPages/AdminDashboard";
import { AdminRoute } from "../AdminRoutes/AdminRoute";

export const AdminDashboardView = () => {
  return (
    <>
      <div>
        <Admintopbar />
        <div
          style={{
            display: "flex",
          }}
        >
          <div>
            <Adminsidebar />
          </div>
          <div>
            <AdminDashboard />
          </div>
        </div>
      </div>
    </>
  );
};

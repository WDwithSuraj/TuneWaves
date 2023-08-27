import React from "react";
import { AlignVerticalJustifyEnd, Users, Music2, Database } from "lucide-react";
import "../Style/AdminSideBar.css";
import { Link } from "react-router-dom";

export const Adminsidebar = () => {
  return (
    <div id="sideBar">
      <Link to='/admin/dashboard' >
        <div className="sidetitle">
          <AlignVerticalJustifyEnd className="sidelogo" />
          <h3>Dashboard</h3>
        </div>
      </Link>
      <Link to='/admin/users' >
        <div className="sidetitle">
          <Users className="sidelogo" /> <h3>Users</h3>
        </div>
      </Link>
      <Link to='/admin/addsong' > 
        <div className="sidetitle">
          <Music2 className="sidelogo" /> <h3>Add Songs</h3>
        </div>
      </Link>
      <Link to='/admin/managesong' >
        <div className="sidetitle">
          <Database className="sidelogo" /> <h3>Manage Songs</h3>
        </div>
      </Link>
    </div>
  );
};

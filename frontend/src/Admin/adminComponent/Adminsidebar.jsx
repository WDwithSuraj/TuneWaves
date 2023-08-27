import React from "react";
import { AlignVerticalJustifyEnd, Users, Music2, Database,LogOut } from "lucide-react";
import "../Style/AdminSideBar.css";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
import axios from "axios";

export const Adminsidebar = () => {
  const toast = useToast()
  const navigate=useNavigate()
  
    const token = localStorage.getItem("token")

    const logOut = () => {
      axios(`http://localhost:8080/tuneWaves/users/logout`,{
        method : "POST",
        headers : {
          Authorization : `Bearer ${token}`
        },

      }).then((res)=>{
        localStorage.clear()
        toast({
          title: 'logged-out',
          status: 'error',
          position:"top",
          duration: 1200,
          isClosable: true,
        })
        setTimeout(()=>{
          navigate("/")
        },1500)

      })
      
    }

  return (
    <div id="sideBar">
      <Link to='/admin/' >
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
      <div id="admin-logout" onClick={logOut}>
        Logout <LogOut />
      </div>
    </div>
  );
};

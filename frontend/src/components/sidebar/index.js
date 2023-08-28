import React, { useEffect, useState } from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import sideBarImage from "../../../src/Images/sideBarImage.png"
function Sidebar() {

  const toast = useToast()

  const navigate = useNavigate()
  // const [image, setImage] = useState(
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
  // );
  const token = localStorage.getItem("token")

  const logOut = () => {
    axios(`https://cute-lime-sweatpants.cyclic.app/tuneWaves/users/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },

    }).then((res) => {
      localStorage.clear()
      // alert("You have Logged out successfully.")
      toast({
        title: 'You have Logged out successfully.',
        position: "top",
        status: 'success',
        duration: 1500,
        isClosable: true,
      })


      setTimeout(() => {
        window.location.reload()
        navigate("/")
      }, 2000)


    })

  }

  return (
    <div className="sidebar-container">
      <img src={sideBarImage} className="profile-img" alt="profile" />
      <div>
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />

      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt onClick={() => logOut()} />} />
    </div>
  );
}

export default Sidebar;

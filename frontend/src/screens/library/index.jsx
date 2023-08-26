import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import "./library.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import {Heart } from "lucide-react"
import axios from "axios";

function Library() {
  const [playlists, setPlaylists] = useState([]);
  const [likeheart,setLikeheart]=useState(false)

  useEffect(() => {
    fetch("http://localhost:8080/tuneWaves/songs")
      .then((res) => {
        return  res.json();
      })
      .then((data) => {
        //console.log(data)
        setPlaylists(data.data)
      })
      .catch((err)=>{
        console.log(err)
      })
      
  }, [])

  console.log(playlists)

  const navigate=useNavigate()

  // const playPlaylist=(_id)=>{
  //   navigate(`/player/:${id}`,{state:{id:_id}})
  // }

  // const handlelike=(id)=>{
  //   axios.put(`http://localhost:8080/tuneWaves/songs/like/:${id}`)

  // }

  return (
    <div className="screen-container">
    <div className="library-body">
      {playlists?.map((playlist) => (
        <div
          className="playlist-card"
          key={playlist._id}
          
        >
          <img
            src={playlist.image}
            className="playlist-image"
            alt="Playlist-Art"
          />
          <p className="playlist-title">{playlist.title}</p>
          <p className="playlist-artist">{playlist.artist} </p>
        
        <span className="like-heart" onClick={()=>{setLikeheart(!likeheart)}}>{likeheart?<Heart color="red" fill="red"/>:<Heart />}</span>
          
         
          <div className="playlist-fade">
            <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
             <Link to={`/player/${playlist._id}`}><AiFillPlayCircle   /></Link> 
            </IconContext.Provider>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Library;

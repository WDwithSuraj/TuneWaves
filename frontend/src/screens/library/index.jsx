import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import "./library.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Library() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/tuneWaves/songs")
      .then((res) => {
        return  res.json();
      })
      .then((data) => {
        console.log(data)
        setPlaylists(data.data)
      })
      .catch((err)=>{
        console.log(err)
      })
      
  }, [])

  console.log(playlists)

  const navigate=useNavigate()

  const playPlaylist=(_id)=>{
    navigate("/player",{state:{id:_id}})
  }

  return (
    <div className="screen-container">
    <div className="library-body">
      {playlists?.map((playlist) => (
        <div
          className="playlist-card"
          key={playlist._id}
           onClick={() => playPlaylist(playlist._id)}
        >
          <img
            src={playlist.image}
            className="playlist-image"
            alt="Playlist-Art"
          />
          <p className="playlist-title">{playlist.title}</p>
          <p className="playlist-artist">{playlist.artist} </p>
          <div className="playlist-fade">
            <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Library;

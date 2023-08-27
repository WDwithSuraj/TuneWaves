
import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import "./library.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import axios from "axios";

function Library() {
  const [playlists, setPlaylists] = useState([]);
  const [likedSongs, setLikedSongs] = useState([]);
  const [like, setLike] = useState(false);
  const token = localStorage.getItem("token");
  console.log(token);

  const fetchSongs = () => {
    fetch("http://localhost:8080/tuneWaves/songs")
      .then((res) => res.json())
      .then((data) => {
        setPlaylists(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLike = (id) => {
    if (likedSongs.includes(id)) {
      // If the song is already liked, unlike it
      setLikedSongs(likedSongs.filter((songId) => songId !== id));
    } else {
      // If the song is not liked, like it then do this 
      setLikedSongs([...likedSongs, id]);
    }

    
    fetch(`http://localhost:8080/tuneWaves/songs/like/${id}`,{
      method:"PUT",
      headers:{
        Authorization:`Bearer ${token}`,

      }
    })
    .then((res)=>{
     return res.json()
    })
    .then((data)=>{
      setLike(!like)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const fetchLikedSongs = () => {
    fetch("http://localhost:8080/tuneWaves/songs/like", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        let temp = [];
        data.data?.map((el) => temp.push(el._id));
        setLikedSongs(temp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchLikedSongs();
  }, [like]);

  useEffect(() => {
    fetchLikedSongs();
    fetchSongs();
  }, []);

  const navigate = useNavigate();

  const playPlaylist = (index) => {
    navigate("/player", { state: { index, playlists } });
  };

  console.log(likedSongs);

  return (
    <div className="screen-container">
      <div className="library-body">
        {playlists?.map((playlist, index) => (
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
            <span
              className="like-heart"
              onClick={() => handleLike(playlist._id)}
            >
              {likedSongs.includes(playlist._id) ? (
                <Heart color="red" fill="red" />
              ) : (
                <Heart color="red" />
              )}
            </span>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                {/* <Link to={`/player/${playlist._id}`}> */}
                  <AiFillPlayCircle onClick={() => playPlaylist(index)} />
                {/* </Link> */}
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;




import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import "./favorite.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading";

function Favorite() {
  const [likesongs, setLikesongs] = useState([]);
  const [loading, setLoadin] = useState(false);
  const token = localStorage.getItem("token");
  console.log(token);

  const fetchdata = () => {
    setLoadin(true);
    fetch("https://cute-lime-sweatpants.cyclic.app/tuneWaves/songs/like", {
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
        setLikesongs(data.data);
        setLoadin(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadin(false);
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  console.log(likesongs);

  const playPlaylist = (index) => {
    navigate("/player", { state: { index, likesongs } });
  };

  const navigate = useNavigate();

  return (
    <div className="screen-container">
      <div className="library-body">
        {loading ? (
          <Loading />
        ) : (
          <>
            {likesongs?.map((playlist, index) => (
              <div className="playlist-card" key={playlist._id}>
                <img
                  src={playlist.image}
                  className="playlist-image"
                  alt="Playlist-Art"
                />
                <p className="playlist-title">{playlist.title}</p>
                <p className="playlist-artist">{playlist.artist} </p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Favorite;

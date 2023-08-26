import React from 'react'


import ReactH5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export const Musicplayer = ({source}) => {






  return (
    <div>
        <ReactH5AudioPlayer
        src={source}
        autoPlay
        volume={0.6}
        progressJumpStep={5000}
        style={{
          backgroundColor: "black",
          color: "white",
          width: "62%",
          margin: "0 auto",
          backgroundColor: "#131313",
          padding: "16px 20px 16px 20px",
          borderRadius: "10px",
        }}
      />
    </div>
  )
}

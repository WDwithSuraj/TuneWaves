import React from 'react'
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";
import { BiSkipPreviousCircle, BiSkipNextCircle } from "react-icons/bi";

export default function MediaPlayer(props) {
  const handleSeek = (e) => {
    props.handleSeek(+e.target.value);
  }

  const handleVolumeChange = (e) => {
    const volume = +e.target.value;
    props.handleVolumeChange(volume);
  }

  return (
    <div className="center">
      <div className="player">
        <div className="song-img">
          <img src={props.image} alt="Song Art" />
        </div>
        <div className="song-details">
        <div className="song-title">
          <span>{props.title}</span>
        </div>
        <div className="song-info">
          <span className="info-text">( Album: {props.album}</span>,
          <span className="info-text">Artist: {props.artist}</span>,
          <span className="info-text">Genre: {props.genre} )</span>
        </div>
        </div>
        <div className="player-controls">
          <div className="player-duration">
            <input
              type="range" name="media-player" className="media-player"
              value={props.progress}
              onChange={handleSeek}
              min={0} max={props.duration} />
            <span className="timer-text">{formatTime(props.progress)}</span> / <span className="timer-text">{formatTime(props.duration)}</span>
          </div>
          <div className="control-player">
            <div className="controls">
              <BiSkipPreviousCircle onClick={props.handlePrevious} size={40} style={{ color: "white" }} />
              {!props.isPlaying && <BsPlayCircle onClick={props.handleToggle} size={50} style={{ color: "white" }} />}
              {props.isPlaying && <BsPauseCircle onClick={props.handleToggle} size={50} style={{ color: "white" }} />}
              <BiSkipNextCircle onClick={props.handleNext} size={40} style={{ color: "white" }} />
            </div>
            <div className="volume">
              <input
                type="range" name="volume-control" className="volume-control"
                value={props.volume}
                onChange={handleVolumeChange}
                min={0} max={1} step={0.01} />
              <span className="volume-text">{Math.round(props.volume * 100)}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper function to format time in seconds to mm:ss format
function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

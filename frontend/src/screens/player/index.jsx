
import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MediaPlayer from "./MediaPlayer";

function Player() {
  const { index, playlists } = useLocation().state;
  const audioPlayer = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(index || 0);
  const [isPlaying, setPlaying] = useState(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(100);
  const [volume, setVolume] = useState(1);

  const songAlbum = playlists[currentIndex].album;
  const songArtist = playlists[currentIndex].artist;
  const songGenre = playlists[currentIndex].genre;

  const songSource = playlists[currentIndex].source;

  useEffect(() => {
    if (isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    setPlaying(false);
    setProgress(0);
  }, [currentIndex]);

  const ontoggle = () => {
    setPlaying((prev) => !prev);
  };

  const onProgressChange = () => {
    setProgress(audioPlayer.current.currentTime);
  };

  const onSeek = (currentTime) => {
    audioPlayer.current.currentTime = currentTime;
    setProgress(currentTime);
  };

  const onNext = () => {
    setCurrentIndex((prev) => (prev + 1 == playlists.length ? 0 : prev + 1));
  };

  const onPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? playlists.length - 1 : prev - 1));
  };

  const handleVolumeChange = (newVolume) => {
    audioPlayer.current.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <div className="screen-container">
      <audio
        ref={audioPlayer}
        onCanPlay={() => {
          setDuration(audioPlayer.current.duration);
          isPlaying === null && setPlaying(true);
        }}
        onTimeUpdate={onProgressChange}
        controls={false}
        src={songSource}
      ></audio>

      <MediaPlayer
        title={playlists[currentIndex].title}
        image={playlists[currentIndex].image}
        album={songAlbum}
        artist={songArtist}
        genre={songGenre}
        isPlaying={isPlaying}
        duration={duration}
        progress={progress}
        handleSeek={onSeek}
        handleToggle={ontoggle}
        handleNext={onNext}
        handlePrevious={onPrevious}
        volume={volume}
        handleVolumeChange={handleVolumeChange}
      />
    </div>
  );

}

export default Player;

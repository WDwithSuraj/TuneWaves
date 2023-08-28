import React, { useRef, useState, useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import MediaPlayer from "./MediaPlayer";
import { useToast } from "@chakra-ui/react";
import Loading from "../../Components/Loading";

function Player() {
  const toast = useToast()
  const navigate=useNavigate()
  const locationState = useLocation().state || {};
  const { index, playlists } = locationState;
  const audioPlayer = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(index || 0);
  const [isPlaying, setPlaying] = useState(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(100);
  const [volume, setVolume] = useState(1);

  // Check if playlists is defined and not empty
  const songAlbum = playlists && playlists[currentIndex]?.album || "Unknown Album";
  const songArtist = playlists && playlists[currentIndex]?.artist || "Unknown Artist";
  const songGenre = playlists && playlists[currentIndex]?.genre || "Unknown Genre";

  // Check if playlists is defined and not empty
  const songSource = playlists && playlists[currentIndex]?.source || "";


  useEffect(() => {
    if (audioPlayer.current) {
      if (isPlaying) {
        audioPlayer.current.play();
      } else {
        audioPlayer.current.pause();
      }
    }
  }, [isPlaying]);
  

  useEffect(() => {
    setPlaying(null);
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

  const gettoast=()=>{
    toast({
      title: 'Nothing to play!!',
       position:"top",
      status: 'success',
      duration: 1500,
      isClosable: true,
    })
    
    
    setTimeout(()=>{
      navigate("/")
    },2000)
  }

  return (
    <div className="screen-container">
      {/* Check if playlists is defined and not empty */}
      {playlists && playlists.length > 0 ? (
        <>
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
            title={playlists[currentIndex]?.title || "Unknown Title"}
            image={playlists[currentIndex]?.image}
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
        </>
      ) : (
        `${gettoast()}` && <Loading/>
      )}
    </div>
  );
}

export default Player;

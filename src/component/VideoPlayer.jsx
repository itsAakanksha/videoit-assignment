import React, { useEffect, useRef, useState,useContext } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import Video from './Video.jsx';
import { PauseIcon } from "@heroicons/react/24/solid";
import { PlayIcon } from "@heroicons/react/24/solid";
import { ForwardIcon } from "@heroicons/react/24/solid";
import { BackwardIcon } from "@heroicons/react/24/solid";


import {VideoContext} from '../context/VideoContext';

const VideoPlayer = ({ isPlaying, setIsPlaying, src }) => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const navigate = useNavigate();

  const { videoSrc, setVideoSrc } = useContext(VideoContext);

  useEffect(() => {
    const video = videoRef.current;
    if (isPlaying) {
      video.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    } else {
      video.pause();
    }
  }, []);


  const handlePlayPause = () => {
    const video = videoRef.current;
    console.log(video)
    if (isPlaying) {
      video.pause();
    } else {
   
      navigate("/video");
      video.play();
      
    }
    setVideoSrc(src)
    setIsPlaying(!isPlaying);
  };

  const handleBackward = () => {
    const video = videoRef.current;
    video.currentTime -= 10;
  };

  const handleForward = () => {
    const video = videoRef.current;
    video.currentTime += 10;
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const handleSliderChange = (e) => {
    videoRef.current.currentTime = e.target.value;
    setCurrentTime(videoRef.current.currentTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
 
  console.log(isPlaying);

  return (
    <div
      className={`relative w-full  mx-auto flex-grow z-0 h-[50vh]     ${
        isPlaying ? "h-screen" : "h-[50vh]"
      }  `}
    >

      <video
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        autoPlay
        muted
        className="w-full h-full object-cover "
        onClick={handlePlayPause}
      >
        <source
          src={src}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      
      {isPlaying && (
        <div 
        className="fixed bottom-1 left-1/2 right-1/2 transform -translate-x-1/2 w-[90vw]
        px-6 bg-gray-600/25 backdrop:blur-sm shadow-lg flex flex-col justify-between  rounded-full">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSliderChange}
            className="w-full mt-4"
          />
          <div className="controls flex flex-col items-center justify-center space-x-4">
            <div className="time-display text-white flex w-full justify-between">
              <div>{formatTime(currentTime)}</div>
              <div>{formatTime(duration)}</div>
            </div>
            <div>
              <button
                className="control-btn text-white font-bold  px-4 rounded"
                onClick={handleBackward}
              >
                <BackwardIcon className="w-5 h-5" />
              </button>
              <button
                className="control-btn text-white font-bold px-4 rounded"
                onClick={handlePlayPause}
              >
                {isPlaying ? (
                  <PauseIcon className="w-5 h-5" />
                ) : (
                  <PlayIcon className="w-5 h-5" />
                )}
              </button>
              <button
                className="control-btn text-white font-bold py-2 px-4 rounded"
                onClick={handleForward}
              >
                <ForwardIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {!isPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          onClick={handlePlayPause}
        >
          <button className="bg-gray-200 bg-opacity-20 backdrop-blur-sm border-opacity-30 text-white rounded-full p-3">
            <FaPlay size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;

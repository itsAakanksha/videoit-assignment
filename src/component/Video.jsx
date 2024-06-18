import React, { useRef, useState } from 'react';
import { PauseIcon } from '@heroicons/react/16/solid';
import {PlayIcon} from '@heroicons/react/16/solid';


const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    setIsPlaying(!video.paused);
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
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <div className="video-player relative bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 shadow-lg">
        <video
          ref={videoRef}
          className="rounded-lg mb-4 w-full"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        >
          <source src="your-video-file.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
     
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSliderChange}
          className="w-full mt-4"
        />
        <div className="time-display text-white mt-2">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
    </div>
  );
};

export default Video;

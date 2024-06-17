import React, { useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const navigate = useNavigate();

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
     
    } else {
      navigate('/video')
      video.play();
    }
    setIsPlaying(!isPlaying);


  };


  return (
    <div className="relative w-full h-[50vh] mx-auto flex-grow z-0 p-2 ">
      <video
        ref={videoRef}
        autoPlay muted
        className="w-full h-full object-cover rounded-[50px] "
        onClick={handlePlayPause}
      >
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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

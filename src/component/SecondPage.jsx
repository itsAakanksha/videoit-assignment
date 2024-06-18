import React from "react";
import VideoPlayer from "./VideoPlayer";

function SecondPage({ videoSource, isPlaying, setIsPlaying }) {
 

  return (
    <div>
      <h2 className="p-4 text-xl font-semibold z-4">You May Like</h2>
      <div className="h-[80vh] flex justify-between rounded-[40px] items-center  gap-y-6  w-full flex-wrap ">
        <div className="flex flex-col justify-between rounded-[40px]   w-[calc(50%-0.3rem)] h-1/2   ">
          <div className="overflow-hidden rounded-[40px]" >
            <VideoPlayer
              src={videoSource[0]}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
            />
          </div>
          <h4 className="text-md mt-2 font-semibold">Hana Adams</h4>
          <p className="text-gray-400">Chicago</p>
        </div>
        <div className="flex flex-col justify-between  w-[calc(50%-0.3rem)] h-1/2    ">
          <div className="overflow-hidden rounded-[40px]" >
            <VideoPlayer
              src={videoSource[1]}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
            />
          </div>
          <h4 className="text-md mt-2 font-semibold">Hana Adams</h4>
          <p className="text-gray-400">Chicago</p>
        </div>
        <div className="flex flex-col justify-between  w-[calc(50%-0.3rem)] h-1/2   ">
          <div className="overflow-hidden rounded-[40px]" >
            <VideoPlayer
              src={videoSource[2]}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
            />
          </div>
          <h4 className="text-md mt-2 font-semibold">Hana Adams</h4>
          <p className="text-gray-400">Chicago</p>
        </div>

        <div className="flex flex-col justify-between  w-[calc(50%-0.3rem)] h-1/2   ">
        <div className="overflow-hidden rounded-[40px]" >
          <VideoPlayer
            src={videoSource[3]}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        </div>
        <h4 className="text-md mt-2 font-semibold">Hana Adams</h4>
        <p className="text-gray-400">Chicago</p>
      </div>
      
      </div>
    </div>
  );
}

export default SecondPage;

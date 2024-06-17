import React from "react";
import VideoPlayer from "./VideoPlayer";

function SecondPage() {
  return (
    <div>
      <h2 className="p-4 text-xl font-semibold z-4">You May Like</h2>
      <div className="h-screen flex justify-between items-center gap-x-1 gap-y-6  w-full flex-wrap ">
        <div className="flex flex-col justify-between  w-[calc(50%-0.3rem)] h-1/2   ">
          <VideoPlayer/>
          <h4 className="text-md mt-2 font-semibold">Hana Adams</h4>
          <p className="text-gray-400">chicago</p>
        </div>
        <div className="flex flex-col justify-between w-[calc(50%-0.3rem)] h-1/2    ">
          <VideoPlayer/>
          <h4 className="text-md mt-2 font-semibold">Hana Adams</h4>
          <p className="text-gray-400">chicago</p>
        </div>
        <div className="flex flex-col justify-between w-[calc(50%-0.3rem)] h-1/2   ">
          <VideoPlayer/>
          <h4 className="text-md mt-2 font-semibold">Hana Adams</h4>
          <p className="text-gray-400">chicago</p>
        </div>
        <div className="flex flex-col justify-between w-[calc(50%-0.3rem)] h-1/2  ">
          <VideoPlayer/>
          <h4 className="text-md mt-2 font-semibold">Hana Adams</h4>
          <p className="text-gray-400">chicago</p>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;

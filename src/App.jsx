import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "./component/Loader";
import logo from ".././public/logo.png";
import "./App.css";
import NavigationBar from "./component/NavigationBar";
import SecondPage from "./component/SecondPage";
import ThirdPage from "./component/ThirdPage";

import VideoPlayer from "./component/VideoPlayer";

function App() {
  const videoSource = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
  ];

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const [loading, setLoading] = useState(false);

  const loadingTime = () => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  };

  useEffect(() => {
    loadingTime();
  }, []);

  return (
    <>
      <div className="py-2 px-4">
        <Loader />
        {loading && (
          <div className="flex flex-col gap-6">
            <div className="relative w-full ">
              <svg
                width="17"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-labelledby="search"
                className="w-5 h-5 text-gray-400 ml-8 mt-5 absolute font-bold "
              >
                <path
                  d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                  stroke="currentColor"
                  stroke-width="1.333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>

              <input
                className="input rounded-full px-16 py-4 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 w-full shadow-md bg-[#1f1f1f]"
                placeholder="Search for treasures"
                required=""
                type="text"
              />
            </div>

            {/*  navigating buttons*/}

            <div className="flex gap-1 flex-nowrap overflow-x-auto no-scrollbar  ">
              <button className=" flex rounded-full px-8 py-4 border-2 border-transparent focus:outline-none bg-[#2e9569] placeholder-gray-400 transition-all duration-300  shadow-md ">
                <span>Sale </span>
                <span className="bg-black rounded-full text-white text-xs p-1 ml-2">
                  24
                </span>
              </button>

              <button className="input rounded-full px-8 py-4 border-2 border-transparent focus:outline-none focus:bg-[#2e9569] placeholder-gray-400 transition-all duration-300  shadow-md bg-[#1f1f1f]">
                Rings
              </button>

              <button className="input rounded-full px-8 py-4 border-2 border-transparent focus:outline-none focus:bg-[#2e9569] placeholder-gray-400 transition-all duration-300  shadow-md bg-[#1f1f1f]">
                Necklace
              </button>

              <button className="input rounded-full px-8 py-4 border-2 border-transparent focus:outline-none focus:bg-[#2e9569] placeholder-gray-400 transition-all duration-300  shadow-md bg-[#1f1f1f]">
                Necklace
              </button>
            </div>

            {/* videos */}

            <div className="flex  gap-1 relative h-[50vh]">
              <div className="flex flex-col w-full gap-1 justify-evenly">
{/* first */}
                <div className=" bg-blue-400 rounded-[40px]  rounded-tl-none overflow-hidden">
                  <div className="w-full h-full">
                    <VideoPlayer
                      src={videoSource[1]}
                      isPlaying={isPlaying}
                      setIsPlaying={setIsPlaying}
                    />
                  </div>
                </div>
{/* second */}
                <div
                  className=" bg-[#A0C5E6] rounded-[40px] relative text-container-2  "
                  style={{ flex: "1 4 10%" }}
                >
                  <img src={logo} alt="second" className=" object-cover w-20 h-20 " />
                </div>
              </div>
{/* third */}
              <div className="flex flex-col w-full h-full gap-1 justify-evenly">
                <div
                  className=" bg-[#EFD4AE]  rounded-[40px] relative text-container "
                  style={{ flex: "1 4 10%" }}
                >
                  <img src={logo} alt="third" className="object-cover w-20 h-20 " />
                </div>
{/* fourth*/}
                <div className="bg-yellow-400  rounded-[40px]   rounded-br-none overflow-hidden">
                  <div className="w-full h-full  ">
                    <VideoPlayer
                      src={videoSource[2]}
                      isPlaying={isPlaying}
                      setIsPlaying={setIsPlaying}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* spring collection*/}
            <div className="bg-[#fbbbb9] rounded-[40px] p-6 my-[-20px]">
              <h3 className="text-xl text-black font-semibold">
                Spring Collection `23
              </h3>
              <p className="text-gray-700">make yourself happy</p>
            </div>

            {/* Navigating buttons*/}
            {<NavigationBar />}
            <SecondPage
              videoSource={videoSource.slice(2)}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "./component/Loader";
import "./App.css";
import NavigationBar from "./component/NavigationBar";

function App() {
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
                class="w-5 h-5 text-gray-400 ml-8 mt-5 absolute font-bold "
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
                class="input rounded-full px-16 py-4 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 w-full shadow-md bg-[#1f1f1f]"
                placeholder="Search for treasures"
                required=""
                type="text"
              />
            </div>

            {/*  navigating buttons*/}

            <div className="flex gap-1 ">
              <button className=" flex rounded-full px-8 py-4 border-2 border-transparent focus:outline-none focus:bg-[#2e9569] placeholder-gray-400 transition-all duration-300  shadow-md bg-[#1f1f1f]">
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


      
     <div className="flex  h-[50vh] gap-1">
      <div className="flex flex-col w-full gap-1 justify-between">
      <div className="flex-grow bg-blue-400 rounded-[50px]  rounded-tl-none">first</div>
      <div className="bg-yellow-400 rounded-[50px]  "  style={{ flex: '0 1 30%' }}>second</div>
      </div>
      <div className="flex flex-col w-full gap-1 justify-between">
      <div className=" bg-blue-400  rounded-[50px]  "  style={{ flex: '0 1 30%' }}>third</div>
      <div className="bg-yellow-400 flex-grow rounded-[50px]   rounded-br-none">fourth</div>
      </div>
      
     </div>

     {/* spring collection*/}
     <div className="bg-[#fbbbb9] rounded-[50px] p-6 my-[-20px]">
      <h3 className="text-xl text-black font-semibold">Spring Collection `23</h3>
      <p className="text-gray-700">make yourself happy</p>
     </div>

     
    {/* Navigating buttons*/}

    <NavigationBar/>

         

          </div>
        )}
      </div>
    </>
  );
}

export default App;

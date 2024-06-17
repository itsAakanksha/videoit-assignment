import React from "react";
import VideoPlayer from "./VideoPlayer";
import {
  HeartIcon,
  ChatBubbleLeftEllipsisIcon,
  ArrowUturnRightIcon,
} from "@heroicons/react/24/solid";
import CardComponent from "./CardComponent";

function ThirdPage() {
  return (
    <div className="h-screen" >
      <VideoPlayer />

      <div className=" p-2 bg-black flex justify-around items-center border-b-2 border-gray-300  border-opacity-15 ">
        <button className="flex flex-col items-center text-gray-400">
          <HeartIcon className="h-4 w-4" />
          <p className="text-xs">LIKE</p>
        </button>

        <button className="flex flex-col items-center text-gray-400">
          <ChatBubbleLeftEllipsisIcon className="h-4 w-4" />
          <p className="text-xs">MESSAGE</p>
        </button>
        <button className="flex flex-col items-center text-gray-400">
          <ArrowUturnRightIcon className="h-4 w-4" />
          <p className="text-xs">SHARE</p>
        </button>
      </div>

      <div className=" p-4 ">
      <p className="text-xl tracking-wide">Tropical Leaf Earning</p>
      <p className="text-3xl font-bold py-2">$14.00</p>
      </div>

      {/*  CARD COMPONENT*/}
      <CardComponent />
    </div>
  );
}

export default ThirdPage;

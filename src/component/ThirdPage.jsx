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

      <div className=" p-4 bg-black flex justify-around items-center border-b-2 border-gray-300  border-opacity-15 ">
        <button className="flex flex-col items-center text-gray-400">
          <HeartIcon className="h-6 w-6" />
          <p>LIKE</p>
        </button>

        <button className="flex flex-col items-center text-gray-400">
          <ChatBubbleLeftEllipsisIcon className="h-6 w-6" />
          <p>MESSAGE</p>
        </button>
        <button className="flex flex-col items-center text-gray-400">
          <ArrowUturnRightIcon className="h-6 w-6" />
          <p>SHARE</p>
        </button>
      </div>

      <div className="my-8">
      <p className="text-xl tracking-wide">Tropical Leaf Earning</p>
      <p className="text-3xl font-bold py-4">$14.00</p>
      </div>

      {/*  CARD COMPONENT*/}
      <CardComponent />
    </div>
  );
}

export default ThirdPage;

import React from 'react';
import { HomeIcon, MagnifyingGlassIcon, PlusIcon, ChatBubbleLeftEllipsisIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const NavigationBar = () => {
  return (
    <motion.div
    initial={{ y: 200, scaleX:0.5  }}   // Start from the top-left corner
    animate={{ y: 0, scaleX:1 }}         // Move to the current position
    transition={{ duration: 1 }}
    className='flex w-full justify-center z-10  '>
    <div className="fixed bottom-0 left-1/2 right-1/2 transform -translate-x-1/2 w-[99vw] p-4 bg-white/10 backdrop-blur-lg shadow-lg flex justify-evenly items-center  rounded-3xl">
      <button className="flex flex-col items-center text-white">
        <HomeIcon className="h-6 w-6" />
      </button>
      <button className="flex flex-col items-center text-white">
        <MagnifyingGlassIcon className="h-6 w-6" />
      </button>
      <button className="flex flex-col items-center bg-white text-black p-3 rounded-full shadow-md">
        <PlusIcon className="h-6 w-6" />
      </button>
      <button className="flex flex-col items-center text-white">
        <ChatBubbleLeftEllipsisIcon className="h-6 w-6" />
      </button>
      <button className="flex flex-col items-center text-white">
        <UserCircleIcon className="h-6 w-6" />
      </button>
    </div>
    </motion.div>
  );
};

export default NavigationBar;

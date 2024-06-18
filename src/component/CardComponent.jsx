import React from "react";
import logo from "../../public/logo.png";
import right from "../../public/right.svg";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
export default function CardComponent() {
  return (
    <>

    <div className="fixed bottom-1 w-full px-2">
      <div
     
      className="flex flex-col gap-1 ">
        <motion.div
        initial={{ x: -200, scaleX:0.5  }}   // Start from the top-left corner
        animate={{ x: 0, scaleX:1 }}         // Move to the current position
        transition={{ duration: 1 }}
        className="flex justify-between items-center p-3 bg-white text-black rounded-[30px]">
          <div className="flex gap-3 items-center  ">
            <img
              src="https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             
              alt=""
              className="w-10 h-10 rounded-full "
            />

            <div className="flex flex-col">
              <h3 className="text-xl font-bold ">Alice Miller</h3>
              <p>Philadelphia</p>
            </div>
          </div>
          <div className="text-black font-extrabold  cursor-pointer">
          <img src={right} alt="" className="w-3 h-3  mx-4" />
          </div>
        </motion.div>

        <motion.div
        initial={{ x: -200, scaleX:0.5  }}   // Start from the top-left corner
        animate={{ x: 0, scaleX:1 }}         // Move to the current position
        transition={{ duration: 1 }}
        className="flex justify-between items-center p-4 bg-[#2e9569] text-[#020202] rounded-[30px]">
          <div className="flex">
            <div className="">Add to cart</div>
          </div>
          <div className="">
            <ShoppingBagIcon className="h-4 w-4 text-[#020202] " />
          </div>
        </motion.div>
      </div>
      </div>
    </>
  );
}

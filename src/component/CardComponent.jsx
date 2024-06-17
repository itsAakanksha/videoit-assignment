import React from "react";
import logo from "../../public/logo.png";
import right from "../../public/right.svg";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
export default function CardComponent() {
  return (
    <>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center p-6 bg-white text-black rounded-[30px]">
          <div className="flex gap-3 items-center  ">
            <img
              src="https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             
              alt=""
              className="w-12 h-12 rounded-full "
            />

            <div className="flex flex-col">
              <h3 className="text-xl font-bold ">Alice Miller</h3>
              <p>Philadelphia</p>
            </div>
          </div>
          <div className=" font-bold cursor-pointer">
          <img src={right} alt="" className="w-5 h-5 font-bold" />
          </div>
        </div>

        <div className="flex justify-between items-center p-6 bg-white text-black rounded-[30px]">
          <div className="flex">
            <div className="">Add to cart</div>
          </div>
          <div className="">
            <ShoppingBagIcon className="h-4 w-4" />
          </div>
        </div>
      </div>
    </>
  );
}

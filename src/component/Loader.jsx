import React from "react";
import logo from "../../public/logo.png";
import { easeInOut, motion } from "framer-motion";
function Loader() {
  return (
    <>
      <motion.div className="w-full h-full mx-auto"
      initial={{ scale: 0, rotate: 360, y: 300}}
      animate={{
        scale: [0,2,0.5], 
        rotate: [0,360,360],  
        y: [300,300,0],       
      }}
      transition={{
        duration: 2,        
        times: [0, 0.8, 1],   
      }}
      >
        <img
          src={logo}
          alt=""
          className=" logo w-20 h-20 mx-auto
    "
        />
      </motion.div>
    </>
  );
}

export default Loader;

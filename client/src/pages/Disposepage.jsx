import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Disposepage() {
  return (
    <div className=" flex flex-col bg-green-200 min-h-screen">
      <div className=" text-center pt-5">
        <h1 className="text-4xl">Registration form</h1>
      </div>
      <div className="flex flex-row justify-center p-4">
        <form className="w-1/2" action="">
          <div className="p-2 flex flex-col">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div  className="p-2 flex flex-col">
            <label htmlFor="">Phone Number</label>
            <input type="number" placeholder="enter your mobile number" />
          </div>

          <div  className="p-2 flex flex-col">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div  className="p-2 flex flex-col">
            <label htmlFor="">Address</label>
            <input type="text" placeholder="Enter your compelete address" />
          </div>

          <div  className="p-2 flex flex-col">
            <label htmlFor="">type of waste</label>
            <input type="text" placeholder="waste catagory" />
          </div>

          <div  className="p-2 flex flex-col">
            <label htmlFor="">select date for pickup</label>
            <input type="date" placeholder="" />
          </div>

          <div  className="p-2 flex flex-col">
            <label htmlFor="">Waste weight</label>
            <input type="text" placeholder="in grams" />
          </div>
          <div  className="p-2 flex flex-col">
            <label htmlFor="">Upload image</label>
            <input type="file" placeholder="" />
          </div>
        </form>
      </div>
        <Link to={"/details"} className="flex justify-center">

        <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-500 text-white p-2 px-8  rounded-xl"
                >
                Submit
              </motion.button>
                  </Link>
    </div>
  );
}

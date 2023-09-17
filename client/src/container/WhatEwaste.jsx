import React from 'react'
import ewaste1 from "../assests/e-waste-1.png";
import { motion } from "framer-motion";

export default function WhatEwaste() {
  return (
    <motion.div  initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} className="flex justify-between mb-10">
        <div className="flex flex-col p-5 w-2/3 justify-center">
          <h2 className="text-5xl mb-5 flex justify-center">
            What is E-waste?
          </h2>
          <p className="text-2xl font-light flex justify-center mt-3 ">
            E-waste, short for "electronic waste," refers to discarded
            electronic or electrical devices and equipment that have reached the
            end of their useful life. As technology advances at a rapid pace,
            electronic gadgets have increasingly shorter lifespans, contributing
            to the growing issue of e-waste.
          </p>
          <p className="text-2xl font-light flex justify-center mt-3 ">
            These may include discarded smartphones, old laptops, and obsolete
            TVs, posing environmental and health challenges when improperly
            disposed.
          </p>
        </div>
        <div className="flex justify-center">
          <img src={ewaste1} alt="" />
        </div>
      </motion.div>
  )
}

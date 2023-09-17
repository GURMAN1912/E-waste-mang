import React, { useRef } from "react";
import ewaste3 from "../assests/e-waste-3.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Effects() {


  return (
    <>
    <div className="flex justify-between mb-10">
      <div className="flex flex-col p-5 w-2/3 justify-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl mb-5 flex justify-center"
          >
          Effect on Environment
        </motion.h2>
        <ul>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-light flex justify-center mt-3 "
            >
            Toxic Material Leaching: Many electronic devices contain hazardous
            materials such as lead, mercury, cadmium, and various flame
            retardants. When e-waste is not disposed of correctly, these toxic
            substances can leach into the soil and groundwater, contaminating
            ecosystems and posing health risks to humans and wildlife.
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-light flex justify-center mt-3 "
            >
            Air Pollution: The improper incineration or burning of e-waste can
            release harmful pollutants and toxic fumes into the atmosphere.
            These emissions contribute to air pollution and can negatively
            affect air quality, leading to respiratory problems in nearby
            communities.
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-light flex justify-center mt-3 "
            >
            Energy Consumption: The production and disposal of electronic
            devices require significant energy resources. When e-waste is not
            properly managed, it represents a loss of the energy invested in
            manufacturing those products.
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-light flex justify-center mt-3 "
            >
            Landfill Space: E-waste takes up valuable space in landfills, which
            are already facing capacity issues in many regions. Landfills can
            pose their own environmental challenges, such as methane gas
            emissions and soil contamination.
          </motion.li>
        </ul>
      </div>
      <div className="inline-block mt-20">
        <img src={ewaste3} alt="" />
      </div>
          </div>
      <div className=" flex justify-center m- rounded-full  mb-10 text-white text-2xl">
        <Link to={"https://teachablemachine.withgoogle.com/models/5TWHcOboV/"}>
        <motion.button
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          className=" bg-blue-400 rounded-full p-5"
          >
          Know Harmful Effect of your E-waste
        </motion.button>
              </Link>
        </div>
            </>
  );
}

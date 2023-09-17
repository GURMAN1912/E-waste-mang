import React from "react";
// import { useContext } from 'react'
import { motion } from "framer-motion";
import { UserContext } from "../UserContext";
import ewaste4 from "../assests/e-waste-4.png";
import { Navigate } from "react-router-dom";
import { useHref } from "react-router-dom";
import { Link } from "react-router-dom";



export default function EwasteMang() {
  const {user}=React.useContext(UserContext)  


  return (
    <div className="flex flex-col gap-3 mt-5">
      <div className="flex justify-center bg-green-200 rounded-full">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transitionDelay: 2 }}
          viewport={{ once: true }}
          src={ewaste4}
          alt=""
        />
      </div>
      <div>
        <div className="flex flex-col p-5 justify-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transitionDelay: 2 }}
            viewport={{ once: true }}
            className="text-7xl mb-5 flex justify-center"
          >
            E-waste Management
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-light flex justify-center mt-3 "
          >
            Effective e-waste management is crucial for mitigating the
            environmental and health impacts associated with electronic waste.
            Proper e-waste management involves a series of practices aimed at
            reducing, reusing, recycling, and safely disposing of electronic
            devices and components. Here's an overview of key aspects of e-waste
            management
          </motion.p>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-light justify-center mt-3 "
            >
              <strong>Collection and Segregation:</strong>
              Establish collection points or centers where consumers and
              businesses can drop off their old electronic devices. Segregate
              e-waste based on type and condition to facilitate proper recycling
              and disposal.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-light  justify-center mt-3 "
            >
              <strong>Recycling:</strong>
              E-waste recycling involves the recovery of valuable materials,
              including metals like gold, silver, and copper, as well as
              plastics. Recycling prevents the unnecessary extraction of finite
              resources and reduces the environmental impact of mining.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-light  justify-center mt-3 "
            >
              <strong>Responsible Disposal:</strong>
              Safely dispose of electronic devices that are beyond repair or
              recycling in designated disposal facilities. Avoid sending e-waste
              to landfills or incinerators where hazardous materials can leach
              into the environment
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true }}
              className="text-2xl font-light  justify-center mt-3 "
            >
              <strong>Promote Consumer Awareness:</strong>
              Educate consumers and businesses about the importance of
              responsible e-waste management. Encourage responsible purchasing
              decisions, including selecting products with longer lifespans and
              ease of recycling.
            </motion.li>
          </ul>
        </div>
      </div>
      <div className=" flex justify-center m- rounded-full  text-white text-2xl">
        <Link to={user?"/dispose":"/login"}>
        <motion.button 
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          className=" bg-blue-400 rounded-full p-5"
          >
          Dispose your E-waste
        </motion.button>
          </Link>
      </div>
    </div>
  );
}

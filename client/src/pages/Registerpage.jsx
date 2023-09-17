import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios"
import image from "../assests/login.webp";

export default function Registerpage() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [redirect,setRedirect]=React.useState(false)
  const [password, SetPassword] = useState("");
  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      alert("Registration successful.Now u can login");
      setRedirect(true)
    } catch (e) {
      alert("Registration failed ...please try again later");
    }
  }
  return (
    <div className="bg-green-200 min-h-screen pt-32">
      <div className="flex flex-row  justify-center pr-32">
        <img className=" w-5/12" src={image} alt="" />
        
        
          <form className="flex flex-col justify-center w-1/3" onSubmit={registerUser}>
          <h1 className="text-4xl mb-4">Register</h1>
          <input
              className="p-2 rounded-lg mt-4"
              type="name"
              placeholder="your name"
              value={name}
              onChange={(ev) => SetName(ev.target.value)}
            />
            <input
              className="p-2 rounded-lg mt-4"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(ev)=>SetEmail(ev.target.value)}
            />
            <input
              className="p-2 rounded-lg mt-4"
              type="password"
              placeholder="password"
              value={password}
              onChange={(ev)=>SetPassword(ev.target.value)}

            />
            <div className="mt-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-500 text-white p-2 rounded-xl"
              >
                Register
              </motion.button>
            </div>
            <div className=" py-2 text-gray-500 ">
              Already register?
              <Link className="underline text-red-500" to={"/login"}>
                Login here
              </Link>
            </div>
          </form>
          {redirect && <Navigate to={'/login'} />}
        </div>
      </div>
  );
}

import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import image from "../assests/login.webp";

export default function Loginpage() {
  const [email, SetEmail] = React.useState("");
  const [redirect,setRedirect]=React.useState(false)
  const [password, SetPassword] = React.useState("");
  const {setUser}=React.useContext(UserContext)  
  async function handleLoginSubmit(ev)
  {
    ev.preventDefault()
    try{
      const {data}=await axios.post("/login",{email,password});
      setUser(data)
      alert("login successful")
      setRedirect(true)
    }
    catch(e){
      alert('login failed')
    }

    if(redirect){
      return <Navigate to={'/'}/>
    }

  }
  return (
    <div className="bg-green-200 min-h-screen pt-32">
      <div className="flex flex-row  justify-center pr-32">
        <img className=" w-5/12" src={image} alt="" />
        
          <form className="flex flex-col justify-center w-1/3" onSubmit={handleLoginSubmit}>
          <h1 className="text-4xl mb-4">Login</h1>
            <input
              className="p-2 rounded-lg mt-4"
              type="email"
              placeholder="your@email.com"
              value={email}
            onChange={(ev) => SetEmail(ev.target.value)}
            />
            <input
              className="p-2 rounded-lg mt-4"
              type="password"
              placeholder="password"
              value={password}
            onChange={(ev) => SetPassword(ev.target.value)}
            />
            <div className="mt-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-500 text-white p-2 rounded-xl"
              >
                Login
              </motion.button>
            </div>
            <div className=" py-2 text-gray-500 ">
              Don't have an account yet?
              <Link className="underline text-red-500" to={"/register"}>
                Register now
              </Link>
            </div>
          </form>
          {redirect && <Navigate to={'/'} />}
        </div>
      </div>
  );
}

import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

export default function Accountpage() {
  const { ready, user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = React.useState(null);
//   let { subpage } = useParams();
//   if (subpage === undefined) {
//     subpage = "profile";
//   }

  async function logout() {
    await axios.post("/logout");
    setUser(null);
    setRedirect("/");
  }

  if (!ready) {
    return "loading...";
  }

  if (!user && ready && !redirect) {
    <Navigate to={"/login"} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

//   function linkClasses(type = null) {
//     let classes = "inline-flex gap-1 py-2 px-6 rounded-full";
//     if (type == subpage || (subpage === undefined && type === "profile")) {
//       classes += " bg-primary text-white rounded-full ";
//     } else {
//       classes += " bg-gray-200";
//     }
//     return classes;
//   }

  return (
    <div className=" bg-gray-200 min-h-screen">
      <nav className="w-full flex justify-center text-m pt-8 mb-12">
        <Link className="bg-yellow-500 text-2xl rounded-full p-4" to={"/account"}>
          My Profile
        </Link>
      </nav>
      <div className="text-center max-w-lg mx-auto text-lg bg-gray-100 p-10 rounded-lg">
          Logged in as {user.name}({user.email})<br />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-red-500 text-white p-2 rounded-lg max-w-xs mt-8 "
            onClick={logout}
          >
            Logout
          </motion.button>
        </div>
      
    </div>
  );
}

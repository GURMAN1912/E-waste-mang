import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/logo.jpg";
import coin from "../assests/coin.png";
import { useContext } from 'react'
import { UserContext } from '../UserContext.jsx'


export default function Header() {
  const {user}=useContext(UserContext)
  return (
    <div>
      <header className=" flex justify-between   p-3 bg-green-400">
        <div className="flex justify-between gap-6 pl-5">
          <Link className="flex gap-2 items-center " to={"/"}>
            <img className="w-12 h-12 rounded-full" src={logo} alt="" />
            <h1 className="text-2xl  font-semibold">E-waste</h1>
          </Link>
          <Link to={"/"} className="content-center">
            <h1 className="text-xl pt-3 font-semibold">Home</h1>
          </Link>
          <Link to={"/"}>
            <h1 className="text-xl  pt-3 font-semibold">Nearest Center</h1>
          </Link>{" "}
          <Link to={user?"/login":"/dispose"}>
            <h1 className="text-xl pt-3 font-semibold">Dispose</h1>
          </Link>
          <Link to={"/"}>
            <h1 className="text-xl pt-3 font-semibold">About us</h1>
          </Link>
        </div>
        <div className="flex gap-6 pr-10">
          <Link className="flex items-center rounded-full border-2 border-black pl-2 pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clip-rule="evenodd"
              />
            </svg>
            <div className="text-lg font-semibold">10</div>
            <img className="w-5 h-5" src={coin} alt="" />
          </Link>
          <Link to={user?'/account':'/register'}>
            <div className=" flex justify-center  border-2 rounded-full border-black ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
            {!!user &&(
              <div className="mt-2">
          {user.name}
        </div>
      )}
      </div>
          </Link>
        </div>
      </header>
    </div>
  );
}

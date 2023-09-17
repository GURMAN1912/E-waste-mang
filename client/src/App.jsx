import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage.jsx";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import { UserContextProvider } from "./UserContext";
import axios from "axios";
import Loginpage from "./pages/Loginpage.jsx";
import Registerpage from "./pages/Registerpage.jsx";
import Accountpage from "./pages/Accountpage";
import Details from "./container/Details";
import Disposepage from "./pages/Disposepage";
import Nearestcenterpage from "./pages/Nearestcenterpage";
axios.defaults.baseURL = "http://127.0.0.1:4000";
axios.defaults.withCredentials = true;

export default function App() {
  return (
    <div className="p=0 m-0">
      <UserContextProvider>
        <Layout></Layout>
        <Routes>
          {/* <Route path="/" element={<Layout/>}> */}
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/account" element={<Accountpage />} />
          <Route path="/dispose" element={<Disposepage />} />
          <Route path="/details" element={<Details />} />
          <Route path="/nearestcenter" element={<Nearestcenterpage/>}/>
        </Routes>
        <Footer></Footer>
      </UserContextProvider>
    </div>
  );
}

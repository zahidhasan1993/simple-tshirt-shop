import React from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Toaster />
    </div>
  );
};

export default Main;

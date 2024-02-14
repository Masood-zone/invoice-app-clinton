import React from "react";
import mainLogo from "../assets/svg/mouth.svg";
import prof from "../assets/svg/avatar.svg";

export default function Navbar() {
  return (
    <div className="w-20 flex flex-col bg-[#1F213A] h-screen flex-none rounded-tr-2xl overflow-hidden">
      {/* Top section */}
      <div className="flex-1 rounded-2xl ">
        <img
          src={mainLogo}
          alt="navbar-logo"
          className="p-1 bg-[#8466F9] -rotate-90"
        />
      </div>
      {/* Bottom section */}
      <div className="border-t-2 border-t-gray-500 mb-4"></div>
      <div className=" bg-white w-14 mx-auto h-14 rounded-full flex items-center justify-center p-3">
        <img src={prof} alt="prof" className="w-full" />
      </div>
    </div>
  );
}

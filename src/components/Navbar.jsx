import React from "react";
import { BiAlignLeft } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <nav className="max-w-[1400px] h-[120px] mx-auto flex items-center justify-between bg-[#F6F6FF] px-[80px]">
        <h3 className="text-2xl font-extrabold">perfect.</h3>
        <ul className="md:flex hidden items-center justify-center gap-4">
          <li className="text-[#333] font-semibold text-[15px] pr-3 hover:underline hover:text-[#0029FF] cursor-pointer">
            Home
          </li>
          <li className="text-[#333] font-semibold text-[15px] pr-3 hover:underline hover:text-[#0029FF] cursor-pointer">
            About
          </li>
          <li className="text-[#333] font-semibold text-[15px] pr-3 hover:underline hover:text-[#0029FF] cursor-pointer">
            Blogs
          </li>
          <li className="font-semibold bg-gradient-to-r text-[15px] pr-3 bg-[#0029ff] text-white px-3 cursor-pointer py-2 shadow-lg rounded-full">
            Login
          </li>
          <li className="font-semibold bg-gradient-to-r text-[15px] pr-3 bg-[#0029ff] text-white px-3 cursor-pointer py-2 shadow-lg rounded-full">
            Sign Up
          </li>
        </ul>
        <BiAlignLeft size={30} className="md:hidden block cursor-pointer" />
      </nav>
    </>
  );
};

export default Navbar;

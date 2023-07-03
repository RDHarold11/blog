import React, { useState } from "react";
import { BiAlignLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { Fade } from "react-awesome-reveal";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };
  return (
    <>
      <Fade>
        <nav className="max-w-[1400px] h-[120px] mx-auto flex items-center justify-between bg-[#F6F6FF] px-[80px]">
          <Link to="/">
            <h3 className="text-2xl font-extrabold">perfect.</h3>
          </Link>
          <ul className="md:flex hidden items-center justify-center gap-4">
            {user ? (
              <>
                <Link
                  to="/"
                  className="text-[#333] font-semibold text-[15px] pr-3 hover:underline hover:text-[#0029FF] cursor-pointer"
                >
                  Home
                </Link>
                <Link
                  to="/write"
                  className="text-[#333] font-semibold text-[15px] pr-3 hover:underline hover:text-[#0029FF] cursor-pointer"
                >
                  Write
                </Link>
                <Link
                  to="/myBlogs"
                  className="text-[#333] font-semibold text-[15px] pr-3 hover:underline hover:text-[#0029FF] cursor-pointer"
                >
                  My Blogs
                </Link>
                <Link
                  onClick={onLogout}
                  to="/"
                  className="font-semibold bg-gradient-to-r text-[15px] pr-3 bg-[#0029ff] text-white px-3 cursor-pointer py-2 shadow-lg rounded-full"
                >
                  Logout
                </Link>
                <div className="bg-[#FF9B9B] text-white px-3 py-2 rounded capitalize">
                  {user.name}
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="font-semibold bg-gradient-to-r text-[15px] pr-3 bg-[#0029ff] text-white px-3 cursor-pointer py-2 shadow-lg rounded-full"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="font-semibold bg-gradient-to-r text-[15px] pr-3 bg-[#0029ff] text-white px-3 cursor-pointer py-2 shadow-lg rounded-full"
                >
                  Sign Up
                </Link>
              </>
            )}
          </ul>
          <BiAlignLeft
            size={30}
            className="md:hidden block cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </nav>
        {/* Response navbar */}
        <nav
          className={
            toggle
              ? "fixed z-10 h-screen lg:w-[20%] w-[50%] top-0 left-0 flex flex-col bg-[#333] text-white "
              : "hidden"
          }
        >
          <h3 className="text-2xl font-extrabold p-8">perfect.</h3>
          <ul className="flex flex-col items-start p-8 justify-center gap-4">
            {user ? (
              <>
                <Link
                  to="/"
                  className="text-[#fff] border-b w-full pb-4 font-semibold text-[15px] pr-3 hover:underline hover:text-[#0029FF] cursor-pointer"
                >
                  Home
                </Link>
                <Link className="text-[#fff] border-b w-full pb-4 font-semibold text-[15px] pr-3 hover:underline hover:text-[#0029FF] cursor-pointer">
                  Write
                </Link>
                <Link className="text-[#fff] border-b w-full pb-4 ont-semibold text-[15px] pr-3 hover:underline hover:text-[#0029FF] cursor-pointer">
                  My Blogs
                </Link>
                <Link
                  to="/"
                  className="font-semibold bg-gradient-to-r text-[15px] pr-3 bg-[#0029ff] text-white px-3 cursor-pointer py-2 shadow-lg rounded-full"
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="font-semibold bg-gradient-to-r text-[15px] pr-3 bg-[#0029ff] text-white px-3 cursor-pointer py-2 shadow-lg rounded-full"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="font-semibold bg-gradient-to-r text-[15px] pr-3 bg-[#0029ff] text-white px-3 cursor-pointer py-2 shadow-lg rounded-full"
                >
                  Sign Up
                </Link>
              </>
            )}
          </ul>
        </nav>
      </Fade>
    </>
  );
};

export default Navbar;

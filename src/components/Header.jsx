import React from "react";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  return (
    <Fade>
      <div className="pt-10 max-w-[1400px] px-[80px] mx-auto bg-[#F6F6FF] h-[920px] lg:h-[480px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center justify-between mb-10">
          <div className="col-span-2">
            <h4>
              Home
              <span className="text-[#0029FF] font-semibold ml-3">
                Blog and News
              </span>
            </h4>
            <h2 className="font-bold text-2xl md:text-5xl my-5">
              Expanding Our Knowledge & Yours. One Blog at a Time.
            </h2>
            <p className="my-2 text-gray-900">
              All the latest news and of our creative team.
            </p>
          </div>
          <div className="max-w-[330px]">
            <img
              className="rounded-full"
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
        <div className="bg-[#fff] lg:rounded-full my-6 shadow-lg ">
          <div className="flex items-center lg:flex-row flex-col justify-between px-10 py-4">
            <ul className="flex items-center lg:flex-row flex-col justify-between gap-9">
              <li className="cursor-pointer hover:underline">All</li>
              <li className="cursor-pointer hover:underline">Development</li>
              <li className="cursor-pointer hover:underline">
                Digital Marketing
              </li>
              <li className="cursor-pointer hover:underline">
                Cloud and DevOps
              </li>
              <li className="cursor-pointer hover:underline">Technologies</li>
              <li className="cursor-pointer hover:underline">Business</li>
            </ul>

            <form className="py-4 md:p-0">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block shadow-md w-full py-2 px-5 pl-10 text-sm text-gray-900 border rounded-full bg-[#F6F6FF] focus:ring-blue-500 dark:placeholder-gray-400 dark:text-[#333"
                  placeholder="Search..."
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Header;

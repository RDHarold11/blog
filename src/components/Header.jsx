import React from "react";
import { Fade } from "react-awesome-reveal";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <Fade>
      <div className="pt-10 max-w-[1400px] px-[80px] mx-auto bg-[#F6F6FF] h-[1100px] lg:h-[600px]">
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
        <SearchBar></SearchBar>
      </div>
    </Fade>
  );
};

export default Header;

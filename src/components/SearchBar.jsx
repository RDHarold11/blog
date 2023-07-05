import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ArticlesFound from "./ArticlesFound";

const SearchBar = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      if (title) {
        const res = await axios.get(
          `http://localhost:5500/api/articles/getArticles/?title=${title}`
        );
        setData(res.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, [title]);
  const image = "http://localhost:5500/images/";
  return (
    <>
      <div className="bg-[#fff] lg:rounded-full shadow-2xl max-w-[1200px] mx-auto relative">
        <div className="flex items-center lg:flex-row flex-col justify-between px-10 py-4">
          <ul className="flex items-center lg:flex-row flex-col justify-between gap-9">
            <li
              className="cursor-pointer hover:underline"
              onChange={(e) => setCategory("")}
            >
              All
            </li>
            <li
              className="cursor-pointer hover:underline"
              onChange={(e) => setCategory("Development")}
            >
              Development
            </li>
            <li className="cursor-pointer hover:underline">
              Digital Marketing
            </li>
            <li className="cursor-pointer hover:underline">Cloud and DevOps</li>
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
                value={title}
                className="block shadow-md w-full py-2 px-5 pl-10 text-sm text-gray-900 border rounded-full bg-[#F6F6FF] focus:ring-blue-500 dark:placeholder-gray-400 dark:text-[#333"
                placeholder="Search..."
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="absolute md:top-[100px] md:right-[100px] flex items-center gap-5">
          {data?.map((item, index) => (
            <ArticlesFound key={index} {...item}></ArticlesFound>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchBar;

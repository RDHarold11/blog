import { useEffect, useState } from "react";
import axios from "axios";
import ArticlesFound from "./ArticlesFound";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://blog-api-i1y5.onrender.com/api/articles/getArticles/`
      );
      setData(res.data);
    } catch (error) {
      console.log(error)
    }
  }
  /* De esta manera filtro sin la necesidad de la api */
  const filteredUsers = title != null && title.length > 0 ? data.filter((item) => {
    return item.title.toLowerCase().includes(title.toLowerCase())
  }) : data

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="bg-[#fff] lg:rounded-full shadow-2xl max-w-[1200px] mx-auto relative">
        <div className="flex items-center lg:flex-row flex-col justify-between px-10 py-4">
          <ul className="flex items-center lg:flex-row flex-col justify-between gap-9">
            <Link className="hover:underline" to="category/All">
              All
            </Link>
            <Link className="hover:underline" to="category/Development">
              Development
            </Link>
            <Link className="hover:underline" to="category/Digital Marketing">
              Digital Marketing
            </Link>
            <Link className="hover:underline" to="category/Cloud and Devops">
              Cloud and Devops
            </Link>
            <Link className="hover:underline" to="category/Technologies">
              Technologies
            </Link>
            <Link className="hover:underline" to="category/Business">
              Business
            </Link>
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
                placeholder="Search by title..."
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="absolute lg:top-[100px] lg:right-[100px] flex items-center gap-5">
          {title.length > 0 &&
            filteredUsers?.map((item, index) => (
              <ArticlesFound key={index} {...item}></ArticlesFound>
            ))}
        </div>
      </div>
    </>
  );
};

export default SearchBar;

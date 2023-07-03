import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { Fade } from "react-awesome-reveal";

const RecenPost = () => {
  const [recentPost, setRecentPost] = useState([]);

  const { isLoading } = useSelector((state) => state.articles);

  const getLastPost = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5500/api/articles/lastArticle"
      );
      setRecentPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLastPost();
  }, []);
  return (
    <Fade>
      <div
        className={
          isLoading
            ? "animate-pulse"
            : " pt-[100px] md:pt-[40px] max-w-[1400px] mx-auto px-[80px]  pb-[100px] bg-[#F6F6FF]"
        }
      >
        <h2 className="text-gray-900 font-semibold mb-3 text-[20px] line">
          Recent Post:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="max-w-[100%] ">
            <img
              className="rounded-sm w-[100%]"
              src="https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div>
            <div className="">
              <div className="flex gap-6">
                <span>01.</span>
                <p className="text-[#0029FF]">Development</p>
                <span>2hr ago</span>
              </div>
              <h2 className="font-bold text-[25px] md:text-[30px] my-3 max-w-[440px] line-h ">
                Important Features to look for in Web Development Services
              </h2>
              <Link to="blog/2">
                <button className="bg-[#0029FF] text-[#fff] px-5 py-3 rounded-full text-[14px] shadow-lg flex items-center gap-2">
                  Read more <AiOutlineArrowRight size={20} />
                </button>
              </Link>
              <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-200 my-5">
                <div
                  className="bg-blue-600 h-1 rounded-full"
                  style={{ width: "35%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex flex-col lg:flex-row  gap-6 mt-7">
                <div className="md:max-w-[140px]">
                  <img
                    src="https://images.unsplash.com/photo-1548484352-ea579e5233a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="rounded"
                  />
                </div>
                <div>
                  <div className="mb-1">
                    <h2>
                      <span className="text-[#0029FF] mr-2">
                        02. Digital Marketing
                      </span>{" "}
                      2 day ago
                    </h2>
                  </div>
                  <Link to="blog/2">
                    <p className="text-[20px] font-bold hover:underline">
                      <span>Digital Marketing </span> in India: What to Expect
                      in 2023?
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default RecenPost;

import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { Fade } from "react-awesome-reveal";

import Loading from "./Loading";

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

  if(isLoading){
    return <Loading/>
  }

  const image = "http://localhost:5500/images/";
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
              className="rounded-sm w-[100%] md:h-[360px]"
              src={image + recentPost[0]?.picture}
              alt=""
            />
          </div>
          <div>
            <div className="">
              <div className="flex gap-6">
                <span>01.</span>
                <p className="text-[#0029FF]">{recentPost[0]?.category}</p>
                <span>{new Date(recentPost[0]?.createdAt).toLocaleString()}</span>
              </div>
              <h2 className="font-bold text-[25px] md:text-[30px] my-3 max-w-[440px] line-h ">
                {recentPost[0]?.title}
              </h2>
              <p className="my-3 pl-1">{recentPost[0]?.description.slice(0, 20)}</p>
              <Link to={`blog/${recentPost[0]?._id}`}>
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
                    src={image + recentPost[1]?.picture}
                    alt=""
                    className="rounded"
                  />
                </div>
                <div>
                  <div className="mb-1">
                    <h2>
                      <span className="text-[#0029FF] mr-2">
                        02. {recentPost[1]?.category1}
                      </span>{" "}
                      {new Date(recentPost[1]?.createdAt).toLocaleString()}
                    </h2>
                  </div>
                  <Link to={`blog/${recentPost[1]?._id}`}>
                    <h2 className="text-[20px] font-bold hover:underline">
                      {recentPost[1]?.title}
                    </h2>
                  </Link>
                  <p>{recentPost[1]?.description.slice(0, 30)}</p>
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

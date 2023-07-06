import React, { useEffect, useLayoutEffect, useState } from "react";
import Article from "./Article";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("");
  const categories = ["All", ...new Set(articles.map((item) => item.category))];

  const fetchArticles = async () => {
    try {
      if (category === "All") {
        const res = await axios.get(
          `http://localhost:5500/api/articles/getArticles/`
        );
        setArticles(res.data);
      } else {
        const res = await axios.get(
          `http://localhost:5500/api/articles/getArticles/?category=${category}`
        );
        setArticles(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, [category]);

  return (
    <>
      <section className="max-w-[1400px] h-[700px] px-[80px] mx-auto bg-[#F6F6FF]">
        <div className="flex items-center flex-wrap justify-between pb-5">
          <h2 className="text-[18px] mb-3 font-semibold">
            Must Read Articles:{" "}
          </h2>
          <div>
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an option
            </label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option defaultValue value=""></option>
              {categories?.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="">
          <Swiper
            slidesPerView={4}
            spaceBetween={25}
            breakpoints={{
              360: {
                spaceBetween: 10,
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 4,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="myswiper"
          >
            {articles.length > 0 &&
              articles?.map((article) => (
                <SwiperSlide key={article._id}>
                  <Article {...article}></Article>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Articles;

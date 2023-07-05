import React, { useEffect, useLayoutEffect, useState } from "react";
import Article from "./Article";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5500/api/articles/getArticles/`
      );
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <section className="max-w-[1400px] h-[700px] px-[80px] mx-auto bg-[#F6F6FF]">
        <h2 className="text-[18px] mb-3 font-semibold">Must Read Articles: </h2>
        <div className="">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
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
                <SwiperSlide>
                  <Article key={article._id} {...article}></Article>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Articles;

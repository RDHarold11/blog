import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const SingleBlog = () => {
  const [singleBlog, setSingleBlog] = useState({});

  const { id } = useParams();
  const fetchBlog = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5500/api/articles/articleId/${id}`
      );
      setSingleBlog(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const { category, createdAt, picture, title, userName, _id, description } =
    singleBlog;
  const image = "http://localhost:5500/images/";
  useEffect(() => {
    fetchBlog();
  }, [id]);

  return (
    <Fade>
      <div className=" mx-auto flex items-center justify-center py-10">
        <div className="max-w-[1500px] mx-auto gap-10 px-4">
          <div className="md:flex-[35%]">
            <img
              src={image + picture}
              alt="article img"
              className="rounded w-[100%] mx-auto md:w-[980px] md:h-[450px]"
            />
          </div>
          <div className="md:flex-[80%] px-5 pt-5">
            <h5 className="text-[#0029FF] mt-2 font-semibold text-center">
              {category}
            </h5>
            <h3 className="text-[28px] font-bold mt-2 text-center">{title}</h3>
            <p className="my-3 mb-5 text-[15px]">{description}</p>
            <footer className="border-t flex gap-2 items-center justify-start py-2">
              <BsCalendar2Date />
              <p>{new Date(createdAt).toLocaleString()}</p>
            </footer>
            <p className="capitalize text-[#0029ff]">Autor: {userName}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default SingleBlog;

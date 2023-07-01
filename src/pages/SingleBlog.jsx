import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { useParams } from "react-router-dom";


const SingleBlog = () => {
  const [singleBlog, setSingleBlog] = useState({})

  const {id} = useParams()
  const fetchBlog = async () => {
    try {
      const res = await axios.get(`http://localhost:5500/api/articles/articleId/${id}`)
      setSingleBlog(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  const {category, createdAt, picture, title, userName, _id, description} = singleBlog
  const image = "http://localhost:5500/images/"
  useEffect(() => {
    fetchBlog()
  }, [id])

  return (
    <div className="max-w-[1400px] mx-auto flex items-center justify-center py-10">
      <div className="max-w-[1100px] md:flex items-start justify-between gap-10 px-4">
        <div className="md:flex-[35%]">
          <img
            src={image + picture}
            alt="article img"
            className="rounded w-[100%] mx-auto md:w-[600px]"
          />
        </div>
        <div className="md:flex-[80%]">
          <h5 className="text-[#0029FF] mt-2">{category}</h5>
          <h3 className="text-xl font-bold mt-2">
            {title}
          </h3>
          <p className="my-3">
            {description}
          </p>
          <footer className="border-t flex gap-2 items-center justify-start py-2">
            <BsCalendar2Date />
            <p>{createdAt}</p>
          </footer>
          <p>{userName}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;

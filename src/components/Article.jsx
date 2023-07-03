import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Article = ({
  createdAt,
  category,
  description,
  picture,
  title,
  userName,
  _id,
}) => {
  const image = "http://localhost:5500/images/";
  return (
    <Fade cascade>
      <div className="max-w-[330px] shadow-2xl mb-3 rounded">
        <div>
          <img
            src={picture && image + picture}
            alt="article img"
            className=" max-w-[100%]"
          />
        </div>
        <div className="px-3 py-3">
          <Link to="category/marketing">
            <h5 className="text-[#0029FF] mt-2 hover:underline">{category}</h5>
          </Link>
          <h3 className="text-xl font-bold mt-2 hover:underline cursor-pointer">
            <Link to={`blog/${_id}`} className="capitalize">
              {title}
            </Link>
          </h3>
          <p className="my-3 capitalize">
            {description.slice(0, 50)}
            <Link className="ml-2" to={`blog/${_id}`}>
              <span className="text-[#0029FF] text-[15px] hover:underline">
                Read More
              </span>
            </Link>
          </p>
        </div>
        <footer className="border-t flex gap-2 flex-col py-2 px-3">
          <div className="flex gap-2 items-center">
            <BsCalendar2Date />
            <p>{new Date(createdAt).toLocaleString()}</p>
          </div>
          <Link to={`userPost/${userName}`}>
            <p className="capitalize hover:underline">Autor: {userName}</p>
          </Link>
        </footer>
      </div>
    </Fade>
  );
};

export default Article;

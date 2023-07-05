import React from "react";
import { Link } from "react-router-dom";

const ArticlesFound = ({ picture, _id, title }) => {
  const image = "http://localhost:5500/images/";
  return (
    <>
      <article className="max-w-[100px] h-[200px]">
        <div>
          <div>
            <img src={image + picture} alt={picture} className="rounded" />
          </div>
          <Link to={`blog/${_id}`} className="hover:underline">
            <p>{title}</p>
          </Link>
        </div>
      </article>
    </>
  );
};

export default ArticlesFound;

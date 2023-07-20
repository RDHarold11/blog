import React from "react";
import { Link } from "react-router-dom";

import { Fade } from "react-awesome-reveal";

const ArticlesFound = ({ picture, _id, title }) => {
  const image = "https://blog-api-i1y5.onrender.com/images/";
  return (
    <>
      <Fade>
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
      </Fade>
    </>
  );
};

export default ArticlesFound;

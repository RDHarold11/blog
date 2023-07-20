import React, { useState } from "react";
import axios from "axios";
import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

import Article from "../components/Article";
import Loading from "../components/Loading";

const Posts = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchArticles = async () => {
    try {
      if (category == "All") {
        const res = await axios.get(
          `https://blog-api-i1y5.onrender.com/api/articles/getArticles/`
        );
        setLoading(false);
        setArticles(res.data);
      } else {
        const res = await axios.get(
          `https://blog-api-i1y5.onrender.com/api/articles/getArticles/?category=${category}`
        );
        setLoading(false);
        setArticles(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    fetchArticles();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="max-w-[1300px] mx-auto gap-5 flex flex-wrap items-start pt-10 px-4">
        {articles.length > 0 ? (
          articles?.map((item) => <Article key={item._id} {...item}></Article>)
        ) : (
          <h2>No hay blogs con la categoria {category}</h2>
        )}
      </div>
    </>
  );
};

export default Posts;

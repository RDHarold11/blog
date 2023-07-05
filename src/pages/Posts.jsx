import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import { useLayoutEffect } from "react";

const Posts = () => {
  const { search } = useLocation();
  const [articles, setArticles] = useState([]);
  const fetchArticles = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5500/api/articles/getArticles/?category=&title="
      );
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useLayoutEffect(() => {
    fetchArticles();
  }, []);
  return (
    <>
      <Header></Header>
    </>
  );
};

export default Posts;

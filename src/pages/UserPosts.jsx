import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Article from "../components/Article";

const UserPosts = () => {
  const [posts, SetPosts] = useState([]);
  const { name } = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5500/api/articles/user/${name}`
      );
      SetPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-[1300px] mx-auto py-10 px-5">
      <h2 className="font-semibold text-[19px] mb-5 capitalize">
        {name} blogs.
      </h2>
      <div className="flex flex-wrap gap-5 items-center md:justify-start justify-center">
        {posts.map((post) => (
          <Article key={post._id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default UserPosts;

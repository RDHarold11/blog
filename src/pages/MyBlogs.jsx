import React, { useEffect } from "react";
import Blogs from "./Blogs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getArticles, reset } from "../features/blog/articleSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const MyBlogs = () => {
  const { user } = useSelector((state) => state.auth);
  const { articles, isLoading, isError, message } = useSelector(
    (state) => state.articles
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      dispatch(getArticles());
    }
    if (!user) {
      navigate("/");
    }
    return () => {
      dispatch(reset());
    };
  }, [user, isError, message, dispatch]);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="pt-10 px-5">
        <div className="flex justify-between items-center px-5">
          <div>
            <p className="mb-2 font-semibold text-md">
              Hola,
              <span className="text-[#0029ff] ml-1 capitalize">
                {user?.name}.
              </span>{" "}
            </p>
            <h2 className="pb-5 font-semibold text-[17px]">
              Puedes editar y eliminar tus blogs.
            </h2>
          </div>
          <p className="font-bold text-[17px]">{articles.length} blogs.</p>
        </div>
        {articles.length > 0 ? (
          <Blogs articles={articles} />
        ) : (
          <h2>
            No tienes blogs{" "}
            <Link to="/write" className="underline">
              agrega uno
            </Link>
          </h2>
        )}
      </div>
    </div>
  );
};

export default MyBlogs;

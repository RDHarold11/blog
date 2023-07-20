import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiFillCloseCircle,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateArticle } from "../features/blog/articleSlice";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [toggleImage, setToggleImage] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { articles, isError } = useSelector((state) => state.articles);

  const onSubmit = (e) => {
    e.preventDefault();

    const newArticle = {
      title,
      description,
      category,
    };
    dispatch(updateArticle({id, newArticle}));
    navigate("/");
  };

  const handleToggle = () => {
    setToggleImage(!toggleImage);
  };

  useEffect(() => {
    const article = articles.find((item) => item._id == id);
    if (article) {
      setTitle(article.title);
      setCategory(article.category);
      setDescription(article.description);
      if (article.picture) {
        console.log(article.picture);
        setFile(article.picture);
      }
    }
  }, [id, articles]);

  return (
    <div className="max-w-[1200px] mx-auto">
      <h2>Te encuentras editando el articulo: {id}</h2>
      <>
        <div
          className={
            toggleImage
              ? "fixed h-[300px] max-w-[700px] mx-auto top-10 left-0 right-0 bottom-0 rounded"
              : "hidden"
          }
        >
          <div onClick={() => setToggleImage(false)}>
            <AiFillCloseCircle color="black" size={40} cursor="pointer" />
          </div>
          <div className=" mx-auto py-3 w-full">
            {file && toggleImage && (
              <img
                src={URL.createObjectURL(file)}
                alt="write img"
                className="h-[300px] rounded w-full"
              />
            )}
          </div>
        </div>
        <div className="max-w-[1300px] mx-auto h-screen">
          <div className="max-w-[600px] mx-auto  h-[550px] shadow-xl">
            <div className="md:w-full pt-5 pb-5 px-5">
              <form action="" onSubmit={onSubmit}>
                <div className="mb-5">
                  <label htmlFor="" className="block font-semibold">
                    Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="w-full border-b border-b-gray-500 bg-gray-50 px-2 py-2 "
                  />
                </div>
                <div className="mb-5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="block font-semibold">
                      Picture
                    </label>
                    <div onClick={handleToggle}>
                      {toggleImage ? (
                        <AiFillEye size={25} cursor="pointer" />
                      ) : (
                        <AiFillEyeInvisible size={25} cursor="pointer" />
                      )}
                    </div>
                  </div>
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    placeholder="Title"
                    className="w-full border-b border-b-gray-500 bg-gray-50 px-2 py-2 "
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="" className="block font-semibold">
                    Category
                  </label>
                  <select
                    className="w-full border-b py-2 px-1 border-b-gray-500"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                  >
                    <option value=""></option>
                    <option value="Development">Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Cloud and Devops">Cloud and Devops</option>
                    <option value="Technologies">Technologies</option>
                    <option value="Business">Business</option>
                  </select>
                </div>
                <div className="mb-5">
                  <label htmlFor="" className="block font-semibold">
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full border-b border-b-gray-500 px-3 h-[150px] py-3"
                    placeholder="Enter a description "
                  ></textarea>
                </div>
                <button className="bg-[#0029ff] text-gray-100 px-3 py-2 w-full text-[18px] rounded shadow-lg">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Edit;

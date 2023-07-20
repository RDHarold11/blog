import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

import Loading from "./Loading";
import axios from "axios";
import avatar from "../assets/avatar.svg";
import { Fade } from "react-awesome-reveal";

const Autores = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const autores = [...new Set(articles.map((item) => item.userName))];

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://blog-api-i1y5.onrender.com/api/articles/getArticles/"
      );
      setLoading(false);
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="pt-[100px] md:pt-[40px] max-w-[1400px] mx-auto px-[80px] pb-[100px] bg-[#F6F6F6]">
      <div className="mb-5">
        <h2 className="font-semibold text-[19px] antes mb-5">
          Nuestros autores:
        </h2>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-2 justify-center px-[20px] py-5">
        <div className="md:w-[480px] ">
          <img
            src="https://img.freepik.com/vector-gratis/hombre-lectura-concepto-ilustracion_114360-8515.jpg?w=740&t=st=1688848518~exp=1688849118~hmac=aa5b1118c6c20789259ae931ce4986370f499b27cea3e3bb115cad664a7b5c59"
            alt="autores svg"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-wrap gap-3 justify-start">
          {autores?.map((autor, index) => (
            <section key={index}>
              <Fade cascade>
                <div className="max-w-[180px] bg-[#fff] flex items-center justify-between gap-4 px-3 py-3 rounded shadow-lg hover:bg-[#11043a] hover:text-white">
                  <div>
                    <img
                      className="max-w-[80px] mx-auto"
                      src={avatar}
                      alt="autor img"
                    />
                  </div>
                  <Link to={`userPost/${autor}`}>
                    <h3 className="text-center font-bold mt-3 hover:underline first-letter:uppercase">
                      {autor}
                    </h3>
                  </Link>
                </div>
              </Fade>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Autores;

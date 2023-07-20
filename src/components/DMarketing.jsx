import { useLayoutEffect, useState } from "react";
import axios from "axios";

import Article from "./Article";

const DMarketing = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://blog-api-i1y5.onrender.com/api/articles/getArticles/?category=Digital Marketing"
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
  return (
    <>
      <section className="max-w-[1400px] p-[80px] mx-auto bg-[#f6f6ff]">
        <h2 className="font-bold text-[19px] capitalize antes mb-5">
          Articulos relacionados con Digital Marketing
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 items-center justify-center gap-3">
          {articles?.map((item) => (
            <Article key={item._id} {...item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default DMarketing;

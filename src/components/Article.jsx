import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

const Article = () => {
  return (
    <div className="max-w-[300px]">
      <div>
        <img
          src="https://img.freepik.com/vector-gratis/aguacate-lindo-ilustracion-icono-dibujos-animados-tabla-surf-icono-vacaciones-comida-aislado-estilo-dibujos-animados-plana_138676-3111.jpg?size=626&ext=jpg&ga=GA1.1.847048680.1686597033&semt=sph"
          alt="article img"
          className="rounded"
        />
      </div>
      <div>
        <h5 className="text-[#0029FF] mt-2">Digital Marketing</h5>
        <h3 className="text-xl font-bold mt-2 hover:underline cursor-pointer">
          Best Digital Marketing Strategies You should be Using
        </h3>
        <p className="my-3">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaning es...{" "}
          <span className="text-[#0029FF] text-[15px]">Read More</span>
        </p>
      </div>
      <footer className="border-t flex gap-2 items-center justify-start py-2">
        <BsCalendar2Date />
        <p>15-11-2003</p>
      </footer>
    </div>
  );
};

export default Article;

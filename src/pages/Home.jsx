import React from "react";
import Header from "../components/Header";
import RecenPost from "../components/RecenPost";
import Articles from "../components/Articles";
import Banner from "../components/Banner";
import Autores from "../components/Autores";
import DMarketing from "../components/DMarketing";

const Home = () => {
  return (
    <>
      <Header></Header>
      <RecenPost></RecenPost>
      <Articles></Articles>
      <DMarketing></DMarketing>
      <Banner></Banner>
      <Autores></Autores>
    </>
  );
};

export default Home;

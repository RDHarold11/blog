import React from "react";
import Header from "../components/Header";
import RecenPost from "../components/RecenPost";
import Articles from "../components/Articles";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Header></Header>
      <RecenPost></RecenPost>
      <Articles></Articles>
      <Banner></Banner>
    </>
  );
};

export default Home;

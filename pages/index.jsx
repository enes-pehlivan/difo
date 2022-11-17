import React from "react";
import Category from "../components/category/Category";
import Menu from "../components/Menu/Menu";
import Navbar from "../components/navbar/Navbar";
import Search from "../components/search/Search";

const index = () => {
  return (
    <div>
      <h2 className="text-4xl text-center font-extrabold">ENES</h2>
      <Navbar />
      <Category />
      <Menu />
      <Search />
    </div>
  );
};

export default index;

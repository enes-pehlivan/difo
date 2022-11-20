import React from "react";
import Category from "../components/category/Category";
import Menu from "../components/Menu/Menu";
import Navbar from "../components/navbar/Navbar";
import Search from "../components/search/Search";

export default function Index() {
  return (
    <div>
     
      <Navbar />
      <Category />
      <Menu />
      <Search />
    </div>
  );
};



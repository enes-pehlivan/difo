import React from "react";
import CashierLogin from "../components/auth/CashierLogin";
import Card from "../components/card/Card";
import Category from "../components/category/Category";
import Menu from "../components/Menu/Menu";
import Navbar from "../components/navbar/Navbar";

export default function Index() {
  return (
    <div>
      <Navbar />
      <Category />
      <Menu />
      <CashierLogin />
      <Card />
    </div>
  );
};



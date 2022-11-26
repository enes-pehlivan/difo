import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Table from "../../components/table/Table";

const index = () => {
  return (
    <div className="flex">
      <div>
        <Navbar />
      </div>
      <div className="bg-[#F9F8FB] w-full">
        <Table />
      </div>
    </div>
  );
};

export default index;

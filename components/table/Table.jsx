import React from "react";

const Table = () => {
  return (
    <div className="ml-5 mr-5">
      <div className="flex gap-x-10  w-[calc(100vh_-_1px)] mt-10 ">
        <button className="bg-primary text-white text-xl p-5 rounded-lg">
          Indoor
        </button>
        <button className="border-2 hover:bg-secondary hover:text-white text-xl p-5 rounded-lg">
          Garden
        </button>
      </div>
      <div className="grid grid-cols-4 mt-16 ml-5 gap-x-52 gap-y-14">
        <span className="flex justify-center bg-primary font-extrabold  text-white text-md px-20 py-10 rounded-lg ">
          Tisch 1
        </span>
        <span className="flex justify-center hover:bg-secondary hover:text-white font-extrabold  text-black text-md px-16 py-10 rounded-lg ">
          Tisch 2
        </span>
        <span className="flex justify-center bg-secondary font-extrabold  text-white text-md px-16 py-10 rounded-lg ">
          Tisch 3
        </span>
        <span className="flex justify-center bg-secondary font-extrabold  text-white text-md px-16 py-10 rounded-lg ">
          Tisch 4
        </span>
        <span className="flex justify-center bg-secondary font-extrabold  text-white text-md px-16 py-10 rounded-lg ">
          Tisch 5
        </span>
        <span className="flex justify-center bg-secondary font-extrabold  text-white text-md px-16 py-10 rounded-lg ">
          Tisch 6
        </span>
        <span className="flex justify-center bg-secondary font-extrabold  text-white text-md px-16 py-10 rounded-lg ">
          Tisch 7
        </span>
        <span className="flex justify-center bg-secondary font-extrabold  text-white text-md px-16 py-10 rounded-lg ">
          Tisch 8
        </span>
        <span className="flex justify-center bg-secondary font-extrabold  text-white text-md px-16 py-10 rounded-lg ">
          Tisch 9
        </span>
        <span className="flex justify-center bg-secondary font-extrabold  text-white text-md px-16 py-10 rounded-lg ">
          Tisch 10
        </span>
        <span className="flex justify-center bg-secondary text-white text-md px-16 py-10 rounded-lg ">
          Tisch 11
        </span>
      </div>
    </div>
  );
};

export default Table;

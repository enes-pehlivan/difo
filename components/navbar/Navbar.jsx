import React from "react";
import Image from "next/image";
import { FiSettings } from "react-icons/fi";
import { IoMdExit } from "react-icons/Io";
import { RiFilePaper2Line } from "react-icons/Ri";
import { GiKnifeFork } from "react-icons/Gi";
import { BiBookContent } from "react-icons/Bi";
import Link from "next/link";

const Navbar = () => {
  return (
    // Ana Çerçeve
    <div className="flex flex-col h-screen justify-between items-center shadow-xl">
      {/* Logo Kısmı */}

      <div className="mt-5 relative w-16 h-16 ">
        <Image
          className="rounded-full"
          src="/images/cashier.jpg"
          alt="Logo"
          fill
        />
      </div>

      {/* Menu-Kitchen-Orders Kısmı */}

      <div className=" flex flex-col gap-5  items-center justify-center ">
        <Link
          href="/table"
          className="hover:bg-primary hover:text-white flex flex-col p-3 items-center justify-center transition-all  rounded-lg "
        >
          <GiKnifeFork size={25} />
          <p>Table</p>
        </Link>

        <Link
          href="/menu"
          className="hover:bg-primary hover:text-white flex flex-col p-3 items-center justify-center transition-all cursor-pointer rounded-lg  "
        >
          <BiBookContent size={25} />
          <p>Menu </p>
        </Link>

        <div className="hover:bg-primary hover:text-white flex flex-col p-3 items-center justify-center transition-all  rounded-lg ">
          <GiKnifeFork size={25} />
          <p>Kitchen</p>
        </div>

        <div className="hover:bg-primary hover:text-white flex flex-col p-3 items-center justify-center transition-all  rounded-lg">
          <RiFilePaper2Line size={25} />
          <p>Orders</p>
        </div>
      </div>

      {/* Settings-Logout kısmı */}

      <div className="flex flex-col gap-y-4">
        <div className="hover:bg-primary hover:text-white flex flex-col p-3 items-center justify-center transition-all  rounded-lg ">
          <FiSettings size={25} />
          <p>Settings</p>
        </div>

        <div className="hover:bg-primary hover:text-white flex flex-col p-3 items-center justify-center transition-all  rounded-lg  ">
          <IoMdExit size={25} />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import Image from "next/image";
import { FiSettings } from "react-icons/fi";
import { IoMdExit } from "react-icons/Io";
import { RiFilePaper2Line } from "react-icons/Ri";
import { GiKnifeFork } from "react-icons/Gi";
import { BiBookContent } from "react-icons/Bi";

const Navbar = () => {
  return (

    // Ana Çerçeve 
    <div className="flex flex-col w-[90px] h-screen  ml-2 ">

      {/* Logo Kısmı */}

      <div className="mt-5 relative w-32 h-32 ">

        <Image className="rounded-full" src="  " alt="işletme logo" fill />
                       
      </div>

      {/* Menu-Kitchen-Orders Kısmı */}

      <div className=" flex flex-col gap-5 place-content-center  mt-56 ">

        <div className="hover:bg-secondary p-2  transition-all  rounded-lg  ">
          <a href="#">
            <BiBookContent size={40} />
            <p>Menu </p>
          </a>         
        </div>

        <div className="hover:bg-secondary p-2 transition-all  rounded-lg ">
          <a href="#">
            <GiKnifeFork size={40} />
            <p>Kitchen</p>
          </a>         
        </div>

        <div className="hover:bg-secondary  p-4 transition-all  rounded-lg">          
          <a href="#">
            <RiFilePaper2Line   size={40} 
            />
            <p>Orders</p>
          </a>          
        </div>

      </div>

      {/* Settings-Logout kısmı */}

      <div className="mt-44 ">
        <div className="hover:bg-secondary p-2 transition-all  rounded-lg ">
          <a href="#">
            <FiSettings  size={40} />
            <p>Settings</p>          
          </a>        
        </div>

        <div className="hover:bg-secondary p-2 transition-all  rounded-lg  ">
          <a href="#">
            <IoMdExit size={40} />
            <p>Logout</p>
          </a>    
        </div>

      </div>
    </div>
  );
};

export default Navbar;

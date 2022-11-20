import Image from "next/image";
import React from "react";
import { GrNotification } from "react-icons/gr";

const CashierLogin = () => {
  return (
    <div className="flex gap-x-5 justify-center items-center mt-2 mb-5 border-2 border-double p-2 ">
      <div className="relative w-16 h-16">
        <Image
          src="/images/cashier.jpg"
          alt="Cashier"
          fill
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <span className="font-thin">I am Cashier</span>
        <span className="font-bold">Anna Müller</span>
      </div>
      <div className="flex items-center cursor-pointer">
        <GrNotification size={25} />
        <span className="relative -top-4 right-3 text-white bg-primary rounded-full w-5 h-5 flex items-center justify-center">
          2
        </span>
      </div>
    </div>
  );
};

export default CashierLogin;

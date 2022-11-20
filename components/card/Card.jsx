import Image from "next/image";
import React from "react";
import PaymentMethod from "./PaymentMethod";
import TotalAmount from "./TotalAmount";

const Card = () => {
  return (
    <div className="w-80 h-screen gap-y-5 flex flex-col">
      <span className="font-bold text-xl">CARD</span>
      <div className="flex flex-col gap-y-3 overflow-y-auto h-72 p-2">
        <div className="flex gap-x-3 justify-between">
          {/* Image */}
          <div className="relative w-24 h-24 ">
            <Image
              src="/images/caramel-latte.jpg"
              alt=""
              fill
              className="rounded-lg"
            />
          </div>
          {/* Name and How Many and Notes */}
          <div className="flex flex-col gap-3">
            <span className="text-lg font-extrabold">Caramel Latte</span>
            <div className="flex items-center justify-between">
              <span>x1</span>
              <span className="bg-secondary p-1 rounded-md">Notes</span>
            </div>
          </div>
          {/* Amount */}
          <div className="">
            <span className="text-2xl font-light">17 $</span>
          </div>
        </div>
        <div className="flex gap-x-3 justify-between">
          {/* Image */}
          <div className="relative w-24 h-24 ">
            <Image
              src="/images/caramel-latte.jpg"
              alt=""
              fill
              className="rounded-lg"
            />
          </div>
          {/* Name and How Many and Notes */}
          <div className="flex flex-col gap-3">
            <span className="text-lg font-extrabold">Caramel Latte</span>
            <div className="flex items-center justify-between">
              <span>x1</span>
              <span className="bg-secondary p-1 rounded-md">Notes</span>
            </div>
          </div>
          {/* Amount */}
          <div className="">
            <span className="text-2xl font-light">17 $</span>
          </div>
        </div>
        <div className="flex gap-x-3 justify-between">
          {/* Image */}
          <div className="relative w-24 h-24 ">
            <Image
              src="/images/caramel-latte.jpg"
              alt=""
              fill
              className="rounded-lg"
            />
          </div>
          {/* Name and How Many and Notes */}
          <div className="flex flex-col gap-3">
            <span className="text-lg font-extrabold">Caramel Latte</span>
            <div className="flex items-center justify-between">
              <span>x1</span>
              <span className="bg-secondary p-1 rounded-md">Notes</span>
            </div>
          </div>
          {/* Amount */}
          <div className="">
            <span className="text-2xl font-light">17 $</span>
          </div>
        </div>
        <div className="flex gap-x-3 justify-between">
          {/* Image */}
          <div className="relative w-24 h-24 ">
            <Image
              src="/images/caramel-latte.jpg"
              alt=""
              fill
              className="rounded-lg"
            />
          </div>
          {/* Name and How Many and Notes */}
          <div className="flex flex-col gap-3">
            <span className="text-lg font-extrabold">Caramel Latte</span>
            <div className="flex items-center justify-between">
              <span>x1</span>
              <span className="bg-secondary p-1 rounded-md">Notes</span>
            </div>
          </div>
          {/* Amount */}
          <div className="">
            <span className="text-2xl font-light">17 $</span>
          </div>
        </div>
      </div>
      <TotalAmount />
      <PaymentMethod />
    </div>
  );
};

export default Card;

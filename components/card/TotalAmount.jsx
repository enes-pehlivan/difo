import React from "react";

const TotalAmount = () => {
  return (
    <div className="">
      {/* Subtotal */}
      <div className="flex justify-between text-black font-medium">
        <span>Subtotal</span>
        <span>17 $</span>
      </div>

      {/* TAX */}
      <div className="flex justify-between text-black font-extralight">
        <span>TAX 18%</span>
        <span>3.06 $</span>
      </div>

      {/* TOTAL */}
      <div className="flex justify-between text-black font-bold border-solid border-t-4 border-secondary">
        <span>Total</span>
        <span>20.06 $</span>
      </div>
    </div>
  );
};

export default TotalAmount;

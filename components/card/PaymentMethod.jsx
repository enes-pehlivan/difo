import React from "react";
import {
  BsCashCoin,
  BsFillCreditCardFill,
  BsCurrencyBitcoin,
} from "react-icons/bs";

const PaymentMethod = () => {
  return (
    <div className="flex flex-col gap-y-2">
      {/* Payment Method Text */}
      <div>
        <span className="text-xl text-primary font-bold">Payment Method</span>
      </div>

      {/* Payment Method Select */}
      <div className="flex gap-x-5 items-center">
        <div className="flex flex-col items-center bg-primary text-white p-3 rounded-lg pl-5 pr-5 hover:bg-secondary hover:text-black">
          <BsCashCoin size={25} />
          <span>Cash</span>
        </div>
        <div className="flex flex-col items-center  bg-primary text-white p-3 rounded-lg hover:bg-secondary hover:text-black">
          <BsFillCreditCardFill size={25} />
          <span>Debit Card</span>
        </div>
        <div className="flex flex-col items-center  bg-primary text-white p-3 rounded-lg hover:bg-secondary hover:text-black">
          <BsCurrencyBitcoin size={25} />
          <span>E-Wallet</span>
        </div>
      </div>

      {/* Payment Button */}
      <div className="bg-secondary hover:bg-primary rounded-lg flex items-center justify-center cursor-pointer ">
        <button className="p-3  text-white">PAY NOW</button>
      </div>
    </div>
  );
};

export default PaymentMethod;

import CashierLogin from "../../components/auth/CashierLogin";
import Card from "../../components/card/Card";
import Category from "../../components/category/Category";
import Menu from "../../components/Menu/Menu";
import Navbar from "../../components/navbar/Navbar";

const index = () => {
  return (
    <div className="flex h-screen justify-between">
      <div className="w-[90px] ">
        <Navbar />
      </div>
      <div className="flex flex-col gap-y-10 w-full ml-10 mr-10 ">
        <Category />
        <Menu />
      </div>
      <div className="flex flex-col justify-between mr-5">
        <CashierLogin />
        <Card />
      </div>
    </div>
  );
};

export default index;

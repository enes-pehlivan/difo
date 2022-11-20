import Image from "next/image";

const Category = () => {
  return (
    <div className="">
      {/* Category Text and Search */}
      <div className="flex justify-between">
        <span className="text-2xl font-indie ">Choose Category</span>
        <span>Search Item</span>
      </div>

      {/* Category Items */}
      <div className="flex gap-x-8 mt-3  items-center">
        <div className="bg-secondary text-white p-2 rounded-lg">
          <div className="relative h-10 w-10">
            <Image src="/images/categoryitems/coffee.png" alt="Coffee" fill />
          </div>
          <span>Coffee</span>
        </div>
        <div>
          <div className="relative h-10 w-10">
            <Image src="/images/categoryitems/drink.png" alt="Juice" fill />
          </div>
          <span>Juice</span>
        </div>
        <div>
          <div className="relative h-10 w-10">
            <Image src="/images/categoryitems/wein.png" alt="Wein" fill />
          </div>
          <span>Wein</span>
        </div>
        <div>
          <div className="relative h-10 w-10">
            <Image src="/images/categoryitems/spaghetti.png" alt="Pasta" fill />
          </div>
          <span>Pasta</span>
        </div>
        <div>
          <div className="relative h-10 w-10">
            <Image src="/images/categoryitems/dessert.png" alt="Dessert" fill />
          </div>
          <span>Dessert</span>
        </div>
      </div>
    </div>
  );
};

export default Category;

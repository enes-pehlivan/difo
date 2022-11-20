import Image from "next/image";

const Menu = () => {
  return (
    <div className=" gap-x-10 justify-center overflow-auto h-max grid grid-cols-2 gap-8">
      <div className="bg-white w-96 ">
        {/* Image, Product Name, Description, Price */}
        <div className="flex gap-4">
          <div className="relative w-48 h-32">
            <Image
              src="/images/caramel-latte.jpg"
              alt="Caramel Latte"
              fill
              className=" rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl text-black font-indie">Caramel Latte</h3>
            <p className="text-sm">
              A Caramel Latte is made by mixing espresso with caramel syrup and
              pouring steamed milk on top
            </p>
            <span className="text-2xl text-end text-black font-indie font-bold">
              3,95 $
            </span>
          </div>
        </div>

        {/* Mood and Size */}
        <div className="mt-2 flex justify-between">
          {/* Mood */}
          <div>
            <span className="text-xl font-indie font-semibold">Mood</span>
            <div className="flex gap-4">
              <div className="relative bg-primary rounded-full w-10 h-10 cursor-pointer hover:bg-secondary">
                <Image src="/images/hot.png" alt="Hot" fill className="p-2" />
              </div>
              <div className="relative bg-primary rounded-full w-10 h-10 cursor-pointer hover:bg-secondary">
                <Image src="/images/cold.png" alt="Cold" fill className="p-2" />
              </div>
            </div>
          </div>
          {/* Size */}
          <div>
            <span className="text-xl font-indie font-semibold">Size</span>
            <div className="flex gap-3 ">
              <span className="bg-primary rounded-full cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                S
              </span>
              <span className="bg-primary rounded-full  cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                M
              </span>
              <span className="bg-primary rounded-full cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                L
              </span>
            </div>
          </div>
        </div>

        {/* Sugar and Ice */}
        <div className="mt-2 flex justify-between">
          {/* Sugar */}
          <div>
            <span className="text-xl font-indie font-semibold">Sugar</span>
            <div className="flex gap-3 ">
              <span className="bg-primary rounded-full cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                0%
              </span>
              <span className="bg-primary rounded-full  cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                50%
              </span>
              <span className="bg-primary rounded-full cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                100%
              </span>
            </div>
          </div>

          {/* Ice */}
          <div>
            <span className="text-xl font-indie font-semibold">Ice</span>
            <div className="flex gap-3 ">
              <span className="bg-primary rounded-full cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                0%
              </span>
              <span className="bg-primary rounded-full  cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                50%
              </span>
              <span className="bg-primary rounded-full cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                100%
              </span>
            </div>
          </div>
        </div>

        {/* Add to Card */}
        <div className="bg-primary rounded-lg mt-2 flex items-center justify-center hover:bg-secondary cursor-pointer active:bg-secondary">
          <button className="p-3 text-white font-indie ">Add to Card</button>
        </div>
      </div>

      {/* Item 2 */}

      <div className="bg-white w-96 ">
        {/* Image, Product Name, Description, Price */}
        <div className="flex gap-4">
          <div className="relative w-48 h-32">
            <Image
              src="/images/caramel-latte.jpg"
              alt="Caramel Latte"
              fill
              className=" rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl text-black font-indie">Caramel Latte</h3>
            <p className="text-sm">
              A Caramel Latte is made by mixing espresso with caramel syrup and
              pouring steamed milk on top
            </p>
            <span className="text-2xl text-end text-black font-indie font-bold">
              3,95 $
            </span>
          </div>
        </div>

        {/* Mood and Size */}
        <div className="mt-2 flex justify-between">
          {/* Mood */}
          <div>
            <span className="text-xl font-indie font-semibold">Mood</span>
            <div className="flex gap-4">
              <div className="relative bg-primary rounded-full w-10 h-10 cursor-pointer hover:bg-secondary">
                <Image src="/images/hot.png" alt="Hot" fill className="p-2" />
              </div>
              <div className="relative bg-primary rounded-full w-10 h-10 cursor-pointer hover:bg-secondary">
                <Image src="/images/cold.png" alt="Cold" fill className="p-2" />
              </div>
            </div>
          </div>
          {/* Size */}
          <div>
            <span className="text-xl font-indie font-semibold">Size</span>
            <div className="flex gap-3 ">
              <span className="bg-primary rounded-full cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                S
              </span>
              <span className="bg-primary rounded-full  cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                M
              </span>
              <span className="bg-primary rounded-full cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                L
              </span>
            </div>
          </div>
        </div>

        {/* Sugar and Ice */}
        <div className="mt-2 flex justify-between">
          {/* Sugar */}
          <div>
            <span className="text-xl font-indie font-semibold">Sugar</span>
            <div className="flex gap-3 ">
              <span className="bg-primary rounded-full cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                0%
              </span>
              <span className="bg-primary rounded-full  cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                50%
              </span>
              <span className="bg-primary rounded-full cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                100%
              </span>
            </div>
          </div>

          {/* Ice */}
          <div>
            <span className="text-xl font-indie font-semibold">Ice</span>
            <div className="flex gap-3 ">
              <span className="bg-primary rounded-full cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                0%
              </span>
              <span className="bg-primary rounded-full  cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                50%
              </span>
              <span className="bg-primary rounded-full cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                100%
              </span>
            </div>
          </div>
        </div>

        {/* Add to Card */}
        <div className="bg-primary rounded-lg mt-2 flex items-center justify-center hover:bg-secondary cursor-pointer">
          <button className="p-3 text-white font-indie ">Add to Card</button>
        </div>
      </div>
      <div className="bg-white w-96 ">
        {/* Image, Product Name, Description, Price */}
        <div className="flex gap-4">
          <div className="relative w-48 h-32">
            <Image
              src="/images/caramel-latte.jpg"
              alt="Caramel Latte"
              fill
              className=" rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl text-black font-indie">Caramel Latte</h3>
            <p className="text-sm">
              A Caramel Latte is made by mixing espresso with caramel syrup and
              pouring steamed milk on top
            </p>
            <span className="text-2xl text-end text-black font-indie font-bold">
              3,95 $
            </span>
          </div>
        </div>

        {/* Mood and Size */}
        <div className="mt-2 flex justify-between">
          {/* Mood */}
          <div>
            <span className="text-xl font-indie font-semibold">Mood</span>
            <div className="flex gap-4">
              <div className="relative bg-primary rounded-full w-10 h-10 cursor-pointer hover:bg-secondary">
                <Image src="/images/hot.png" alt="Hot" fill className="p-2" />
              </div>
              <div className="relative bg-primary rounded-full w-10 h-10 cursor-pointer hover:bg-secondary">
                <Image src="/images/cold.png" alt="Cold" fill className="p-2" />
              </div>
            </div>
          </div>
          {/* Size */}
          <div>
            <span className="text-xl font-indie font-semibold">Size</span>
            <div className="flex gap-3 ">
              <span className="bg-primary rounded-full cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                S
              </span>
              <span className="bg-primary rounded-full  cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                M
              </span>
              <span className="bg-primary rounded-full cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                L
              </span>
            </div>
          </div>
        </div>

        {/* Sugar and Ice */}
        <div className="mt-2 flex justify-between">
          {/* Sugar */}
          <div>
            <span className="text-xl font-indie font-semibold">Sugar</span>
            <div className="flex gap-3 ">
              <span className="bg-primary rounded-full cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                0%
              </span>
              <span className="bg-primary rounded-full  cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                50%
              </span>
              <span className="bg-primary rounded-full cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                100%
              </span>
            </div>
          </div>

          {/* Ice */}
          <div>
            <span className="text-xl font-indie font-semibold">Ice</span>
            <div className="flex gap-3 ">
              <span className="bg-primary rounded-full cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                0%
              </span>
              <span className="bg-primary rounded-full  cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                50%
              </span>
              <span className="bg-primary rounded-full cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                100%
              </span>
            </div>
          </div>
        </div>

        {/* Add to Card */}
        <div className="bg-primary rounded-lg mt-2 flex items-center justify-center hover:bg-secondary cursor-pointer">
          <button className="p-3 text-white font-indie ">Add to Card</button>
        </div>
      </div>
      <div className="bg-white w-96 ">
        {/* Image, Product Name, Description, Price */}
        <div className="flex gap-4">
          <div className="relative w-48 h-32">
            <Image
              src="/images/caramel-latte.jpg"
              alt="Caramel Latte"
              fill
              className=" rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl text-black font-indie">Caramel Latte</h3>
            <p className="text-sm">
              A Caramel Latte is made by mixing espresso with caramel syrup and
              pouring steamed milk on top
            </p>
            <span className="text-2xl text-end text-black font-indie font-bold">
              3,95 $
            </span>
          </div>
        </div>

        {/* Mood and Size */}
        <div className="mt-2 flex justify-between">
          {/* Mood */}
          <div>
            <span className="text-xl font-indie font-semibold">Mood</span>
            <div className="flex gap-4">
              <div className="relative bg-primary rounded-full w-10 h-10 cursor-pointer hover:bg-secondary">
                <Image src="/images/hot.png" alt="Hot" fill className="p-2" />
              </div>
              <div className="relative bg-primary rounded-full w-10 h-10 cursor-pointer hover:bg-secondary">
                <Image src="/images/cold.png" alt="Cold" fill className="p-2" />
              </div>
            </div>
          </div>
          {/* Size */}
          <div>
            <span className="text-xl font-indie font-semibold">Size</span>
            <div className="flex gap-3 ">
              <span className="bg-primary rounded-full cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                S
              </span>
              <span className="bg-primary rounded-full  cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                M
              </span>
              <span className="bg-primary rounded-full cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                L
              </span>
            </div>
          </div>
        </div>

        {/* Sugar and Ice */}
        <div className="mt-2 flex justify-between">
          {/* Sugar */}
          <div>
            <span className="text-xl font-indie font-semibold">Sugar</span>
            <div className="flex gap-3 ">
              <span className="bg-primary rounded-full cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                0%
              </span>
              <span className="bg-primary rounded-full  cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                50%
              </span>
              <span className="bg-primary rounded-full cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                100%
              </span>
            </div>
          </div>

          {/* Ice */}
          <div>
            <span className="text-xl font-indie font-semibold">Ice</span>
            <div className="flex gap-3 ">
              <span className="bg-primary rounded-full cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                0%
              </span>
              <span className="bg-primary rounded-full  cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                50%
              </span>
              <span className="bg-primary rounded-full cursor-pointer hover:bg-secondary w-10 h-10 flex justify-center items-center text-white">
                100%
              </span>
            </div>
          </div>
        </div>

        {/* Add to Card */}
        <div className="bg-primary rounded-lg mt-2 flex items-center justify-center hover:bg-secondary cursor-pointer">
          <button className="p-3 text-white font-indie ">Add to Card</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;

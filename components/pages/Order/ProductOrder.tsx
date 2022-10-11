import Image from "next/image";
import React from "react";
import { IconContext } from "react-icons";
import { AiFillPlusCircle } from "react-icons/ai";

const ProductOrder = () => {
  return (
    <div className="rounded-lg shadow-lg p-2">
      <Image
        alt="product"
        src="/assets/coffee-1.webp"
        width="100%"
        height="100%"
        layout="responsive"
      />
      <h2 className="mt-2 font-medium">Lorem ipsum dolor</h2>
      <div className="flex justify-between mt-8 items-center ">
        <span className="font-thin text-sm text-gray-500">123123</span>
        <div className="text-[#fa8c16]">
          <IconContext.Provider value={{ size: "30px" }}>
            <AiFillPlusCircle />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default ProductOrder;

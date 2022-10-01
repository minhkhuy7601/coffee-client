import Image from "next/image";
import React from "react";

interface IProduct {
  name: string;
  price: string;
  srcImg: string;
}
const Product = ({ name, price, srcImg }: IProduct) => {
  return (
    <div className="cursor-pointer">
      <div className="w-full rounded-xl shadow-xl border-2 overflow-hidden hover:scale-105 duration-300">
        <Image
          alt="product"
          src={srcImg}
          width="100%"
          height="100%"
          layout="responsive"
        />
      </div>
      <h2 className="mt-4 text-sm font-semibold">{name}</h2>
      <div className="text-xs font-normal mt-1 text-gray-600">{price} đ</div>
    </div>
  );
};

export default Product;

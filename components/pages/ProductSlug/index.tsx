import React, { useRef } from "react";
import Image from "next/image";
import { dataProducts } from "../../../masterdata";
import Button from "../../common/Button";
import Product from "../../common/Product";

const ProductSlug = () => {
  const data = useRef(dataProducts[0]);
  const { name, price, images } = data.current;
  return (
    <section className="mt-12 py-6 px-[250px]">
      <div className="flex gap-10 border-b-2 py-8">
        <div className="w-1/2">
          <Image
            alt="product"
            src={images[0]}
            width="100%"
            height="100%"
            layout="responsive"
          />
          <div className="w-full grid grid-cols-6 mt-4 gap-4">
            <Image
              alt="product"
              src={images[0]}
              width="100%"
              height="100%"
              layout="responsive"
            />
            <Image
              alt="product"
              src={images[0]}
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>
        </div>
        <div className="flex-grow">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-[#E57905] text-2xl font-semibold tracking-wide mt-1">
            {price} đ
          </p>
          <p className="mt-6">Chọn size</p>
          <div className="flex gap-4 mt-4">
            <div className="py-2 px-6 border-2 rounded-lg text-gray-500">
              Nhỏ + 0đ
            </div>
          </div>
          <div className="w-full h-12 mt-4">
            <Button text="Đặt giao tận nơi" />
          </div>
        </div>
      </div>
      <div className="py-8 border-b-2">
        <h4 className="text-lg font-bold mb-4">Mô tả sản phẩm</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem ea veniam nesciunt reprehenderit. Ipsa odio molestias
          rem! Consequuntur provident perferendis laborum, a inventore delectus
          maiores consectetur alias et nesciunt asperiores?
        </p>
      </div>
      <div className="py-8">
        <h4 className="text-lg font-bold mb-4">Sản phẩm liên quan</h4>
        <div className="grid grid-cols-6 gap-6">
          <Product name={name} price={String(price)} srcImg={images[0]} />
          <Product name={name} price={String(price)} srcImg={images[0]} />
          <Product name={name} price={String(price)} srcImg={images[0]} />
        </div>
      </div>
    </section>
  );
};

export default ProductSlug;

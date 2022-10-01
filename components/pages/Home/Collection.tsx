import Image from "next/image";
import React from "react";
import Product from "../../common/Product";

const Collection = () => {
  const items = new Array(8).fill(null);
  return (
    <section className="grid grid-cols-4 gap-6 mx-60 my-10">
      {items.map((item, index) => (
        <Product
          key={index}
          name="CloudFee Creme Brulee Caramel"
          price="49.000"
          srcImg="/assets/coffee-1.webp"
        />
      ))}
    </section>
  );
};

export default Collection;

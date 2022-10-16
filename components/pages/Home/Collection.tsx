import classNames from "classnames";
import Image from "next/image";
import React from "react";
import Product from "../../common/Product";

const Collection = () => {
  const items = new Array(8).fill(null);
  return (
    <section
      className={classNames(
        "grid gap-4 px-4 my-10 w-full grid-cols-2",
        "md:grid-cols-3 md:gap-6",
        "lg:grid-cols-4 lg:px-0 lg:gap-6 lg:w-[1000px] xl:mx-auto"
      )}
    >
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

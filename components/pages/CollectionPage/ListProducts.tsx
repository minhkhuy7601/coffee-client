import classNames from "classnames";
import React, { useRef } from "react";
import { dataProducts, menu } from "../../../masterdata";
import Product from "../../common/Product";

const ListProducts = () => {
  const listCategory = useRef(menu);
  return (
    <div className="flex-grow flex flex-col">
      {listCategory.current.map((category, index) => (
        <Section data={category} key={index} />
      ))}
    </div>
  );
};

const Section = ({ data }: any) => {
  return (
    <div className="w-full" id={data.key}>
      {data?.items?.map((category: any, index: number) => (
        <CategoryProducts category={category} key={index} />
      ))}
    </div>
  );
};

const CategoryProducts = ({ category }: any) => {
  const products = useRef(
    dataProducts.filter((product) => product.categoryExtra === category.name)
  );

  return (
    <div id={category.key} className="mt-6">
      <h3 className="font-bold text-2xl">{category.name}</h3>
      <div
        className={classNames("grid grid-cols-2 gap-6 mt-6", "md:grid-cols-3")}
      >
        {products.current.map((item, index) => (
          <Product
            key={index}
            name={item.name}
            price={`${item.price}`}
            srcImg={item.images[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default ListProducts;

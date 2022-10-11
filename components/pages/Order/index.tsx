import Image from "next/image";
import React from "react";
import ProductOrder from "./ProductOrder";

const ProductListing = () => {
  return (
    <section className="mt-12 px-60 py-10">
      {/* SEARCH BAR */}
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Search Mockups, Logos..."
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-[#fa8c16]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
        >
          Search
        </button>
      </div>
      {/* SEARCH BAR */}
      <div className="flex justify-center mt-6 gap-4">
        <div className="flex flex-col items-center gap-2">
          <div className="flex justify-center items-center bg-[#ffe7ba] h-20 w-20 rounded-full">
            <Image
              alt="product"
              src="/assets/ca-phe.png"
              width="60"
              height="40"
            />
          </div>
          <h4 className="text-sm text-gray-500">Coffee</h4>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-x-6 gap-y-4 mt-4">
        <ProductOrder />
        <ProductOrder />
        <ProductOrder />
        <ProductOrder />
        <ProductOrder />
        <ProductOrder />
        <ProductOrder />
      </div>
    </section>
  );
};

export default ProductListing;

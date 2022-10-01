import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-screen mt-10 ">
      <Image
        src="/assets/banner1.webp"
        width="100%"
        height="30%"
        layout="responsive"
        objectFit="contain"
        objectPosition="top"
        alt="banner"
      />
    </div>
  );
};

export default Banner;

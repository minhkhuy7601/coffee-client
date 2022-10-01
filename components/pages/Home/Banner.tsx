import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-screen h-[450px]">
      <div className="w-full h-full relative">
        <Image
          src="/assets/banner1.webp"
          layout="fill"
          objectFit="cover"
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Banner;

import Image from "next/image";
import React from "react";

interface IArticle {
  title: string;
  description: string;
  date: string;
  image: string;
}

const Article = ({ title, description, date, image }: IArticle) => {
  return (
    <div className="w-full cursor-pointer">
      <div className="w-full h-[160px] overflow-hidden rounded-xl ">
        <div className="hover:scale-110 w-full h-full duration-500">
          <Image
            alt="image"
            src={image}
            layout="responsive"
            width="100%"
            height="100%"
            objectFit="contain"
            objectPosition="top"
          />
        </div>
      </div>
      <p className="font-thin text-sm text-gray-500 mt-2">{date}</p>
      <h2 className="font-medium uppercase mt-2 truncate">{title}</h2>
      <p className="font-thin text-sm text-gray-500 mt-2 ">{description}</p>
    </div>
  );
};

export default Article;

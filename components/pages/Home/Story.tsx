import Image from "next/image";
import React, { useRef } from "react";
import { articles } from "../../../masterdata";
import Article from "./Article";

const Story = () => {
  const dataArticles = useRef(articles);
  return (
    <section className="py-10 mb-16">
      <h2 className="flex items-center w-full justify-center text-2xl font-semibold gap-2">
        <Image
          src="/assets/icon-coffee.webp"
          alt="icon"
          height="25"
          width="20"
        />
        <span>Chuyện nhà</span>
      </h2>
      <div className="grid grid-cols-3 gap-7 px-60 mt-8">
        {dataArticles.current.map((article, index) => (
          <Article
            key={index}
            title={article.title}
            description={article.description}
            image={article.image}
            date={article.date}
          />
        ))}
      </div>
    </section>
  );
};

export default Story;

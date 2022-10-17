import classNames from "classnames";
import Image from "next/image";
import React, { useRef } from "react";
import { articles } from "../../../masterdata";
import Article from "./Article";

const Story = () => {
  const dataArticles = useRef(articles);
  return (
    <section className="py-10 mb-16" id="story-id">
      <h2 className="flex items-center w-full justify-center text-2xl font-semibold gap-2">
        <Image
          src="/assets/icon-coffee.webp"
          alt="icon"
          height="25"
          width="20"
        />
        <span>Chuyện nhà</span>
      </h2>
      <div
        className={classNames(
          "grid grid-cols-1 gap-7 w-full mx-auto px-4 mt-8",
          "md:grid-cols-2",
          "lg:grid-cols-3 lg:w-[1280px]"
        )}
      >
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

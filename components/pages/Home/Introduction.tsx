import classNames from "classnames";
import Image from "next/image";
import React from "react";
import Button from "../../common/Button";

const Introduction = () => {
  return (
    <section className="bg-introduction bg-cover py-10">
      <div
        className={classNames(
          "w-full  flex items-center flex-col ",
          "lg:w-2/3 lg:mx-auto lg:flex-row lg:gap-4"
        )}
      >
        <div className={classNames("w-2/3", "lg:w-1/2")}>
          <Image
            alt="product"
            src="/assets/introduction-2.webp"
            width="100%"
            height="100%"
            layout="responsive"
          />
        </div>
        <div
          className={classNames(
            "w-3/4 flex flex-col justify-center mt-4",
            "lg:w-1/2"
          )}
        >
          <h2
            className={classNames(
              "font-playFair italic text-4xl text-[#7D5230] font-bold",
              "lg:text-6xl"
            )}
          >
            Creme Brulee
          </h2>
          <p className="mt-6 text-gray-800 font-thin">
            <span className="font-semibold">
              Thức uống &quot;chiều chuộng bản thân&quot; bậc nhất
            </span>{" "}
            cho những ai thích vị ngọt ngào hay muốn thưởng thức sự kết hợp độc
            đáo giữa món tráng miệng và thức uống.
          </p>
          <div className={classNames("w-full h-10 mt-6", "lg:w-60")}>
            <Button text="Thử ngay" />
          </div>
        </div>
      </div>
      <div
        className={classNames(
          "w-full mx-auto flex flex-col items-center mt-10",
          "lg:flex-row lg:w-2/3"
        )}
      >
        <div
          className={classNames(
            "w-3/4 flex flex-col justify-center order-2",
            "lg:order-1 lg:w-1/2"
          )}
        >
          <h2 className="font-playFair italic text-4xl mt-4 text-[#7D5230] font-bold ">
            Creamy
          </h2>
          <p className="mt-6 text-gray-800 font-thin">
            <span className="font-semibold">
              Thức uống &quot;đánh thức&quot; năng lượng ngày mới
            </span>{" "}
            hợp cho những ai mới bước vào thế giới cà phê hoặc ghiền cà phê
            nhưng muốn khám phá thêm nhiều hương vị mới
          </p>
          <div className={classNames("w-full h-10 mt-6", "lg:w-60")}>
            <Button text="Thử ngay" />
          </div>
        </div>
        <div className={classNames("w-2/3 order-1", "lg:w-1/2")}>
          <Image
            alt="product"
            src="/assets/introduction-1.webp"
            width="100%"
            height="100%"
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;

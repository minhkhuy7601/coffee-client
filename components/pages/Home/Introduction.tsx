import Image from "next/image";
import React from "react";
import Button from "../../common/Button";

const Introduction = () => {
  return (
    <section className="bg-introduction bg-cover py-10">
      <div className="w-2/3 mx-auto flex items-center">
        <div className="w-1/2">
          <Image
            alt="product"
            src="/assets/introduction-2.webp"
            width="100%"
            height="100%"
            layout="responsive"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center ">
          <h2 className="font-playFair italic text-6xl text-[#7D5230] font-bold ">
            Creme Brulee
          </h2>
          <p className="mt-6 text-gray-800 font-thin">
            <span className="font-semibold">
              Thức uống &quot;chiều chuộng bản thân&quot; bậc nhất
            </span>{" "}
            cho những ai thích vị ngọt ngào hay muốn thưởng thức sự kết hợp độc
            đáo giữa món tráng miệng và thức uống.
          </p>
          <div className="w-60 h-10 mt-6">
            <Button text="Thử ngay" />
          </div>
        </div>
      </div>
      <div className="w-2/3 mx-auto flex items-center mt-10">
        <div className="w-1/2 flex flex-col justify-center ">
          <h2 className="font-playFair italic text-6xl text-[#7D5230] font-bold ">
            Creamy
          </h2>
          <p className="mt-6 text-gray-800 font-thin">
            <span className="font-semibold">
              Thức uống &quot;đánh thức&quot; năng lượng ngày mới
            </span>{" "}
            hợp cho những ai mới bước vào thế giới cà phê hoặc ghiền cà phê
            nhưng muốn khám phá thêm nhiều hương vị mới
          </p>
          <div className="w-60 h-10 mt-6">
            <Button text="Thử ngay" />
          </div>
        </div>
        <div className="w-1/2">
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

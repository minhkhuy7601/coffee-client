import React, { useRef } from "react";
import { navigation } from "../../masterdata";
import { AiFillCaretDown } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import classNames from "classnames";
import { FaRegUserCircle } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { useRouter } from "next/router";
import { scrollToView } from "../../utils";

const Nav = () => {
  const router = useRouter();
  const dataNav = useRef(navigation);
  return (
    <div className="fixed hidden top-0 left-0 z-40 w-full h-12 lg:flex justify-between items-center shadow-md bg-white bg-opacity-80 px-80">
      <div
        className="uppercase font-bold cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        coffee logo
      </div>
      <div className="flex gap-16 text-sm font-semibold">
        {dataNav.current.map((item, index) => (
          <div
            key={index}
            className={classNames(
              " flex items-center hover:text-[#E57905] cursor-pointer duration-200 group"
            )}
            onClick={() => {
              if (item.name === "Story") {
                router.push("/");
                setTimeout(() => {
                  scrollToView("story-id");
                }, 300);
              }
            }}
          >
            {item.name}
            {item.children ? (
              <>
                <span className="ml-1 translate-y-[2px]">
                  <IconContext.Provider value={{ size: "10px" }}>
                    <AiFillCaretDown />
                  </IconContext.Provider>
                </span>
                <SubMenu data={item.children} />
              </>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-6 text-2xl">
        <FaRegUserCircle />
        <div
          className="relative cursor-pointer"
          onClick={() => {
            router.push("/checkout");
          }}
        >
          <span className="absolute top-0 -translate-y-2 translate-x-3 right-0 bg-[#fa8c16] w-5 h-5 text-sm flex items-center justify-center rounded-full font-bold text-white">
            1
          </span>
          <FiShoppingBag />
        </div>
      </div>
    </div>
  );
};

const SubMenu = ({ data }: { data: any }) => {
  const router = useRouter();
  console.log(data);
  return (
    <div className="absolute w-screen top-full  left-0 group-hover:visible group-hover:translate-y-2 border-b-2  group-hover:opacity-100 group-hover:text-black invisible  duration-300  translate-y-4 opacity-0 bg-white pb-6">
      <div className="w-2/3 mx-auto flex gap-4">
        {data.map((row: any, index: any) => (
          <div key={index} className="flex-grow">
            <h2
              className="font-bold border-b-2 border-b-black mt-2 hover:text-[#E57905] hover:border-b-[#E57905] duration-200"
              onClick={() => {
                router.push("/collection");
              }}
            >
              {row.title}
            </h2>
            <div className="font-thin mt-3">
              {row?.items?.map((item: any, ind: any) => (
                <div
                  key={ind}
                  className="hover:text-[#E57905] duration-200"
                  onClick={() => {
                    router.push("/collection");
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;

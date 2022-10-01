import React, { useRef } from "react";
import { navigation } from "../../masterdata";
import { AiFillCaretDown } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import classNames from "classnames";

const Nav = () => {
  const dataNav = useRef(navigation);
  return (
    <div className="fixed hidden top-0 left-0 z-40 w-full h-12 lg:flex justify-center items-center shadow-md bg-white bg-opacity-80">
      <div className="absolute top-1/2 -translate-y-1/2 left-60 uppercase font-bold cursor-pointer">
        coffee logo
      </div>
      <div className="flex gap-20 text-sm font-semibold">
        {dataNav.current.map((item, index) => (
          <div
            key={index}
            className={classNames(
              " flex items-center hover:text-[#E57905] cursor-pointer duration-200 group"
            )}
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
    </div>
  );
};

const SubMenu = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <div className="absolute w-screen top-full  left-0 group-hover:visible group-hover:translate-y-2 border-b-2  group-hover:opacity-100 group-hover:text-black invisible  duration-300  translate-y-4 opacity-0 bg-white pb-6">
      <div className="w-2/3 mx-auto flex gap-4">
        {data.map((row: any, index: any) => (
          <div key={index} className="flex-grow">
            <h2 className="font-bold border-b-2 border-b-black mt-2 hover:text-[#E57905] hover:border-b-[#E57905] duration-200">
              {row.title}
            </h2>
            <div className="font-thin mt-3">
              {row?.items?.map((item: any, ind: any) => (
                <div key={ind} className="hover:text-[#E57905] duration-200">
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

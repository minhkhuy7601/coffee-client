import React, { useRef, useState } from "react";
import { navigation } from "../../masterdata";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCaretDown, AiOutlineClose } from "react-icons/ai";
import classNames from "classnames";
import { IconContext } from "react-icons";

const MobileNav = () => {
  const dataNav = useRef(navigation);
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="lg:hidden fixed  top-0 left-0 z-30 w-screen h-10 border-2 flex items-center justify-center bg-white">
        <div
          className="absolute top-1/2 -translate-y-1/2 left-2"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <GiHamburgerMenu />
        </div>
        <h1 className="uppercase font-bold">coffee logo</h1>
      </div>
      <div
        className={classNames(
          "fixed top-0 left-0 h-screen w-screen z-40",
          isActive ? "visible" : "invisible"
        )}
      >
        <div
          className={classNames(
            "absolute w-full h-full top-0 left-0 bg-gray-900 bg-opacity-80 duration-300",
            isActive ? "visible opacity-100" : "invisible opacity-0"
          )}
          onClick={() => {
            setIsActive(!isActive);
          }}
        ></div>
        <div
          className={classNames(
            "bg-white w-2/3 h-full duration-300",
            isActive ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div
            className="w-full py-4 border-b-2 px-6"
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <AiOutlineClose />
          </div>
          {dataNav.current.map((row, index) => (
            <ItemMenu data={row} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

const ItemMenu = ({ data }: any) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="w-full py-4 border-b-2 px-6 font-semibold flex justify-between items-center">
        {data.name}
        {data.children ? (
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <IconContext.Provider value={{ size: "8px" }}>
              <AiFillCaretDown />
            </IconContext.Provider>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className={classNames(
          "overflow-hidden duration-500",
          isActive ? "max-h-full" : "max-h-0"
        )}
      >
        {data?.children?.map((item: any, ind: any) => (
          <div key={ind}>
            <div className="w-full text-sm py-4 border-b-2 px-6 pl-8 font-semibold flex justify-between items-center">
              {item.title}
            </div>
            {item?.items?.map((sub: any, i: any) => (
              <div
                key={i}
                className="w-full text-sm py-4 border-b-2 px-6 pl-10 font-thin flex justify-between items-center"
              >
                {sub.name}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default MobileNav;

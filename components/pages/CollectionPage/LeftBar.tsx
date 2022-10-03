import classNames from "classnames";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { menu } from "../../../masterdata";
import { scrollToView } from "../../../utils";
import { BiChevronDown } from "react-icons/bi";

const LeftBar = () => {
  const dataMenu = useRef(menu);
  const [itemActive, setItemActive] = useState(menu[0].title);

  return (
    <>
      <div
        className={classNames(
          "hidden border-r-[3px] border-r-gray-300 pr-20 text-gray-500 font-thin  sticky top-16 h-screen",
          "lg:block"
        )}
      >
        {dataMenu.current.map((row: any, index: any) => (
          <MenuItem
            key={index}
            data={row}
            itemActive={itemActive}
            setItemActive={setItemActive}
          />
        ))}
      </div>
    </>
  );
};

export const DropDownMenu = () => {
  const dataMenu = useRef(menu);
  const [itemActive, setItemActive] = useState(menu[0].title);
  const [showDropDown, setShowDropDown] = useState(true);

  return (
    <div className="fixed top-10 left-0 w-screen z-10 flex flex-col justify-center items-center px-4 py-2 bg-white lg:hidden">
      <div
        className="border-2 w-full px-4 py-2 bg-white rounded-lg border-gray-300 flex justify-between items-center"
        onClick={() => {
          setShowDropDown((prev) => !prev);
        }}
      >
        <span>{itemActive}</span>
        <BiChevronDown />
      </div>
      {showDropDown && (
        <div
          className={classNames(
            " text-gray-500 font-thin bg-white px-4 py-2 border-2 w-full",
            ""
          )}
        >
          {dataMenu.current.map((row: any, index: any) => (
            <MenuItemDropDown
              key={index}
              data={row}
              itemActive={itemActive}
              setItemActive={setItemActive}
              setShowDropDown={setShowDropDown}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const MenuItemDropDown = ({
  data,
  itemActive,
  setItemActive,
  setShowDropDown,
}: {
  data: any;
  itemActive: string;
  setItemActive: Dispatch<SetStateAction<string>>;
  setShowDropDown: Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <div
        className={classNames(
          "mt-2 cursor-pointer",
          itemActive === data.title && "text-[#EA8025]"
        )}
        onClick={() => {
          setItemActive(data.title);
          scrollToView(data.key);
          setShowDropDown((prev) => !prev);
        }}
      >
        {data.title}
      </div>

      {data?.items?.map((item: any, ind: any) => (
        <div
          key={ind}
          onClick={() => {
            setItemActive(item.name);
            scrollToView(item.key);
            setShowDropDown((prev) => !prev);
          }}
          className={classNames(
            "mt-2 cursor-pointer",
            itemActive === item.name && "text-[#EA8025]"
          )}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

const MenuItem = ({
  data,
  itemActive,
  setItemActive,
}: {
  data: any;
  itemActive: string;
  setItemActive: Dispatch<SetStateAction<string>>;
}) => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <h2
        className={classNames(
          "mt-2 cursor-pointer",
          itemActive === data.title && "text-[#EA8025]"
        )}
        onClick={() => {
          setActive(true);
          setItemActive(data.title);
          scrollToView(data.key);
        }}
      >
        {data.title}
      </h2>
      <ul
        className={classNames(
          "list-disc duration-300 overflow-hidden",
          active ? "max-h-full" : "max-h-0"
        )}
      >
        {data?.items?.map((item: any, ind: any) => (
          <li
            key={ind}
            onClick={() => {
              setItemActive(item.name);
              scrollToView(item.key);
            }}
            className={classNames(
              "ml-6 mt-2 text-sm cursor-pointer",
              itemActive === item.name && "text-[#EA8025]"
            )}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftBar;

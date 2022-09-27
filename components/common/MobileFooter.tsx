import React, { useRef } from "react";
import { contact, footer } from "../../masterdata";
import { BsTelephone } from "react-icons/bs";
import { MdOutlinePlace } from "react-icons/md";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { IconContext } from "react-icons";

const MobileFooter = () => {
  const dataFooter = useRef(footer);
  const dataContact = useRef(contact);
  return (
    <footer className="lg:hidden w-screen h-auto bg-[#000000D9] text-white py-6 px-6">
      <div>
        <h2 className="text-sm font-semibold flex items-center">
          <span className="mr-4">
            <BsTelephone />
          </span>
          Đặt hàng: {dataContact.current.phoneNumber}
        </h2>
        <h2 className="text-sm font-semibold flex items-center mt-4">
          <span className="mr-4">
            <MdOutlinePlace />
          </span>
          Liên hệ
        </h2>
        <div className="text-xs mt-4 ml-8">{dataContact.current.address}</div>
      </div>
      <div className="mt-10">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FThe.Coffee.House.2014%2F&tabs=timeline&width=340&height=70&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=526682908437905"
          width="340"
          height="130"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <div className="flex mt-4">
          <a
            target="_blank"
            rel="noreferrer"
            href={dataContact.current.social.facebook.src}
            className="mr-2"
          >
            <IconContext.Provider value={{ size: "25px" }}>
              <AiOutlineFacebook />
            </IconContext.Provider>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={dataContact.current.social.instagram.src}
            className="mr-2"
          >
            <IconContext.Provider value={{ size: "25px" }}>
              <AiOutlineInstagram />
            </IconContext.Provider>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {dataFooter.current.map((item, index) => (
          <div key={index}>
            <h2 className="text-sm font-semibold mb-4">{item.title}</h2>
            <div>
              {item.labels.map((row, ind) => (
                <div key={ind} className="text-xs font-normal mt-1">
                  {row.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default MobileFooter;

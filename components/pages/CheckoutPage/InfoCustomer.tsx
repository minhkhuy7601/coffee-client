import Image from "next/image";
import React, { useRef } from "react";
import { paymentMethods } from "../../../masterdata";
import Button from "../../common/Button";

const InfoCustomer = () => {
  const paymentMethodsData = useRef(paymentMethods);
  return (
    <div>
      <h3 className="font-semibold text-lg py-2">Giao hàng</h3>
      <div className="w-12 h-[3px] bg-[#fa8c16]"></div>
      <div className="flex gap-6 items-center mt-4">
        <Image
          src="/assets/Delivery2.png"
          width={40}
          height={40}
          alt="icon-delivery"
        />
        <div className="flex-grow text-sm font-semibold">Quận 7</div>
        <button className="bg-[#fa8c16] text-white px-2 rounded-full text-sm font-semibold">
          Thay đổi
        </button>
      </div>
      <div className="flex gap-6 items-center mt-4">
        <div className="w-[40px]"></div>
        <div className="flex-grow text-sm">
          <div className="font-semibold">Nhận hàng trong ngày 15-30p</div>
          <div>Vào lúc: Càng sớm càng tốt</div>
        </div>
        <button className="bg-[#fa8c16] text-white px-2 rounded-full text-sm font-semibold">
          Thay đổi
        </button>
      </div>
      <input
        type="text"
        className="w-full px-4 border-2 h-10 mt-4 text-sm focus:outline-none"
        placeholder="Tên người nhận"
      />
      <input
        type="text"
        className="w-full px-4 border-2 h-10 mt-4 text-sm focus:outline-none"
        placeholder="Số điện thoại"
      />
      <input
        type="text"
        className="w-full px-4 border-2 h-10 mt-4 text-sm focus:outline-none"
        placeholder="Thêm hướng dẫn mua hàng"
      />
      <h3 className="font-semibold text-lg py-2 mt-4">
        Phương thức thanh toán
      </h3>
      <div className="w-12 h-[3px] bg-[#fa8c16]"></div>

      {paymentMethodsData.current.map((item: any, index: number) => (
        <div
          key={index}
          className="flex gap-6 items-center py-3 border-b-2 last:border-none"
        >
          <input type="radio" className="w-5 h-5" name="payment" />
          <div className="flex gap-4">
            <Image src={item.iconSrc} width={20} height={20} alt="icon-cash" />
            <span>{item.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCustomer;

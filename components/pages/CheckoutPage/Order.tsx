import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const Order = () => {
  return (
    <div className="shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px] rounded-lg px-4">
      <h3 className="font-semibold text-lg py-2">Các món đã chọn</h3>
      <div className="w-12 h-[3px] bg-[#fa8c16]"></div>
      <div className="flex gap-4 items-center mt-6">
        <span className="text-[#fa8c16] text-xl">
          <MdEdit />
        </span>
        <div className="flex-grow text-sm flex flex-col gap-1">
          <h3 className="font-semibold">CloudFee Hạnh Nhân Nướng</h3>
          <p>2 x Nhỏ</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            quod.
          </p>
          <span className="text-red-500">Xóa</span>
        </div>
        <div className="text-sm">100000đ</div>
      </div>
      <h3 className="font-semibold text-lg py-2 mt-6">Tổng cộng</h3>
      <div className="w-12 h-[3px] bg-[#fa8c16]"></div>
      <div className="flex justify-between border-b-2 py-2 mt-4 text-sm">
        <p>Thành tiền</p>
        <span>100000đ</span>
      </div>
      <div className="flex justify-between border-b-2 py-2 mt-4 text-sm">
        <p>Phí giao hàng</p>
        <span>100000đ</span>
      </div>
      <div className="flex justify-between font-bold mt-8">
        <div>
          <p>Thành tiền</p>
          <span>100000đ</span>
        </div>
        <button className="px-4 py-2 rounded-full bg-[#fa8c16] text-white">
          Đặt hàng
        </button>
      </div>
      <div className="flex w-full justify-center my-6 items-center gap-2 text-red-500 cursor-pointer">
        <span className="text-lg">
          <MdDelete />
        </span>
        Xóa đơn hàng
      </div>
    </div>
  );
};

export default Order;

import React from "react";
import Modal from ".";
import Button from "../Button";

interface IModalInputAddress {
  toggle: () => void;
  isShowing: boolean;
}
const ModalInputAddress = ({ toggle, isShowing }: IModalInputAddress) => {
  return (
    <>
      <Modal toggle={toggle} isShowing={isShowing}>
        <div className="relative bg-white w-[700px] px-10 py-16 rounded-lg">
          <div className="absolute border-[#fa8c16] border-dashed border top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-2 py-2 rounded-full bg-white  flex justify-center items-center z-10">
            <div className="px-10 py-4 rounded-full bg-[#fa8c16] text-white flex justify-center items-center z-10 font-bold">
              Địa chỉ giao hàng
            </div>
          </div>
          <div className="flex w-full gap-4 h-10">
            <input
              type="text"
              className="flex-grow shadow-lg focus:outline-none px-4 h-full text-gray-500"
            />
            <div className="w-20 h-full">
              <Button text="Chọn" />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalInputAddress;

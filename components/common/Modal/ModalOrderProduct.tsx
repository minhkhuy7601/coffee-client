import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import Modal from ".";
import { dataProducts } from "../../../masterdata";
import Button from "../Button";

interface IModalOrderProduct {
  toggle: () => void;
  isShowing: boolean;
}
const ModalOrderProduct = ({ toggle, isShowing }: IModalOrderProduct) => {
  const data = useRef(dataProducts[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [note, setNote] = useState<string>("");
  const [sizeState, setSizeState] = useState<string>();
  const [toppingsState, setToppingsState] = useState<string[]>([]);
  const { images, name, price, size, topping } = data.current;

  useEffect(() => {
    setSizeState(size[0].name);
  }, [size]);

  const handleAddToCart = () => {
    console.log(sizeState, toppingsState);
  };

  const handleOnChangeSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSizeState(event.target.value);
  };

  const handleOnChangeToppings = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const index = toppingsState.indexOf(event.target.value);
    index === -1
      ? toppingsState.push(event.target.value)
      : toppingsState.splice(index, 1);
  };
  return (
    <>
      <Modal toggle={toggle} isShowing={isShowing}>
        <div className="relative bg-white w-[700px] rounded-lg overflow-auto">
          <h4 className="border-b-2 w-full text-center py-4">Thêm món mới</h4>
          <div className="flex px-6 gap-6 mt-4">
            <div className="w-1/4">
              <Image
                alt="product"
                src={images[0]}
                width="100%"
                height="100%"
                layout="responsive"
              />
            </div>
            <div className="flex-grow">
              <h2 className="font-bold text-lg">{name}</h2>
              <span className="">{price} đ</span>
              <div className="flex mt-4 gap-2 items-center">
                <div className="text-[#fa8c16] cursor-pointer">
                  <IconContext.Provider value={{ size: "30px" }}>
                    <AiFillMinusCircle />
                  </IconContext.Provider>
                </div>
                <span>{quantity}</span>
                <div className="text-[#fa8c16] cursor-pointer">
                  <IconContext.Provider value={{ size: "30px" }}>
                    <AiFillPlusCircle />
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-6 mt-4">
            <input
              type="text"
              placeholder="Ghi chú"
              className="w-full h-10 border-2 focus:outline-none px-4 rounded-md"
            />
          </div>
          <div className="mt-4">
            <h4 className="bg-gray-400 px-6 bg-opacity-40 text-gray-600 uppercase text-sm py-2">
              Chọn size
            </h4>
            <div className="grid grid-cols-4 pt-2">
              {size.map((item: any, index: number) => (
                <div
                  key={index}
                  className="flex gap-2 px-6 items-center text-md"
                >
                  <input
                    type="radio"
                    value={item.name}
                    name="size"
                    className="w-5 h-5"
                    checked={sizeState === item.name}
                    onChange={handleOnChangeSize}
                  />
                  <span>
                    {item.name} + {item.increase}đ
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h4 className="bg-gray-400 px-6 bg-opacity-40 text-gray-600 uppercase text-sm py-2">
              Chọn topping
            </h4>
            <div className="pt-2">
              {topping.map((item: any, index: number) => (
                <div
                  key={index}
                  className="flex gap-2 mx-6 items-center text-md  border-b-2 py-2"
                >
                  <div className="flex-grow flex flex-col">
                    <span className="text-sm text-gray-600">{item.name}</span>
                    <span className="text-md ">+{item.increase}đ</span>
                  </div>
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    value={item.name}
                    onChange={handleOnChangeToppings}
                  />
                </div>
              ))}
            </div>
            <div className="w-52 h-10 mx-auto my-6" onClick={handleAddToCart}>
              <Button text="Thêm vào giỏ hàng" />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalOrderProduct;

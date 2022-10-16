import React, { ReactNode } from "react";

interface IModal {
  children: ReactNode;
  toggle: () => void;
  isShowing: boolean;
}
const Modal = ({ children, toggle, isShowing }: IModal) => {
  return (
    <>
      {isShowing && (
        <div className="fixed top-0 left-0 w-screen h-screen  z-40  flex items-center justify-center">
          <div
            className="absolute top-0 left-0 w-full h-full bg-gray-700 bg-opacity-20"
            onClick={toggle}
          ></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

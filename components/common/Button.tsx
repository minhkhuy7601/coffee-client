import React from "react";

interface IButton {
  text: string;
}

const Button = ({ text }: IButton) => {
  return (
    <button className="w-full h-full bg-[#E57905] rounded-lg text-white font-bold">
      {text}
    </button>
  );
};

export default Button;

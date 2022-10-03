import classNames from "classnames";
import React, { useState } from "react";
import LeftBar, { DropDownMenu } from "./LeftBar";
import ListProducts from "./ListProducts";

const CollectionPage = () => {
  return (
    <div
      className={classNames(
        "flex flex-col mt-12 mx-auto py-8 min-h-screen px-6",
        "lg:w-[1180px] lg:flex-row lg:px-0 lg:gap-16"
      )}
    >
      <LeftBar />
      <DropDownMenu />
      <ListProducts />
    </div>
  );
};

export default CollectionPage;

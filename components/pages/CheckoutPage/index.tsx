import React from "react";
import InfoCustomer from "./InfoCustomer";
import Order from "./Order";

const CheckoutPage = () => {
  return (
    <section className="mt-6 mx-60 py-20">
      <h2 className="w-full text-center text-2xl font-bold">
        Xác nhận đơn hàng
      </h2>
      <div className="grid grid-cols-2 gap-6 mt-10">
        <InfoCustomer />
        <Order />
      </div>
    </section>
  );
};

export default CheckoutPage;

import React, { ReactNode } from "react";
import Footer from "./common/Footer";
import Header from "./common/Header";
import MobileFooter from "./common/MobileFooter";

interface IMainLayout {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
  return (
    <main className="font-body w-screen">
      <Header />
      {children}
      <Footer />
      <MobileFooter />
    </main>
  );
};

export default MainLayout;

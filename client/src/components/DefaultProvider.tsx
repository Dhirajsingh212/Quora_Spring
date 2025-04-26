import React from "react";
import { Footer } from "./Footer";
import Navbar from "./Navbar";

const DefaultProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultProvider;

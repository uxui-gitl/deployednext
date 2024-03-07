import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <div className={`relative z-[500]`}>
        <div className={`absolute w-full  `}>
          <Navbar theme="light" />
        </div>
      </div>

      {children}
    </>
  );
};

export default layout;

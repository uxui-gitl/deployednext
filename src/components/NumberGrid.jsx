import Image from "next/image";
import React from "react";

const NumberGrid = () => {
  return (
    <>
      <div
        className={`text-left max-w-screen-xl  mb-5 mx-auto p-5   px-[2rem]`}
      >
        <div className="grid grid-cols-5 grid-rows-5 gap-8">
          <div className="bg-[#ededed] col-span-2">1</div>
          <div className="bg-[#ededed] col-start-3">2</div>
          <div className="bg-[#ededed] col-start-4">3</div>
          <div className="bg-[#ededed] row-start-2">4</div>
          <div className="bg-[#ededed] row-start-2">5</div>
          <div className="bg-[#ededed] row-start-2">6</div>
          <div className="bg-[#ededed] row-start-2">7</div>
        </div>
      </div>
    </>
  );
};

export default NumberGrid;

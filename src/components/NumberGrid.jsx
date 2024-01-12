import Image from "next/image";
import React from "react";
import Balancer from "react-wrap-balancer";

const NumberGrid = ({ ribbon, title, desc, onlyNumber, arr }) => {
  return (
    <>
      <div
        className={`text-left max-w-screen-xl  mb-5 mx-auto p-5 py-32  px-[2rem]`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-4 sm:grid-rows-2 gap-8">
          <div className="  col-span-1 sm:col-span-2">
            <h4
              className={` text-[16px] font-medium text-[#0745D3] uppercase ribbon mb-4`}
            >
              {ribbon}
            </h4>
            <div className={`grid grid-cols-1 md:grid-cols-1 `}>
              <h3 className="text-4xl leading-[42px] font-bold">
                <Balancer>{title}</Balancer>
              </h3>
            </div>
          </div>

          {arr.map((item) => (
            <div key={item._id} className="bg-[#EDF1FF] col-span-1">
              <div className="p-8 h-full">
                {item.onlyNumber == false ? (
                  <>
                    <h4 className="text-[90px] leading-[106px] text-[#0745D3] font-bold">
                      {item.title}
                    </h4>
                    <p>{item.desc}</p>
                  </>
                ) : (
                  <>
                    <p className="font-bold text-[18px] text-center align-middle flex justify-center h-full items-center">
                      {item.desc}
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NumberGrid;

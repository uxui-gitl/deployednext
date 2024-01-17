import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import Balancer from "react-wrap-balancer";

const EmployeeExp = ({ ribbon, heading, desc, arr }) => {
  const renderCard = (item) => (
    <div
      key={item._id}
      className={`rounded-xl my-4 ml-4 flex justify-start flex-col p-4 bg-[#F2F4F7] hover:bg-gradient-to-br hover:from-ce2ee3 hover:via-7433ea hover:to-070021`}
    >
      <div className="w-fit h-fit max-w-sm min-w-fit">
        <p className=" ">
          <Balancer>{item.desc}</Balancer>
        </p>
      </div>
      <div className="flex flex-row justify-start items-center gap-x-4 mt-4">
        <div>
          <Image
            src={`/careers/${item.avatar}.png`}
            width="48"
            height="48"
            alt={`${item.name} photo`}
          />
        </div>
        <div>
          <div>{item.name}</div>
          <div>{item.designation}</div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className={`w-full pt-32`}>
        <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] ">
          <div className="bg-[#fff] text-center">
            <h4 className={`font-medium text-[#0745D3] uppercase ribbon`}>
              {ribbon}
            </h4>
            <h3 className="text-4xl leading-[42px] my-4 font-bold">
              {heading}
            </h3>
            <p className="font-medium leading-[22px] md:w-[90%] my-4 ">
              {desc}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full pb-8">
        <Marquee pauseOnHover={true}>
          {arr.map((item, index) => (
            <React.Fragment key={index}>{renderCard(item)}</React.Fragment>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default EmployeeExp;

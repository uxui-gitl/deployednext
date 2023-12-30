import Icon from "@mdi/react";
import Image from "next/image";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import React from "react";

const ServiceOfferingGrid = ({ title, desc, arr }) => {
  return (
    <>
      <>
        <div className={` w-full bg-[#F2F4F7] py-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] ">
            <div className="bg-[#F2F4F7] grid grid-cols-1 gap-5 relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold text-center ">
                  {title}
                </h3>
              </div>
            </div>
          </div>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-3">
            {arr.map((item) => (
              <div className="" key={item._id}>
                <div className="min-w-[315px] max-w-[100%] min-h-[200px] overflow-hidden relative group">
                  <Image
                    className="w-[100%] transition-transform duration-750 ease-in-out group-hover:scale-125"
                    src={`/solutions/technology-stack/${item.image}.png`}
                    fill={true}
                    alt={item.image}
                  />
                </div>
                <div className="p-4 pb-0">
                  <p className="text-[#101828] font-medium text-base leading-[22px]">
                    {item.title}
                  </p>
                  <p className="text-[#475467] text-[14px] font-normal my-4 leading-[22px]">
                    {item.desc}
                  </p>
                  <Link
                    href={item.link}
                    className="text-[#0745D3] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                  >
                    {item.cta}
                    <Icon
                      path={mdiArrowRight}
                      style={{ marginLeft: "0.5em" }}
                      size={1}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </>
  );
};

export default ServiceOfferingGrid;

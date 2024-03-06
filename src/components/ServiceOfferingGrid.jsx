import Icon from "@mdi/react";
import Image from "next/image";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import React from "react";
import { mdiArrowTopRight } from "@mdi/js";

const ServiceOfferingGrid = ({
  title,
  desc,
  arr,
  ctaDesc,
  cta,
  ctaVisible,
}) => {
  const showConnectCard = arr.length === 6;
  return (
    // console.log(showConnectCard),
    <>
      <>
        <div className={` w-full bg-[#FFF] pt-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  {title}
                </h3>
              </div>
            </div>
            {/* right */}
            <div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">{desc}</p>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <div
          className={` py-12 max-w-screen-xl px-[2rem] md:max-w-screen-xl mb-5 mx-auto `}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-start flex-wrap">
            {arr.map((item, index) => (
              <div
                key={item._id}
                className={` p-8  w-full  md:w-[32%] border border-[#707070]  `}
                style={{
                  background: item.bg,
                  color: item.theme === "dark" ? "#fff" : "#101828",
                }}
              >
                <Image
                  src={`/${item.icon}`}
                  height="48"
                  width="48"
                  alt="PowerBI"
                />
                <h4
                  className="text-[26px] leading-[32px] my-5 font-bold text-[#101828]"
                  style={{
                    color: item.theme === "dark" ? "#fff" : "#101828",
                  }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-[#475467] text-[14px] font-normal leading-[22px] "
                  style={{
                    color: item.theme === "dark" ? "#fff" : "#101828",
                  }}
                >
                  {item.desc}
                </p>

                {item.cta !== "" ? (
                  <Link
                    href={"/"}
                    style={{
                      color: item.theme === "dark" ? "#fff" : "#0745D3",
                      borderColor: item.theme === "dark" ? "#fff" : "#0745D3",
                    }}
                    className=" flex transition-all mt-5 font-medium hover:opacity-75 border-b-2 w-fit border-[#101828] "
                  >
                    {item.cta}
                    <Icon
                      path={mdiArrowTopRight}
                      style={{ marginLeft: "0.5em" }}
                      size={1}
                    />
                  </Link>
                ) : null}
              </div>
            ))}
            {/* 6th Grid */}
            <div
              className="p-8 w-[400px] max-w-1/4 "
              style={{ display: ctaVisible ? "block" : "none" }}
            >
              <h4 className="text-[26px] leading-[32px] my-5 font-bold text-[#101828]">
                {ctaDesc}
              </h4>
              <Link
                href={"/"}
                className="min-w-max w-fit flex bg-[#0A002F] py-2 px-10 border-2 border-[#0A002F] font-medium text-base text-[#FFF] rounded-sm transition-all mb-3 hover:opacity-95 hover:scale-105"
              >
                {cta}
                <Icon
                  path={mdiArrowTopRight}
                  style={{ marginLeft: "0.5em" }}
                  size={1}
                />
              </Link>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default ServiceOfferingGrid;

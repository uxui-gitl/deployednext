import Image from "next/image";
import React from "react";
import MLExpertise from "../../public/MLExpertise.png";
import Icon from "@mdi/react";
import Link from "next/link";
import clsx from "clsx";
import { mdiArrowRight } from "@mdi/js";
const OfferingsGrid = ({ title, titleOnly, desc, columns, arr }) => {
  let col3 = "";
  let col2 = "";
  columns == "3" ? (col3 = "3") : (col2 = "2");
  return (
    <>
      <div className={` w-full bg-[#F2F4F7] py-32`}>
        <div
          className={`${
            titleOnly
              ? "text-center max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem]"
              : "text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem]"
          } `}
        >
          <div
            className={`${
              titleOnly
                ? "bg-[#F2F4F7] grid grid-cols-1 gap-5 sm:grid-cols-1 relative"
                : "bg-[#F2F4F7] grid grid-cols-1 gap-5 sm:grid-cols-2 relative"
            } `}
          >
            <div className="">
              <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                {title}
              </h3>
            </div>
            {desc && (
              <div>
                <p className="font-medium leading-[22px] ">{desc}</p>
              </div>
            )}
          </div>
        </div>

        <div
          className={clsx({
            "text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-3":
              col3,
            "text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-2":
              col2,
          })}
        >
          {arr.map((item, index) => (
            <div className="" key={item._id}>
              <Image
                src={`${item.image}`}
                className="w-[100%]"
                alt={item.title}
                width={200}
                height={200}
              />
              <div className="p-4 pb-0">
                <p className="text-[#101828] font-medium text-base leading-[22px]">
                  {item.title}
                </p>
                <p className="text-[#475467] text-[14px] font-normal my-4 leading-[22px]">
                  {item.desc}
                </p>
                {item.cta && item.link ? (
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
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OfferingsGrid;

import { mdiArrowRight, mdiArrowTopRight } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";

const AbstractCard = ({
  ribbon,
  desc,
  bgImgClass,
  bgColor,
  title,
  cta,
  link,
}) => {
  return (
    <div className={` w-full bg-[#FFF] py-32 `}>
      <div
        className={`text-left bg-[#F2F4F7] max-w-screen-xl ${bgImgClass} md:max-w-screen-xl mb-5 mx-auto py-[5rem] px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-1`}
      >
        <div className={`flex items-start flex-col justify-between  relative `}>
          <div>
            {ribbon ? (
              <h4 className={` font-medium text-[#0745D3] uppercase ribbon`}>
                {" "}
                {ribbon}
              </h4>
            ) : null}
          </div>
          <div className="">
            {title ? (
              <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                {" "}
                {title}
              </h3>
            ) : null}
          </div>
          <div>
            <p className="font-medium leading-[22px] md:w-[60%] ">{desc}</p>
          </div>
          <div className="max-w-max flex justify-start items-center my-5">
            <button
              type="submit"
              className="min-w-max flex bg-[#101828] py-2 px-10 border-2 border-[#101828] font-medium text-base text-[#f5f5f5] rounded-sm transition-all mb-3 hover:opacity-95 hover:scale-105"
            >
              {cta || "Send Message"}
              <Icon
                path={mdiArrowTopRight}
                style={{ marginLeft: "0.5em" }}
                size={1}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbstractCard;

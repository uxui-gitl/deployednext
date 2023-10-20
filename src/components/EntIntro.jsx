import React from "react";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import { mdiArrowTopRight } from "@mdi/js";
import { mdiPlayCircle } from "@mdi/js";
import Link from "next/link";
const EntIntro = ({ title, desc, cta, width, video }) => {
  return (
    <div className="text-center">
      <div className="relative w-full h-[90vh] overflow-hidden px-20">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover sm:object-fill z-0"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex justify-start items-center h-[100vh] sm:h-[90vh]">
          <div
            className={` flex text-white flex-col justify-start items-start max-w-max gap-5`}
          >
            <h1
              className={`w-[${width}] z-50 hidden sm:block sm:text-[68px] text-[34px] leading-[44px] sm:leading-[84px]	text-white font-semibold text-left`}
            >
              {title}
            </h1>

            <h1 className="z-50 sm:hidden sm:text-[68px] text-[34px] leading-[44px] sm:leading-[84px]	text-white font-bold text-left">
              {title}
            </h1>

            <h4 className="z-50 hidden text-left sm:block text-white text-[14px] sm:text-[16px] leading-[22px] mb-[24px]">
              We drive digital business revolution for tangible results, <br />
              optimized bottom line and a dynamic digital edge
            </h4>

            <h4 className="z-50 sm:hidden text-left text-white text-[14px] sm:text-[16px] px-7 leading-[22px] mb-[24px]">
              {desc}
            </h4>

            <div className="z-50 flex gap-4 flex-col sm:flex-row justify-center items-center align-middle">
              <Link
                href={"/"}
                className="min-w-max flex bg-[#F5F5F5] py-2 px-10 border-2 border-[#F5F5F5] font-medium text-base text-[#101828] rounded-sm transition-all mb-3 hover:opacity-95 hover:scale-105"
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
      </div>
    </div>
  );
};

export default EntIntro;

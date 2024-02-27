import React from "react";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import { mdiArrowTopRight } from "@mdi/js";
import { mdiPlayCircle } from "@mdi/js";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

const EntIntro = ({
  title,
  desc,
  cta,
  width,
  video,
  fs,
  leading,
  alignment,
}) => {
  return (
    <div className="text-center">
      <div className="relative w-full h-[100vh] sm:h-[90vh] overflow-hidden md:px-20 ">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover sm:object-fill z-0"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex justify-start items-center h-[100vh]  sm:h-[90vh]">
          <div
            className={` flex text-white flex-col justify-start ${
              alignment && alignment == "center"
                ? "items-center"
                : "items-start"
            }  w-full gap-5 px-[2rem] md:px-[4.5rem]`}
          >
            <h1
              className={`sm:w-[${width}] ${
                alignment && alignment == "center"
                  ? "text-center"
                  : "text-start"
              } w-full z-50 sm:block sm:text-[42px] sm-[${fs}] text-[34px] leading-[44px] sm:leading-[${leading}] sm:leading-[52px] text-white font-bold sm:font-semibold text-left`}
              style={{ width: "100%", maxWidth: width }}
            >
              <Balancer>{title}</Balancer>
            </h1>

            <h4
              style={{ width: width }}
              className={`z-50  ${
                alignment && alignment == "center"
                  ? "text-center"
                  : "text-start"
              } text-left sm:block text-white text-[14px] sm:text-[16px] leading-[22px] mb-[24px]`}
            >
              <Balancer>{desc}</Balancer>
            </h4>

            <div className="z-50 flex gap-4 flex-col sm:flex-row justify-center items-center align-middle">
              <Link
                href={"#Contact"}
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

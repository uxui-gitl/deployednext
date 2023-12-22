import React from "react";
import { TypeAnimation } from "react-type-animation";
import poster from "../../../public/poster.jpg";

import styles from "./intro.module.css";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

import { mdiPlayCircle } from "@mdi/js";
import Link from "next/link";

const Intro = () => {
  return (
    <div id="intro" className="text-center">
      <div className="relative w-full h-[90vh] overflow-hidden px-[2rem]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover sm:object-fill z-0"
          autoPlay
          loop
          muted
        >
          <source src="/GITLBanner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="mt-[4rem]">
          <div
            className={`${styles["intro-wrap"]} flex text-white flex-col justify-center align-center max-w-max mx-auto gap-5`}
          >
            <h1 className="hidden sm:block sm:text-[68px] text-[34px] leading-[44px] sm:leading-[84px]	text-white font-semibold text-center">
              Delivering Business Value <br /> with{" "}
              <TypeAnimation
                className="typewriter-text text-white"
                style={{ fontSize: "1em!important" }}
                speed={{ type: "keyStrokeDelayInMs", value: 180 }}
                sequence={[
                  "Automation",
                  1000,
                  "Cloud", //  Continuing previous Text
                  1000,
                  "Transformation",
                  1000,
                ]}
                repeat={Infinity}
              />
            </h1>

            <h1 className="sm:hidden sm:text-[68px] text-[34px] leading-[44px] sm:leading-[84px]	text-white font-bold text-center">
              Delivering Business <br /> Value with <br />{" "}
              <TypeAnimation
                className="typewriter-text text-white"
                style={{ fontSize: "1em!important" }}
                speed={{ type: "keyStrokeDelayInMs", value: 180 }}
                sequence={[
                  "Automation",
                  1000,
                  "Cloud", //  Continuing previous Text
                  1000,
                  "Transformation",
                  1000,
                ]}
                repeat={Infinity}
              />
            </h1>

            <h4 className="hidden sm:block text-white text-[14px] sm:text-[16px] leading-[22px] mb-[24px]">
              Revolutionize your business operations, save time and boost
              productivity <br /> with our cutting-edge offerings.
            </h4>

            <h4 className="sm:hidden text-white text-[14px] sm:text-[16px] px-7 leading-[22px] mb-[24px]">
              Revolutionize your business operations, save time and boost
              productivity with our cutting-edge offerings.
            </h4>

            <div className="flex gap-4 flex-col sm:flex-row justify-center items-center align-middle">
              <a
                href="/"
                className="text-[#101828] bg-[#F5F5F5] font-medium sm:font-normal rounded-sm	 capitalize max-w-max px-[2rem] sm:px-5 py-[0.55rem] sm:py-2 border flex"
              >
                let&#39;s Connect
                <span>
                  <Icon
                    path={mdiArrowRight}
                    style={{ marginLeft: "0.5em" }}
                    size={1}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

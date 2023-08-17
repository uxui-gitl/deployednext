
import React from "react";
import { TypeAnimation } from "react-type-animation";
import poster from "../../../public/poster.jpg";

import styles from "./intro.module.css";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

import { mdiPlayCircle } from "@mdi/js";

const Intro = () => {
  return (
    <div id="intro" className="text-center">
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
        >
          <source src="/GITLBanner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="">
        <div
        className={`${styles["intro-wrap"]} flex text-white flex-col justify-center align-center max-w-max mx-auto gap-5`}
      >
        <h1 className="text-[68px] leading-[84px]	text-white font-bold text-center">
          Delivering Business Value <br /> with{" "}
          <TypeAnimation
            className="typewriter-text text-white"
            style={{ fontSize: "1em!important" }}
            speed={{ type: "keyStrokeDelayInMs", value: 180 }}
            sequence={[
              "Automation",
              1000,
              "Cloudification", //  Continuing previous Text
              1000,
              "Transformation",
              1000,
            ]}
            repeat={Infinity}
          />
        </h1>
        <h4 className="text-white mb-[24px]">
          Revolutionize your business operations, save time and boost
          productivity <br /> with our cutting-edge offerings..
        </h4>
        <div className="flex gap-4 flex-row justify-center align-middle">
          <a
            href="/"
            className="text-[#101828] bg-[#F5F5F5] font-normal rounded-sm	 capitalize max-w-max px-5 py-2 border flex"
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
          <a
            href="/"
            className="text-[#F5F5F5] bg-transparent font-normal capitalize max-w-max px-5 py-2 underline underline-offset-8 flex"
          >
            <Icon path={mdiPlayCircle} size={1} className="me-2" /> Co-operate
            Video
          </a>
        </div>
         
      </div>
        </div>
      </div>
      
    </div>
  );
};

export default Intro;
 
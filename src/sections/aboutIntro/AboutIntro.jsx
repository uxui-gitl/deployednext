"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import poster from "../../../public/poster.jpg";

import styles from "./aboutIntro.module.css";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

import { mdiPlayCircle } from "@mdi/js";
import Link from "next/link";
import Image from "next/image";
import profilePic from "/public/about/video.png";

const AboutIntro = () => {
  return (
    <div
      className={`${styles.visionWrap} relative w-full h-[90vh] overflow-hidden px-[2rem] flex justify-center flex-row items-center`}
    >
      <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] grid grid-cols-2 gap-16">
        <div className="flex flex-col justify-center items-start ">
          <h3 className="leading-[52px] text-[42px] mb-3 font-bold">
            BUILDING ROBUST TOMORROW FOR GLOBAL BUSINESSES WITH PROVEN TECHNOLOGY EXPERTISE
          </h3>
          <div>
            <a
              href="/"
              className="text-[#101828] bg-[#F5F5F5] font-medium sm:font-normal rounded-sm   max-w-max px-[2rem] sm:px-5 py-[0.55rem] sm:py-2 border flex"
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
        <div className=" ">
          <Image src={profilePic} alt="About us" placeholder="blur" />
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import curiousPerson from "../../public/upgradeCloud/curiousPerson.png";
import cloud from "../../public/upgradeCloud/cloud.png";
import cloudArrows from "../../public/upgradeCloud/cloudArrows.png";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import { mdiArrowTopRight } from "@mdi/js";
import { mdiDomain } from "@mdi/js";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Accordion from "./Accordion";
const accordion = [
  {
    _id: 1,
    icon: "gear",
    title: "Future of Projects  ",
    desc: "",
    cta: "Know More",
    ctaUrl: "/",
    list: [
      {
        title: "External integration with project monitoring tools  ",
        url: "/",
      },
      {
        title: "Mobile applications for task assignment",
        url: "/",
      },
      {
        title: "After sales service",
        url: "/",
      },
      {
        title: "Data Security & Digital Documentation ",
        url: "/",
      },
      {
        title: "Multi site management  ",
        url: "/",
      },
      {
        title: "Project Task Assignment & Management  ",
        url: "/",
      },
      {
        title: "Remote Work and Cost Accuracy   ",
        url: "/",
      },
    ],
  },
  {
    _id: 2,
    icon: "gear",
    title: "IoT Enabled Products ",
    desc: "",
    cta: "Know More",
    ctaUrl: "/",
    list: [
      {
        title: "External integration with project monitoring tools  ",
        url: "/",
      },
      {
        title: "Mobile applications for task assignment",
        url: "/",
      },
      {
        title: "After sales service",
        url: "/",
      },
      {
        title: "Data Security & Digital Documentation ",
        url: "/",
      },
      {
        title: "Multi site management  ",
        url: "/",
      },
      {
        title: "Project Task Assignment & Management  ",
        url: "/",
      },
      {
        title: "Remote Work and Cost Accuracy   ",
        url: "/",
      },
    ],
  },
  {
    _id: 3,
    icon: "gear",
    title: "Supply Chain Management  ",
    desc: "",
    cta: "Know More",
    ctaUrl: "/",
    list: [
      {
        title: "External integration with project monitoring tools  ",
        url: "/",
      },
      {
        title: "Mobile applications for task assignment",
        url: "/",
      },
      {
        title: "After sales service",
        url: "/",
      },
      {
        title: "Data Security & Digital Documentation ",
        url: "/",
      },
      {
        title: "Multi site management  ",
        url: "/",
      },
      {
        title: "Project Task Assignment & Management  ",
        url: "/",
      },
      {
        title: "Remote Work and Cost Accuracy   ",
        url: "/",
      },
    ],
  },
  {
    _id: 4,
    icon: "gear",
    title: "Performance Management ",
    desc: "",
    cta: "Know More",
    ctaUrl: "/",
    list: [
      {
        title: "External integration with project monitoring tools  ",
        url: "/",
      },
      {
        title: "Mobile applications for task assignment",
        url: "/",
      },
      {
        title: "After sales service",
        url: "/",
      },
      {
        title: "Data Security & Digital Documentation ",
        url: "/",
      },
      {
        title: "Multi site management  ",
        url: "/",
      },
      {
        title: "Project Task Assignment & Management  ",
        url: "/",
      },
      {
        title: "Remote Work and Cost Accuracy   ",
        url: "/",
      },
    ],
  },
  // Add more items as needed
];
const Capabilities = ({ ribbon, title, desc, arr }) => {
  return (
    <>
      <div className={` w-full bg-[#F2F4F7] text-[#101828]`}>
        <div className="text-left max-w-screen-xl md:max-w-screen-xl   mx-auto p-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* left */}
          <div className=" flex items-start flex-col justify-start mt-10  relative">
            <div className="">
              <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                {title}
              </h3>
              <p className="font-medium leading-[22px] md:w-[90%] ">{desc}</p>
            </div>
          </div>
          {/* right */}
          <div className=" min-h-48  ">
            <div>
              <Accordion items={arr && arr ? arr : accordion} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Capabilities;

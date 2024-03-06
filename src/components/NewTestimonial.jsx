import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import puzzle from "../../public/upgradeCloud/puzzle.png";
import "swiper/css/pagination";

import { mdiArrowLeft, mdiBullseyeArrow } from "@mdi/js";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import Icon from "@mdi/react";
import { motion } from "framer-motion";

import { mdiDomain } from "@mdi/js";
import clsx from "clsx";

const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * index,
    },
  }),
};
const NewTestimonial = ({ ribbon, title, ribbonVisible, desc, arr }) => {
  return (
    <>
      <div
        id="Testimonial"
        className={" max-w-screen-xl text-left  mb-5 mx-auto p-5   px-[2rem]"}
      >
        <div className=" mt-[5em] mb-[2em]">
          {ribbonVisible ? (
            <h4
              className={` text-[16px] font-medium text-[#0745D3] uppercase ribbon mb-4`}
            >
              {ribbon}
            </h4>
          ) : null}

          <div className={`grid grid-cols-1 md:grid-cols-1 gap-4`}>
            <h3 className="text-4xl leading-[42px] font-bold">
              {title && title}
            </h3>

            <p className="font-normal leading-[22px]">{desc && desc}</p>
          </div>
        </div>

        <div className={` w-full flex pb-12 `}>
          <Swiper
            slidesPerView={"auto"}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            className=" flex-grow"
          >
            {arr.map((item, index) => {
              const backgroundColor =
                index % 3 === 0
                  ? "bg-[#EDF1FF] text-[#032573]"
                  : index % 2 === 0
                  ? "bg-[#FFF8E5] text-[#806113]"
                  : "bg-[#E5F8EE] text-[#224D37]";

              const borderColor =
                index % 3 === 0
                  ? "bg-[#0745D3]"
                  : index % 2 === 0
                  ? "bg-[#F4C447]"
                  : "bg-[#429268]";

              return (
                <SwiperSlide
                  style={{ height: "auto" }}
                  key={item._id}
                  className="sm:w-full md:w-1/3 flex flex-col justify-between  mr-4  relative group"
                >
                  <motion.div
                    key={item._id}
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    custom={index}
                    className={`  mx-2 flex flex-col h-full ${backgroundColor}`}
                  >
                    <div
                      className={`p-5 w-full h-full flex flex-col justify-between`}
                    >
                      <div
                        className={
                          "block  text-clip text-[#475467] leading-[22px] text-sm pt-[16px]  pb-[14px]"
                        }
                      >
                        {item.description}
                      </div>
                      <div>
                        <p class="text-sm font-medium text-[#101828] leading-[22px]">
                          {item.clientDesignation}
                        </p>
                      </div>
                    </div>

                    <div className={`w-full p-1  ${borderColor}`}></div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default NewTestimonial;

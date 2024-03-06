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

const Expertise = ({ ribbon, title, desc, arr, ribbonTxtWhite, children }) => {
  return (
    <>
      <div
        id="OurExpertise"
        className={`bg-expertise w-full bg-[#31094a] bg-gradient-to-r from-[#31094a] via-[#1d0845]  to-[#0e002a]  text-[#DBDBDB]`}
      >
        <div className="text-left  max-w-screen-xl    mx-auto p-5        pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* left */}
          <div className=" flex items-start flex-col justify-center  relative">
            <div className="">
              <h4
                style={{ color: ribbonTxtWhite && "white" }}
                className={` font-medium text-[#0745D3] uppercase ribbon`}
              >
                {ribbon}
              </h4>
              <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                {title}
              </h3>
              <p className="font-medium leading-[22px] md:w-[90%] ">{desc}</p>
            </div>
            <div className="max-w-max flex justify-start items-center my-5 hidden">
              <Link
                href={"/"}
                className="min-w-max flex bg-[#F5F5F5] py-2 px-10 border-2 border-[#F5F5F5] font-medium text-base text-[#101828] rounded-sm transition-all mb-3 hover:opacity-95 hover:scale-105"
              >
                Let&apos;s Connect
                <Icon
                  path={mdiArrowRight}
                  style={{ marginLeft: "0.5em" }}
                  size={1}
                />
              </Link>
            </div>
          </div>
          {/* right */}
          <div
            className=" min-h-48 max-h-[75vh] overflow-hidden"
            id="expertise-slide"
          >
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination]}
              direction={"vertical"}
              mousewheel={{
                invert: true,
              }}
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  // will set `translateZ(-400px)` on previous slides
                  translate: [0, 0, -400],
                },
                next: {
                  // will set `translateX(100%)` on next slides
                  translate: ["100%", 0, 0],
                },
              }}
              slidesPerView={3}
              loop={true}
            >
              {arr.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className=" px-20 py-5 rounded-sm text-[#EDF1FF] min-h-fit max-h-60"
                >
                  <div>
                    <p className="text-[36px] item-title font-bold leading-[46px]">
                      {item.title}
                    </p>
                    <p className="item-desc">{item.desc}</p>
                  </div>
                </SwiperSlide>
              ))}{" "}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;

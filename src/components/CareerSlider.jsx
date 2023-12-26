"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

import career1 from "../../public/careers/career1.png";
import career2 from "../../public/careers/career2.png";
import career3 from "../../public/careers/career3.png";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

const CareerSlider = () => {
  return (
    <>
      <>
        <div className="flex flex-row justify-center items-center mt-10 py-10">
          <p className="text-base font-medium text-center">
            <Balancer>
              Dive into brilliant career experience to manifest the excellence
              in you. <br className="hidden md:block" /> Discover next big{" "}
              <Link href={"/"} className="text-[#0745D3]">
                opportunities here
              </Link>
              .{" "}
            </Balancer>
          </p>
        </div>
      </>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <Image src={career1} alt="careers" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image src={career2} alt="careers" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image src={career3} alt="careers" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image src={career1} alt="careers" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image src={career2} alt="careers" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image src={career3} alt="careers" />
          </div>
        </SwiperSlide>
      </Swiper>
      <></>
    </>
  );
};

export default CareerSlider;

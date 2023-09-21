import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "./testimonial.module.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import Icon from "@mdi/react";
import { motion } from "framer-motion";

import { mdiDomain } from "@mdi/js";
import { Cursor } from "react-creative-cursor";

import "react-creative-cursor/dist/styles.css";

const Testimonials = () => {
  const clientTestimonials = [
    {
      id: 1,
      clientName: "Mr. Mahmoud Dauk",
      clientDesignation: "IT Director, Al Mada ",
      thumbnail: "1",
      description:
        "GITL helped us in accelerating digital transformation journey with Business Central on Azure cloud and Power BI solution. As a result, our material requisition efficiency has increased by 66%, time taken in processing purchase orders is reduced by 79% and invoice processing efficiency has improved by 60%.",
      category: "static",
      link: "/",
    },
    {
      id: 2,
      clientName: "Mr. Shibu Mathew",
      clientDesignation: "Principal Manager, JGC Gulf",
      thumbnail: "2",
      description:
        "GITL upgraded Dynamics AX to Business Central on SAAS - and integrated Power BI seamlessly. The upgradation to an all-inclusive solution significantly helped us in taking control over our finance and budgeting processes.",
      category: "video",
      link: "/video",
    },
    {
      id: 3,
      clientName: "Rahul Mahajan",
      clientDesignation: "Head of Operations, TCS",
      thumbnail: "3",
      description:
        "Salesforce Sales Cloud implementation connected out complete lead-to-order cycle in customers' journey. GITL team proved their Infor LN expertise  and project management abilities by achieving highly challenging deadline.",
      category: "static",
      link: "/",
    },
    {
      id: 4,
      clientName: "Mr. Mahmoud Dauk",
      clientDesignation: "IT Director, Al Mada ",
      thumbnail: "1",
      description:
        "GITL helped us in accelerating digital transformation journey with Business Central on Azure cloud and Power BI solution. As a result, our material requisition efficiency has increased by 66%, time taken in processing purchase orders is reduced by 79% and invoice processing efficiency has improved by 60%.",
      category: "static",
      link: "/",
    },
    {
      id: 5,
      clientName: "Mr. Shibu Mathew",
      clientDesignation: "Principal Manager, JGC Gulf",
      thumbnail: "2",
      description:
        "GITL upgraded Dynamics AX to Business Central on SAAS - and integrated Power BI seamlessly. The upgradation to an all-inclusive solution significantly helped us in taking control over our finance and budgeting processes.",
      category: "video",
      link: "/video",
    },
    {
      id: 6,
      clientName: "Rahul Mahajan",
      clientDesignation: "Head of Operations, TCS",
      thumbnail: "3",
      description:
        "Salesforce Sales Cloud implementation connected out complete lead-to-order cycle in customers' journey. GITL team proved their Infor LN expertise  and project management abilities by achieving highly challenging deadline.",
      category: "static",
      link: "/",
    },
  ];

  return (
    <>
      {/* <Cursor isGelly={true} /> */}
      {/* <div className='w-screen-lg px-[2rem] mx-auto lg:px-0 lg:max-w-screen bg-[#F2F2F2]'>
        <div class="grid grid-cols-14 gap-4">
          <div class="col-start-3 col-span-4 ml-[30px] bg-[#f20]">
            <h4
              className={` font-medium text-[#0745D3] uppercase ribbon`}
            >
              CLIENT TESTIMONIALS
            </h4>
            <div className="flex flex-col gap-4">
              <h3 className="text-4xl leading-[42px] font-bold">
                What Experts think About us
              </h3>
              <p className="font-normal leading-[22px]">
                Discover how we have helped our clients to realize tangible outcomes aligned with their business goals.
              </p>
            </div>
          </div>
          <div class="col-start-7 col-span-8 bg-[#f20]">
          <Swiper
                className={`mySwiper pb-8`}
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
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
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                modules={[Autoplay, Pagination]}
              >
                {
                  clientTestimonials.map((ct, index) => (
                    <SwiperSlide key={ct.id} className='min-w-[300px] pb-8'>
                      <div className=''>
                        <div>
                          <Image src={`/testimonial-${ct.id}.png`}
                            alt="blog post"
                            width="315"
                            height="200" />
                        </div>
                        <div className=''>
                          <p
                            className={` text-clip text-[#475467] leading-[22px] text-sm pt-[16px]  pb-[14px]`}
                          >
                            {`“${ct.description}”`}
                          </p>
                        </div>
                        <div className='flex flex-row justify-start items-start'>
                          <div className='mr-4'>
                            <Icon path={mdiDomain} size={1} />
                          </div>
                          <div>
                            <p className='text-base font-medium text-[#101828] leading-[22px]'>{ct.clientName}</p>
                            <p className='text-sm font-normal text-[#101828] leading-[22px]'>{ct.clientDesignation}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
          </div>
        </div>
      </div> */}

      <div className="w-screen-lg mx-auto pl-[2rem] lg:px-0 lg:max-w-screen bg-[#F5F5F5]">
        <div className="pt-[5em] pb-[2em]">
          <div className="grid lg:grid-cols-7 grid-cols-1 gap-4">
            <div className="col-span-1 col-start-1 col-end-2 lg:col-start-2 lg:col-end-4 ">
              <h4 className={` font-medium text-[#0745D3] uppercase ribbon`}>
                CLIENT TESTIMONIALS
              </h4>
              <div className="flex flex-col gap-4">
                <h3 className="text-4xl leading-[42px] font-bold">
                  What Experts think About us
                </h3>
                <p className="font-normal leading-[22px]">
                  Discover how we have helped our clients to realize tangible
                  outcomes aligned with their business goals.
                </p>
              </div>
            </div>

            {/* Slider Section */}
            <div
              data-cursor-text="Drag"
              data-cursor-size="100px"
              className="col-span-1 col-start-1 col-end-2 lg:col-start-4 lg:col-span-4 hover:cursor-grab"
            >
              <Swiper
                className={`mySwiper pb-8`}
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
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
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                modules={[Autoplay, Pagination]}
              >
                {clientTestimonials.map((ct, index) => (
                  <SwiperSlide key={ct.id} className="min-w-[300px] pb-8">
                    <div className="">
                      <div>
                        <Image
                          src={`/testimonial-${ct.id}.png`}
                          alt="blog post"
                          width="315"
                          height="200"
                        />
                      </div>
                      <div className="">
                        <p
                          className={` text-clip text-[#475467] leading-[22px] text-sm pt-[16px]  pb-[14px]`}
                        >
                          {`“${ct.description}”`}
                        </p>
                      </div>
                      <div className="flex flex-row justify-start items-start">
                        <div className="mr-4">
                          <Icon path={mdiDomain} size={1} />
                        </div>
                        <div>
                          <p className="text-base font-medium text-[#101828] leading-[22px]">
                            {ct.clientName}
                          </p>
                          <p className="text-sm font-normal text-[#101828] leading-[22px]">
                            {ct.clientDesignation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

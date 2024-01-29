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

import { mdiDomain } from "@mdi/js";

const NewTestimonial = ({ ribbon, title, desc, arr }) => {
  return (
    <>
      <>
        <>
          <div className={` w-full bg-[#f2f4f7] py-24`}>
            <>
              <div className="max-w-screen-xl mx-auto px-[2rem] bg-[#f2f4f7]">
                <div className="  ">
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-center">
                    <h3 className="text-left text-4xl leading-[42px] font-bold">
                      On-premises <br /> Infrastructure Challenges
                    </h3>
                  </div>
                </div>
              </div>
            </>
            <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="bg-[#f2f4f7] flex items-start flex-col justify-start">
                <div className="mx-auto">
                  <Image src={puzzle} alt="puzzle" />
                </div>
              </div>
              <div>
                <div>
                  <ul>
                    {[
                      {
                        id: 1,
                        text: "Inadequate Scalability and Availability",
                      },
                      {
                        id: 2,
                        text: "Unreliable Backup Storage",
                      },
                      {
                        id: 3,
                        text: "Weak Disaster Recovery and Redundancy",
                      },
                      {
                        id: 4,
                        text: "Inadequate Data Integrity and Automation Capabilities",
                      },
                      {
                        id: 5,
                        text: "Subpar IT Performance",
                      },
                      {
                        id: 6,
                        text: "Limited IT Universality and Centralized Monitoring",
                      },
                      {
                        id: 7,
                        text: "High Management Costs of IT Infrastructure",
                      },
                    ].map((list) => (
                      <li key={list.id}>
                        {" "}
                        <p className="flex gap-4 mb-4 border-dashed border-b-2 pb-3 text-base leading-[22px]">
                          <span className="">
                            <Icon
                              path={mdiBullseyeArrow}
                              color="dodgerblue"
                              size={1}
                            />
                          </span>
                          {list.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      </>

      <>
        <div class="w-full  bg-[#ededed] py-8 pl-4  md:py-16 md:pl-8">
          <div class="bg-yellow-50 flex">
            <div class="w-1/3">
              <h4 className={` font-medium text-[#0745D3] uppercase ribbon`}>
                {ribbon}
              </h4>
              <div className="flex flex-col gap-4">
                <h3 className="text-4xl leading-[42px] font-bold">{title}</h3>
                <p className="font-normal leading-[22px]">{desc}</p>
              </div>
            </div>
            <div>
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
                {arr &&
                  arr.map((ct) => (
                    <SwiperSlide key={ct.id} className="min-w-[300px] pb-8">
                      <div className="">
                        <div>
                          <Image
                            src={`/testimonial-${ct.id}.png`}
                            alt="blog post"
                            width="315"
                            height="200"
                            className="w-[100%]"
                          />
                        </div>
                        <div className="flex flex-row justify-start items-start pb-4">
                          <div className="mr-4 hidden">
                            <Icon path={mdiDomain} size={1} />
                          </div>
                          <div>
                            <p className="text-base font-medium text-[#101828] leading-[22px]">
                              {ct.clientName}
                            </p>
                          </div>
                        </div>
                        <div className="">
                          <p
                            className={` text-clip text-[#475467] leading-[22px] text-sm pt-[16px]  pb-[14px]`}
                          >
                            {`"${ct.description}"`}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#101828] leading-[22px]">
                            {ct.clientDesignation}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div class="">spacer</div>
        <div class="w-full mx-auto max-w-screen-xl pl-4 py-8 md:max-w-screen-xl md:pl-4 mr-0 md:py-16">
          <div class="flex w-full flex-col gap-4 bg-yellow-50 md:flex-row">
            <div class="w-1/3">responsive</div>
            <div>slider</div>
          </div>
        </div>
      </>
    </>
  );
};

export default NewTestimonial;

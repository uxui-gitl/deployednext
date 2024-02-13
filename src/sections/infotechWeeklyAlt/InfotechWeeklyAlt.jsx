"use client";
import React from "react";

import styles from "./InfotechWeeklyAlt.module.css";
import Image from "next/image";
import Link from "next/link";

import Icon from "@mdi/react";
import { motion } from "framer-motion";

import { mdiDomain } from "@mdi/js";
import { Cursor } from "react-creative-cursor";
import { mdiArrowRight } from "@mdi/js";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 * index,
    },
  }),
};

const InfotechWeeklyAlt = (props) => {
  const caseStudies = [
    {
      id: 1,
      title:
        "Adhesive Manufacturer cuts open ticket volume by 25% with Managed Services in .NET, SharePoint and PHP",
      thumbnail: "1",
      description: "",
      tags: ["Automation"],
      date: "20 Jan 2023",
      cta: "Read article",
      link: "/",
    },
    {
      id: 2,
      title:
        "KSA based Coffee Brand Distributor  minimizes intercompany transaction time with Cloud-based D365 Finance, SCM & Commerce implementation",
      thumbnail: "2",
      description: "",
      tags: ["Cloudification"],
      date: "20 Jan 2023",
      cta: "Read article",
      link: "/",
    },
    {
      id: 3,
      title:
        "How Electrical Component Manufactures slashes 30% of manual effort with Infor LN implementation ",
      thumbnail: "3",
      description: "",
      tags: ["Transformation"],
      date: "20 Jan 2023",
      cta: "Read article",
      link: "/",
    },
    {
      id: 4,
      title:
        "Adhesive Manufacturer cuts open ticket volume by 25% with Managed Services in .NET, SharePoint and PHP",
      thumbnail: "1",
      description: "",
      tags: ["Automation"],
      date: "20 Jan 2023",
      cta: "Read article",
      link: "/",
    },
    {
      id: 5,
      title:
        "KSA based Coffee Brand Distributor  minimizes intercompany transaction time with Cloud-based D365 Finance, SCM & Commerce implementation",
      thumbnail: "2",
      description: "",
      tags: ["Cloudification"],
      date: "20 Jan 2023",
      cta: "Read article",
      link: "/",
    },
    {
      id: 6,
      title:
        "How Electrical Component Manufactures slashes 30% of manual effort with Infor LN implementation ",
      thumbnail: "3",
      description: "",
      tags: ["Transformation"],
      date: "20 Jan 2023",
      cta: "Read article",
      link: "/",
    },
  ];

  return (
    <>
      <div className={` hidden w-full bg-[#f2f4f7] py-32`}>
        <div
          // className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] grid grid-cols-1 sm:grid-cols-2 "
          className={`text-left max-w-screen-xl  mb-5 mx-auto p-5 grid grid-cols-1 sm:grid-cols-2  px-[2rem]`}
        >
          <div className="flex items-start flex-col justify-around ">
            <div>
              <h4
                className={`${styles.subHead} font-medium text-[#0745D3] uppercase ribbon`}
              >
                Never miss a tech beat!
              </h4>
              <h3 className="text-4xl  leading-[42px] mb-3 font-bold">
                Infotech Exclusive
              </h3>
              <p className="font-medium leading-[22px] md:w-[90%] ">
                Discover why our clients trust us and dive into our insights
                section. Empower your decision with right knowledge and stay in
                the vanguard.
              </p>
            </div>

            <div className="">
              <p className="font-medium leading-[22px] md:w-[90%] mb-4">
                Subscribe NOW for Updates!
              </p>
              <div
                className={`${styles["containerx"]}  flex justify-start text-left `}
              >
                <form
                  action=""
                  className="containerx flex justify-center w-full sm:w-auto my-4 flex-col sm:flex-row items-center"
                >
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Email Address"
                  />
                  <button type="submit" className="flex w-auto mt-4 sm:mt-0">
                    Join{" "}
                    <Icon
                      path={mdiArrowRight}
                      style={{ marginLeft: "0.5em" }}
                      size={1}
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className=" ">
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
                {caseStudies.map((cs, index) => (
                  <SwiperSlide key={cs.id} className="min-w-[300px] pb-8">
                    <>
                      <div className={`${styles["iw-card-img-wrap"]} relative`}>
                        <Image
                          src={`/project-${cs.thumbnail}.png`}
                          alt={`${cs.tags}`}
                          width="315"
                          height="200"
                          className="w-full h-auto lg:w-315 lg:h-200"
                        />
                        <div className="absolute bottom-4 left-4 flex justify-start items-center space-x-2">
                          <p className="text-sm bg-[#fff] text-[#101828] px-2 py-1 rounded font-medium ">
                            {`${cs.tags}`}
                          </p>
                        </div>
                      </div>
                      <div className={`${styles["iw-card-content"]}`}>
                        {/* <p className={`text-[#98A2B3] font-bold`}>Cloudification</p> */}
                        <p
                          className={`uppercase hidden text-[#101828] font-medium text-[12px]`}
                        >
                          {`${cs.date}`}
                        </p>
                        <p
                          className={`text-base font-normal pt-[14px] pb-2 leading-[22px] text-[#101828]`}
                        >
                          {" "}
                          {`${cs.title}`}{" "}
                        </p>
                        <p
                          className={`${
                            styles["iw-card-content-desc"]
                          } text-clip  text-[#475467] text-sm ${
                            cs.description.length <= 0 ? "hidden" : "block"
                          }`}
                        >
                          {`${cs.description}`}
                        </p>

                        <p className={styles["iw-card-content-link-wrap"]}>
                          <Link
                            href={`${cs.link}`}
                            className={`${styles["iw-card-content-link"]} hover:underline mt-2 me-3 text-[#0745D3] text-sm font-medium`}
                          >
                            {`${cs.cta}`}
                          </Link>
                        </p>
                      </div>
                    </>
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

export default InfotechWeeklyAlt;

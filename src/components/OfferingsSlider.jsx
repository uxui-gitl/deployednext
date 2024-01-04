import Icon from "@mdi/react";
import Link from "next/link";
import React from "react";
import { mdiArrowRight } from "@mdi/js";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Accordion from "./Accordion";

const OfferingsSlider = ({ arr, subArr, header }) => {
  return (
    <>
      <div className={` w-full bg-[#FFF] py-20`}>
        <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-1">
          {/* left */}
          <div className="bg-[#FFF] flex items-center flex-col justify-between  relative">
            <div className="">
              {header && header.length > 0 ? (
                <h3 className="text-[42px] leading-[54px] mb-3 font-bold ">
                  {header[0].title}
                </h3>
              ) : (
                <h3 className="text-[42px] leading-[54px] mb-3 font-bold ">
                  GITL proposed offerings
                </h3>
              )}
            </div>
          </div>
        </div>
        <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-3 overflow-hidden">
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
            className="mySwiper"
          >
            {arr.map((item, index) => (
              <SwiperSlide
                key={item._id}
                className="w-1/3 max-w-[500px] mr-4  relative group"
              >
                <div className="bg-[#EDF1FF] h-full  " key={item._id}>
                  <div className=" h-full flex flex-col justify-start">
                    <div className="w-full mb-4 ">
                      <Image
                        className="w-full"
                        src={`/${item.image}`}
                        height={200}
                        width={290}
                        alt=""
                      />
                    </div>
                    <div className="flex justify-between flex-col h-full">
                      <div className="p-4">
                        <p className="text-[#101828] font-bold text-[30px] leading-[36px]">
                          {item.title}
                        </p>
                        <p className="text-[#101828] text-[12px] font-normal my-4 leading-[18px]">
                          {item.desc}
                        </p>
                      </div>
                      <div>
                        <div className="p-4 flex flex-col justify-end h-100">
                          {subArr && subArr !== "" ? (
                            <Accordion
                              items={[
                                {
                                  _id: 1,
                                  icon: "gear",
                                  title: "Future of Projects  ",
                                  desc: "",
                                  cta: "Know More",
                                  ctaUrl: "/",
                                  list: [
                                    {
                                      title:
                                        "External integration with project monitoring tools  ",
                                      url: "/",
                                    },
                                    {
                                      title:
                                        "Mobile applications for task assignment",
                                      url: "/",
                                    },
                                    {
                                      title: "After sales service",
                                      url: "/",
                                    },
                                    {
                                      title:
                                        "Data Security & Digital Documentation ",
                                      url: "/",
                                    },
                                    {
                                      title: "Multi site management  ",
                                      url: "/",
                                    },
                                    {
                                      title:
                                        "Project Task Assignment & Management  ",
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
                                      title:
                                        "External integration with project monitoring tools  ",
                                      url: "/",
                                    },
                                    {
                                      title:
                                        "Mobile applications for task assignment",
                                      url: "/",
                                    },
                                    {
                                      title: "After sales service",
                                      url: "/",
                                    },
                                    {
                                      title:
                                        "Data Security & Digital Documentation ",
                                      url: "/",
                                    },
                                    {
                                      title: "Multi site management  ",
                                      url: "/",
                                    },
                                    {
                                      title:
                                        "Project Task Assignment & Management  ",
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
                                      title:
                                        "External integration with project monitoring tools  ",
                                      url: "/",
                                    },
                                    {
                                      title:
                                        "Mobile applications for task assignment",
                                      url: "/",
                                    },
                                    {
                                      title: "After sales service",
                                      url: "/",
                                    },
                                    {
                                      title:
                                        "Data Security & Digital Documentation ",
                                      url: "/",
                                    },
                                    {
                                      title: "Multi site management  ",
                                      url: "/",
                                    },
                                    {
                                      title:
                                        "Project Task Assignment & Management  ",
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
                                      title:
                                        "External integration with project monitoring tools  ",
                                      url: "/",
                                    },
                                    {
                                      title:
                                        "Mobile applications for task assignment",
                                      url: "/",
                                    },
                                    {
                                      title: "After sales service",
                                      url: "/",
                                    },
                                    {
                                      title:
                                        "Data Security & Digital Documentation ",
                                      url: "/",
                                    },
                                    {
                                      title: "Multi site management  ",
                                      url: "/",
                                    },
                                    {
                                      title:
                                        "Project Task Assignment & Management  ",
                                      url: "/",
                                    },
                                    {
                                      title: "Remote Work and Cost Accuracy   ",
                                      url: "/",
                                    },
                                  ],
                                },
                              ]}
                            />
                          ) : (
                            <ul className="my-4">
                              {item.links.map((list, index) => (
                                <li
                                  key={index}
                                  className=" border-b-2 border-[#DBDBDB] py-2 "
                                >
                                  <Link
                                    href={list.url}
                                    className="text-[#101828] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                                  >
                                    {list.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        <div className="bg-[#0745D3]   ">
                          <Link
                            href={item.ctaUrl}
                            className="text-[#fff] w-full p-4 text-[14px] font-medium leading-[22px]   flex transition-all hover:opacity-75  "
                          >
                            {item.cta}{" "}
                            <Icon
                              path={mdiArrowRight}
                              style={{ marginLeft: "0.5em" }}
                              size={1}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OfferingsSlider;

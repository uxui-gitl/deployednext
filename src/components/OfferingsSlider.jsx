import Icon from "@mdi/react";
import Link from "next/link";
import React from "react";
import { mdiArrowRight, mdiChevronUp } from "@mdi/js";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Accordion from "./Accordion";
import Balancer from "react-wrap-balancer";
import clsx from "clsx";

const OfferingsSlider = ({
  arr,
  title,
  alignment,
  expandedDesc,
  alignHorizontal,
  imageDisabled,
  cardOnly,
  desc,
  cardColor,
}) => {
  return (
    <>
      <div className={` w-full bg-[#F2F4F7] py-20`}>
        {alignHorizontal ? (
          <div
            className={`text-${alignment} max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2`}
          >
            {/* left */}
            <div className="  flex items-start flex-col justify-between  relative">
              <div className="">
                {title ? (
                  <h3 className="text-[42px] leading-[54px] mb-3 font-bold ">
                    <Balancer>{title}</Balancer>
                  </h3>
                ) : (
                  <h3 className="text-[42px] leading-[54px] mb-3 font-bold ">
                    Our Offerings
                  </h3>
                )}
              </div>
            </div>

            {/* right */}
            <div
              className={` text-${alignment} flex items-start flex-col justify-between  relative`}
            >
              <div className="">
                {desc ? (
                  <p className="text-[16px] leading-[22px] mb-3 font-regular ">
                    {desc}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`text-${alignment} max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-1`}
          >
            {/* left */}
            <div className="  flex items-center flex-col justify-between  relative">
              <div className="">
                {title ? (
                  <h3 className="text-[42px] leading-[54px] mb-3 font-bold ">
                    {title}
                  </h3>
                ) : (
                  <h3 className="text-[42px] leading-[54px] mb-3 font-bold ">
                    Our Offerings
                  </h3>
                )}
              </div>
            </div>

            {/* right */}
            <div className="bg-[#FFF] flex items-center flex-col justify-between  relative">
              <div className="">
                {desc ? (
                  <p className="text-[42px] leading-[54px] mb-3 font-bold ">
                    {desc}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        )}

        <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] flex gap-10  overflow-hidden">
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
                className="w-fit md:w-1/3 max-w-[500px] mr-4  relative group"
              >
                {/* If card display only */}
                {cardOnly ? (
                  <div
                    className={clsx(
                      `bg-[${cardColor}]`,
                      { "bg-[#EDF1FF]": !cardColor },
                      "h-full py-24"
                    )}
                  >
                    <div className=" h-full flex flex-col justify-start">
                      {item.icon !== "" ? (
                        <Image
                          className="m-5"
                          src={`/${
                            (item.icon && item.icon + ".svg") || "dummy.png"
                          }`}
                          width={56}
                          height={56}
                          alt={item.icon}
                        />
                      ) : (
                        <Icon path={mdiDomain} size={3} />
                      )}
                      <div className="flex justify-start flex-col h-full">
                        <div className="p-4">
                          <p className="text-[#101828] font-bold text-[30px] leading-[36px]">
                            {item.title}
                          </p>
                          <p className="text-[#475467] text-[16px] font-normal my-4 leading-[18px]">
                            {item.desc}
                          </p>
                        </div>
                        <div>
                          <div className="   ">
                            <Link
                              href={item.ctaUrl}
                              className="text-[#0745D3] w-full p-4 text-[14px] font-medium leading-[22px]   flex transition-all hover:opacity-75  "
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
                ) : (
                  <div
                    className={clsx(
                      `bg-[${cardColor}]`,
                      { "bg-[#EDF1FF]": !cardColor },
                      "h-full"
                    )}
                  >
                    <div className=" h-full flex flex-col justify-start">
                      {!imageDisabled ? (
                        <div className="w-full mb-4 ">
                          <Image
                            className="w-full"
                            src={`/${item.image}`}
                            height={200}
                            width={290}
                            alt=""
                          />
                        </div>
                      ) : null}
                      <div className="flex justify-start flex-col h-full">
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
                            {item.subArr ? (
                              <Accordion
                                key={item._id}
                                bullet={true}
                                inline={item.inline}
                                icons={false}
                                items={item.subArrLinks}
                                expandedDesc={expandedDesc}
                              />
                            ) : (
                              <ul className="my-4">
                                {item.links &&
                                  item.links.map((list, index) => (
                                    <li
                                      key={index}
                                      className="text-[#101828] text-[14px] font-medium border-b-2 border-[#DBDBDB] py-1 leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                                    >
                                      {list.title}
                                    </li>
                                  ))}
                              </ul>
                            )}
                          </div>
                          <div className="bg-[#0745D3] hidden  ">
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
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OfferingsSlider;

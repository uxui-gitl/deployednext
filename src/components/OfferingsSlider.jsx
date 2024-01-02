import Icon from "@mdi/react";
import Link from "next/link";
import React from "react";
import { mdiArrowRight } from "@mdi/js";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const OfferingsSlider = ({ arr }) => {
  return (
    <>
      <div className={` w-full bg-[#FFF] py-20`}>
        <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* left */}
          <div className="bg-[#FFF] flex items-center flex-col justify-between  relative">
            <div className="">
              <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                Proposed GITL Offerings
              </h3>
            </div>
          </div>
        </div>
        <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-4">
          <Swiper
            slidesPerView={"auto"}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {arr.map((item, index) => (
              <SwiperSlide
                key={item._id}
                className="w-1/4 max-w-[283px] mr-4  relative group"
              >
                <div className="bg-[#EDF1FF] p-5" key={item._id}>
                  <div className="p-4 h-full flex flex-col justify-between">
                    <div>
                      <p className="text-[#101828] font-bold text-[30px] leading-[36px]">
                        {item.title}
                      </p>
                      <p className="text-[#101828] text-[12px] font-normal my-4 leading-[18px]">
                        {item.desc}
                      </p>
                    </div>
                    <div>
                      <ul className="my-8">
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
                      <Link
                        href={item.ctaUrl}
                        className="text-[#0745D3] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OfferingsSlider;

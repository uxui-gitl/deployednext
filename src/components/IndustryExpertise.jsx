import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
const IndustryExpertise = ({ heading, desc, list }) => {
  // console.log(list);
  return (
    <>
      <div className={` w-full bg-[#FFF] pt-32`}>
        <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* left */}
          <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
            <div className="">
              <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                {heading}
              </h3>
            </div>
          </div>
          {/* right */}
          <div>
            <div>
              <p className="font-medium leading-[22px] md:w-[90%] ">{desc}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={` w-full mt-20 `}>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          pagination={true}
          modules={[Pagination]}
          className="flex flex-col sm:flex-row gap-8 justify-center text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto  p-5"
        >
          {list.map((item) => {
            return (
              <SwiperSlide
                key={item._id}
                className=" w-full sm:w-1/4 h-max sm:h-auto mx-2 bg-white  flex flex-col justify-between"
              >
                <div className=" min-w-[283px] min-h-[357px] relative ">
                  <Image
                    src={`/${item.image}.png`}
                    fill={true}
                    alt={item.image}
                  />
                  <h4 className="text-[26px] absolute  font-bold pt-3 pb-10 bottom-0 px-4 sm:px-5 leading-[34px] bg-[#0000004f]  w-full text-[#FFFFFF]">
                    {item.title}
                  </h4>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default IndustryExpertise;

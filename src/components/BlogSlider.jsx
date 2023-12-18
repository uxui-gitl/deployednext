import Image from "next/image";
import React from "react";
import blogpost from "../../public/components/blog.png";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const BlogSlider = ({ arr }) => {
  return (
    <>
      <div className={` w-full bg-white py-32`}>
        <div className="  text-left max-w-screen-xl  mb-5 mx-auto p-5   px-[2rem]   flex justify-center">
          <Swiper
            slidesPerView={1}
            spaceBetween={200}
            pagination={true}
            modules={[Pagination]}
          >
            {arr.map((item) => (
              <>
                <SwiperSlide key={item._id}>
                  <div className="bg-white flex items-center flex-col-reverse sm:flex-row justify-start mb-10">
                    <div className="text-left w-1/2">
                      <h4
                        className={` font-medium text-[#0745D3] uppercase ribbon`}
                      >
                        {item.ribbon}
                      </h4>
                      <h3 className="text-4xl leading-[42px] font-bold mb-5">
                        {item.title}
                      </h3>
                      <p className="font-medium leading-[22px] md:w-[80%] ">
                        {item.desc}
                      </p>
                      <Link
                        href={item.link}
                        className="flex text-[14px] text-[#0745D3] leading-[22px] mt-10 max-w-max border-b-[1px] border-[#FFFFFF] items-center font-medium hover:scale-105"
                      >
                        {item.cta}
                        <span>
                          <Icon
                            path={mdiArrowRight}
                            style={{
                              marginLeft: "0.5em",
                              width: "1rem",
                              fontSize: "14px",
                            }}
                            className="cta-know-more"
                          />
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Image
                        src={blogpost}
                        className="sm:mb-0 mb-8"
                        alt="blog post"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default BlogSlider;

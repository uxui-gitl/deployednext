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

const InsightSlider = () => {
  return (
    <>
      <div className={` w-full bg-white py-32`}>
        <div className="  max-w-screen-2xl md:max-w-screen-2xl mb-5 mx-auto p-5  text-center flex justify-center">
          <Swiper
            slidesPerView={1}
            spaceBetween={200}
            pagination={true}
            modules={[Pagination]}
          >
            {[0, 1, 2].map((item, index) => (
              <>
                <SwiperSlide key={index}>
                  <div className="bg-white flex items-start flex-col-reverse sm:flex-row justify-start mb-10">
                    <div className="text-left">
                      <h4
                        className={` font-medium text-[#0745D3] uppercase ribbon`}
                      >
                        INsights
                      </h4>
                      <h3 className="text-4xl leading-[42px] font-bold mb-5">
                        Migrate your IT Infrastructure to the Cloud
                      </h3>
                      <p className="font-medium leading-[22px] md:w-[80%] ">
                        Holistic and future- ready solutions to re-engineer
                        business and drive maximum Return on Investments (RoI)
                        with our proven implementation methodologies
                      </p>
                      <Link
                        href={"#"}
                        className="flex text-[14px] text-[#0745D3] leading-[22px] mt-10 max-w-max border-b-[1px] border-[#FFFFFF] items-center font-medium hover:scale-105"
                      >
                        Know More
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

export default InsightSlider;

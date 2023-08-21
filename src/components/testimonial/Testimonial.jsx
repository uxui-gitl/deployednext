import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import { mdiArrowLeft } from "@mdi/js";
const Testimonial = () => {
  return (
    <div className="bg-[#fff]"> 
      <div className="max-w-screen-lg mx-auto ">
      <div className="mx-4 my-16">
        <div className="flex flex-col justify-center text-center gap-4">
          <h3 className="text-4xl font-bold">What Experts Think About Us</h3>
          <p className="font-medium">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
          </p>
        </div>
        <div className="my-5">
          <Swiper
            pagination={{
              el: ".custom-pagination",
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            centeredSlides={true}
            spaceBetween={60}
            grabCursor={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 my-8">
                <div className="col">
                  <Image
                    src="/testimonial.png"
                     alt="Quote Profile"
                    height="300"
                    width="220"
                    className="mx-auto"
                  />
                </div>
                <div className="col-span-2 relative">
                  {" "}
                  {/* Add relative positioning */}
                  <p className="font-medium relative md:pt-0 pt-3">
                    {" "}
                    {/* Add relative positioning */}
                    On behalf of our entire organization, please accept our
                    sincere appreciation for the excellent job Godrej Infotech
                    Limited has done over the past several months in
                    implementation of LN ERP. It was an enormous undertaking,
                    but went smoothly and efficiently! Godrej was able to
                    quickly understand our business needs, priorities and was
                    able to make positive and quality contribution during LN ERP
                    implementation, which was appreciated by all team members of
                    our organization.
                  </p>
                  <h6 className="text-sm font-bold text-[#101828] pt-[25px]">
                    Head Procurement & Project Manager
                  </h6>
                  <div className="absolute top-[-4rem] left-[-2em]">
                    <Image
                      src="/quote.png"
                      alt="Quote Start"
                      className=""
                      width="141"
                      height="100"
                    />
                  </div>
                  <div className="absolute bottom-[-2rem] right-[-1.5em]">
                    <Image
                      src="/quote-end.png"
                      alt="Quote End"
                      className=""
                      width="141"
                      height="100"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 my-8">
                <div className="col">
                  <Image
                    src="/testimonial.png"
                    height="300"
                      alt="Quote Profile"
                      width="220"
                    className="mx-auto"
                  />
                </div>
                <div className="col-span-2 relative">
                  {" "}
                  {/* Add relative positioning */}
                  <p className="font-medium relative md:pt-0 pt-3">
                    {" "}
                    {/* Add relative positioning */}
                    On behalf of our entire organization, please accept our
                    sincere appreciation for the excellent job Godrej Infotech
                    Limited has done over the past several months in
                    implementation of LN ERP. It was an enormous undertaking,
                    but went smoothly and efficiently! Godrej was able to
                    quickly understand our business needs, priorities and was
                    able to make positive and quality contribution during LN ERP
                    implementation, which was appreciated by all team members of
                    our organization.
                  </p>
                  <h6 className="text-sm font-bold text-[#101828] pt-[25px]">
                    Head Procurement & Project Manager
                  </h6>
                  <div className="absolute top-[-4rem] left-[-2em]">
                    <Image
                      src="/quote.png"
                      alt="Quote Start"
                      className=""
                      width="141"
                      height="100"
                    />
                  </div>
                  <div className="absolute bottom-[-2rem] right-[-2em]">
                    <Image
                      src="/quote-end.png"
                      alt="Quote End"
                      className=""
                      width="141"
                      height="100"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 my-8">
                <div className="col">
                  <Image
                    src="/testimonial.png"
                     alt="Quote Profile"
                    height="300"
                    width="220"
                    className="mx-auto"
                  />
                </div>
                <div className="col-span-2 relative">
                  {" "}
                  {/* Add relative positioning */}
                  <p className="font-medium relative md:pt-0 pt-3">
                    {" "}
                    {/* Add relative positioning */}
                    On behalf of our entire organization, please accept our
                    sincere appreciation for the excellent job Godrej Infotech
                    Limited has done over the past several months in
                    implementation of LN ERP. It was an enormous undertaking,
                    but went smoothly and efficiently! Godrej was able to
                    quickly understand our business needs, priorities and was
                    able to make positive and quality contribution during LN ERP
                    implementation, which was appreciated by all team members of
                    our organization.
                  </p>
                  <h6 className="text-sm font-bold text-[#101828] pt-[25px]">
                    Head Procurement & Project Manager
                  </h6>
                  <div className="absolute top-[-4rem] left-[-2em]">
                    <Image
                      src="/quote.png"
                      alt="Quote Start"
                      className=""
                      width="141"
                      height="100"
                    />
                  </div>
                  <div className="absolute bottom-[-2rem] right-[-2em]">
                    <Image
                      src="/quote-end.png"
                      alt="Quote End"
                      className=""
                      width="141"
                      height="100"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <div className="custom-pagination mx-auto text-center">
              <div className="swiper-button-prev">
                <Icon path={mdiArrowLeft} size={1} />
              </div>
              <div className="swiper-button-next">
                <Icon path={mdiArrowRight} size={1} />
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testimonial;

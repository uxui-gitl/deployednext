import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import solution1 from "../../public/EntSolution/1.png";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const CardSwiper = () => {
  return (
    <>
      <div className="">
        <Swiper
          data-cursor-color="#61dbfb"
          data-cursor-text="Drag"
          data-cursor-size="100px"
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          autoHeight={false}
          centeredSlides={true}
          spaceBetween={60}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide
            className="p-5"
            style={{
              background:
                "linear-gradient(270deg, rgba(91,98,138,1) 0%, rgba(120,111,192,1) 67%, rgba(148,112,197,1) 100%)",
            }}
          >
            <div>
              <Image src={solution1} alt="solution" />
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="p-5"
            style={{
              background:
                "linear-gradient(270deg, rgba(91,98,138,1) 0%, rgba(120,111,192,1) 67%, rgba(148,112,197,1) 100%)",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            necessitatibus amet magni nesciunt ducimus cumque pariatur illum
            exercitationem assumenda eius obcaecati perspiciatis fugit
            consequuntur culpa perferendis veritatis, incidunt id quisquam.
          </SwiperSlide>
          <SwiperSlide
            className="p-5"
            style={{
              background:
                "linear-gradient(270deg, rgba(91,98,138,1) 0%, rgba(120,111,192,1) 67%, rgba(148,112,197,1) 100%)",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            necessitatibus amet magni nesciunt ducimus cumque pariatur illum
            exercitationem assumenda eius obcaecati perspiciatis fugit
            consequuntur culpa perferendis veritatis, incidunt id quisquam.
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default CardSwiper;

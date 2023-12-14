import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination } from "swiper/modules";
import solution1 from "../../public/EntSolution/1.png";
import solution2 from "../../public/EntSolution/2.png";
import solution3 from "../../public/EntSolution/3.png";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const styles = {
  cardWrap: {
    backgroundColor: "#07001F",
    padding: "4em 1.5em",
    color: "white",
  },
  card: {
    marginBottom: "0",
    fontWeight: 600,
    fontSize: "1rem",
    width: "max-content!important",
  },
  reviewCardWrap: {
    color: "white",
    background: "rgb(91,98,138)",
    background:
      "linear-gradient(90deg, rgba(91,98,138,1) 0%, rgba(120,111,192,1) 67%, rgba(148,112,197,1) 100%)",
    minHeight: "400px",
    minWidth: "700px",
    height: "400px",
    marginRight: "3rem",
    maxHeight: "400px",
  },
};

const CardSwiper = () => {
  return (
    <>
      <Swiper
        data-cursor-color="#61dbfb"
        data-cursor-text="Drag"
        data-cursor-size="100px"
        className={styles.cardWrap}
        scrollbar={{
          hide: true,
        }}
        modules={[Pagination]}
        autoHeight={false}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={60}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        style={{
          backgroundColor: "#07001F",
          padding: "4em 1.5em",
          color: "white",
        }}
      >
        {/* Great Place to work */}
        <SwiperSlide
          className={styles.card}
          style={{
            background:
              "linear-gradient(270deg, rgba(91,98,138,1) 0%, rgba(120,111,192,1) 67%, rgba(148,112,197,1) 100%)",
          }}
        >
          <div className={styles.reviewCard}>
            <div className="relative">
              <div className="absolute z-20 bottom-8 left-8">
                <h4 className="font-bold text-[26px] leading-[34px] text-white">
                  Dealer Management
                </h4>
              </div>
              <Image src={solution1} alt="Solution 1" />
            </div>
          </div>
        </SwiperSlide>


        {/* Glassdoor Awards */}
        <SwiperSlide
          className={styles.card}
          style={{
            background:
              "linear-gradient(270deg, rgba(91,98,138,1) 0%, rgba(120,111,192,1) 67%, rgba(148,112,197,1) 100%)",
          }}
        >
          <div className={styles.reviewCard}>
            <div className="relative">
              <div className="absolute z-20 bottom-8 left-8">
                <h4 className="font-bold text-[26px] leading-[34px] text-white">
                  Dealer Management
                </h4>
              </div>
              <Image src={solution1} alt="Solution 1" />
            </div>
          </div>
        </SwiperSlide>
        {/* Great Place to work */}
        <SwiperSlide
          className={styles.card}
          style={{
            background:
              "linear-gradient(270deg, rgba(91,98,138,1) 0%, rgba(120,111,192,1) 67%, rgba(148,112,197,1) 100%)",
          }}
        >
          <div className={styles.reviewCard}>
            <div className="relative">
              <div className="absolute z-20 bottom-8 left-8">
                <h4 className="font-bold text-[26px] leading-[34px] text-white">
                  Valve Management Solutions
                </h4>
              </div>
              <Image src={solution2} alt="Solution 1" />
            </div>
          </div>
        </SwiperSlide>
        {/* CSR */}
        <SwiperSlide
          className={styles.card}
          style={{
            background:
              "linear-gradient(270deg, rgba(91,98,138,1) 0%, rgba(120,111,192,1) 67%, rgba(148,112,197,1) 100%)",
          }}
        >
          <div className={styles.reviewCard}>
            <div className="relative">
              <div className="absolute z-20 bottom-8 left-8">
                <h4 className="font-bold text-[26px] leading-[34px] text-white">
                  Metal Solutions
                </h4>
              </div>
              <Image src={solution3} alt="Solution 1" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CardSwiper;

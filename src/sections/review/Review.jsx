import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import Icon from "@mdi/react";
import { mdiArrowTopRight } from "@mdi/js";

import styles from "./review.module.css";

// import required modules
import { Scrollbar } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const Review = () => {
  const starSrc = "/star.png";
  const halfStarSrc = "/starHalf.png";

  return (
    <>
      <Swiper
        data-cursor-color="#61dbfb"
        data-cursor-text="Drag"
        data-cursor-size="100px"
        className={styles.reviewWrap}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        autoHeight={false}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={60}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
      >
        {/* Offset */}
        <div
          className="w-[13.5%] invisible md:visible lg:w-[24%]"
          style={{
            background: "#07001f",
            position: "absolute",
            left: 0,
            height: "100%",
            top: 0,
            zIndex: "99",
            width: "13.4%",
          }}
        ></div>
        {/* Glassdoor Awards */}
        <SwiperSlide className={`${styles.reviewCardWrap}`}>
          <div
            className={styles.reviewCard}
            style={{
              maxWidth: "700px",
              maxHeight: "400px",
              marginBottom: "0!important",
            }}
          >
            <div className={styles.reviewCard1}>
              <div style={{}}>
                <h3 style={{ color: "#F2F4F7" }}>
                  Over 200 reviews on Glassdoor and counting
                </h3>
                <h6 className="text-sm	" style={{ color: "#F2F4F7" }}>
                  User reviews have proven to outperform any other assessments
                  in the consumer world. That&#39;s why we&#39;re proud of what
                  our reviewers have to say.
                </h6>
              </div>
            </div>
            <div className={styles.glassdoorRatings}>
              <div className="flex items-baseline flex-col">
                <div>
                  <div className="flex flex-row">
                    {[...Array(5)].map((_, index) => (
                      <Image
                        key={index}
                        src={index === 4 ? halfStarSrc : starSrc}
                        width={32}
                        height={32}
                        className={styles.reviewStar}
                        alt="ratings"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-baseline flex-row">
                  <h2 className="font-bold	m-0 p-0 text-[114px] leading-[0.8]">
                    4.7
                  </h2>
                  <span>out of 5</span>
                </div>
              </div>
              <Link href="#" className={styles.reviewLink}>
                Here are some Job Listings? <Icon path={mdiArrowTopRight} />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* Great Place to work */}
        <SwiperSlide className={`${styles.reviewCardWrap} justify-end`}>
          <div className={styles.reviewCard}>
            <div className={styles.reviewCard2}>
              <div className={styles.imageOverlay}>
                <img
                  src="greatPlaceToWork.png"
                  alt="Overlay"
                  className={styles.overlayImage}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  bottom: "6em",
                }}
              >
                <div className="flex flex-row">
                  {[...Array(5)].map((_, index) => (
                    <Image
                      key={index}
                      src={starSrc}
                      width={32}
                      height={32}
                      className={styles.reviewStar}
                      alt="ratings"
                    />
                  ))}
                </div>
                <h3 style={{ color: "#F2F4F7" }}>
                  GREAT PEOPLE <br />
                  GREAT EXPERIENCE <br />
                  GREAT WORKPLACE CULTURE
                </h3>
                <h6 style={{ color: "#F2F4F7" }}>2022 - 2023</h6>
              </div>
            </div>
            <Link href="#" className={styles.reviewLink}>
              Know more <Icon path={mdiArrowTopRight} />
            </Link>
          </div>
        </SwiperSlide>
        {/* CSR */}
        <SwiperSlide
          className={styles.reviewCardWrap}
          style={{
            background:
              "linear-gradient(270deg, rgba(91,98,138,1) 0%, rgba(120,111,192,1) 67%, rgba(148,112,197,1) 100%)",
          }}
        >
          <div className={styles.reviewCard}>
            <h3>
              We believe in creating a world of Goodness & are involved in many
              <span> CSR initiatives</span> related to environment conservation
              & sponsoring of vocational training
            </h3>
            <Link href="#" className={styles.reviewLink}>
              Know more <Icon path={mdiArrowTopRight} />
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Review;

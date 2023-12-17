"use client";
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
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        centeredSlides={true}
        spaceBetween={60}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
      >
        {/* Ambition Box */}
        <SwiperSlide
          className={`${styles.reviewCardWrap}`}
          style={{ width: "700px" }}
        >
          <div
            className={styles.reviewCard}
            style={{
              maxWidth: "700px",
              maxHeight: "400px",
              marginBottom: "0!important",
            }}
          >
            <div className={styles.reviewCard1}>
              <div>
                <h3 style={{ color: "#F2F4F7" }}>
                  Over 250 reviews on Ambition Box
                </h3>
                <h6
                  className="text-sm mt-3 w-fit break-words"
                  style={{ color: "#F2F4F7" }}
                >
                  User reviews have proven to outperform any other assessments
                  in the consumer world. That&#39;s why we&#39;re proud of what
                  our reviewers have to say.
                </h6>
              </div>
            </div>

            <div
              className={`flex flex-col sm:flex-row justify-between w-full items-start sm:items-end`}
            >
              <div className="flex items-baseline  flex-col">
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
                <div className="flex sm:items-baseline flex-col items-start sm:flex-row">
                  <h2 className="font-bold	m-0 p-0 text-[114px] leading-[0.8]">
                    4.1
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

        {/* Glassdoor Awards */}
        <SwiperSlide
          className={`${styles.reviewCardWrap}`}
          style={{ width: "700px" }}
        >
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
            <div
              className={`flex flex-col sm:flex-row justify-between w-full items-start sm:items-end`}
            >
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
        <SwiperSlide
          className={`${styles.reviewCardWrap} justify-end`}
          style={{ width: "700px" }}
        >
          <div className={styles.reviewCard}>
            <div className={styles.reviewCard2}>
              <div className={`sm:absolute top-0 left-0 w-full h-full z-[1]`}>
                <Image
                  src="/greatPlaceToWork.png"
                  alt="Overlay"
                  height={200}
                  width={117}
                  className={` object-cover right-12 absolute top-0`}
                />
              </div>
              <div className="absolute flex justify-end items-start flex-col sm:bottom-24">
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
              We believe in creating a world of Goodness <br /> & are involved
              in many
              <span> CSR initiatives</span> <br /> related to environment
              conservation & <br /> sponsoring of vocational training
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

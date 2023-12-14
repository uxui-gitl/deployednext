"use client";

import React from "react";

import styles from "./InfotechWeekly.module.css";
import Image from "next/image";
import Link from "next/link";

import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import { motion } from "framer-motion";

const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 * index,
    },
  }),
};

const InfotechWeekly = (props) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-[2rem] bg-white">
        <div className=" mt-[5em] mb-[2em]">
          <h4
            className={`${styles.subHead} font-medium text-[#0745D3] uppercase ribbon`}
          >
            Never miss a tech beat!
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <h3 className="text-4xl leading-[42px] font-bold">
              Infotech Exclusive
            </h3>
            <p className="font-normal leading-[22px]">
              Discover why our clients trust us and dive into our insights section. Empower your decision with right knowledge and stay in the vanguard.
            </p>
          </div>
        </div>
        <motion.div className="container grid grid-cols-1 gap-4">
          {[0, 1].map((index) => (
            <motion.div
              key={index}
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
              className={`item flex justify-center items-start flex-col md:flex-row mb-5 gap-5`}
            >
              <div className={`${styles["iw-card-img-wrap"]} relative`}>
                <Image
                  src={`/weekly-${index + 1}.png`}
                  alt="blog post"
                  width="315"
                  height="200"
                />
                <div className="absolute bottom-4 left-4 flex justify-start items-center space-x-2">
                  <p className="text-sm bg-[#fff] text-[#101828] px-2 py-1 rounded font-medium">
                    Microsoft 365
                  </p>
                  <p className="text-sm bg-[#fff] text-[#101828] px-2 py-1 rounded font-medium">
                    Case Study
                  </p>
                </div>
              </div>
              <div className={`${styles["iw-card-content"]} py-[14px]`}>
                <p
                  className={`uppercase  text-[#101828] font-medium text-[12px]`}
                >
                  20 Jan 2023
                </p>
                <p
                  className={`text-base font-semibold pt-[14px] pb-2 leading-[22px] text-[#101828]`}
                >
                  {" "}
                  Robust Automation for Enhanced Business Efficiency{" "}
                </p>
                <p
                  className={`${styles["iw-card-content-desc"]} text-clip text-[#475467] text-sm  pb-[14px]`}
                >
                  Enabling organizations to optimize cost & enhance business
                  processes with next-gen digital technologies like Robotic
                  Process Automation (RPA), eCommerce & Analytics.
                </p>
                <p className={styles["iw-card-content-link-wrap"]}>
                  <Link
                    href="/"
                    className={`${styles["iw-card-content-link"]} hover:underline mt-2 me-3 text-[#0745D3] text-sm font-medium`}
                  >
                    Read article
                  </Link>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className={`${styles["iw-cta"]}`}>
          <Link
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "1em auto 2em",
            }}
            href="/"
          >
            <p>
              read more articles{" "}
              <Icon
                path={mdiArrowRight}
                style={{ marginLeft: "0.5em" }}
                size={1}
              />
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default InfotechWeekly;

"use client";

import React from "react";

import styles from "./JobList.module.css";
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

const JobList = (props) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-[2rem] bg-white">
        <div className=" mt-[5em] mb-[2em]">
          <h4
            className={`${styles.subHead} font-medium text-[#0745D3] uppercase ribbon`}
          >
            WHERE TALENT MEETS TECHNOLOGY
          </h4>
          <div className="grid ">
            <h3 className="text-4xl leading-[42px] font-bold">
              Jobs based on your Profile
            </h3>
          </div>
        </div>
        <motion.div className="container grid grid-cols-1 gap-4">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
              className={`flex justify-center items-start flex-col md:flex-col mb-5 gap-5  `}
            >
              <div className={` shadow-md hover:shadow-xl rounded-md`}>
                <div className="relative py-5 px-8">
                  <h5 className="text-[20px] font-bold leading-[42px] text-[#101828]">
                    Experienced Backend Engineer, Music Vertical Platform
                  </h5>
                  <p className="text-[14px] font-medium leading-[22px] mb-6">
                    We&apos;re on the lookout for the curious, those who think
                    big and want to define the world of tomorrow. At Amazon, you
                    will grow into the high impact, visionary
                  </p>
                  <div className="    flex justify-start items-center">
                    <p className="text-sm bg-[#EDF1FF] text-[#101828] px-2 py-1 rounded font-medium mr-4">
                      Mumbai
                    </p>
                    <p className="text-sm bg-[#FFF8E5] text-[#101828] px-2 py-1 rounded font-medium mr-4">
                      Machine Learning
                    </p>
                    <p className="text-sm bg-[#E5F8EE] text-[#101828] px-2 py-1 rounded font-medium mr-4">
                      3 years experience
                    </p>
                  </div>
                </div>
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
              View More{" "}
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

export default JobList;

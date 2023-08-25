import React from "react";
import styles from "./Projects.module.css";
import Image from "next/image";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import { motion } from "framer-motion";


const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 * index,
    }
  })
}
 

const Projects = (props) => {
  return (
    <div className={`max-w-screen-lg mx-auto px-[2rem] bg-[#fff]`}>
      <div className=" mt-[5em] mb-[2em]">
        <h4
          className={`${styles.subHead} font-medium text-[#0745D3] uppercase ribbon`}
        >
          Projects
        </h4>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4`}>
          <h3 className="text-4xl leading-[42px] font-bold">
            Unlocking <br /> Remarkable Results
          </h3>
          <p className="font-normal leading-[22px]">
            We bring wealth of capability and experience together to deliver
            tailored solutions and services so that businesses
          </p>
        </div>
      </div>
      <motion.div
        className="container grid grid-cols-1 md:grid-cols-3 gap-[30px]"
         
      >
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
            className={`${styles["iw-card"]} item`}
          >
<div className={`${styles["iw-card-img-wrap"]} relative`}>
            <Image
              src={`/project-${index+1}.png`}
              alt="blog post"
              width="315"
              height="200"
              className="w-full h-auto lg:w-315 lg:h-200"
            />
            <div className="absolute bottom-4 left-4 flex justify-start items-center space-x-2">
              <p className="text-sm bg-[#fff] text-[#101828] px-2 py-1 rounded font-medium ">
                Microsoft 365
              </p>
              <p className="text-sm bg-[#fff] text-[#101828] px-2 py-1 rounded  font-medium">
                Case Study
              </p>
            </div>
          </div>
          {/* Card content for Cloudification */}
          <div className={`${styles["iw-card-content"]}`}>
            {/* <p className={`text-[#98A2B3] font-bold`}>Cloudification</p> */}
            <p className={`uppercase  text-[#101828] font-medium text-[12px]`}>
                20 Jan 2023
              </p>
            <p className={`text-base font-semibold pt-[14px] pb-2 leading-[22px] text-[#101828]`}> Robust Automation for Enhanced Business Efficiency </p>
            <p
              className={`${styles["iw-card-content-desc"]} text-clip  text-[#475467] text-sm`}
            >
              Enabling organizations to optimize cost & enhance business
              processes with next-gen
            </p>

            <p className={styles["iw-card-content-link-wrap"]}>
              <Link
                href="/"
                className={`${styles["iw-card-content-link"]} hover:underline mt-2 me-3 text-[#0745D3] text-sm font-medium`}
              >
                Read Article
              </Link>
            </p>
          </div>

          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;

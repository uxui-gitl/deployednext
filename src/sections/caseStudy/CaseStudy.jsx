import React from "react";
import styles from "./CaseStudy.module.css";
import Image from "next/image";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import { motion } from "framer-motion";
import { clsx } from "clsx";

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

const CaseStudy = ({ ribbon, title, desc, isHomepage, subDesc, arr }) => {
  return (
    <div
      id="CaseStudy"
      className={clsx({
        "max-w-screen-lg mx-auto px-[2rem] bg-[#fff]": isHomepage,
        "text-left max-w-screen-xl  mb-5 mx-auto p-5   px-[2rem]": !isHomepage,
      })}
    >
      <div className=" mt-[5em] mb-[2em]">
        <h4
          className={`${styles.subHead} text-[16px] font-medium text-[#0745D3] uppercase ribbon mb-4`}
        >
          {ribbon}
        </h4>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4`}>
          <h3 className="text-4xl leading-[42px] font-bold">
            {title && title}
          </h3>

          <p className="font-normal leading-[22px]">{desc && desc}</p>
        </div>
      </div>
      <motion.div className="container grid grid-cols-1 md:grid-cols-3 gap-[30px]">
        {arr &&
          arr.map((cases, index) => (
            // console.log(cases.thumbnail),
            <motion.div
              key={index}
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
              // className={`${styles["iw-card"]} item`}
              className={clsx({
                "iw-card item": isHomepage,
                item: !isHomepage,
              })}
            >
              <div
                className={`${styles["iw-card-img-wrap"]} w-[100%] h-auto relative`}
              >
                <Image
                  // src={`/project-${cases.thumbnail}.png`}

                  src={
                    cases.thumbnail
                      ? cases.thumbnail == "1" || "2" || "3"
                        ? `/caseStudies/${cases.thumbnail}.png`
                        : `/caseStudies/${cases.thumbnail}.png`
                      : `/project-placeholder.png`
                  }
                  alt={cases.thumbnail}
                  // src={
                  //   cases.thumbnail
                  //     ? cases.thumbnail == "1" || "2" || "3"
                  //       ? `/project-placeholder.png`
                  //       : `/caseStudies/${cases.thumbnail}.png`
                  //     : `/project-placeholder.png`
                  // }
                  className="w-[100%]"
                  width="315"
                  height="200"
                  // className="w-full h-auto lg:w-315 lg:h-200"
                />
                <div className="absolute bottom-4 left-4 flex justify-start items-center space-x-2">
                  <p
                    className={`text-sm bg-[#fff] text-[#101828] px-2 py-1 rounded font-medium  ${
                      cases.tags == "" ? "hidden" : "block"
                    } `}
                  >
                    {`${cases.tags}`}
                  </p>
                </div>
              </div>
              <div className={`${styles["iw-card-content"]}`}>
                {cases.subtitle && (
                  <p
                    className={`my-2  text-[#101828] font-semibold leading-[22px] text-[16px]`}
                  >
                    {cases.subtitle}
                  </p>
                )}
                <p
                  className={`${
                    styles["iw-card-content-desc "]
                  } text-clip  text-[#101828]  mb-3 font-semibold text-sm ${
                    cases.description.length <= 0 ? "hidden" : "block"
                  }`}
                >
                  {`${cases.description}`}
                </p>
                <p
                  className={`text-base mt-2 font-normal  pb-2 leading-[22px] text-[#101828]`}
                >
                  {" "}
                  {`${cases.title}`}{" "}
                </p>

                <p className={styles["iw-card-content-link-wrap"]}>
                  <Link
                    href={`${cases.link}`}
                    className={`${styles["iw-card-content-link"]} hover:underline mt-2 me-3 text-[#0745D3] text-sm font-medium`}
                  >
                    {`${cases.cta}`}
                  </Link>
                </p>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export default CaseStudy;

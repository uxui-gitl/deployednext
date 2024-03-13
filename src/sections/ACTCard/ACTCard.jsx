"use client";
import Image from "next/image";
// import styles from "./ACTCard.module.css";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Icon from "@mdi/react";
import Link from "next/link";
import React from "react";
import { mdiArrowUp } from "@mdi/js";
import { mdiArrowTopRight } from "@mdi/js";
const ACTCard = ({
  i,
  ribbon,
  description,
  data,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  // const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 0.85]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const CardStack = [
    {
      _id: 1,
      subcategory: "Intuitive/ Intelligent Technologies",
      sublinks: [
        { title: "Artificial Intelligence & Machine Learning", url: "/ai" },
        { title: "IoT", url: "/iot" },
        { title: "Robotic Process Automation", url: "/rpa" },
      ],
    },
    {
      _id: 2,
      subcategory: "Technology Suite",
      sublinks: [
        { title: "Java", url: "/java" },
        { title: ".Net, Share Point", url: "/dotnet" },
        { title: "Low code application development", url: "/lowcode" },
      ],
    },
    {
      _id: 3,
      subcategory: "Data Insights",
      sublinks: [
        { title: "Power BI and Power Apps", url: "/powerbi" },
        { title: "Birst", url: "/birst" },
        { title: "Tableau", url: "/tableau" },
        { title: "Azure and AWS Data Management", url: "/cloud" },
      ],
    },
  ];

  const Card = ({ title, sublinks }) => (
    <div className="bg-[#fff] border-[rgb(112 112 112 / 15%)] border-0">
      <div className="font-semibold text-base pb-2 px-4 pt-2 bg-[#b2c0fa]">
        {title}
      </div>
      <div className="bg-[#fff] p-4">
        <ul>
          {sublinks.map((link, index) => (
            <li
              key={index}
              className=" border-b-[0px] last:border-b-[0px] inline"
            >
              <span
                className="text-[#101828] text-[14px]  leading-[30px] inline "
                style={{ textDecoration: "none" }}
              >
                <Link
                  href={link.url}
                  target="_blank"
                  className=" inline-flex align-middle transition-all hover:opacity-80 mb-2"
                >
                  {link.title}
                  <span className="">
                    <Icon
                      className=" opacity-25 hover:opacity-80 transition-all"
                      path={mdiArrowTopRight}
                      style={{ marginLeft: "0.5em" }}
                      size={1}
                    />
                  </span>
                </Link>
              </span>
              <br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  return (
    <div
      ref={container}
      className={`cardContainer h-screen flex items-center justify-center sticky top-0`}
    >
      <motion.div
        style={{
          backgroundColor: color,
          // width: "100%",
          top: `calc(-5vh + ${i * 30}px)`,
          // scale: imageScale,
        }}
        className={`card flex flex-col relative top-[-25%] h-[500px] w-full rounded-2xl p-12 transform origin-top`}
      >
        <>
          <div>
            <h4
              className={` mb-6 font-bold text-[#fff] text-2xl sm:text-4xl leading-[42px]  `}
            >
              {ribbon}
            </h4>
            <p className="font-normal text-base text-[#fff] leading-[22px]">
              {description}
            </p>
            <div className="mx-auto pt-[26px] ">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                {data.map((cardCategory) => (
                  <Card
                    key={cardCategory._id}
                    title={cardCategory.subcategory}
                    sublinks={cardCategory.sublinks}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      </motion.div>
    </div>
  );
};

export default ACTCard;

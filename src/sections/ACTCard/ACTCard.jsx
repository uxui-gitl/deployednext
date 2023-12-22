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
  title,
  description,
  src,
  url,
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
  const scale = useTransform(progress, range, [1, targetScale]);

  const CardStack = [
    {
      _id: 1,
      subcategory: "Intuitive/ Intelligent Technologies",
      sublinks: [
        { title: "Artificial Intelligence", url: "/ai" },
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
    <div className="bg-[#fff] border-[rgb(112 112 112 / 15%)] border">
      <div className="font-semibold text-base pb-2 px-4 pt-2 bg-[#f2f4f7]">
        {title}
      </div>
      <div className="bg-[#fff] p-4">
        {sublinks.map((link, index) => (
          <span key={index} className="text-base leading-8  inline">
            <span className="text-[#0745d3]  inline ">
              <Link
                href={link.url}
                target="_blank"
                className=" inline-flex align-middle border-b-2 hover:opacity-80 mb-4"
              >
                {link.title}
                <span>
                  <Icon
                    path={mdiArrowTopRight}
                    style={{ marginLeft: "0.5em" }}
                    size={1}
                  />
                </span>
              </Link>
            </span>
            <br />
          </span>
        ))}
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
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`card flex flex-col relative top-[-25%] h-500 w-1000 rounded-2xl p-16 transform origin-top`}
      >
        <>
          <div>
            <h4
              className={`  undefined font-medium text-[#0745D3] uppercase ribbon text-2xl sm:text-4xl leading-[42px] ribbon ribbon-robot`}
            >
              Automate for the Future
            </h4>
            <p className="font-normal text-base leading-[22px]">
              Enabling organizations to optimize cost & enhance business
              processes with next-gen digital technologies like Robotic Process
              Automation (RPA), eCommerce & Analytics.
            </p>
            <div className="mx-auto pt-[26px] pb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                {CardStack.map((cardCategory) => (
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

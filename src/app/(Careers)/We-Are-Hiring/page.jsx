"use client";
import { mdiArrowRight } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import JobList from "@/sections/jobList/JobList";
import Select from "react-select";
import Navbar from "@/components/Navbar/Navbar";
const options = [
  { value: "uiux", label: "UI/UX" },
  { value: "hr", label: "Sr. Recruitment Associate" },
  { value: "techLead", label: "Tech Lead" },
  { value: "pm", label: "Project Manager" },
  { value: "reactjs", label: "React.js Dev" },
];
const WeAreHiring = () => {
  return (
    <>
      <div className={`relative z-[500]`}>
        <div className={`absolute w-full  `}>
          <Navbar theme="dark" />
        </div>
      </div>
      <>
        <div className={`${styles["container"]} bg-white mt-24 py-24`}>
          <div className="flex justify-center items-center flex-col">
            <h3 className="text-[42px] leading-[52px] font-bold">
              Hey, Great to see you here
            </h3>
            <div className="w-[550px]">
              <form
                className={`${styles["container"]} w-full pe-8 my-3 bg-white`}
                method="POST"
              >
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full mb-5 "
                  placeholder="Designer, Sales, Business"
                />
                <div className="flex flex-row justify-between">
                  <Select options={options} placeholder={"Job Category"} />
                  <Select options={options} placeholder={"Job Category"} />
                </div>
              </form>
            </div>
            <Link
              href={"/"}
              className="flex bg-[#101828] py-2 px-10 border-2 border-[#101828] font-medium text-base text-[#f5f5f5] rounded-sm transition-all mb-3 hover:opacity-95 hover:scale-105"
            >
              Explore Your Opportunity{" "}
              <Icon
                path={mdiArrowRight}
                style={{ marginLeft: "0.5em" }}
                size={1}
              />
            </Link>
          </div>
        </div>
      </>
      {/* Job Listing Component */}
      <JobList />
      <>
        <div className={`${styles["container"]} bg-white mt-24 py-24`}>
          <div className="flex justify-center items-center flex-col">
            <h3 className="text-4xl leading-[42px] font-bold">
              Want to join the tech revolution?
            </h3>
            <p className="font-normal leading-[22px] pt-3 pb-8 text-center">
              Discover exciting opportunities here and become an <br /> integral
              part of our Tech Movement
            </p>

            <Link
              href={"/"}
              className="flex bg-[#101828] py-2 px-10 border-2 border-[#101828] font-medium text-base text-[#f5f5f5] rounded-sm transition-all mb-3 hover:opacity-95 hover:scale-105"
            >
              Explore Your Opportunity{" "}
              <Icon
                path={mdiArrowRight}
                style={{ marginLeft: "0.5em" }}
                size={1}
              />
            </Link>
          </div>
        </div>
      </>
    </>
  );
};

export default WeAreHiring;

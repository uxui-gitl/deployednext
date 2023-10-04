import Announcement from "@/sections/announcement/Announcement";
import Awards from "@/sections/awards/Awards";
import Copyright from "@/sections/copyright/Copyright";
import Footer from "@/sections/footer/Footer";
import InfotechWeekly from "@/sections/infotechWeekly/InfotechWeekly";
import Review from "@/sections/review/Review";
import { mdiArrowRight } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import EmployeeExperience from "@/sections/employeeExperience/EmployeeExperience";
import JobList from "@/sections/jobList/JobList";

const Careers = () => {
  return (
    <>
      <Announcement />
      <Review />
      <Awards />
      <InfotechWeekly />
      <EmployeeExperience />
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
      <Footer />
      <Copyright />
    </>
  );
};

export default Careers;

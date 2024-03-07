import Awards from "@/sections/awards/Awards";
import InfotechWeekly from "@/sections/infotechWeekly/InfotechWeekly";
import Review from "@/sections/review/Review";
import { mdiArrowRight } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import EmployeeExperience from "@/sections/employeeExperience/EmployeeExperience";
import JobList from "@/sections/jobList/JobList";
import CareerSlider from "@/components/CareerSlider";
import CareerAbout from "@/components/CareerAbout";
import Navbar from "@/components/Navbar/Navbar";
import EmployeeExp from "@/components/EmployeeExp";

const Careers = () => {
  return (
    <>
      <div className={`relative z-[500]`}>
        <div className={`absolute w-full  `}>
          <Navbar theme="dark" />
        </div>
      </div>
      <CareerSlider />
      <CareerAbout />
      <Review />
      <Awards />
      <InfotechWeekly />
      {/* <EmployeeExperience /> */}
      <>
        <EmployeeExp
          ribbon="Unleashing Joy at Work"
          heading="Employees Share Their Happy Experiences"
          desc="Discover the heartwarming stories of our employees as they reveal
            their joyful experiences at work. From moments of triumph to
            instances of camaraderie, their testimonials showcase a workplace
            where happiness is unleashed and celebrated. Learn how fostering a
            positive environment can lead to a truly fulfilling and successful
            team dynamic."
          arr={[
            {
              _id: 1,
              name: "Yazdi Navalmanek",
              designation: "Associate Manager",
              avatar: "avatar1",
              desc: "I have been associated with Godrej Infotech for almost two decades, acquiring a wealth of knowledge and valuable experience. What I admire most is that this organization has always prioritized human values.  Plus, the company is growing tremendously - from relying on revenue from its parent company to becoming a diversified business with operations spanning Asia, Middle East & Europe. I am currently enjoying my work in the Human Resources Department and feel privileged to contribute to the company's success.",
            },
            {
              _id: 2,
              name: "Jaseem Aboo",
              designation: "Regional Sales Director for the Middle East ",
              avatar: "avatar2",
              desc: "I am proud to work with this dynamic organization for a decade. I always have had the opportunity to work with remarkable clients, recommending and implementing innovative technology solutions. Supportive senior management, excellent work culture, exposure to next-generation technologies and industry-standard business practices - all these aspects together have made my journey incredible. There is enthusiasm and positivity in the work environment of Godrej Infotech. I wholeheartedly recommend Godrej Infotech to anyone seeking a career in the technology consulting and services space. ",
            },
            {
              _id: 3,
              name: "Yazdi Navalmanek",
              designation: "Associate Manager",
              avatar: "avatar1",
              desc: "I have been associated with Godrej Infotech for almost two decades, acquiring a wealth of knowledge and valuable experience. What I admire most is that this organization has always prioritized human values.  Plus, the company is growing tremendously - from relying on revenue from its parent company to becoming a diversified business with operations spanning Asia, Middle East & Europe. I am currently enjoying my work in the Human Resources Department and feel privileged to contribute to the company's success.",
            },
            {
              _id: 4,
              name: "Jaseem Aboo",
              designation: "Regional Sales Director for the Middle East ",
              avatar: "avatar2",
              desc: "I am proud to work with this dynamic organization for a decade. I always have had the opportunity to work with remarkable clients, recommending and implementing innovative technology solutions. Supportive senior management, excellent work culture, exposure to next-generation technologies and industry-standard business practices - all these aspects together have made my journey incredible. There is enthusiasm and positivity in the work environment of Godrej Infotech. I wholeheartedly recommend Godrej Infotech to anyone seeking a career in the technology consulting and services space. ",
            },
            {
              _id: 5,
              name: "Yazdi Navalmanek",
              designation: "Associate Manager",
              avatar: "avatar1",
              desc: "I have been associated with Godrej Infotech for almost two decades, acquiring a wealth of knowledge and valuable experience. What I admire most is that this organization has always prioritized human values.  Plus, the company is growing tremendously - from relying on revenue from its parent company to becoming a diversified business with operations spanning Asia, Middle East & Europe. I am currently enjoying my work in the Human Resources Department and feel privileged to contribute to the company's success.",
            },
            {
              _id: 6,
              name: "Jaseem Aboo",
              designation: "Regional Sales Director for the Middle East ",
              avatar: "avatar2",
              desc: "I am proud to work with this dynamic organization for a decade. I always have had the opportunity to work with remarkable clients, recommending and implementing innovative technology solutions. Supportive senior management, excellent work culture, exposure to next-generation technologies and industry-standard business practices - all these aspects together have made my journey incredible. There is enthusiasm and positivity in the work environment of Godrej Infotech. I wholeheartedly recommend Godrej Infotech to anyone seeking a career in the technology consulting and services space. ",
            },
          ]}
        />
      </>
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

export default Careers;

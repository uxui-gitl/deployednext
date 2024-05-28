"use client";
import ClientLogos from "@/sections/clientLogos/ClientLogos";

import TeamProfile from "@/sections/teamProfile/TeamProfile";
import styles from "./page.module.css";
import React from "react";
import Image from "next/image";

import Icon from "@mdi/react";
import { mdiEyeOutline } from "@mdi/js";
import Awards from "@/sections/awards/Awards";
import AboutIntro from "@/sections/aboutIntro/AboutIntro";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";
import Balancer from "react-wrap-balancer";
import Navbar from "@/components/Navbar/Navbar";
import Timeline from "@/components/Timeline";
import EmployeeExp from "@/components/EmployeeExp";
import Csr from "@/components/Csr";
// import microsoft from "../../../public/SpotlightLogoGrid/Microsoft-Office.png";
// import infor from "../../../public/SpotlightLogoGrid/infor.png";
// import Oracle from "../../../public/Oracle.png";
// import automationAnywhere from "../../../public/logos/rpa/automationAnywhere.svg";

const Page = () => {
  return (
    <>
      <div className={`relative z-[500]`}>
        <div className={`absolute w-full  `}>
          <Navbar theme="light" />
        </div>
      </div>
      <AboutIntro />
      <ClientLogos />
      <>
        <Timeline />
      </>
      <>
        <div className={`${styles.visionWrap} `}>
          <div className="max-w-screen-lg mx-auto px-[2rem] py-[5em]  ">
            <div className="mt-[3em] mb-[12em]">
              <h3 className=" text-7xl font-bold leading-[90px]">
                The Guiding Principles We Live By
              </h3>
              <p className="text-base font-regular">
                Every day, we endeavour to create a meaningful impact, driven by
                our core principles and essence, reaching beyond our industry to
                positively touch every association we encounter.
              </p>
            </div>
          </div>
        </div>
      </>
      {/* Offset cards */}
      <>
        <div className="offsetCardWrap relative pb-32 bg-[#f2f4f7]">
          <div className="max-w-screen-lg shadow-md mx-auto left-0 right-0 absolute bg-[#f2f4f7] grid grid-cols-3 -top-32">
            <div className="offsetCard bg-white hover:bg-[#f2f4f7] px-10 py-[4em] ">
              <div className="w-max">
                <Icon path={mdiEyeOutline} size={2} className="inline" />
              </div>
              <h4 className="text-[22px] font-bold mt-3 mb-2">Vision</h4>
              <p className="text-base font-medium">
                Create Sustainable Value for our Stakeholders by connecting
                People and Technology.
              </p>
            </div>
            <div className="offsetCard border-dashed hover:bg-[#f2f4f7] border-2 border-[#DBDBDB] border-y-0 bg-white px-10 py-[4em] ">
              <div className="w-max">
                <Icon path={mdiEyeOutline} size={2} className="inline" />
              </div>
              <h4 className="text-[22px] font-bold mt-3 mb-2">Purpose</h4>
              <p className="text-base font-medium">
                Be a world class provider of high-quality Information &
                Technology solutions.
              </p>
            </div>
            <div className="offsetCard bg-white hover:bg-[#f2f4f7] px-10 py-[4em] ">
              <div className="w-max">
                <Icon path={mdiEyeOutline} size={2} className="inline" />
              </div>
              <h4 className="text-[22px] font-bold mt-3 mb-2">Values</h4>
              <p className="text-base font-medium">
                Integrity <br /> Responsiveness <br /> Commitment & Teamwork
              </p>
            </div>
          </div>
        </div>
      </>

      {/* Our Partners */}
      <>
        <div id="Partners" className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Our Partners
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  Our proficiency with tech platforms paves the way for
                  progressive business results, blending innovation and
                  efficiency seamlessly.
                </p>
              </div>
              <div className="flex justify-center items-center gap-20">
                {/* <div>
                  <Image src={microsoft} alt="microsoft" />
                </div>
                <div>
                  <Image src={infor} alt="Infor" />
                </div>
                <div>
                  <Image src={automationAnywhere} alt="Automation" />
                </div>
                <div>
                  <Image src={Oracle} alt="oracle" />
                </div> */}
                {/* <div>
                  <Image src={lsCentral} alt="LsCentral" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </>

      <Awards />
      <TeamProfile />
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
      <Csr
        arr={[
          {
            _id: 1,
            title: "Statutory Report",
            tabData: [
              {
                id: 1,
                title: "FY 2022 - 2023",
              },
              {
                id: 2,
                title: "FY 2021 - 2022",
              },
              {
                id: 3,
                title: "FY 2020 - 2021",
              },
              {
                id: 4,
                title: "FY 2019 - 2020",
              },
              {
                id: 5,
                title: "FY 2018 - 2019",
              },
              {
                id: 6,
                title: "FY 2017 - 2018",
              },
            ],
          },
          {
            _id: 2,
            title: "Corporate Policies",
            tabData: [
              {
                id: 1,
                name: "Mrs. Nyrika Holkar, Chairperson",
                image: "",
              },
              {
                id: 2,
                name: "Mrs. Nyrika Holkar, Chairperson",
                image: "",
              },
              {
                id: 3,
                name: "Mrs. Nyrika Holkar, Chairperson",
                image: "",
              },
              {
                id: 4,
                name: "Mrs. Nyrika Holkar, Chairperson",
                image: "",
              },
            ],
          },
          {
            _id: 3,
            title: "CSR Updates",
            tabData: [
              {
                id: 1,
                title: "FY 2020 - 2021",
              },
              {
                id: 2,
                title: "FY 2021 - 2022",
              },
              {
                id: 3,
                title: "FY 2022 - 2023",
              },
              {
                id: 4,
                title: "FY 2023 - 2024",
              },
              {
                id: 5,
                title: "FY 2024 - 2025",
              },
              {
                id: 6,
                title: "FY 2025 - 2026",
              },
            ],
          },
          {
            _id: 4,
            title: "Statutory Updates",
            tabData: [
              {
                id: 1,
                title: "FY 2020 - 2021",
              },
              {
                id: 2,
                title: "FY 2021 - 2022",
              },
              {
                id: 3,
                title: "FY 2022 - 2023",
              },
              {
                id: 4,
                title: "FY 2023 - 2024",
              },
              {
                id: 5,
                title: "FY 2024 - 2025",
              },
              {
                id: 6,
                title: "FY 2025 - 2026",
              },
            ],
          },
        ]}
      />
      {/* Tesing */}
      <InfotechWeeklyAlt />
    </>
  );
};

export default Page;

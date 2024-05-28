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
        <div className={`absolute w-full`}>
          <Navbar theme="light" />
        </div>
      </div>
      <AboutIntro />
      <ClientLogos />
      <>
        <Timeline />
      </>
      <>
        <div className={`${styles.visionWrap}`}>
          <div className="max-w-screen-lg mx-auto px-[2rem] py-[5em]">
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
            <div className="offsetCard bg-white hover:bg-[#f2f4f7] px-10 py-[4em]">
              <div className="w-max">
                <Icon path={mdiEyeOutline} size={2} className="inline" />
              </div>
              <h4 className="text-[22px] font-bold mt-3 mb-2">Vision</h4>
              <p className="text-base font-medium">
                Create Sustainable Value for our Stakeholders by connecting People and Technology.
              </p>
            </div>
            <div className="offsetCard border-dashed hover:bg-[#f2f4f7] border-2 border-[#DBDBDB] border-y-0 bg-white px-10 py-[4em] ">
              <div className="w-max">
                <Icon path={mdiEyeOutline} size={2} className="inline" />
              </div>
              <h4 className="text-[22px] font-bold mt-3 mb-2">Purpose</h4>
              <p className="text-base font-medium">
                Be a world class provider of high-quality Information & Technology solutions.
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
                <p className="font-medium leading-[22px] md:w-[90%]">
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
              name: "Tejas Bhanushali",
              designation: "Chief Manager Finance and Accounts",
              avatar: "avatar1",
              desc: "I am Tejas Bhanushali, Chief Manager Finance and Accounts at Godrej, bringing over 15 years of expertise to the Finance and Accounts Department. My journey here has been truly rewarding, contributing significantly to the growth and success of the company. Having performed audits for renowned international companies such as Reliance Global, ICICI Bank, and SR Projects, I can attest to the dynamic and challenging nature of my role. Godrej fosters an environment that encourages continuous learning and professional development, making every day a fulfilling experience. I take pride in being part of a team that values excellence and consistently strives for financial prowess in the industry.",
            },
            {
              _id: 2,
              name: "Milind Shigam",
              designation: "Regional Sales Director for the Middle East",
              avatar: "avatar2",
              desc: "I am proud to work with this dynamic organization for a decade. I always have had the opportunity to work with remarkable clients, recommending and implementing innovative technology solutions. Supportive senior management, excellent work culture, exposure to next-generation technologies and industry-standard business practices - all these aspects together have made my journey incredible. There is enthusiasm and positivity in the work environment of Godrej Infotech. I wholeheartedly recommend Godrej Infotech to anyone seeking a career in the technology consulting and services space. ",
            },
            {
              _id: 3,
              name: "Vartika Kumar",
              designation: "Finance Consultant",
              avatar: "avatar1",
              desc: "I am Vartika Kumar, a Finance Consultant at Godrej with 1.8 years of experience in Infor LN-ERP implementation and support. Working here has been an enriching experience, contributing to the overall excellence of the company. The working culture is not only motivating and progressive but also incredibly flexible. Godrej provides a positive environment where employee safety, growth, and goal attainment are prioritized. It's a diverse and inclusive workplace where I feel equally important, involved, and supported in every task. My day starts with organizing my tasks, checking emails, and prioritizing project-related activities. Godrej stands out in providing ample opportunities for personal and professional growth, emphasizing employee development. My journey with Godrej has been amazing, filled with valuable learning experiences every day.",
            },
            {
              _id: 4,
              name: "Ujwal Bhandari",
              designation: "Solution Architect & Principal Consultant",
              avatar: "avatar2",
              desc: "I am Ujwal Bhandari, grateful for the enriching 10-year journey with this remarkable company, where I've seamlessly blended 6 years of IT expertise with 4 years in the dynamic finance domain. As a Solution Architect and Principal Consultant for Infor LN ERP, each day presents new challenges in our adaptive and growth-centric culture. The experienced seniors provide unwavering guidance, fostering an environment that encourages learning. I take pride in not only being a functional and technical expert but also a problem solver, diplomat, and occasional miracle worker. The diversity and inclusion are evident, eliminating biases. This engaging and never monotonous working environment has not only honed my professional skills but also enhanced my personal development—improving time management, discipline, solution approach, and communication skills. There's immense satisfaction in resolving critical business issues and receiving well-deserved appreciation. Cheers to continuous growth and success! ",
            },
            {
              _id: 5,
              name: "Salil Gawade",
              designation: "Finance Consultant",
              avatar: "avatar1",
              desc: "In my 2 years and 4 months journey with this dynamic team, every day feels like a new adventure. As a Finance Consultant, I've dived into various financial sectors, crafting innovative solutions that challenge the status quo. Our company's culture is not just helpful, it's electric! It's like being part of a high-energy startup where ideas flow freely, and every voice matters. We're not just colleagues; we're a tight-knit community, cheering each other on every step of the way. In our vibrant workspace, diversity isn't just a buzzword; it's our strength. We thrive on the mix of perspectives and experiences that each team member brings to the table. A typical day kicks off with a cup of coffee and lively brainstorming sessions, where creativity knows no bounds. We execute our plans with passion, fuelling each other's drive to succeed. And amidst the hustle, there's always time for laughter and camaraderie. But what sets this company apart is its unwavering commitment to our growth, both personally and professionally. From skill-building workshops to mentorship programs, the opportunities for development are endless. Here, we're not just employees; we're dreamers, innovators, and trailblazers shaping our futures together.",
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
                name: "Mr. P. E. Fouzdar, Member",
                image: "",
              },
              {
                id: 3,
                name: "Mr. V. R. Mehta, Member",
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

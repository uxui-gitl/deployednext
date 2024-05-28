"use client";
import ClientLogos from "@/sections/clientLogos/ClientLogos";

import TeamProfile from "@/sections/teamProfile/TeamProfile";
// import styles from "./page.module.css";
import React, { useState } from "react";
import Icon, { Stack } from "@mdi/react";
import { mdiLinkedin, mdiCircle } from "@mdi/js";

import { mdiEyeOutline } from "@mdi/js";
import Awards from "@/sections/awards/Awards";
import AboutIntro from "@/sections/aboutIntro/AboutIntro";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";
import Balancer from "react-wrap-balancer";
import Navbar from "@/components/Navbar/Navbar";
import Timeline from "@/components/Timeline";
import EmployeeExp from "@/components/EmployeeExp";
import Subscribe from "@/sections/subscribe/Subscribe";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import Image from "next/image";
import clsx from "clsx";
import ProfileVideo from "../../../../../public/ProfileVideo.png";
import ProfilePotrait from "../../../../../public/ProfilePotrait.png";
import VideoModal from "@/components/VideoModal";
import Link from "next/link";
// import { Modal } from "modal-nextjs";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const ZigZagLine = () => {
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dash-pattern"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1="0"
              x2="8"
              y2="0"
              stroke="#0745D3"
              strokeWidth="2"
            />
          </pattern>
        </defs>
        <path
          d="M0 50 Q 25 0, 50 50 T 100 50"
          fill="none"
          stroke="url(#dash-pattern)"
          strokeWidth="2"
          strokeDasharray="5, 5"
        />
      </svg>
    );
  };

  return (
    <>
      <div className={`relative z-[500]`}>
        <div className={`absolute w-full  `}>
          <Navbar theme="dark" />
        </div>
      </div>

      <>
        <div
          className={
            "bg-grid text-left max-w-screen-xl  mb-5 mx-auto p-5   px-[2rem]"
          }
        >
          <div>
            <div className=" mt-[5em] mb-[2em]">
              <h4
                className={`  text-[16px] font-medium text-[#0745D3] uppercase ribbon mb-4`}
              >
                chief executive officer
              </h4>
              <div className={`flex flex-col md:flex-row gap-8 justify-start`}>
                <div className="">
                  <h3 className="text-[72px] leading-[80px] font-bold my-6">
                    <Balancer>Ajay Pimparkar</Balancer>
                  </h3>
                  <p className="font-normal leading-[22px] w-3/4 mb-4">
                    <Balancer>
                      Mr. Ajay Pimparkar is the IT veteran and strategic
                      visionary of our company, who has transformed Godrej
                      Group&apos;s technology landscape for over 30 Years. His
                      role has reinforced our IT infrastructure and enabled us
                      to perform at the forefront of digital innovation, driving
                      operational efficiency and enriching customer experience.
                    </Balancer>
                  </p>
                  <div>
                    <Link
                      href="/"
                      data-cursor-size="10px"
                      className="text-sm flex justify-start gap-x-2 text-[#07001F] leading-6 font-medium"
                    >
                      <Icon path={mdiLinkedin} size={1} color="#07001F" />
                      Connect on Linkedin
                    </Link>
                  </div>
                </div>
                <div className="w-full">
                  <Image src={ProfilePotrait} alt="ProfilePotrait" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <div
          className={
            "text-left max-w-screen-xl py-12  mb-5 mx-auto p-5   px-[2rem]"
          }
        >
          {/* <ZigZagLine /> */}
          <div className=" w-full h-full">
            <Image
              src={ProfileVideo}
              onClick={openModal}
              className="mx-auto cursor-pointer"
              alt="Profile Video"
            />
          </div>
        </div>
      </>

      <VideoModal isOpen={isModalOpen} closeModal={closeModal} />
      <CaseStudy
        ribbon="Achievements"
        title="Awards and
        Recognition "
        desc="Our proficiency in the technology ecosystem and collaborative work culture have earned us appreciation from the partners, business sector, and the industry. It is the Kaizen attitude that we infuse at every level which consistently strengthens our organisation performance. "
        isHomepage={false}
        arr={[
          {
            id: 1,
            subtitle: "Award 1",
            title:
              "Enabling organizations to optimize cost & enhance business processes with next-gen digital technologies like Robotic Process Automation (RPA), eCommerce & Analytics.",
            thumbnail: "",
            description: "",
            tags: [""],
            cta: "",
            link: "/",
          },
          {
            subtitle: "Award 2",
            id: 2,
            title:
              "Enabling organizations to optimize cost & enhance business processes with next-gen digital technologies like Robotic Process Automation (RPA), eCommerce & Analytics.",
            thumbnail: "",
            description: "",
            tags: [""],
            cta: "",
            link: "/",
          },
          {
            id: 3,
            subtitle: "Award 3",
            title:
              "Enabling organizations to optimize cost & enhance business processes with next-gen digital technologies like Robotic Process Automation (RPA), eCommerce & Analytics.",
            thumbnail: "",
            description: "",
            tags: [""],
            cta: "",
            link: "/",
          },
        ]}
      />
      <Subscribe
        title="Want to join the tech revolution?"
        desc="Discover exciting opportunities here and become an integral part of our Tech Movement"
        cta="Explore Your Opportunity"
        formCta="Subscribe"
        ctaArrow={true}
        link="/"
        form={false}
      />
    </>
  );
};

export default Profile;

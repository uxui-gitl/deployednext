import Announcement from "@/sections/announcement/Announcement";
import ClientLogos from "@/sections/clientLogos/ClientLogos";
import Copyright from "@/sections/copyright/Copyright";
import Footer from "@/sections/footer/Footer";
import Navbar from "@/sections/navbar/Navbar";
import TeamProfile from "@/sections/teamProfile/TeamProfile";
import Timeline from "@/sections/timeline/Timeline";
import styles from "./page.module.css";
import React from "react";
import Image from "next/image";

import Icon from "@mdi/react";
import { mdiEyeOutline } from "@mdi/js";
import Awards from "@/sections/awards/Awards";

const AboutUs = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      {/* <Timeline /> */}
      <>
        <div className={`${styles.visionWrap} `}>
          <div className="max-w-screen-lg mx-auto px-[2rem] py-[5em]">
            <h3 className="mt-[3em] mb-[2em] text-7xl font-bold leading-[90px]">
              Our team is the driving force behind our mission, and their
              passion and expertise make it possible.
            </h3>
          </div>
        </div>
      </>
      {/* Offset cards */}
      <>
        <div className="offsetCardWrap relative mb-32">
          <div className="max-w-screen-lg shadow-md mx-auto left-0 right-0 absolute bg-white grid grid-cols-3 -top-32">
            <div className="offsetCard  bg-white px-10 py-[4em] ">
              <div className="w-max">
                <Icon path={mdiEyeOutline} size={2} className="inline" />
              </div>
              <h4 className="text-[22px] font-bold mt-3 mb-2">Vision</h4>
              <p className="text-base font-medium">
                Create Sustainable Value for our Stakeholders by connecting
                People and Technology.
              </p>
            </div>
            <div className="offsetCard border-dashed border-2 border-[#DBDBDB] border-y-0 bg-white px-10 py-[4em] ">
              <div className="w-max">
                <Icon path={mdiEyeOutline} size={2} className="inline" />
              </div>
              <h4 className="text-[22px] font-bold mt-3 mb-2">Purpose</h4>
              <p className="text-base font-medium">
                Be a world class provider of high-quality Information &
                Technology solutions.
              </p>
            </div>
            <div className="offsetCard bg-white px-10 py-[4em] ">
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
      <TeamProfile />
      <Awards />
      <ClientLogos />
      <Footer />
      <Copyright />
    </>
  );
};

export default AboutUs;

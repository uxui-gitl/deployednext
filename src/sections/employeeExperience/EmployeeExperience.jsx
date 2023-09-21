import React from "react";
import styles from "./employeeExperience.module.css";
import Image from "next/image";
import award1 from "../../../public/awards/award-1.png";
import award2 from "../../../public/awards/award-2.png";
import Marquee from "react-fast-marquee";
import avatar from "../../../public/contact/avatar.png";

const EmployeeExperience = () => {
  return (
    <>
      <div className={` w-full bg-[#f2f4f7] py-32`}>
        <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] grid grid-cols-2">
          <div className="bg-blue-50">
            <h4
              className={`${styles.subHead} font-medium text-[#0745D3] uppercase ribbon`}
            >
              Unleashing Joy at Work
            </h4>
            <h3 className="text-4xl  leading-[42px] mb-3 font-bold">
              Employees Share Their Happy Experiences
            </h3>
            <p className="font-medium leading-[22px] md:w-[90%] ">
              Discover the heartwarming stories of our employees as they reveal
              their joyful experiences at work. From moments of triumph to
              instances of camaraderie, their testimonials showcase a workplace
              where happiness is unleashed and celebrated. Learn how fostering a
              positive environment can lead to a truly fulfilling and successful
              team dynamic.
            </p>
          </div>
          <div className=" ">
            <Marquee
              pauseOnHover={true}
              direction="up"
              className={`min-h-max min-w-full`}
            >
              <div className="max-w-[315px] h-auto flex flex-col bg-[#F2F4F7]">
                <p>
                  On behalf of our entire organization, please accept our
                  sincere appreciation for the excellent job
                </p>
                <div className="flex flex-row justify-center items-start">
                  <Image src={avatar} alt="avatar"></Image>
                  <div>
                    <h4>Rahul Dravid</h4>
                    <h6>UI/UX Associate Manager</h6>
                  </div>
                </div>
              </div>

              <div className="max-w-[315px] h-auto flex flex-col bg-[#F2F4F7]">
                <p>
                  On behalf of our entire organization, please accept our
                  sincere appreciation for the excellent job
                </p>
                <div className="flex flex-row justify-center items-start">
                  <Image src={avatar} alt="avatar"></Image>
                  <div>
                    <h4>Rahul Dravid</h4>
                    <h6>UI/UX Associate Manager</h6>
                  </div>
                </div>
              </div>

              <div className="max-w-[315px] h-auto flex flex-col bg-[#F2F4F7]">
                <p>
                  On behalf of our entire organization, please accept our
                  sincere appreciation for the excellent job
                </p>
                <div className="flex flex-row justify-center items-start">
                  <Image src={avatar} alt="avatar"></Image>
                  <div>
                    <h4>Rahul Dravid</h4>
                    <h6>UI/UX Associate Manager</h6>
                  </div>
                </div>
              </div>

              <div className="max-w-[315px] h-auto flex flex-col bg-[#F2F4F7]">
                <p>
                  On behalf of our entire organization, please accept our
                  sincere appreciation for the excellent job
                </p>
                <div className="flex flex-row justify-center items-start">
                  <Image src={avatar} alt="avatar"></Image>
                  <div>
                    <h4>Rahul Dravid</h4>
                    <h6>UI/UX Associate Manager</h6>
                  </div>
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeExperience;

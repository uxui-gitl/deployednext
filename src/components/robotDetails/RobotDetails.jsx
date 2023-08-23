import React from "react";
import Lottie from "lottie-react";
import robotAnimation from "../../assets/robot.json";
import Icon from "@mdi/react";
import { mdiArrowUp } from "@mdi/js";
import styles from "./robotDetails.module.css";
import Link from "next/link";

const RobotDetails = () => {
  return (
    <div className="">
      <div>
        <h4
          className={`${styles.subHead} font-bold text-2xl sm:text-4xl leading-[42px] text-[#0745D3] ribbon ribbon-robot`}
        >
          Automate for the Future
        </h4>
        <p className="font-normal text-base leading-[22px]">
          Enabling organizations to optimize cost & enhance business processes
          with next-gen digital technologies like Robotic Process Automation
          (RPA), eCommerce & Analytics.
        </p>
        <div className="mx-auto pt-[26px] pb-16">
           
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <div className="bg-[#fff] border-[rgb(112 112 112 / 15%)] border">
              <div className="font-semibold text-base pb-2 px-[12px] pt-2 bg-[#f2f4f7]">
                Enterprise Suite
              </div>
              <div className="bg-[#fff] p-[12px]">
                <p className="text-base leading-8 ">
                  <Link
                    href="/"
                    className="   text-[#0745d3] hover:underline  "
                  >
                    Microsoft Dynamics 365
                  </Link>
                  <span className="mx-2 text-[#475467]">|</span>
                  <Link
                    href="/"
                    className="   text-[#0745d3] hover:underline   mt-2"
                  >
                    Oracle
                  </Link>
                  <span className="mx-2 text-[#475467]">|</span> <br />
                  <Link
                    href="/"
                    className="   text-[#0745d3] hover:underline   mt-2"
                  >
                    Infor Cloudsuite
                  </Link>
                  <span className="mx-2 text-[#475467]">|</span>
                  <Link
                    href="/"
                    className="   text-[#0745d3] hover:underline   mt-2"
                  >
                    LS Retail
                  </Link>
                </p>
              </div>
            </div>
            <div className="bg-[#fff] border-[rgb(112 112 112 / 15%)] border">
              <div className="font-semibold text-base pb-2 px-[12px] pt-2 bg-[#f2f4f7]">
                Technology Suite
              </div>
              <div className="bg-[#fff] p-[12px]">
                <p className="text-base leading-8 ">
                  <Link
                    href="/"
                    className="  text-[#0745d3] hover:underline  "
                  >
                    Java
                  </Link>
                  <span className="mx-2 text-[#475467]">|</span>
                  <Link
                    href="/"
                    className="  text-[#0745d3] hover:underline   mt-2"
                  >
                    .Net, Share Point
                  </Link>
                  <span className="mx-2 text-[#475467]">|</span> <br />
                  <Link
                    href="/"
                    className="  text-[#0745d3] hover:underline   mt-2"
                  >
                    Low code application development
                  </Link>
                </p>
              </div>
            </div>
            <div className="bg-[#fff] border-[rgb(112 112 112 / 15%)] border">
              <div className="font-semibold text-base pb-2 px-[12px] pt-2 bg-[#f2f4f7]">
                Accelerators
              </div>
              <div className="bg-[#fff] p-[12px]">
                <p className="text-base leading-8 ">
                  <Link
                    href="/"
                    className="  text-[#0745d3] hover:underline  "
                  >
                    Payroll D365
                  </Link>
                  <span className="mx-2 text-[#475467]">|</span>
                  <Link
                    href="/"
                    className="  text-[#0745d3] hover:underline   mt-2"
                  >
                    EXIM
                  </Link>
                  <span className="mx-2 text-[#475467]">|</span>
                  <Link
                    href="/"
                    className="  text-[#0745d3] hover:underline   mt-2"
                  >
                    WMS
                  </Link>
                  <span className="mx-2 text-[#475467]">|</span> <br />
                  <Link
                    href="/"
                    className="  text-[#0745d3] hover:underline   mt-2"
                  >
                    NAV encompass
                  </Link>
                  <span className="mx-2 text-[#475467]">|</span>
                  <Link
                    href="/"
                    className="  text-[#0745d3] hover:underline   mt-2"
                  >
                    Payroll Nav
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotDetails;

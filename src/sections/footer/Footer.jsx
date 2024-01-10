import Link from "next/link";
import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

import Icon, { Stack } from "@mdi/react";
import { mdiFacebook } from "@mdi/js";
import { mdiInstagram } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";
import { mdiCircle } from "@mdi/js";

const Footer = () => {
  return (
    <div
      data-cursor-color="#61dbfb"
      className={`${styles["bg-footer"]} bg-[#31094a] bg-gradient-to-r from-[#31094a] via-[#1d0845]  to-[#0e002a]  text-[#DBDBDB]`}
    >
      <div
        className={`${styles.container} max-w-screen-xl md:max-w-screen-xl mx-auto p-5 px-[2rem]`}
      >
        <div className="flex flex-col md:flex-row justify-center mx-auto  ">
          <div className={`sm:w-1/5 pr-2 pb-2`}>
            {/* Col 1 */}
            <div className="col">
              <Image
                src="/godrejLogoWhite.svg"
                alt="Godrej Logo"
                width="150"
                height="150"
              />
              <p className="my-4 text-sm text-[#F5F5F5] leading-5 font-medium">
                Revolutionize your business operations, save time and boost
                productivity with our cutting-edge offerings.{" "}
              </p>
              <ul className={styles["social-links"]}>
                <li>
                  <Link
                    href="/"
                    data-cursor-size="10px"
                    className="text-sm text-[#F5F5F5] leading-6 font-medium"
                  >
                    {/* <Icon path={mdiFacebook} style={{marginLeft: '0.5em'}} size={1}/> */}

                    <Stack size={1}>
                      <Icon path={mdiCircle} color="#07001F" />
                      <Icon path={mdiFacebook} color="#FFF" />
                    </Stack>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    data-cursor-size="10px"
                    className="text-sm text-[#F5F5F5] leading-6 font-medium"
                  >
                    <Stack size={1}>
                      <Icon path={mdiCircle} color="#FFF" />
                      <Icon path={mdiLinkedin} color="#07001F" />
                    </Stack>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    data-cursor-size="10px"
                    className="text-sm text-[#F5F5F5] leading-6 font-medium"
                  >
                    <Stack size={1}>
                      <Icon path={mdiCircle} color="#07001F" />
                      <Icon path={mdiInstagram} color="#FFF" />
                    </Stack>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={`flex sm:gap-10 gap-6 flex-col md:flex-row sm:px-5`}>
            {/* Col 2 */}
            <div className="sm:w-54">
              <h3 className=" text-base	leading-6 font-medium mb-2">
                Solutions
              </h3>
              <ul>
                <li>
                  <h5 className="uppercase text-[#98A2B3] font-medium text-sm   mt-3 leading-6">
                    Automation
                  </h5>
                </li>
                <li>
                  <Link
                    href="/Solutions/Enterprise-Suite"
                    data-cursor-size="10px"
                    // sizeAnimationDuration="0.5"
                    className="text-sm text-[#F5F5F5] leading-6 font-medium"
                  >
                    Enterprise Suite
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Solutions/Technology-Stack"
                    data-cursor-size="10px"
                    className="text-sm text-[#F5F5F5] leading-6 font-medium"
                  >
                    Technology Stack
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    data-cursor-size="10px"
                    className="text-sm text-[#F5F5F5] leading-6 font-medium"
                  >
                    Godrej Infotech Products
                  </Link>
                </li>

                <li>
                  <h5 className="uppercase text-[#98A2B3] font-medium text-sm  mt-3 leading-6">
                    Cloudification
                  </h5>
                </li>
                <li>
                  <Link
                    href="http://localhost:3000/Solutions/Upgrade-to-Cloud"
                    data-cursor-size="10px"
                    className="text-sm text-[#F5F5F5] leading-6 font-medium"
                  >
                    Upgrade to Cloud
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    data-cursor-size="10px"
                    className="text-sm text-[#F5F5F5] leading-6 font-medium"
                  >
                    Cloud Stack
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://localhost:3000/Solutions/Cloud-Stack-and-Services"
                    data-cursor-size="10px"
                    className="text-sm text-[#F5F5F5] leading-6 font-medium"
                  >
                    Cloud services
                  </Link>
                </li>

                <li>
                  <h5 className="uppercase text-[#98A2B3] font-medium text-sm mt-3 leading-6">
                    Transformation
                  </h5>
                </li>
                <li>
                  <Link
                    href="http://localhost:3000/Solutions/Intelligent-Technologies"
                    data-cursor-size="10px"
                    className="text-sm text-[#F5F5F5] leading-6 font-medium"
                  >
                    Intelligent Technologies
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://localhost:3000/Solutions/Customer-Experience"
                    data-cursor-size="10px"
                    className="text-sm text-[#F5F5F5] leading-6 font-medium"
                  >
                    Customer Experience
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://localhost:3000/Solutions/Data-Insights"
                    data-cursor-size="10px"
                    className="text-sm text-[#F5F5F5] leading-6 font-medium"
                  >
                    Data Insights
                  </Link>
                </li>
              </ul>
            </div>
            {/* Col 3 */}
            <div className="sm:w-48">
              <h3 className=" text-base	leading-6 font-medium mb-2">Services</h3>
              <ul>
                <li>
                  <Link
                    href="http://localhost:3000/Our-Services/Business-Consulting"
                    data-cursor-size="10px"
                    className="text-sm text-[#F5F5F5] leading-6 font-medium"
                  >
                    {" "}
                    Business Proccess Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://localhost:3000/Our-Services/Implementation-and-Global-Rollout"
                    data-cursor-size="10px"
                    className="text-sm text-[#F5F5F5] leading-6 font-medium"
                  >
                    {" "}
                    Implementation & Global Roll Out
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://localhost:3000/Our-Services/Managed-Services"
                    data-cursor-size="10px"
                    className="text-sm text-[#F5F5F5] leading-6 font-medium"
                  >
                    {" "}
                    Managed Services{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    data-cursor-size="10px"
                    className="text-sm text-[#F5F5F5] leading-6 font-medium"
                  >
                    {" "}
                    Data & Information Security{" "}
                  </Link>
                </li>
              </ul>
            </div>
            {/* Col 4 */}
            <div className="sm:w-42">
              <h3 className=" text-base	leading-6 font-medium mb-2">
                Industry Focus
              </h3>
              <ul>
                <li>
                  <Link
                    href="http://localhost:3000/Industries/Manufacturing"
                    data-cursor-size="10px"
                    className="text-sm text-[#F5F5F5] leading-6 font-medium"
                  >
                    {" "}
                    Manufacturing{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://localhost:3000/Industries/Retail"
                    data-cursor-size="10px"
                    className="text-sm text-[#F5F5F5] leading-6 font-medium"
                  >
                    {" "}
                    Retail
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://localhost:3000/Industries/Trading-and-Distribution"
                    data-cursor-size="10px"
                    className="text-sm text-[#F5F5F5] leading-6 font-medium"
                  >
                    {" "}
                    Trading & Distribution{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://localhost:3000/Industries/Project"
                    data-cursor-size="10px"
                    className="text-sm text-[#F5F5F5] leading-6 font-medium"
                  >
                    {" "}
                    Project{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://localhost:3000/Industries/Professional-Services"
                    data-cursor-size="10px"
                    className="text-sm text-[#F5F5F5] leading-6 font-medium"
                  >
                    {" "}
                    Professional Services{" "}
                  </Link>
                </li>
              </ul>
            </div>
            {/* Col 5 */}
            <div className="sm:w-48">
              <h3 className=" text-base	leading-6 font-medium mb-2">Company</h3>
              <ul>
                <li>
                  <Link
                    href="http://localhost:3000/About-Us"
                    data-cursor-size="10px"
                    className="text-sm text-[#F5F5F5] leading-6 font-medium"
                  >
                    {" "}
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://localhost:3000/Infotech-Weekly"
                    data-cursor-size="10px"
                    className="text-sm text-[#F5F5F5] leading-6 font-medium"
                  >
                    Infotech Weekly
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://localhost:3000/Careers"
                    data-cursor-size="10px"
                    className="text-sm text-[#F5F5F5] leading-6 font-medium"
                  >
                    Career
                  </Link>
                </li>

                <li>
                  <Link
                    href="http://localhost:3000/Contact-Us"
                    data-cursor-size="10px"
                    className="text-sm text-[#F5F5F5] leading-6 font-medium"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

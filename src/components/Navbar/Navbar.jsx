"use client";

import { useState } from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";

import IndustryFocusNav from "./IndustryFocusNav";
import ServicesNav from "./ServicesNav";
import SolutionsNav from "./SolutionsNav";
import InsightsNav from "./InsightsNav";
import CareersNav from "./CareersNav";
import clsx from "clsx";

const Navbar = ({ theme }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <Container>
      {/* <div className={`text-white bg-transparent py-5`}> */}
      <div
        className={clsx("py-5", {
          "text-white": theme !== "dark", // Apply 'text-white' if theme is not dark
          "text-black": theme === "dark", // Apply 'text-black' if theme is dark
          "bg-transparent": true, // You can keep common classes outside the object
        })}
      >
        <button className="hidden"></button>
        <div className="flex items-center max-lg:justify-between max-lg:flex-row-reverse">
          <div className="flex justify-between items-center max-lg:w-full">
            <Link className="" href="/">
              <Image
                src={
                  theme !== "dark" ? "/godrejLogoWhite.svg" : "/godrejLogo.svg"
                }
                alt="Godrej Infotech Logo"
                width={163}
                height={59}
                priority={true}
              />
            </Link>
            <button
              type="button"
              onClick={() => setShowNav(!showNav)}
              className="lg:hidden cursor-pointer"
            >
              <div
                className={`w-[23px] h-[2px] transition ease-in duration-150  bg-white ${
                  showNav
                    ? "rotate-45 mb-0  translate-y-[1px]"
                    : "rotate-0 mb-1"
                } `}
              ></div>
              <div
                className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white ${
                  showNav ? "hidden mb-0" : "mb-1"
                } `}
              ></div>
              <div
                className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white  ${
                  showNav ? "-rotate-45 mb-0" : "rotate-0"
                }`}
              ></div>
            </button>
          </div>
          <div
            className={` flex w-full max-lg:absolute transition ease-in duration-200 top-20 z-40  ${
              showNav
                ? "max-lg:translate-x-0 max-lg:scale-100"
                : " max-lg:max-h-0 max-lg:scale-y-50 max-lg:-translate-y-1/4"
            }`}
          >
            <div className="flex max-lg:flex-col lg:items-center lg:justify-end max-lg:justify-between max-sm:w-10/12 max-sm:mx-auto sm:ml-auto max-lg:w-[320px] lg:w-full max-lg:max-h-[500px]  overflow-y-auto lg:mb-0 max-lg:bg-white max-lg:rounded-lg">
              <nav className="mt-0 px-3 lg:px-6 text-[15.5px] mb-0 max-lg:py-10 max-lg:px-5">
                <ul className="flex lg:items-center lg:space-x-2 max-lg:flex-col max-lg:text-neutral-700 max-lg:text-xl max-lg:font-medium max-lg:space-y-6 max-lg:h-auto  overflow-y-auto">
                  <SolutionsNav />
                  <ServicesNav />
                  <IndustryFocusNav />
                  <li>
                    <Link
                      href={"/About-Us"}
                      className="  font-normal w-fit flex items-center p-1 hover:text-neutral-500"
                    >
                      About Us
                    </Link>
                  </li>
                  <CareersNav />
                  {/* <InsightsNav /> */}
                </ul>
              </nav>
              {/* Mobile */}
              <div className="lg:flex items-center max-lg:flex-col lg:px-0 px-3 mb-3 lg:mb-0 text-left lg:space-x-4">
                <div className="lg:hidden max-lg:flex justify-center max-lg:border-[1px] max-lg:mr-4 rounded-md max-lg:bg-neutral-800">
                  <Link
                    href="/Contact-Us"
                    className="hover:text-neutral-500 max-lg:py-2 font-medium max-lg:text-[16px] max-lg:font-semibold "
                  >
                    Contact Us
                  </Link>
                </div>
                <Link
                  href="/Contact-Us"
                  className="max-lg:hidden px-8 py-[5px] border-[1px] font-medium rounded-sm hover:text-neutral-500 "
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;

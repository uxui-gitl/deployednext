"use client";
import React, { useState } from "react";
import Navlist from "./NavUtils/Navlist.jsx";
import Navlist2 from "./NavUtils/Navlist2.jsx";
import Link from "next/link.js";

const SolutionsNav = () => {
  const [show, setShow] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const handleOnclick = () => {
    if (window.innerWidth < 1024) {
      setShow(!show);
    }
  };

  const handleMouseEnter = (category) => {
    if (window.innerWidth > 1024) {
      setCurrentCategory(category);
      setShow(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 1024) {
      setCurrentCategory(null);
      setShow(false);
    }
  };

  return (
    <li
      onMouseEnter={() => handleMouseEnter("solutions")}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setShow(!show)}
        type="button"
        className={`flex items-center p-1 font-normal transition ease-in duration-150 max-lg:justify-between max-lg:w-full ${
          show ? "lg:text-neutral-300 " : ""
        }`}
      >
        Solutions
        <svg
          opacity="0.5"
          aria-hidden="true"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          className={` ml-1 transition-all ease-in duration-200  max-lg:scale-x-125 ${
            show ? "lg:mt-2 opacity-40 max-lg:0" : "mt-0 max-lg:-rotate-90"
          }`}
        >
          <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
        </svg>
      </button>
      <div
        className={`relative lg:absolute lg:flex lg:-ml-80 bg-white rounded-md lg:py-4 py-2 transition ease-in duration-150 ${
          show ? "opacity-100 " : "opacity-0 invisible max-lg:hidden"
        }`}
      >
        <div className="lg:px-4 lg:border-r-[1px] mb-4 lg:mb-0 lg:pr-10">
          <ul className="max-lg:pl-6">
            <li className="">
              <Navlist
                main="Automation"
                submain="Automate any workflow"
                path2=""
                path="M1 3a2 2 0 0 1 2-2h6.5a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2H7v4.063C7 16.355 7.644 17 8.438 17H12.5v-2.5a2 2 0 0 1 2-2H21a2 2 0 0 1 2 2V21a2 2 0 0 1-2 2h-6.5a2 2 0 0 1-2-2v-2.5H8.437A2.939 2.939 0 0 1 5.5 15.562V11.5H3a2 2 0 0 1-2-2Zm2-.5a.5.5 0 0 0-.5.5v6.5a.5.5 0 0 0 .5.5h6.5a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5ZM14.5 14a.5.5 0 0 0-.5.5V21a.5.5 0 0 0 .5.5H21a.5.5 0 0 0 .5-.5v-6.5a.5.5 0 0 0-.5-.5Z"
              />
            </li>
            <li className="">
              <Navlist
                main="Cloudification"
                submain="Host and manage packages"
                path2=""
                path="M12.876.64V.639l8.25 4.763c.541.313.875.89.875 1.515v9.525a1.75 1.75 0 0 1-.875 1.516l-8.25 4.762a1.748 1.748 0 0 1-1.75 0l-8.25-4.763a1.75 1.75 0 0 1-.875-1.515V6.917c0-.625.334-1.202.875-1.515L11.126.64a1.748 1.748 0 0 1 1.75 0Zm-1 1.298L4.251 6.34l7.75 4.474 7.75-4.474-7.625-4.402a.248.248 0 0 0-.25 0Zm.875 19.123 7.625-4.402a.25.25 0 0 0 .125-.216V7.639l-7.75 4.474ZM3.501 7.64v8.803c0 .09.048.172.125.216l7.625 4.402v-8.947Z"
              />
            </li>
            <li className="">
              <Navlist
                main="Transformation"
                submain="Find and fix vulnerability"
                path2="M16.53 9.78a.75.75 0 0 0-1.06-1.06L11 13.19l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5Z"
                path="m12.54.637 8.25 2.675A1.75 1.75 0 0 1 22 4.976V10c0 6.19-3.771 10.704-9.401 12.83a1.704 1.704 0 0 1-1.198 0C5.77 20.705 2 16.19 2 10V4.976c0-.758.489-1.43 1.21-1.664L11.46.637a1.748 1.748 0 0 1 1.08 0Zm-.617 1.426-8.25 2.676a.249.249 0 0 0-.173.237V10c0 5.46 3.28 9.483 8.43 11.426a.199.199 0 0 0 .14 0C17.22 19.483 20.5 15.461 20.5 10V4.976a.25.25 0 0 0-.173-.237l-8.25-2.676a.253.253 0 0 0-.154 0Z"
              />
            </li>
          </ul>
        </div>

        <div className="lg:px-8 lg:border-r-[1px] lg:pr-10 py-2 max-lg:pl-6">
          <li className="text-[#101828] hover:text-blue-500 pt-2">
            <Link href="/Solutions/Intelligent-Technologies">
              <span className="  text-neutral-800 font-semibold hover:text-blue-500">
                Intelligent Technologies
              </span>
            </Link>
          </li>

          <ul className="text-sm ml-5 text-[#101828] font-semibold mt-1 w-full">
            <li className="text-[#101828] hover:text-blue-500 py-2">
              <Link href="/Solutions/Intelligent-Technologies/AI-ML">
                AI & ML
              </Link>
            </li>
            <li className="text-[#101828] hover:text-blue-500 py-2">
              <Link href="/Solutions/Intelligent-Technologies/RPA">RPA</Link>
            </li>
            <li className="text-[#101828] hover:text-blue-500 py-2">
              <Link href="/Solutions/Intelligent-Technologies/IIOT">IIOT</Link>
            </li>
          </ul>
        </div>
        <div className="lg:px-8 lg:border-r-[1px] lg:pr-10 py-2 max-lg:pl-6">
          <li className="text-[#101828] hover:text-blue-500 pt-2">
            <Link href="/Solutions/Data-Insights">
              <span className="  text-neutral-800 font-semibold hover:text-blue-500">
                Data Insights
              </span>
            </Link>
          </li>

          <ul className="text-sm ml-5">
            <li className="text-[#101828] font-semibold hover:text-blue-500 py-2">
              <Link href="/Solutions/Cyber-Security">Cyber Security</Link>
            </li>
          </ul>
        </div>
        <div className="lg:px-8 lg:border-r-[1px] lg:pr-10 py-2 max-lg:pl-6">
          <li className="text-[#101828] hover:text-blue-500 pt-2">
            <Link href="#">
              <span className="  text-[#101828] font-semibold hover:text-blue-500">
                Technology Stack
              </span>
            </Link>
          </li>

          <ul className="text-sm hidden ml-3">
            <li className="text-[#101828] hover:text-blue-500 py-2">
              <Link href="/Solutions/Intelligent-Technologies/AI-ML">
                AI & ML
              </Link>
            </li>
            <li className="text-[#101828] hover:text-blue-500 py-2">
              <Link href="/Solutions/Intelligent-Technologies/RPA">RPA</Link>
            </li>
            <li className="text-[#101828] hover:text-blue-500 py-2">
              <Link href="/Solutions/Intelligent-Technologies/IIOT">IIOT</Link>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default SolutionsNav;

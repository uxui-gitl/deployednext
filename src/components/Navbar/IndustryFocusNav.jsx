"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const IndustryFocusNav = () => {
  const [show, setShow] = useState(false);
  const handleOnclick = () => {
    if (window.innerWidth < 1024) {
      setShow(!show);
    }
  };

  const handleMouseEnter = () => {
    if (window.innerWidth > 1024) {
      setShow(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 1024) {
      setShow(false);
    }
  };
  return (
    <li
      id="myLi"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={handleOnclick}
        type="button"
        className={`flex items-center p-1 transition ease-in duration-150 max-lg:justify-between font-normal max-lg:w-full ${
          show ? "lg:text-neutral-300" : ""
        }`}
      >
        Industry Focus
        <svg
          opacity="0.5"
          aria-hidden="true"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          className={`octicon octicon-chevron-down HeaderMenu-icon ml-1 transition-all ease-in duration-200  max-lg:scale-x-125 ${
            show
              ? "lg:mt-2 opacity-40 max-lg:rotate-0"
              : "mt-0 max-lg:-rotate-90"
          }`}
        >
          <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
        </svg>
      </button>
      <div
        className={`relative lg:absolute -ml-5 bg-white rounded-md lg:py-4 p-6 w-[320px] transition ease-in duration-150 ${
          show ? "opacity-100 visible" : "opacity-0 hidden"
        }`}
      >
        <div className="  w-full">
          <ul className="text-sm text-[#101828] font-semibold  w-full">
            <li>
              <Link
                href="/Industries/Manufacturing"
                className="block py-2 hover:text-blue-600"
              >
                Manufacturing
              </Link>
            </li>
            <li>
              <Link
                href="/Industries/Retail"
                className="block py-2 hover:text-blue-600"
              >
                Retail
              </Link>
            </li>
            <li>
              <Link
                href="/Industries/Trading-and-Distribution"
                className="block py-2 hover:text-blue-600"
              >
                Trading and Distribution
              </Link>
            </li>
            <li>
              <Link
                href="/Industries/Project"
                className="block py-2 hover:text-blue-600"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                href="/Industries/Professional-Services"
                className="block py-2 hover:text-blue-600"
              >
                Professional Services
              </Link>
            </li>
            <li>
              <Link
                href="/Industries/Healthcare"
                className="block py-2 hover:text-blue-600"
              >
                Healthcare
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default IndustryFocusNav;

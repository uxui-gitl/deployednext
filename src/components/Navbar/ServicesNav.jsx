"use client";
import React, { useState } from "react";
import Navlist2 from "./NavUtils/Navlist2";
import Link from "next/link";

const ServicesNav = () => {
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
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        onClick={handleOnclick}
        type="button"
        className={`flex font-normal  items-center p-1 max-lg:justify-between max-lg:w-full ${
          show ? "lg:text-neutral-300" : ""
        }`}
      >
        Services
        <svg
          opacity="0.5"
          aria-hidden="true"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          className={` ml-1 transition-all ease-in duration-200 max-lg:scale-x-125 ${
            show ? "lg:mt-2 opacity-40 max-lg:0" : "mt-0 max-lg:-rotate-90"
          }`}
        >
          <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
        </svg>
      </button>
      <div
        className={`relative lg:absolute -ml-5 bg-white rounded-md lg:py-4 p-6 w-[300px] transition ease-in duration-300 ${
          show ? "opacity-100 " : "opacity-0 hidden top-[2000px]"
        }`}
      >
        <div className="  w-full">
          <ul className="text-sm font-semibold text-[#101828]  w-full">
            <li>
              <Link
                href="/Our-Services/Business-Consulting"
                className="block py-2 hover:text-blue-600"
              >
                Business Consulting
              </Link>
            </li>
            <li>
              <Link
                href="/Our-Services/Implementation-and-Global-Rollout"
                className="block py-2 hover:text-blue-600"
              >
                Implementation & Global Rollout
              </Link>
            </li>
            <li>
              <Link
                href="/Our-Services/Managed-Services"
                className="block py-2 hover:text-blue-600"
              >
                Managed Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default ServicesNav;

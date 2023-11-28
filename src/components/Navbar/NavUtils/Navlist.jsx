"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navlist = ({ main, submain, path, path2 }) => {
  const [focus, setFocus] = useState(false);
  return (
    <Link
      href="#"
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      className="py-3 flex items-center space-x-3  cursor-pointer"
    >
      <svg
        aria-hidden="true"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        version="1.1"
        width="24"
        data-view-component="true"
        className={` mr-3 transition ease-in duration-100  ${
          focus ? "text-blue-600" : "text-neutral-500"
        }`}
      >
        <path d={path}></path>
        <path d={path2}></path>
      </svg>
      <div
        className={`${
          focus ? "text-blue-600" : "text-neutral-500"
        } transition ease-in duration-100   text-[14px]`}
      >
        <div
          className={`font-semibold  transition ease-in duration-100  ${
            focus ? "text-blue-600" : "text-neutral-800"
          } text-base leading-5`}
        >
          {main}
        </div>
        {submain}
      </div>
    </Link>
  );
};

export default Navlist;

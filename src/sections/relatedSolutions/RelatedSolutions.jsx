import Link from "next/link";
import React from "react";
import styles from "./relatedSolutions.module.css";
import Image from "next/image";

import Icon, { Stack } from "@mdi/react";
import { mdiArrowRight, mdiFacebook } from "@mdi/js";
import { mdiInstagram } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";
import { mdiCircle } from "@mdi/js";

const RelatedSolutions = () => {
  return (
    <div
      className={`${styles["bg-footer"]} bg-[#31094a] bg-gradient-to-r from-[#31094a] via-[#1d0845]  to-[#0e002a]  text-[#DBDBDB]`}
    >
      <div
        className={`${styles.container} max-w-screen-xl md:max-w-screen-xl mx-auto p-5 px-[2rem]`}
      >
        <div className=" my-12">
          <p className="text-[#B2C8F8] mb-8 text-[16px] leading-[22px] uppercase">
            Related solutions
          </p>
          <Link
            className=" text-[48px]  border-b-[1px] hover:opacity-80 transition-all font-bold leading-[57px] inline-flex items-center gap-x-6"
            href={"/"}
          >
            Visit our Enterprise Solutions
            <Icon path={mdiArrowRight} size={1} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RelatedSolutions;

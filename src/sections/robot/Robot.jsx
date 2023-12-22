import React from "react";
import Lottie from "lottie-react";
import robotAnimation from "../../assets/robot.json";
import Icon from "@mdi/react";
import { mdiArrowUp } from "@mdi/js";
import styles from "./robot.module.css";
import Link from "next/link";
import RobotDetails from "../robotDetails/RobotDetails";
import ACTCard from "@/sections/ACTCard/ACTCard";
import { useScroll } from "framer-motion";
import { projects } from "../../assets/data";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const Robot = ({ bg }) => {
  return (
    <div className={`bg-[#f5f5f5] `}>
      <div
        // className={` max-w-screen-xl md:max-w-screen-lg mx-auto px-[2rem] p-5`}
        className={` max-w-screen-xl   mx-auto p-5   px-[2rem]`}
      >
        <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-5`}>
          <div className={`${styles.robot} w-2/5 sm:w-2/5  mx-auto`}>
            <Lottie animationData={robotAnimation} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Robot;

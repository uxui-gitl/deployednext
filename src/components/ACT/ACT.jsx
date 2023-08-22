import React from "react";
import Lottie from "lottie-react";
import robotAnimation from "../../assets/robot.json";
import Icon from "@mdi/react";
import { mdiArrowUp } from "@mdi/js";
import styles from "./act.module.css";
import Link from "next/link";

const ACT = () => {
  return (
    <>
      <div className={`${styles['container']}  bg-[#f2f4f7]`}>
      <div className={`max-w-screen-lg mx-auto px-[2rem]`}>
        <div className="mx-auto pt-[4em] pb-[2em] sm:w-4/5">
          <h2 className="text-[35px] leading-[60px] sm:leading-[90px] sm:text-[68px] text-[#101828] font-bold mx-auto">
            Introducing <span>ACT</span> based approach for building sustainable
            solutions
          </h2>
          <div className="mt-[30px] link block max-w-max">
            <Link
              href="/"
              className="flex flex-row text-lg justify-start items-center gap-4"
            >
              Scroll Up
              <Icon
                className="inline"
                path={mdiArrowUp}
                color="#101828"
                size={1}
              />
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ACT;

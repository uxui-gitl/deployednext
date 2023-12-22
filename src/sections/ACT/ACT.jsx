import React from "react";
import Icon from "@mdi/react";
import { mdiArrowUp } from "@mdi/js";
import styles from "./act.module.css";
import Balancer from "react-wrap-balancer";

import Link from "next/link";

const ACT = () => {
  return (
    <>
      <div className={`${styles["container"]}  bg-[#f2f4f7]`}>
        <div className={`max-w-screen-xl mx-auto px-[2rem]`}>
          <div className="mx-auto pt-[4em] pb-[2em] sm:w-[80%]">
            <h2 className="text-[32px] leading-[44px] sm:leading-[90px] sm:text-[68px] text-[#101828] font-bold mx-auto flex-wrap">
              <Balancer>
                An Act Based Approach Of Building Future Ready Solutions
              </Balancer>
            </h2>
            <div className="mt-[30px] link block max-w-max">
              <Link
                href="/"
                className="flex flex-row text-lg justify-start items-center gap-4"
                data-cursor-exclusion="true"
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

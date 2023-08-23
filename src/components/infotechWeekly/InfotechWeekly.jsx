import React from "react";

import styles from "./InfotechWeekly.module.css";
import Image from "next/image";
import Link from "next/link";

import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
const InfotechWeekly = (props) => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto px-[2rem] bg-white">
        <div className=" mt-[5em] mb-[2em]">
          <h4
            className={`${styles.subHead} font-medium text-[#0745D3] uppercase ribbon`}
          >
            WEEKLY UPDATES
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <h3 className="text-4xl font-bold">
            Infotech Weekly
            </h3>
            <p className="font-medium">
            Enabling organizations to optimize cost & enhance business processes with next-gen digital technologies 
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {/* Card 1 */}
          <div
            className={`flex justify-center items-start flex-col md:flex-row mb-5 gap-5`}
          >
            <div className={`${styles["iw-card-img-wrap"]} relative`}>
              <Image
                src="/weekly-1.png"
                alt="blog post"
                width="315"
                height="200"
              />
              <div className="absolute bottom-4 left-4 flex justify-start items-center space-x-2">
                <p className="text-sm bg-[#fff] text-[#101828] px-2 py-1 rounded">
                  Microsoft 365
                </p>
                <p className="text-sm bg-[#fff] text-[#101828] px-2 py-1 rounded">
                  Case Study
                </p>
              </div>
            </div>
            <div className={`${styles["iw-card-content"]} py-4`}>
              <p className={`uppercase  text-[#101828] font-medium text-[12px]`}>
                20 Jan 2023
              </p>
              <p className={`text-base font-semibold py-2 text-[#101828]`}> Robust Automation for Enhanced Business Efficiency </p>
              <p
                className={`${styles["iw-card-content-desc"]} text-clip text-[#475467] text-sm pb-2`}
              >
                Enabling organizations to optimize cost & enhance business processes with next-gen digital technologies like Robotic Process Automation (RPA), eCommerce & Analytics.
              </p>
              <p className={styles["iw-card-content-link-wrap"]}>
                <Link
                  href="/"
                  className={`${styles["iw-card-content-link"]} hover:underline mt-2 me-3 text-[#0745D3] text-sm font-medium`}
                >
                  Read article
                </Link>
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={`flex justify-center items-start flex-col md:flex-row mb-5 gap-5`}
          >
            <div className={`${styles["iw-card-img-wrap"]} relative`}>
              <Image
                src="/weekly-2.png"
                alt="blog post"
                width="315"
                height="200"
              />
              <div className="absolute bottom-4 left-4 flex justify-start items-center space-x-2">
                <p className="text-sm bg-[#fff] text-[#101828] px-2 py-1 rounded">
                  Microsoft 365
                </p>
                <p className="text-sm bg-[#fff] text-[#101828] px-2 py-1 rounded">
                  Case Study
                </p>
              </div>
            </div>
            <div className={`${styles["iw-card-content"]} py-4`}>
              <p className={`uppercase  text-[#101828] font-medium text-[12px]`}>
                20 Jan 2023
              </p>
              <p className={`text-base font-semibold py-2 text-[#101828]`}>
                Robust Automation for Enhanced Business Efficiency
              </p>
              <p
                className={`${styles["iw-card-content-desc"]} text-clip text-[#475467] text-sm pb-2`}
              >
                Enabling organizations to optimize cost & enhance business processes with next-gen digital technologies like Robotic Process Automation (RPA), eCommerce & Analytics.
              </p>
              <p className={styles["iw-card-content-link-wrap"]}>
                <Link
                  href="/"
                  className={`${styles["iw-card-content-link"]} hover:underline mt-2 me-3 text-[#0745D3] text-sm font-medium`}
                >
                  Read article
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles["iw-cta"]}`}>
          <Link
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "1em auto 2em",
            }}
            href="/"
          >
            <p>
              read more articles{" "}
              <Icon
                path={mdiArrowRight}
                style={{ marginLeft: "0.5em" }}
                size={1}
              />
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default InfotechWeekly;

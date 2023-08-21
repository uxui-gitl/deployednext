import React from "react";
import styles from "./Projects.module.css";
import Image from "next/image";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

const Projects = (props) => {
  return (
    <div className={`max-w-screen-lg mx-auto  bg-[#fff]`}>
      <div className="mx-4 mt-[5em] mb-[2em]">
        <h4
          className={`${styles.subHead} font-medium text-[#0745D3] uppercase ribbon`}
        >
          Projects
        </h4>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4`}>
          <h3 className="text-4xl font-bold">
            Unlocking <br /> Remarkable Results
          </h3>
          <p className="font-medium">
            We bring wealth of capability and experience together to deliver
            tailored solutions and services so that businesses
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className={`${styles["iw-card"]} px-4`}>
          <div className={`${styles["iw-card-img-wrap"]} relative`}>
            <Image
              src="/project-1.png"
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
          {/* Card content for Cloudification */}
          <div className={`${styles["iw-card-content"]}`}>
            {/* <p className={`text-[#98A2B3] font-bold`}>Cloudification</p> */}
            <p className={`uppercase  text-[#101828] font-medium text-[12px]`}>
                20 Jan 2023
              </p>
            <p className={`text-base font-semibold py-2 text-[#101828]`}> Robust Automation for Enhanced Business Efficiency </p>
            <p
              className={`${styles["iw-card-content-desc"]} text-clip  text-[#475467] text-sm`}
            >
              Enabling organizations to optimize cost & enhance business
              processes with next-gen
            </p>

            <p className={styles["iw-card-content-link-wrap"]}>
              <Link
                href="/"
                className={`${styles["iw-card-content-link"]} hover:underline mt-2 me-3 text-[#0745D3] text-sm font-medium`}
              >
                Read Article
              </Link>
            </p>
          </div>
        </div>
        <div className={`${styles["iw-card"]} px-4`}>
          <div className={`${styles["iw-card-img-wrap"]} relative`}>
            <Image
              src="/project-2.png"
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
          {/* Card content for Automation */}
          <div className={`${styles["iw-card-content"]}`}>
            {/* <p className={`text-[#98A2B3] font-bold`}>Automation</p> */}
            <p className={`uppercase  text-[#101828] font-medium text-[12px]`}>
                20 Jan 2023
              </p>
            <p className={`text-base font-semibold py-2 text-[#101828]`}> Robust Automation for Enhanced Business Efficiency </p>
            <p
              className={`${styles["iw-card-content-desc"]} text-clip  text-[#475467] text-sm`}
            >
              Enabling organizations to optimize cost & enhance business
              processes with next-gen
            </p>

            <p className={styles["iw-card-content-link-wrap"]}>
              <Link
                href="/"
                className={`${styles["iw-card-content-link"]} hover:underline mt-2 me-3 text-[#0745D3] text-sm font-medium`}
              >
                Read Article
              </Link>
            </p>
          </div>
        </div>
        <div className={`${styles["iw-card"]} px-4`}>
          <div className={`${styles["iw-card-img-wrap"]} relative`}>
            <Image
              src="/project-3.png"
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
          {/* Card content for Transformation */}
          <div className={`${styles["iw-card-content"]}`}>
            {/* <p className={`text-[#98A2B3] font-bold`}>Transformation</p> */}
            <p className={`uppercase  text-[#101828] font-medium text-[12px]`}>
                20 Jan 2023
              </p>
            <p className={`text-base font-semibold py-2 text-[#101828]`}> Robust Automation for Enhanced Business Efficiency </p>
            <p
              className={`${styles["iw-card-content-desc"]} text-clip  text-[#475467] text-sm`}
            >
              Enabling organizations to optimize cost & enhance business
              processes with next-gen
            </p>

            <p className={styles["iw-card-content-link-wrap"]}>
              <Link
                href="/"
                className={`${styles["iw-card-content-link"]} hover:underline mt-2 me-3 text-[#0745D3] text-sm font-medium`}
              >
                Read Article
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
            Read Article articles{" "}
            <Icon
              path={mdiArrowRight}
              style={{ marginLeft: "0.5em" }}
              size={1}
            />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Projects;

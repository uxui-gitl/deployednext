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
            tailored solutions and services so that businesses can stay ahead of
            the curve with sustainable expertise and achieve their goals faster
            and more efficiently.{" "}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className={`${styles["iw-card"]} px-4`}>
          <div className={styles["iw-card-img-wrap"]}>
            <Image
              src="/project-1.png"
              alt="blog post"
              width="315"
              height="200"
            />
          </div>
          {/* Card content for Cloudification */}
          <div className={`${styles["iw-card-content"]}`}>
            <p
              className={`text-[#98A2B3] font-bold`}
            >
              Cloudification
            </p>
            <p
              className={`${styles["iw-card-content-title"]} py-2 text-[#101828]`}
            >
              Robust Automation for Enhanced Business Efficiency
            </p>
            <p className={`${styles["iw-card-content-desc"]} text-clip  text-[#475467]`}>
              Enabling organizations to optimize cost & enhance business
              processes with next-gen digital technologies like Robotic Process.
            </p>
             
            <p className={styles["iw-card-content-link-wrap"]}>
              <Link
                href="/"
                className={`${styles["iw-card-content-link"]} hover:underline mt-2 me-3 text-[#0745D3]`}
              >
                Read more
              </Link>
            </p>
          </div>
        </div>
        <div className={`${styles["iw-card"]} px-4`}>
          <div className={styles["iw-card-img-wrap"]}>
            <Image
              src="/project-2.png"
              alt="blog post"
              width="315"
              height="200"
            />
          </div>
          {/* Card content for Automation */}
          <div className={`${styles["iw-card-content"]}`}>
            <p
              className={`text-[#98A2B3] font-bold`}
            >
              Automation
            </p>
            <p
              className={`${styles["iw-card-content-title"]} py-2 text-[#101828]`}
            >
              Robust Automation for Enhanced Business Efficiency
            </p>
            <p className={`${styles["iw-card-content-desc"]} text-clip  text-[#475467]`}>
              Enabling organizations to optimize cost & enhance business
              processes with next-gen digital technologies like Robotic Process.
            </p>
             
            <p className={styles["iw-card-content-link-wrap"]}>
              <Link
                href="/"
                className={`${styles["iw-card-content-link"]} hover:underline mt-2 me-3 text-[#0745D3]`}
              >
                Read more
              </Link>
            </p>
          </div>
        </div>
        <div className={`${styles["iw-card"]} px-4`}>
          <div className={styles["iw-card-img-wrap"]}>
            <Image
              src="/project-3.png"
              alt="blog post"
              width="315"
              height="200"
            />
          </div>
          {/* Card content for Transformation */}
          <div className={`${styles["iw-card-content"]}`}>
            <p
              className={`text-[#98A2B3] font-bold`}
            >
              Transformation
            </p>
            <p
              className={`${styles["iw-card-content-title"]} py-2 text-[#101828]`}
            >
              Robust Automation for Enhanced Business Efficiency
            </p>
            <p className={`${styles["iw-card-content-desc"]} text-clip  text-[#475467]`}>
              Enabling organizations to optimize cost & enhance business
              processes with next-gen digital technologies like Robotic Process.
            </p>
             
            <p className={styles["iw-card-content-link-wrap"]}>
              <Link
                href="/"
                className={`${styles["iw-card-content-link"]} hover:underline mt-2 me-3 text-[#0745D3]`}
              >
                Read more
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
  );
};

export default Projects;

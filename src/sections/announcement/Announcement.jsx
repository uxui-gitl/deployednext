"use client";
import React, { Fragment, useEffect, useState } from "react";

import styles from "./announcement.module.css";
import Link from "next/link";

import ReactFlagsSelect from "react-flags-select";
const Announcement = ({ content }) => {
  const defaultData = [
    {
      _id: 1,
      title:
        "Godrej Infotech has been officially recognized as a Great Place to Work!",
      cta: "",
      targetBlank: true,
      link: "/",
    },
    {
      _id: 2,
      title:
        "Economic Times Honors Godrej Infotech as Future Ready Organizations 2023 – 2024 – Adjudged by Ernst & Young, the Official Tabulators",
      cta: "",
      targetBlank: true,
      link: "/",
    },
    {
      _id: 3,
      title:
        "Delighted to Announce Godrej Infotech as Salesforce Consulting Partner",
      cta: "",
      targetBlank: true,
      link: "/",
    },
    {
      _id: 4,
      title:
        "Dredging & Marine Global Giant of Netherlands - Boskalis Signs a 5 years of renewal contract after a successful 3-year relationship with LVD Godrej Infotech for Infor Products & Services",
      cta: "",
      targetBlank: true,
      link: "/",
    },
    {
      _id: 5,
      title:
        "Godrej Infotech secures a contract for Oracle implementation services with India's premier fertility healthcare centre",
      cta: "Learn more",
      targetBlank: true,
      link: "/",
    },
    {
      _id: 6,
      title:
        "Indian innovative market leader of industrial connection technology and electronic Interface systems finalises contract with GITL for Infor Implementation ",
      cta: "Learn more",
      targetBlank: true,
      link: "/",
    },
    {
      _id: 7,
      title:
        "GITL closes the contract with Saudi Cargo Handler for D365 Implementation",
      cta: "Learn more",
      targetBlank: true,
      link: "/",
    },
  ];

  const announcements = content || defaultData;
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);

  const [selected, setSelected] = useState("IN");

  const handleCountrySelect = (code) => {
    setSelected(code);
    let url = "";
    switch (code) {
      case "BE":
        url = "/LVD";
        break;
      case "SG":
        url = "/";
        break;
      case "US":
        url = "/GIA";
        break;
      case "IN":
        url = "/";
        break;
      default:
        url = "/";
    }
    // window.open(url, "_blank");
    window.open(url, "_self");
  };

  useEffect(() => {
    // Set up an interval to switch to the next announcement every 5 seconds (5000 milliseconds)
    const intervalId = setInterval(() => {
      setCurrentAnnouncementIndex(
        (prevIndex) => (prevIndex + 1) % announcements.length
      );
    }, 5000);

    // Clear the interval when the component is unmounted or if you navigate away
    return () => clearInterval(intervalId);
  }, [announcements.length]);

  const currentAnnouncement = announcements[currentAnnouncementIndex];

  return (
    <div className={styles["top-banner"]}>
      <div className={styles["container"]}>
        <div className={styles["content"]} key={currentAnnouncement._id}>
          {currentAnnouncement.cta !== "" ? (
            <>
              <span className={styles["tb-text"]}>
                {currentAnnouncement.title}
              </span>
              <Link
                className={styles["tb-link"]}
                href={currentAnnouncement.link}
              >
                {currentAnnouncement.cta}
              </Link>
            </>
          ) : (
            <>
              <Link
                className={styles["tb-text"]}
                href={currentAnnouncement.link}
              >
                {" "}
                <span className={styles["tb-text"]}>
                  {currentAnnouncement.title}
                </span>
              </Link>
            </>
          )}
        </div>
        <div id={styles["tb-close"]}>
          <div className={styles["tb-flag-wrap"]}>
            <ReactFlagsSelect
              className={styles["tb-flags"]}
              selected={selected}
              fullWidth={false}
              countries={["BE", "SG", "US", "IN"]}
              customLabels={{
                BE: "BEL",
                SG: "SGP",
                US: "USA",
                IN: "IND",
              }}
              onSelect={handleCountrySelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;

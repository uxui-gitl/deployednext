"use client";

import React from "react";

import styles from "./JobList.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import { motion } from "framer-motion";

const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 * index,
    },
  }),
};

const JobList = (props) => {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://gnbnettestapp2.gnb.com/Careerapi/api/SearchVacancy/OpenVacancyGIL",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              // Your request payload
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setVacancies(data.model);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-[2rem] bg-white">
        <div className=" mt-[5em] mb-[2em]">
          <h4
            className={`${styles.subHead} font-medium text-[#0745D3] uppercase ribbon`}
          >
            WHERE TALENT MEETS TECHNOLOGY
          </h4>
          <div className="grid ">
            <h3 className="text-4xl leading-[42px] font-bold">
              Jobs based on your Profile
            </h3>
          </div>
        </div>
        <motion.div className="container grid grid-cols-1 gap-4">
          {vacancies.map((vacancy, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
              className={`flex justify-center items-start flex-col md:flex-col mb-5 gap-5  `}
            >
              <div className={` shadow-md hover:shadow-xl rounded-md w-full`}>
                <Link
                  // https://esptest.godrej.com/ApplEmpQryVac.asp?srNo=${vacancies[0].srNo}&flag=false&companyCode=GIL
                  // href={`https://esptest.godrej.com/ApplEmpQryVac.asp?srNo=${vacancy.srNo}&flag=false&companyCode=GIL`}
                  href={`/Job-Description/${vacancy.srNo}`}
                  alt={vacancy.designation}
                  target="_blank"
                >
                  <div className="relative py-5 px-8">
                    <h5 className="text-[20px] font-bold leading-[42px] text-[#101828]">
                      {vacancy.designation}
                    </h5>
                    <p className="text-[14px] font-medium leading-[22px] mb-6">
                      {vacancy.desiredProf}
                    </p>
                    <div className="    flex justify-start items-center">
                      <p className="text-sm bg-[#EDF1FF] text-[#101828] px-2 py-1 rounded font-medium mr-4">
                        {vacancy.location}
                      </p>
                      <p className="text-sm bg-[#FFF8E5] text-[#101828] px-2 py-1 rounded font-medium mr-4">
                        {vacancy.functionsDesc}
                      </p>
                      <p className="text-sm bg-[#E5F8EE] text-[#101828] px-2 py-1 rounded font-medium mr-4">
                        {vacancy.minExp} - {vacancy.maxExp} Experience
                      </p>
                    </div>
                  </div>
                  <div className="relative pb-5 px-8">
                    <div className="flex justify-end items-center">
                      <p className="text-sm text-right italic text-[#101828] px-2 py-1 rounded font-medium ">
                        Posted on {formatDate(vacancy.lastModifieddate)}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
              View More{" "}
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

export default JobList;

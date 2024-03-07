"use client";
import { mdiArrowRight } from "@mdi/js";
import Icon from "@mdi/react";
import { mdiShareVariantOutline } from "@mdi/js";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../page.module.css";
import JobList from "@/sections/jobList/JobList";
import Select from "react-select";
import Awards from "@/sections/awards/Awards";
import Review from "@/sections/review/Review";

import Video from "../../../../../public/careers/Videos.png";
import Image from "next/image";

const options = [
  { value: "uiux", label: "UI/UX" },
  { value: "hr", label: "Sr. Recruitment Associate" },
  { value: "techLead", label: "Tech Lead" },
  { value: "pm", label: "Project Manager" },
  { value: "reactjs", label: "React.js Dev" },
];

const Jd = ({ params }) => {
  const [vacancies, setVacancies] = useState(null); // State to store fetched data

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

  return (
    console.log(params.jobId),
    (
      <>
        {vacancies && vacancies.length > 0 && (
          // Use the first vacancy data where srNo is 15275
          <div className={`${styles["container"]} bg-white mt-24 py-24`}>
            <div className="text-left max-w-screen-2xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] grid grid-cols-2">
              {/* JD summary */}
              <div>
                <div className=" fixed">
                  <h3 className="text-[42px] leading-[52px] font-bold">
                    {vacancies[0].designation}
                  </h3>
                  <div className="mb-4">
                    <h4 className="font-bold text-[20px] leading-[42px]">
                      Job Summary
                    </h4>
                    <p>Essential Qualification: BE/BTech/ME/MTech/MS/MCA</p>
                    <p>
                      Essential Experience: {vacancies[0].minExp} -{" "}
                      {vacancies[0].maxExp}
                    </p>
                    <p>
                      Function : {vacancies[0].functionCode} /{" "}
                      {vacancies[0].functionsDesc}
                    </p>
                  </div>
                  <div>
                    <Image src={Video} alt="Why infotech video" />
                  </div>
                  {/* Apply btn group */}
                  <div className="max-w-max flex justify-start items-center my-5">
                    <Link
                      target="_blank"
                      href={`https://esptest.godrej.com/ApplEmpQryVac.asp?srNo=${vacancies[0].srNo}&flag=false&companyCode=GIL`}
                      className="min-w-max flex bg-[#0745D3] py-2 px-10 border-2 border-[#0745D3] font-medium text-base text-[#f5f5f5] rounded-sm transition-all mb-3 hover:opacity-95 hover:scale-105"
                    >
                      Apply Now{" "}
                      <Icon
                        path={mdiArrowRight}
                        style={{ marginLeft: "0.5em" }}
                        size={1}
                      />
                    </Link>
                    <Link
                      href={"/"}
                      className="min-w-max flex px-5 font-medium text-base text-[#101828]  transition-all mb-3  hover:opacity-95 hover:scale-105"
                    >
                      <Icon
                        path={mdiShareVariantOutline}
                        style={{ marginLeft: "0.5em" }}
                        size={1}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              {/* JD Desc */}
              <div>
                <div className={`jd-set mb-4`}>
                  <h4 className="font-bold text-[20px] leading-[42px]">
                    Key Responsibilities
                  </h4>
                  <p className="text-[14px] leading-[22px]">
                    {vacancies[0].desiredProf}
                  </p>
                </div>
                <div className={`jd-set mb-4`}>
                  <h4 className="font-bold text-[20px] leading-[42px]">
                    Job Description
                  </h4>
                  <p className="text-[14px] leading-[22px]">
                    {vacancies[0].desiredProf}
                  </p>
                </div>
                <div className={`jd-set mb-4`}>
                  <h4 className="font-bold text-[20px] leading-[42px]">
                    Qualification Details
                  </h4>
                  <p className="text-[14px] leading-[22px]">
                    Essential Qualification: BE/BTech/ME/MTech/MS/MCA
                  </p>
                  <p className="text-[14px] leading-[22px]">
                    Preferred Qualification: BE Computer Science
                  </p>
                </div>
                <div className={`jd-set mb-4`}>
                  <h4 className="font-bold text-[20px] leading-[42px]">
                    Experience Details
                  </h4>
                  <p className="text-[14px] leading-[22px]">
                    Essential Experience: {vacancies[0].minExp} -{" "}
                    {vacancies[0].maxExp}
                  </p>
                  <p className="text-[14px] leading-[22px]">
                    {vacancies[0].desiredProf}
                  </p>
                </div>
                <div className={`jd-set mb-4`}>
                  <h4 className="font-bold text-[20px] leading-[42px]">
                    Special Skill
                  </h4>
                  <p className="text-[14px] leading-[22px]">
                    Essential : Active Salesforce Admin Certification
                  </p>
                  <p className="text-[14px] leading-[22px]">
                    Preferred : Active Salesforce Admin Certification, Active
                    Salesforce Platform Developer
                  </p>
                  <p className="text-[14px] leading-[22px]">
                    Certification, Active Conga CLM certification
                  </p>
                </div>
                {/* Apply btn group */}
                <div className="max-w-max flex justify-start items-center my-5">
                  <Link
                    target="_blank"
                    href={`https://esptest.godrej.com/ApplEmpQryVac.asp?srNo=${vacancies[0].srNo}&flag=false&companyCode=GIL`}
                    className="min-w-max flex bg-[#0745D3] py-2 px-10 border-2 border-[#0745D3] font-medium text-base text-[#f5f5f5] rounded-sm transition-all mb-3 hover:opacity-95 hover:scale-105"
                  >
                    Apply Now{" "}
                    <Icon
                      path={mdiArrowRight}
                      style={{ marginLeft: "0.5em" }}
                      size={1}
                    />
                  </Link>
                  <Link
                    href={"/"}
                    className="min-w-max flex px-5 font-medium text-base text-[#101828]  transition-all mb-3  hover:opacity-95 hover:scale-105"
                  >
                    <Icon
                      path={mdiShareVariantOutline}
                      style={{ marginLeft: "0.5em" }}
                      size={1}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        <Review />
        <>
          <div className={`${styles["container"]} bg-white mt-24 py-24`}>
            <div className="flex justify-center items-center flex-col">
              <h3 className="text-4xl leading-[42px] font-bold">
                Want to join the tech revolution?
              </h3>
              <p className="font-normal leading-[22px] pt-3 pb-8 text-center">
                Discover exciting opportunities here and become an <br />{" "}
                integral part of our Tech Movement
              </p>

              <Link
                href={"/"}
                className="flex bg-[#101828] py-2 px-10 border-2 border-[#101828] font-medium text-base text-[#f5f5f5] rounded-sm transition-all mb-3 hover:opacity-95 hover:scale-105"
              >
                Explore Your Opportunity{" "}
                <Icon
                  path={mdiArrowRight}
                  style={{ marginLeft: "0.5em" }}
                  size={1}
                />
              </Link>
            </div>
          </div>
        </>
      </>
    )
  );
};

export default Jd;

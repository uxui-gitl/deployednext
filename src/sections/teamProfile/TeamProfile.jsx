import React from "react";
import styles from "./teamProfile.module.css";
import Image from "next/image";

import ajay from "../../../public/team/ajay.png";
import anil from "../../../public/team/anil.png";
import kingshuk from "../../../public/team/kingshuk.png";
import mvnrao from "../../../public/team/mvnrao.png";
import vaishali from "../../../public/team/vaishali.png";

import Link from "next/link";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

const TeamProfile = () => {
  return (
    <>
      <div className={`${styles["container"]} w-full bg-[#f2f4f7] `}>
        <div className="  text-left md:text-center max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem]">
          <h3 className="text-4xl  leading-[42px] mb-3 font-bold">
            INTRODUCING Godrej Infotech IDEALISTIC MINDS
          </h3>
          <p className="font-medium leading-[22px] md:w-[50%] mx-auto">
            Guided by a strategic vision and a commitment to placing people at
            the forefront, our leadership team places paramount importance on
            the well-being and professional growth of every team member,
            steering the entire company toward a trajectory of sustained
            success.
          </p>
        </div>

        <div class="grid grid-cols-6 h-fit gap-x-5 mb-6 ">
          <div className="col-span-3">
            <div className=" min-h-[376px] w-full h-max">
              <Image
                src={ajay}
                placeholder="blur"
                quality={100}
                sizes="100vw"
                width={0}
                height={0}
                style={{ height: "376px", width: "100%", objectFit: "cover" }}
                alt="ajay p."
              />
            </div>
          </div>
          <div className="col-span-3 ml-5 col-start-4 col-end-6 flex flex-col justify-center">
            <h4 className="text-[22px]  leading-[22px] text-[#101828] mb-2 font-bold">
              Ajay Pimparkar
            </h4>
            <h5 className="text-base  leading-[22px] text-[#98A2B3] mb-4 font-bold">
              Chief Executive Officer
            </h5>
            <p className="text-sm font-medium text-[#475467] leading-[22px]">
              Mr. Ajay Pimparkar's association with the Godrej Group started way back in the 1980's. He has been responsible for preparing and implementing the complete Information Technology roadmap for the various businesses in tune with the Strategic Business Plan of the organization.
            </p>
            <Link
              href="/"
              className={`${styles["btn-transparent-video"]} text-[#101828] bg-transparent font-medium sm:font-medium capitalize max-w-max pt-[8px] px-[2rem] sm:px-5 sm:py-2 border-[#fff] border-b-1 flex border-b-1 ml-0 pl-0 pr-0 mr-4 my-4`}
            >
              view profile
              <Icon
                path={mdiArrowRight}
                size={1}
                className="inline ms-2"
              />{" "}
            </Link>
          </div>
        </div>

        <div class="grid grid-cols-6 h-fit gap-x-5 mb-6 ">
          <div className="col-span-3 ml-5 col-start-2 col-end-4 flex flex-col justify-center">
            <h4 className="text-[22px]  leading-[22px] text-[#101828] mb-2 font-bold">
              Ashwin Mistry
            </h4>
            <h5 className="text-base  leading-[22px] text-[#98A2B3] mb-4 font-bold">
              Vice President - IT, Godrej & Boyce
            </h5>
            <p className="text-sm font-medium text-[#475467] leading-[22px]">
              Mr. Ashwin Mistry brings forth more than 30 years of valuable experience in the IT industry to our team. With two decades dedicated to ERP implementation, his proficiency blazes in the Discrete and Project manufacturing sectors. 
            </p>
            
            <Link
              href="/"
              className={`${styles["btn-transparent-video"]} text-[#101828] bg-transparent font-medium sm:font-medium capitalize max-w-max pt-[8px] px-[2rem] sm:px-5 sm:py-2 border-[#fff] border-b-1 flex border-b-1 ml-0 pl-0 pr-0 mr-4 my-4`}
            >
              view profile
              <Icon
                path={mdiArrowRight}
                size={1}
                className="inline ms-2"
              />{" "}
            </Link>
          </div>
          <div className="col-span-3">
            <div className=" min-h-[376px] w-full h-max">
              <Image
                src={mvnrao}
                placeholder="blur"
                quality={100}
                sizes="100vw"
                width={0}
                height={0}
                style={{ height: "376px", width: "100%", objectFit: "cover" }}
                alt="ajay p."
              />
            </div>
          </div>
        </div>

        <div class="grid grid-cols-6 h-fit gap-x-5 mb-6 ">
          <div className="col-span-3">
            <div className=" min-h-[376px] w-full h-max">
              <Image
                src={kingshuk}
                placeholder="blur"
                quality={100}
                sizes="100vw"
                width={0}
                height={0}
                style={{ height: "376px", width: "100%", objectFit: "cover" }}
                alt="ajay p."
              />
            </div>
          </div>
          <div className="col-span-3 ml-5 col-start-4 col-end-6 flex flex-col justify-center">
            <h4 className="text-[22px]  leading-[22px] text-[#101828] mb-2 font-bold">
              Kingshuk Chatterjee
            </h4>
            <h5 className="text-base  leading-[22px] text-[#98A2B3] mb-4 font-bold">
              Vice President, External Business
            </h5>
            <p className="text-sm font-medium text-[#475467] leading-[22px]">
              A distinguished pioneer, Mr. Kingshuk Chatterjee unleashes three
              decades of versatile industry experience of Manufacturing,
              Advertising & Branding and IT. Driving the sustained growth and
              achievements of our company, he puts forth a multitude of
              knowledge and skills to our organization, with over 15 years of
              keen attention to the IT industry.
            </p>
            <Link
              href="/"
              className={`${styles["btn-transparent-video"]} text-[#101828] bg-transparent font-medium sm:font-medium capitalize max-w-max pt-[8px] px-[2rem] sm:px-5 sm:py-2 border-[#fff] border-b-1 flex border-b-1 ml-0 pl-0 pr-0 mr-4 my-4`}
            >
              view profile
              <Icon
                path={mdiArrowRight}
                size={1}
                className="inline ms-2"
              />{" "}
            </Link>
          </div>
        </div>

        <div class="grid grid-cols-6 h-fit gap-x-5 mb-6 ">
          <div className="col-span-3 ml-5 col-start-2 col-end-4 flex flex-col justify-center">
            <h4 className="text-[22px]  leading-[22px] text-[#101828] mb-2 font-bold">
              Vaishali Raj
            </h4>
            <h5 className="text-base  leading-[22px] text-[#98A2B3] mb-4 font-bold">
              Associate Vice President, HR
            </h5>
            <p className="text-sm font-medium text-[#475467] leading-[22px]">
              Ms. Vaishali Raj - an influential HR premier, with her astute
              vision has been an instrumental force in driving executive
              decisions of organisation and seamlessly integrating people and
              technology. With her ardent drive to thrive, she has been
              inspiring employees in advancing their growth. Under Ms.
              Vaishali’s leadership, the HR function has transformed into a
              dynamic and proactive strength. Her contributions in the industry
              have been recognized through awards and accolades.
            </p>
            <Link
              href="/"
              className={`${styles["btn-transparent-video"]} text-[#101828] bg-transparent font-medium sm:font-medium capitalize max-w-max pt-[8px] px-[2rem] sm:px-5 sm:py-2 border-[#fff] border-b-1 flex border-b-1 ml-0 pl-0 pr-0 mr-4 my-4`}
            >
              view profile
              <Icon
                path={mdiArrowRight}
                size={1}
                className="inline ms-2"
              />{" "}
            </Link>
          </div>
          <div className="col-span-3">
            <div className=" min-h-[376px] w-full h-max">
              <Image
                src={vaishali}
                placeholder="blur"
                quality={100}
                sizes="100vw"
                width={0}
                height={0}
                style={{ height: "376px", width: "100%", objectFit: "cover" }}
                alt="ajay p."
              />
            </div>
          </div>
        </div>

        <div class="grid grid-cols-6 h-fit gap-x-5 mb-6 ">
          <div className="col-span-3">
            <div className=" min-h-[376px] w-full h-max">
              <Image
                src={anil}
                placeholder="blur"
                quality={100}
                sizes="100vw"
                width={0}
                height={0}
                style={{ height: "376px", width: "100%", objectFit: "cover" }}
                alt="ajay p."
              />
            </div>
          </div>
          <div className="col-span-3 ml-5 col-start-4 col-end-6 flex flex-col justify-center">
            <h4 className="text-[22px]  leading-[22px] text-[#101828] mb-2 font-bold">
              Samik Bandyopadhyay
            </h4>
            <h5 className="text-base  leading-[22px] text-[#98A2B3] mb-4 font-bold">
              Head - Finance
            </h5>
            <p className="text-sm font-medium text-[#475467] leading-[22px]">
              Mr. Samik Bandyopadhyay is a charted accountant with over 23 years
              of experience in financial control, strategic planning and
              reporting. Mr. Bandyopadhyay has hands on experience in managing
              Indirect taxation compliance, Service tax issues and EA 2000
              audit. He has had a fair amount of experience interacting with the
              overseas clients for business deals. His experience encompasses
              various crucial financial aspects like monitoring the revenue
              earnings and foreign exchange, cost analysis, budgeting,
              Implementation & supervision of the internal control systems,
              complying requirements of audit, payroll management and tax
              assessment and dealing with Income Tax, Service Tax, P.F. matters
              and attending respective assessments.
            </p>
            <Link
              href="/"
              className={`${styles["btn-transparent-video"]} text-[#101828] bg-transparent font-medium sm:font-medium capitalize max-w-max pt-[8px] px-[2rem] sm:px-5 sm:py-2 border-[#fff] border-b-1 flex border-b-1 ml-0 pl-0 pr-0 mr-4 my-4`}
            >
              view profile
              <Icon
                path={mdiArrowRight}
                size={1}
                className="inline ms-2"
              />{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamProfile;

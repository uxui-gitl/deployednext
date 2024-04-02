"use client";
import Review from "@/sections/review/Review";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import gmap from "../../../public/contact/map.png";
import styles from "./page.module.css";
import { mdiArrowRight } from "@mdi/js";
import Icon from "@mdi/react";
import ReactFlagsSelect from "react-flags-select";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Navbar from "@/components/Navbar/Navbar";
import Announcement from "@/sections/announcement/Announcement";

const MySwal = withReactContent(Swal);
const ContactUs = () => {
  const [selected, setSelected] = useState("IN");

  const handleCountrySelect = (code) => {
    setSelected(code);
    handleChange();
  };

  const locations = [
    {
      id: 1,
      loc: "Mumbai",
      loc2: "India",
      desc: "Godrej Infotech Ltd. Plant 10, Pirojshanagar, Vikhroli (West), Mumbai- 400 079, India.",
      phone: "+91 226 796 4086",
      phone2: "+91 226 796 4084",
      extension: "4087",
      extension2: "",
      email: "infotech@godrej.com",
    },
    {
      id: 2,
      loc: "Delhi",
      loc2: "India",
      desc: "Godrej Infotech Ltd. C/O Awfis, Plot No. A-24/9, Mohan Co-operative Industrial Area, New Delhi - 110044, India.",
      phone: "",
      phone2: "",
      extension: "",
      extension2: "",
      email: "infotech@godrej.com",
    },
    {
      id: 3,
      loc: "Kolkata",
      loc2: "India",
      desc: "Godrej Infotech Ltd. Block GN, Plot No. 30, Sector-V, Salt Lake City, Kolkata - 700 091, India.",
      phone: "+91 336 601 3500",
      phone2: "",
      extension: "",
      extension2: "",
      email: "infotech@godrej.com",
    },
    {
      id: 4,
      loc: "Mumbai",
      loc2: "India",
      desc: "Godrej Infotech Ltd. Workenstein Collaborative Spaces Pvt Ltd, Workafella, 150, 1, Infantry Rd, Opp. Commissioner Office, Shivaji Nagar, Bengaluru, Karnataka 560001",
      phone: "",
      phone2: "",
      extension: "",
      extension2: "",
      email: "infotech@godrej.com",
    },
    {
      id: 5,
      loc: "UAE",
      loc2: "",
      desc: "Godrej Infotech Ltd. Executive Suite Z-61, PO Box 121806, Sharjah, UAE.",
      phone: "+971 655 798 39",
      phone2: "+971 655 708 66",
      extension: "",
      extension2: "",
      email: "infotech@godrej.com",
    },
    {
      id: 6,
      loc: "Belgium",
      loc2: "",
      desc: "LVD Godrej Infotech nv. Hondschotestraat 112, B-8560, Wevelgem (Gullegem)",
      phone: "",
      phone2: "",
      extension: "",
      extension2: "",
      email: "infotech@lvdgi.be",
    },
    {
      id: 7,
      loc: "Singapore",
      loc2: "",
      desc: "Godrej Infotech Singapore Pte Ltd. 105 Cecil Street, The Octagon, Singapore-069534",
      phone: "+65 846 816 94",
      phone2: "",
      extension: "",
      extension2: "",
      email: "infotech@godrej.com",
    },
    {
      id: 8,
      loc: "Singapore",
      loc2: "",
      desc: "Godrej Infotech Singapore Pte Ltd. 11 Lok yang way, Singapore-628632",
      phone: "",
      phone2: "",
      extension: "",
      extension2: "",
      email: "infotech@godrej.com",
    },
    {
      id: 9,
      loc: "Saudi Arabia",
      loc2: "",
      desc: "",
      phone: "+966 546 416 385",
      phone2: "",
      extension: "",
      extension2: "",
      email: "infotech@godrej.com",
    },
  ];
  const [formData, setFormData] = useState({
    Name: "",
    Phoneno: "",
    Email: "",
    Country: "IN",
    Query: "",
    Consent: "Y",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the POST request to the API endpoint
      const response = await fetch(
        "https://mailer.godrej.com/godrejinfotechapi/SendEnquiry/SaveEnquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name: formData.Name,
            Phoneno: formData.Phoneno,
            Email: formData.Email,
            Country: formData.Country,
            Query: formData.Query,
            Consent: formData.Consent,
          }),
        }
      );

      if (response.ok) {
        console.log("Enquiry saved successfully!");
        Swal.fire({
          icon: "success",
          title: "Enquiry saved successfully!",
          showConfirmButton: false,
          timer: 1500, // Automatically close after 1.5 seconds
        });
        setFormData({
          Name: "",
          Phoneno: "",
          Email: "",
          Country: "IN",
          Query: "",
          Consent: "Y",
        });
      } else {
        console.error("Error saving enquiry:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      {/* Nav */}
      <Announcement />

      <div className={`relative z-[500]`}>
        <div className={`absolute w-full  `}>
          <Navbar theme="dark" />
        </div>
      </div>

      {/* Global Locations */}
      <>
        <div className="max-w-screen-xl mx-auto px-[2rem] bg-white">
          <div className=" mt-[5em] mb-[2em]">
            <div className="grid grid-rows-1 grid-cols-2">
              <div>
                <h3 className="text-4xl leading-[42px] font-bold">
                  How can we help you?
                </h3>
                <p className="text-[#98A2B3]">
                  We enable global businesses to Automate, Cloud & Transform for
                  a sustainable and inclusive future.
                </p>
                <form
                  onSubmit={handleSubmit}
                  className={`${styles["container"]} w-full pe-8 my-3 bg-white`}
                >
                  <input
                    id="name"
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    className="w-full mb-5 "
                    placeholder="Full Name"
                  />

                  <input
                    id="email"
                    type="text"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    className="w-full mb-5 "
                    placeholder="Email Address"
                  />

                  <div className="flex justify-between gap-5 mb-5">
                    <ReactFlagsSelect
                      className={styles["tb-flags"]}
                      fullWidth={false}
                      searchable
                      selected={selected}
                      onSelect={handleCountrySelect}
                      type="text"
                      name="Country"
                      value={formData.Country}
                      onChange={handleChange}
                    />
                    <input
                      id="tel"
                      type="text"
                      name="Phoneno"
                      value={formData.Phoneno}
                      onChange={handleChange}
                      customLabels={{
                        BE: "BEL",
                        SG: "SGP",
                        US: "USA",
                        IN: "+91",
                      }}
                      className={`${styles.tel} w-full mr-0 `}
                      placeholder="999999999"
                    />
                  </div>

                  <textarea
                    className="mb-5"
                    type="text"
                    name="Query"
                    value={formData.Query}
                    onChange={handleChange}
                    placeholder="We would like to leverage our business potential and accelerate the growth"
                  ></textarea>

                  <label className="flex justify-start items-start gap-3 mb-5">
                    <input
                      type="checkbox"
                      name="Consent"
                      value={formData.Consent}
                      onChange={handleChange}
                      class="default:ring-2"
                    />
                    <p>
                      I consent to the processing of my personal data by Godrej
                      Infotech in accordance with the{" "}
                      <Link href={"/"} className="text-blue-600">
                        Privacy Notice
                      </Link>
                    </p>
                  </label>

                  <button type="submit" className="flex  ">
                    Send Message{" "}
                    <Icon
                      path={mdiArrowRight}
                      style={{ marginLeft: "0.5em" }}
                      size={1}
                    />
                  </button>
                </form>
              </div>
              <div>
                <Image src={gmap} alt="contact map" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-[2rem] bg-white">
          <div className=" mt-[5em] mb-[2em]">
            <h4 className={` font-medium text-[#0745D3] uppercase ribbon`}>
              OUR LOCATIONS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <h3 className="text-4xl leading-[42px] font-bold">
                Our Global Footprint
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-3 mb-[5em] gap-0 sm:gap-10">
            {locations.map((add) => {
              return (
                <>
                  <div className="my-5">
                    <p className="font-bold">
                      {add.loc},{" "}
                      <span className="text-[#98A2B3]">{add.loc2}</span>
                    </p>
                    <p className="font-medium my-2">{add.desc}</p>
                    {add.phone && (
                      <p>
                        Phone:{" "}
                        <Link href={`tel:${add.phone}`}>{add.phone}</Link>
                        {add.extension && <span> / {add.extension}</span>}
                      </p>
                    )}
                    {add.phone2 && (
                      <p>
                        Phone:{" "}
                        <Link href={`tel:${add.phone2}`}>{add.phone2}</Link>
                        {add.extension2 && <span> / {add.extension2}</span>}
                      </p>
                    )}
                    <p>
                      Email:{" "}
                      <span className="text-[#0745D3]">
                        <Link href={`mailto:${add.email}`}>{add.email}</Link>
                      </span>
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
      <Review />
      <>
        <div className={`${styles["container"]} bg-white mt-24 py-24`}>
          <div className="flex justify-center items-center flex-col">
            <h3 className="text-4xl leading-[42px] font-bold">
              Want to join the tech revolution?
            </h3>
            <p className="font-normal leading-[22px] pt-3 pb-8 text-center">
              Discover exciting opportunities here and become an <br /> integral
              part of our Tech Movement
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
  );
};

export default ContactUs;

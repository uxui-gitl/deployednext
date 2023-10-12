import Announcement from "@/sections/announcement/Announcement";
import Copyright from "@/sections/copyright/Copyright";
import Footer from "@/sections/footer/Footer";
import Review from "@/sections/review/Review";
import Link from "next/link";
import React from "react";

const ContactUs = () => {
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

  return (
    <>
      {/* Global Locations */}
      <>
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
    </>
  );
};

export default ContactUs;

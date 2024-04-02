import { Chrono } from "react-chrono";
import Balancer from "react-wrap-balancer";

const Timeline = () => {
  const containerStyle = {
    paddingTop: "1em",
    paddingBottom: "1em",
    width: "100%",
    outline: "none",
    backgroundImage: 'url("./bg.png")',
    backgroundImage:
      "linear-gradient(to top, rgba(255, 255, 255, 1.5), transparent), url('./bg.png')",
  };
  const timelineData = [
    {
      _id: 1,
      title: "Sustaining Holistic Excellence",
      year: "2020 - Present",
      list: [
        "2023: Microsoft Solution Partner for Business Applications, Great Place to Work Certified",
        "2022: ET Future-ready Organization, Great Place to Work Certified, Partnership with Hexagon",
        "2021: Partnership with Salesforce",
        "2020: Partnership with UiPath India and Automation Anywhere",
      ],
    },
    {
      _id: 2,
      title: "Multi-faceted Accomplishments",
      year: "2014 - 2019",
      list: [
        "2018: Formation of Godrej Infotech Americas, Partnership with Oracle",
        "2017: Co-development Partnership with Infor, Gold Competency for Microsoft Cloud",
        "2016: LS Retail Diamond Partner",
        "2015: LS Retail Platinum Partner",
        "2014: Formation of Godrej Infotech Singapore, Changed Belgium JV to Subsidiary",
      ],
    },
    {
      _id: 3,
      title: "A Triumphant Year",
      year: "2009 - 2013",
      list: [
        "2013: Business operations started in KSA, Infor-Winner of the Golden Deal of the year Award.",
        "2012: Microsoft Dynamics Reseller of the Year ",
        "2011: Retail Best Partner Award, Dynamics Partner of year",
        "2010: LS Retail Partnership, Microsoft Discrete Manufacturing Award",
        "2009: Microsoft inner Circle Member Award, Formation of LVD Godrej Infotech Belgium. ",
        
      ],
    },
    {
      _id: 4,
      title: "Prominent Honors",
      year: "2005 - 2008",
      list: [
        "2008: Opened Branch Office in Sharjah",
        "2007: Infor Best Partner Award in Asia Pacific",
        "2006: Microsoft President Club Member Award",
      ],
    },
    {
      _id: 5,
      title:
        "Inception of a Technology Powerhouse, Strategic Partnership and Award Garnering",
      year: "1999 - 2004",
      list: [
        "2004: Partnership with Microsoft",
        "2003: Infor Best Partner Award 2003",
        "1999: Started BaaN (Infor) Practice , IT Backbone for Godrej & Boyce Since",
        "1971: Godrej infotech Established",
      ],
    },
  ];

  return (
    <>
      <div className={`w-full bg-[#f2f4f7]`} style={containerStyle}>
        <div className="  text-left md:text-center max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto px-[2rem]">
          <div className="max-w-screen-lg mx-auto px-[2rem] py-[2em]  ">
            <div className=" flex justify-center mx-auto text-center">
              <h3 className=" text-[36px] font-bold leading-[42px]">
                <Balancer>
                  From Humble Beginnings To Growing Tech Hub: The Inspiring Journey Of Godrej Infotech
                </Balancer>
              </h3>
            </div>
          </div>
          <>
            <div className=" w-2/3 mx-auto h-fit">
              <div className="w-full h-full">
                <Chrono
                  theme={{
                    cardBgColor: "transparent",
                    titleColor: "#101828",
                    titleColorActive: "#101828",
                  }}
                  mode="VERTICAL"
                  slideShow
                  slideItemDuration={4000}
                  scrollable={{ scrollbar: false }}
                  borderLessCards
                  hideControls
                  items={[
                    {
                      title: "2020 - Present",
                    },
                    {
                      title: "2014 - 2019",
                    },
                    {
                      title: "2009 - 2013",
                    },
                    {
                      title: "2005 - 2008",
                    },
                    {
                      title: "1999 - 2004",
                    },
                  ]}
                >
                  {timelineData.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-start justify-center w-full flex-col gap-4"
                    >
                      <div>
                        <h3 className="text-[22px] font-bold leading-[42px]">
                          {item.title}
                        </h3>
                      </div>
                      <div>
                        <ul className="list-disc pl-4">
                          {item.list.map((i, index) => (
                            <li
                              className="text-base font-medium mb-2 "
                              key={index}
                            >
                              {i}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </Chrono>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Timeline;

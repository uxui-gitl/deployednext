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
      year: "2021 - Present",
      list: [
        "Great Place to Work Certified ",
        "Partnership with UiPath India.",
        " Partnership with Automation, Anywhere, Inc, 2021. ",
        "Partnership with SFDC in 2022.",
        "ET Future-ready Organization 2023. ",
        " Microsoft Solution Partner for Business Applications 2023. ",
      ],
    },
    {
      _id: 2,
      title: "Multi-faceted Accomplishments",
      year: "2016 - 2020",
      list: [
        "LS Retail Diamond Partner.",
        "Gold Competency for MS Cloud.",
        "Oracle Gold Partner.",
        "Co-Development Engagement with Infor.",
        "Influential Partner of the year by Infor, 2020.",
      ],
    },
    {
      _id: 3,
      title: "A Triumphant Year ",
      year: "2011 - 2015",
      list: [
        "Dynamic Partner of the year by Microsoft",
        "Best Partner for LS Retail",
        "Microsoft dynamics Reseller of the year 2011, India",
        "Best partner for Discrete Manufacturing by Microsoft.",
        "Award for Microsoft President Club Member",
        "Microsoft dynamics Reseller of the year 2012 India, Inclusion of New Product.",
        "Business Operations started in KSA.",
        "Dynamic partner of the year, West 2013.",
        "Infor-Winner of Golden Deal of the Year.",
        "Formation of GISPL (Singapore)",
        "Formation of GIA (Godrej Infotech Americas)",
        "LS Retail Platinum Partner.",
      ],
    },
    {
      _id: 4,
      title: "Prominent Honors",
      year: "2005 - 2010 ",
      list: [
        "Great Place to Work Certified ",
        "Partnership with UiPath India.",
        " Partnership with Automation, Anywhere, Inc, 2021. ",
        "Partnership with SFDC in 2022.",
        "ET Future-ready Organization 2023. ",
        " Microsoft Solution Partner for Business Applications 2023. ",
      ],
    },
    {
      _id: 5,
      title:
        "Inception of a Technology Powerhouse, Strategic Partnership and Award Garnering ",
      year: "1999 - 2004",
      list: [
        "Godrej Infotech Establishment.",
        "Partnership with Infor",
        "Best Partner Award for Infor",
      ],
    },
  ];

  return (
    <>
      <div className={`  w-full bg-[#f2f4f7] `} style={containerStyle}>
        <div className="  text-left md:text-center max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto px-[2rem]">
          <div className="max-w-screen-lg mx-auto px-[2rem] py-[2em]  ">
            <div className=" flex justify-center mx-auto text-center">
              <h3 className=" text-[36px] font-bold leading-[42px]">
                <Balancer>
                  From humble beginnings to tech titans, the inspiring journey
                  of Godrej Infotech
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
                      title: "2021 - Present ",
                    },
                    {
                      title: "2016 - 2020",
                    },
                    {
                      title: "2011 - 2015",
                    },
                    {
                      title: "2005 - 2010 ",
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

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
                  title: "1999",
                },
                {
                  title: "1999",
                },
                {
                  title: "1999",
                },
                {
                  title: "1999",
                },
                {
                  title: "1999",
                },
              ]}
            >
              <div className="flex justify-start flex-col items-start">
                <div>
                  <h3>Sustaining Holistic Excellence</h3>
                </div>
                <div>
                  <ul>
                    <li>Great Place to Work Certified </li>
                    <li>Partnership with UiPath India.</li>
                    <li>Partnership with Automation, Anywhere, Inc, 2021. </li>
                    <li>Partnership with SFDC in 2022.</li>
                    <li>ET Future-ready Organization 2023. </li>
                    <li>
                      Microsoft Solution Partner for Business Applications,
                      2023.{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3>Multi-faceted Accomplishments</h3>
                <ul>
                  <li>LS Retail Diamond Partner.</li>
                  <li>Gold Competency for MS Cloud.</li>
                  <li>Oracle Gold Partner.</li>
                  <li>Co-Development Engagement with Infor.</li>
                  <li>Influential Partner of the year by Infor, 2020.</li>
                </ul>
              </div>
              <div>
                <h3>A Triumphant Year</h3>
                <ul>
                  <li>Dynamic Partner of the year by Microsoft</li>
                  <li>Best Partner for LS Retail</li>
                  <li>Microsoft dynamics Reseller of the year 2011, India</li>
                  <li>Best partner for Discrete Manufacturing by Microsoft.</li>
                  <li>Award for Microsoft President Club Member</li>
                  <li>
                    Microsoft dynamics Reseller of the year 2012 India,
                    Inclusion of New Product.
                  </li>
                  <li>Business Operations started in KSA.</li>
                  <li>Dynamic partner of the year, West 2013.</li>
                  <li>Infor-Winner of Golden Deal of the Year.</li>
                  <li>Formation of GISPL (Singapore)</li>
                  <li>Formation of GIA (Godrej Infotech Americas)</li>
                  <li>LS Retail Platinum Partner.</li>
                </ul>
              </div>
              <div>
                <h3>Prominent Honors</h3>
                <ul>
                  <li>Best Partner Award for Infor in Asia Pacific</li>
                  <li>Award for Microsoft President Club Member</li>
                  <li>Opened Office in Sharjah.</li>
                  <li>Partnership with LS Retail.</li>
                  <li>Best partner for Discrete Manufacturing by Microsoft.</li>
                </ul>
              </div>
              <div>
                <h3>
                  Inception of a Technology Powerhouse, Strategic Partnership
                  and Award Garnering
                </h3>
                <ul>
                  <li>Godrej Infotech Establishment.</li>
                  <li>Partnership with Infor</li>
                  <li>Best Partner Award for Infor </li>
                </ul>
              </div>
            </Chrono>
          </>
        </div>
      </div>
    </>
  );
};

export default Timeline;

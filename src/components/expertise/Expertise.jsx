import styles from "./expertise.module.css";

const Expertise = () => {
  return (
    <>
      <div
        className={`${styles["bg-expertise"]} overflow-clip max-h-[600px] py-8  text-[#DBDBDB]`}
      >
        <div
          className={`${styles.container} max-w-screen-xl md:max-w-screen-lg mx-auto px-5`}
        >
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-5`}
          >
            <div className="md:col-span-2 col sm:col-span-2 flex flex-col justify-center">
              <div className="">
                <h2 className="text-4xl	font-bold	text-[#f5f5f5]">
                  {"The Hub of Expertise"}
                </h2>
                <p className="max-w-[85%]">
                  We are here to build edge and bring technology brilliance with
                  the finest in the industry. Driving the innovation path, we
                  develop better results for businesses across the globe.
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-between align-bottom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div className="col mb-5 md:mb-0">
                    <h4 className="text-5xl font-bold text-[#f5f5f5]">50 +</h4>
                    <p className="">
                      <span className="text-[#b2c8f8]">Countries</span> where we
                      <br /> have trusted clients
                    </p>
                  </div>
                  <div className="col mb-5 md:mb-0">
                    <h4 className="text-5xl font-bold text-[#f5f5f5]">10.31</h4>
                    <p className="">
                      Billions in Total{" "}
                      <span className="text-[#b2c8f8]">Revenue</span>
                    </p>
                  </div>
                  <div className="col mb-5 md:mb-0">
                    <h4 className="text-5xl font-bold text-[#f5f5f5]">500 +</h4>
                    <p className="whitespace-nowrap">
                      <span className="text-[#b2c8f8]">Employees</span> all over
                      the globe
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden relative md:flex col">
              <video
                className="absolute bg-transparent top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
              >
                <source src="/expert-globe.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;

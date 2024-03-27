import styles from "./expertise.module.css";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import CountUp from "react-countup";

import { useSpring } from "react-spring";
const Expertise = () => {
  return (
    <>
      <div
        className={`${styles["bg-expertise"]} overflow-clip max-h-[700px] py-[80px]  text-[#DBDBDB]`}
      >
        <div
          className={`${styles.container} max-w-screen-xl md:max-w-screen-lg mx-auto px-[2rem]`}
        >
          <div className={`grid grid-cols-1  gap-5`}>
            <div className="md:col-span-2 col sm:col-span-2 flex flex-col justify-center">
              <div className="mb-[40px] sm:mb-[80px] text-center">
                <h2 className="text-4xl	font-bold mb-2	text-[#f5f5f5]">
                  {"The Hub of Expertise"}
                </h2>
                <p className=" leading-[22px]">
                  We are here to build edge and bring technology brilliance with
                  the finest in the industry. Driving the innovation path, we
                  develop better results for businesses across the globe.
                </p>
              </div>
              <div className="w-full mx-auto text-center">
                <div className="mx-auto text-center flex flex-col sm:flex-row justify-around items-center sm:items-start">
                  <div className="  mb-5 md:mb-0">
                    <h4 className="text-5xl font-bold text-[#f5f5f5]">
                      <CountUp
                        end={25}
                        duration={2}
                        separator=" "
                        suffix=" +"
                      />
                    </h4>
                    <p className="">
                      <span className="text-[#b2c8f8]">Years</span> of
                      Excellence
                    </p>
                  </div>
                  <div className="  mb-5 md:mb-0">
                    <h4 className="text-5xl font-bold text-[#f5f5f5]">
                      <CountUp
                        end={500}
                        duration={2}
                        separator=" "
                        suffix=" +"
                      />
                    </h4>
                    <p className="">
                      Global Reach with{" "}
                      <span className="text-[#b2c8f8]">
                        Satisfied Customers
                      </span>
                    </p>
                  </div>
                  <div className="mb-5 md:mb-0">
                    <h4 className="text-5xl font-bold text-[#f5f5f5]">
                      <CountUp
                        end={15000}
                        duration={2}
                        separator=" "
                        suffix=" +"
                      />
                    </h4>
                    <p className="pr-2">
                      <span className="text-[#b2c8f8]">Man</span> Years of
                      Expertise
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden relative sm:block">
                <Cobe />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export function Cobe() {
  const canvasRef = useRef();
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));
  useEffect(() => {
    // let phi = 0;
    let width = 0;
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2 * 0.4,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 0.5, 3],
      markerSize: 0.03,
      markerColor: [251 / 255, 200 / 255, 21 / 255],
      glowColor: [1, 1, 2],
      markers: [
        // { location: [37.78, -122.412], size: 0.1 },
        { location: [52.52, 13.405], size: 0.1 },
        { location: [35.676, 139.65], size: 0.1 },
        { location: [-34.6, -58.38], size: 0.1 },
      ],
      opacity: 1,
      scale: 3,
      offset: [0, width * 2 * 0.4 * 0.6],
      onRender: (state) => {
        // state.phi = phi;
        // phi += 0.003;

        state.phi = r.get();
        state.width = width * 2;
        state.height = width * 2 * 0.4;
      },
    });
    setTimeout(() => (canvasRef.current.style.opacity = "1"));
    return () => globe.destroy();
    window.removeEventListener("resize", onResize);
  }, [r]);
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: 1 / 0.4,
        margin: "auto",
        position: "relative",
      }}
    >
      <canvas
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          canvasRef.current.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({
              r: delta / 200,
            });
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({
              r: delta / 100,
            });
          }
        }}
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
          opacity: 0,
          transition: "opacity 1s ease",
        }}
      />
    </div>
  );
}

export default Expertise;

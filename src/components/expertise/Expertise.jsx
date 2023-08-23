import styles from "./expertise.module.css";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import CountUp from "react-countup";

import { useSpring } from "react-spring";
const Expertise = () => {
  return (
    <>
      <div
        className={`${styles["bg-expertise"]} overflow-clip max-h-[600px] py-8  text-[#DBDBDB]`}
      >
        <div
          className={`${styles.container} max-w-screen-xl md:max-w-screen-lg mx-auto px-[2rem]`}
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
                    <h4 className="text-5xl font-bold text-[#f5f5f5]">
                      <CountUp
                        end={50}
                        duration={2}
                        separator=" "
                        suffix=" +"
                      />
                    </h4>
                    <p className="">
                      <span className="text-[#b2c8f8]">Countries</span> where we
                      <br /> have trusted clients
                    </p>
                  </div>
                  <div className="col mb-5 md:mb-0">
                    <h4 className="text-5xl font-bold text-[#f5f5f5]">
                      <CountUp
                        end={10.31}
                        decimals={2}
                        duration={2}
                        separator=" "
                        suffix=" +"
                      />
                      
                    </h4>
                    <p className="">
                      Billions in Total{" "}
                      <span className="text-[#b2c8f8]">Revenue</span>
                    </p>
                  </div>
                  <div className="col mb-5 md:mb-0">
                    <h4 className="text-5xl font-bold text-[#f5f5f5]">
                    <CountUp
                        end={500} 
                        duration={2}
                        separator=" "
                        suffix=" +"
                      />
                    </h4>
                    <p className="whitespace-nowrap">
                      <span className="text-[#b2c8f8]">Employees</span> all over
                      the globe
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden relative md:flex col">
              <Cobe />
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
    let phi = 0;
    let width = 0;
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [251 / 255, 100 / 255, 21 / 255],
      glowColor: [1.2, 1.2, 1.2],
      markers: [],
      onRender: (state) => {
        // This prevents rotation while dragging
        if (!pointerInteracting.current) {
          // Called on every animation frame.
          // `state` will be an empty object, return updated params.
          phi += 0.005;
        }
        state.phi = phi + r.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });
    setTimeout(() => (canvasRef.current.style.opacity = "1"));
    return () => globe.destroy();
  }, []);
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 600,
        aspectRatio: 1,
        margin: "auto",
        position: "relative",
      }}
    >
      <canvas
        ref={canvasRef}
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
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          contain: "layout paint size",
          opacity: 0,
          transition: "opacity 1s ease",
        }}
      />
    </div>
  );
}

export default Expertise;

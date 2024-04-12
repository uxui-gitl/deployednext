"use client";
import EntIntro from "@/components/EntIntro";
import EmployeeExp from "@/components/EmployeeExp";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React, { useState } from "react";
import ACTCard from "@/sections/ACTCard/ACTCard";
import { useScroll } from "framer-motion";
import { projects } from "../../assets/data";
import countries from "../../data/globe.json";
import dynamic from "next/dynamic";

import { useEffect, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import gmap from "../../../public/contact/map.png";
import CAT from "../../../public/Capabilities---Application-transformation.jpg";

import Spotlight from "@/components/Spotlight";

import Icon from "@mdi/react";
import Link from "next/link";
import { mdiArrowRight, mdiArrowTopRight } from "@mdi/js";
import SectionNav from "@/components/SectionNav";
import Dropdown from "@/components/Dropdown";
import OfferingsSlider from "@/components/OfferingsSlider";
import { Globe } from "@/components/ui/globe";

const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
  }
);

export default function Page() {
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  // Set the default center location (San Francisco, CA in this case)
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDG18Tve3ll06G12C9fUK6l_0-Mg0NsF8Y",
  });

  const [map, setMap] = React.useState(null);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 40.7128,
      startLng: -74.006,
      endLat: 48.8566,
      endLng: 2.3522,
      arcAlt: 0.4,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.4,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.4489,
      startLng: -70.6693,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 40.7128,
      startLng: -74.006,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.6,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 35.6895,
      endLng: 139.6917,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: -15.7781,
      endLng: -47.9292,
      arcAlt: 0.4,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -6.2088,
      endLng: 106.8456,
      arcAlt: 0.4,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -33.4489,
      startLng: -70.6693,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 37.7749,
      startLng: -122.4194,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.6,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 48.8566,
      endLng: 2.3522,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 35.6895,
      endLng: 139.6917,
      arcAlt: 0.4,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.4,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.4,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 40.7128,
      startLng: -74.006,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: -6.2088,
      endLng: 106.8456,
      arcAlt: 0.6,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 35.6895,
      endLng: 139.6917,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.4,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];
  return (
    <>
      <main>
        <EntIntro
          title="Reimagine Your Business Capabilities with Our Intelligent Edge-Enabled Cloud Stack & Services"
          desc="We leverage the power of the cloud to recalibrate our business, derive greater business value and refine your user experience"
          cta="Modernize your Business with Upgrade Cloud Services"
          width="70%"
          video="https://godrej-gitl.s3.ap-south-1.amazonaws.com/videos/banner.mp4"
        />

        {/* Testing GLobe tsx */}
        <>
          <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
          <div className="absolute w-full -bottom-30 h-full z-10">
            <World data={sampleArcs} globeConfig={globeConfig} />
          </div>
        </>
      </main>
    </>
  );
}

import React, { useEffect, useState } from "react";
import anime from "animejs";
import Image from "next/image";

const SplashScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });
    loader.add({
      targets: "#splashlogo",
      delay: 0,
      scale: 1,
      duration: 700,
      easing: "easeInOutExpo",
    });
    loader.add({
      targets: "#splashlogo",
      delay: 0,
      scale: 1.25,
      duration: 700,
      easing: "easeInOutExpo",
    });
    loader.add({
      targets: "#splashlogo",
      delay: 0,
      scale: 1,
      duration: 700,
      easing: "easeInOutExpo",
    });
    loader.add({
      targets: "#splashlogo",
      delay: 0,
      scale: 1.25,
      duration: 700,
      easing: "easeInOutExpo",
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div
        className="flex h-screen items-center justify-center"
        isMounted={isMounted}
      >
        <Image
          id="splashlogo"
          src="/godrejLogo.svg"
          alt=""
          width={163}
          height={59}
        />
      </div>
    </>
  );
};

export default SplashScreen;

'use client';

import { useEffect, useState } from 'react';
import RotatingSpecializations from "@/rotating-specializations";

const LandingSection = () => {
    const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <div id='landing' className="relative grid grid-cols-1 min-h-screen place-items-center px-5 md:px-3 mt-15">
      <div className="relative justify-center flex flex-col">

        {/* GREETING */}
        <p
          className={`transition-all duration-700 ease-out delay-300 transform ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-25'
          }`}
        >
          <span className="text-[2rem] sm:text-[3rem] text-left mt-25 md:mt-0 mb-5 md:mb-2 text-[#66615C] hidden md:block">
            HI, I'M
          </span>
        </p>

        {/* NAME */}
        <h1
          className={`transition-all duration-700 ease-out delay-200 transform ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-25'
          } text-[3.5rem] text-xl md:text-[7.5rem] text-center name font-bold`}
        >
          ASHLEY TRAN.
        </h1>

        {/* SPECIALIZATIONS */}
        <div
          className={`transition-all duration-700 ease-out delay-100 transform ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-25'
          }`}
        >
          <RotatingSpecializations/>
        </div>

        {/* CTA */}
        <div
          className={`flex grid place-items-center mt-5 transition-all duration-700 ease-out transform ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-25'
          }`}
        >
          <a
            className="flex gap-2 text-center border border-solid text-background text-md p-5 min-w-45 justify-center bg-[#66615C] cta-button"
            href="https://www.linkedin.com/in/ash-tran/overlay/1753803698510/single-media-viewer/?profileId=ACoAAEMWXfEBHC1td9lXyyvgjuUgH12Igmw7kMI"
          >
            VIEW RESUME
          </a>

          <div className="w-0 h-0 border-l-8 mt-20 border-r-8 border-b-0 border-t-8 border-transparent border-t-black"></div>
        </div>

      </div>
    </div>
  );
}

export default LandingSection;
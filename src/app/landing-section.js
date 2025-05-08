'use client';

import { useEffect, useState } from 'react';
import RotatingSpecializations from "@/rotating-specializations";

const LandingSection = () => {
    const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <div className="relative grid grid-cols-1 min-h-screen place-items-center px-1 md:px-3">
      <div className="relative justify-center flex flex-col gap-4">

        {/* GREETING */}
        <p
          className={`transition-all duration-700 ease-out delay-300 transform ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-25'
          }`}
        >
          <span className="text-[2rem] md:text-[3rem] text-left mt-25 md:mt-0 mb-5 md:mb-2 text-[#66615C]">
            HI, I'M
          </span>
        </p>

        {/* NAME */}
        <h1
          className={`transition-all duration-700 ease-out delay-200 transform ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-25'
          } text-[3rem] sm:text-xl md:text-[7.5rem] text-center name font-bold`}
        >
          ASHLEY TRAN.
        </h1>

        {/* SPECIALIZATIONS */}
        <div
          className={`transition-all duration-700 ease-out delay-100 transform ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-25'
          }`}
        >
          <RotatingSpecializations />
        </div>

        {/* CTA */}
        <div
          className={`flex grid place-items-center mt-5 transition-all duration-700 ease-out transform ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-25'
          }`}
        >
          <a
            className="flex gap-2 text-center border border-solid text-background text-md p-5 min-w-35 bg-[#66615C]
              hover:-translate-y-1 transition-all duration-300 ease-in-out"
            href="/resume_march2025.pdf"
          >
            VIEW RESUME
          </a>

          <div className="w-0 h-0 border-l-8 mt-25 border-r-8 border-b-0 border-t-8 border-transparent border-t-black"></div>
        </div>

      </div>
    </div>
  );
}

export default LandingSection;
'use client';

import React from 'react';

const AboutSection = () => {
  return (
    <div id="about" className="min-h-screen grid justify-items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 ml-10 mr-10 sm:ml-25 sm:mr-25 mb-10">

        {/* BIO */}
        <div className="order-2 md:order-1">
            <h2 className="text-[2rem] md:text-[3.5rem] font-bold mb-5 md:mt-0 text-start">ABOUT</h2>
            {/* SUBHEADING */}
            <h3 className="text-[1.50rem] mb-[1rem] md:text-[2rem] font-bold text-[#66615C]"> A developer who creates meaningful digital experiences with a focus on design, usability, and clean code.</h3>
            <p className="text-justify text-[1rem]">
            I’m originally from Lansing, MI, and I graduated from Michigan State University in Spring 2024 with a degree in Computer Science and a minor in Business. I love using modern tools and frameworks to bring creative ideas to life.
            </p>
            <br/>
            <p className="text-justify text-[1rem]">
            I’m especially drawn to projects that explore how technology can solve real-world problems — blending technical thinking with entrepreneurial curiosity. I'm always thinking about what to build next — and how to make it better.
            </p>
            <br/>
            <p className="text-justify text-[1rem]">
            Outside of coding, I’m into horror movies and share everyday life with my partner, our cat, and our hamster.
            </p>

            {/* CONTACT BUTTON*/}
            <div className="mt-10">
                <a
                    href="#footer"
                    className="flex font-bold text-[1.5rem] md:text-[2rem] text-[#66615C] cta-button"
                >
                  ↗ CONTACT ME
                 
                </a>
            </div>

        </div>


        {/* IMG */}
        <div className="relative img-background w-full md:w-[75vh] h-[35vh] md:h-[75vh] md:ml-25 mb-10 mt-5 md:mt-0 md:mb-0 order-1 md:order-2">
          <div className="absolute -top-5 -left-5 w-25 h-25 border-t-3 border-l-3 border-solid border-[#66615C]"></div>
          <img
            src="/roblox-headshot.png"
            alt="A ROBLOX character version of Ashley."
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute -bottom-5 -right-5 w-25 h-25 border-b-3 border-r-3 border-solid border-[#66615C]"></div>
        </div>
      </div>
    </div>

    
  );
};

export default AboutSection;
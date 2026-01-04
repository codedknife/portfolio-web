'use client';

import React from 'react';

const AboutSection = () => {
  return (
    <div id="about" className="min-h-screen grid place-items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[85rem] px-10 mb-10 w-full gap-x-25">

        {/* BIO */}
        <div className="order-2 md:order-1">
            <h2 className="text-[2rem] md:text-[3.5rem] font-bold mb-5 md:mt-0 text-start">ABOUT</h2>
            {/* SUBHEADING */}
            <h3 className="text-[1.50rem] mb-[1rem] md:text-[1.75rem] font-bold text-[#66615C]"> A developer who focuses on design, usability, and clean code.</h3>
            <p className="text-justify text-[1rem]">
            I’m originally from Lansing, MI, and graduated from Michigan State University in Spring 2024 with a degree in Computer Science and a minor in Business. 
            I'm enthusiastic about applying my skills and knowledge to create meaningful online experiences. 
            With a solid foundation in coding and a passion for design, I'm eager to contribute to innovative projects and continue learning from experienced professionals.
            </p>
          
            <br/>
            <p className="text-justify text-[1rem]">
            Outside of coding, I enjoy horror movies, finding a good deal, and sharing everyday life with my partner, our cat, and our hamsters.
            </p>

            {/* CONTACT BUTTON*/}
            <div className="mt-5">
                <a
                    href="#footer"
                    
                    className="underline-link flex font-bold text-[1.5rem] md:text-[2rem] text-[#333333]"
                >
                  ↗ CONTACT ME
                 
                </a>
            </div>

        </div>


        {/* IMG */}
        <div className="relative img-background w-full h-[35vh] md:w-[55vh] md:h-[55vh] mb-10 mt-5 md:my-0 order-1 md:order-2">
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
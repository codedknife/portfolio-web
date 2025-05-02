'use client';

import React from 'react';

const AboutSection = () => {
  return (
    <div id="about" className="min-h-screen grid place-items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 ml-10 mr-10 md:ml-10 md:mr-25 mb-5 md:mb-10">

        {/* IMG */}
        <div className="relative img-background w-full h-64 md:w-3/4">
          <div className="absolute -top-5 -left-5 w-25 h-25 border-t-2 border-l-2 border-solid border-[#66615C]"></div>
          <div className="absolute -bottom-5 -right-5 w-25 h-25 border-b-2 border-r-2 border-solid border-[#66615C]"></div>
        </div>

        {/* BIO */}
        <div>
            <h2 className="text-[2rem] md:text-[3rem] font-bold mt-5 md:mt-0">ABOUT</h2>
            {/* SUBHEADING */}
            <h3 className="text-[1.25rem] mb-[1rem] md:text-[1.50rem] font-bold text-[#66615C]"> A developer who creates meaningful digital experiences with a focus on design, usability, and clean code.</h3>
            <p className="text-justify">
                I graduated from Michigan State University in Spring 2024 with a bachelor's degree in Computer Science and a minor in Business. 
                I love using modern tools and frameworks to bring creative ideas to life.
            </p>
            <br/>
            <p className="text-justify">
                Whether I’m working on a solo project or collaborating with a team, I enjoy the challenge of turning a concept into something people can actually enjoy.
            </p>
            <br/>
            <p className="text-justify">
                When I’m not in front of a screen, you’ll probably find me outside — hiking, exploring somewhere new, or just enjoying some fresh air. 
                I’m also a huge horror movie fan and share my everyday adventures with my partner, our cat, and our hamster.
            </p>

            {/* CONTACT BUTTON*/}
            <div className="mt-10 grid justify-items-center md:justify-items-start">
                <a
                    href="mailto:iashleytran@gmail.com"
                    className="flex h-[60px] w-[120px] md:h-[120px] bg-[#66615C] text-white items-center justify-center transition-all duration-300 ease-in-out"
                >
                    CONTACT
                </a>
            </div>

        </div>
      </div>
    </div>
  );
};

export default AboutSection;
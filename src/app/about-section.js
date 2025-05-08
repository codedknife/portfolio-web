'use client';

import React from 'react';

const AboutSection = () => {
  return (
    <div id="about" className="min-h-screen grid justify-items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 ml-10 mr-10 md:ml-25 md:mr-25">

        {/* BIO */}
        <div className="order-2 md:order-1">
            <h2 className="text-[2rem] md:text-[3rem] font-bold mb-5 md:mt-0 text-center md:text-start">ABOUT</h2>
            {/* SUBHEADING */}
            <h3 className="text-[1.25rem] mb-[1rem] md:text-[1.50rem] font-bold text-[#66615C]"> A developer who creates meaningful digital experiences with a focus on design, usability, and clean code.</h3>
            <p className="text-justify text-[1rem]">
                I graduated from Michigan State University in Spring 2024 with a bachelor's degree in Computer Science and a minor in Business. 
                I love using modern tools and frameworks to bring creative ideas to life.
            </p>
            <br/>
            <p className="text-justify text-[1rem]">
                Whether I’m working on a solo project or collaborating with a team, I enjoy the challenge of turning a concept into something people can actually enjoy.
            </p>
            <br/>
            <p className="text-justify text-[1rem]">
                When I’m not in front of a screen, you’ll probably find me outside — hiking, exploring somewhere new, or just enjoying some fresh air. 
                I’m also a huge horror movie fan and share my everyday adventures with my partner, our cat, and our hamster.
            </p>

            {/* CONTACT BUTTON*/}
            <div className="mt-10 grid justify-items-center md:justify-items-start">
                <a
                    href="mailto:iashleytran@gmail.com"
                    className="flex h-[60px] w-[120px] md:h-[120px] bg-[#66615C] text-white items-center justify-center 
                    hover:-translate-y-1 transition-all duration-300 ease-in-out "
                >
                    CONTACT
                </a>
            </div>
        </div>


        {/* IMG */}
        <div className="relative img-background w-full md:w-[82%] h-[30vh] md:h-[85vh] md:ml-25 mb-10 mt-5 md:mt-0 md:mb-0 order-1 md:order-2">
          <div className="absolute -top-5 -left-5 w-25 h-25 border-t-3 border-l-3 border-solid border-[#66615C]"></div>
          <div className="absolute -bottom-5 -right-5 w-25 h-25 border-b-3 border-r-3 border-solid border-[#66615C]"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
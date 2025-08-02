'use client';

import Navigation from "./navigation";
import AboutSection from "./about-section";
import LandingSection from "./landing-section";
import ExperienceSection from "./experience-section";
import ContactFooter from '@/contact-form';
import CustomCursor from "@/custom-cursor";
import ProjectCard from "@/project-card";
import { useState, useEffect } from "react";

export default function Home() {

  
  const [loading, setLoading] = useState(true);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {

    // simulate loading delay
    const animationTimer = setTimeout(() => {
      setAnimation(true);
    }, 2000);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div
      className={`fixed top-0 left-0 w-full h-screen bg-[#66615C] transition-transform duration-1000 ease-in-out ${
        animation ? "translate-y-[-100%]" : "translate-y-0"
      }`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-6xl font-extrabold font-mono text-white typing-text">
          &lt;/ash&gt;
        </h1>
      </div>
    </div>
    );
  }

  const TradingAssistantData = {
    title: "Virtual Trading Assistant",
    date: "MAY 2025",
    type: "SOFTWARE",
    specialties: ["PYTHON", "OPENCV", "TKINTER"],
    description: `Designed to enhance the trading experience in a virtual game by using OCR technology to scan in-game user names. 
      It then searches the users' inventories on a website and filters for specific items chosen by the user, with an emphasis on rarer items. 
      This tool saves time by automating the inventory check process, quickly identifying valuable or hard-to-find items without the need for manual searches.`
  };
  const VisionaryPhotoboothData = {
    title: "Visionary Photobooths",
    date: "AUGUST 2024",
    type: "UX/UI",
    url: "https://visionarymi.com",
    specialties: ["PAGECLOUD CMS"],
    description: `Involved revamping a local photo booth website by improving its contact information and optimizing it for SEO. 
      Clear and accessible contact details were integrated, and targeted SEO strategies were implemented to enhance visibility and search engine rankings. 
      The result is a more user-friendly site that drives increased traffic and customer engagement.`
  };
  const AuditBuddyData = {
    title: "AuditBuddy",
    date: "JANUARY 2024",
    type: "WEB",
    url: "https://capstone.cse.msu.edu/2024-01/projects/urban-science/",
    specialties: ["JAVASCRIPT", "REACT", "PYTHON FLASK", "FIREBASE", "OPENCV"],
    description: `AuditBuddy automates dealership audits for automotive brands by analyzing photos and videos to assess performance. 
                  This eliminates the need for manual inspections, offering a more efficient and resource-effective solution. 
                  The app generates detailed performance reports and enables users to compare data across multiple dealerships.`
  };

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
     
      <CustomCursor></CustomCursor>
  
      <main>

        <Navigation />
      
        {/* EXTERNAL LINKS */}
        <div className="hidden md:flex fixed top-1/2 right-5 flex-col gap-5 z-50">
              <a href="https://github.com/codedknife">
                <img src="/github-mark.png" alt="GitHub Icon" className="w-7 h-7 transition-transform duration-250 hover:scale-150" />
              </a>

               <a href="https://www.linkedin.com/in/ash-tran/">
                <img src="/linkedin.png" alt="LinkedIn Icon" className="w-7 h-7 transition-transform duration-250 hover:scale-150" />
              </a>
        </div>

        {/* LANDING SECTION */}
        <LandingSection/>

        {/* ABOUT SECTION */}
        <AboutSection/>
        
         {/* EXPERIENCE SECTION*/}
        <div className="min-h-screen grid place-items-center w-full">
          <div className="max-w-[85rem] w-full px-5 mb-10">
            <h2 id="experience" className="text-[2rem] md:text-[3.5rem] font-bold mb-5 mt-5 text-start">EXPERIENCE</h2>
                <ExperienceSection/>
          </div>
        </div>
       

        {/* PORTFOLIO SECTION*/}
        <div className="min-h-screen place-items-center">
          <div className="px-5 mb-10 w-full max-w-[85rem]">
          <h2 id="work" className="text-[2rem] md:text-[3.5rem] font-bold mb-5 mt-10 md:mt-0 text-start">PORTFOLIO</h2>

          <div className="flex flex-wrap justify-between">
            <ProjectCard 
              title={TradingAssistantData.title}
              date={TradingAssistantData.date}
              type={TradingAssistantData.type}
              specialties={TradingAssistantData.specialties}
              description={TradingAssistantData.description}
            />

            <ProjectCard 
              title={VisionaryPhotoboothData.title}
              date={VisionaryPhotoboothData.date}
              type={VisionaryPhotoboothData.type}
              url={VisionaryPhotoboothData.url}
              specialties={VisionaryPhotoboothData.specialties}
              description={VisionaryPhotoboothData.description}
            />
          </div>

          <div className="flex flex-wrap justify-between md:mt-5">
          <ProjectCard 
              title={AuditBuddyData.title}
              date={AuditBuddyData.date}
              type={AuditBuddyData.type}
              url={AuditBuddyData.url}
              specialties={AuditBuddyData.specialties}
              description={AuditBuddyData.description}
            />
            </div>
          </div>
        </div>
       
      </main>

      <ContactFooter/>
    </div>
  );
}

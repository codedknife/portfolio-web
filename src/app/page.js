import Navigation from "./navigation";
import AboutSection from "./about-me";
import RotatingSpecializations from "@/rotating-specializations";
import CustomCursor from "@/custom-cursor";
import VerticalTabs from "./vertical-tabs";


export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
     
      <CustomCursor></CustomCursor>
  
      <main>

        <Navigation />
      
        {/* EXTERNAL LINKS */}
        <div className="hidden md:flex fixed top-1/2 right-5 flex-col gap-5 z-50">
              <a href="https://github.com/codedknife">
                <img src="/github-mark.png" alt="GitHub Icon" className="w-5 h-5" />
              </a>

               <a href="https://www.linkedin.com/in/ash-tran/">
                <img src="/linkedin.png" alt="LinkedIn Icon" className="w-5 h-5" />
              </a>
        </div>

        {/* LANDING SECTION */}
        <div className="relative grid grid-cols-1 h-screen overflow-hidden place-items-center px-1 md:px-4">

          {/* COL-1 */}
          <div className="relative justify-center flex flex-col">
            {/* GREETING */}
            <p className="text-[2rem] md:text-[3rem] text-left mt-25 md:mt-0 mb-5 md:mb-2 text-[#66615C]">HI, I'M</p>
            {/* NAME */}
            <h1 className="text-[3rem] sm:text-xl md:text-[7.5rem] text-center name font-bold">ASHLEY TRAN.</h1>

            <RotatingSpecializations></RotatingSpecializations>

            {/* CTA */}
            <div className="flex place-items-center grid mt-5">
              <a
                className="flex gap-2 text-center border border-solid text-background text-md p-5 min-w-35 bg-[#66615C] transition"
                href="/resume_march2025.pdf"
              >
                VIEW RESUME
              </a>
             
              <div className="w-0 h-0 border-l-8 mt-25 border-r-8 border-b-0 border-t-8 border-transparent border-t-black"></div>
            </div>
          </div>
        </div>

        <AboutSection/>
        
         {/* EXPERIENCE SECTION*/}
        <div className="min-h-screen ml-10 mr-10 md:ml-25 md:mr-25 mb-5 md:mb-10">
          <h2 id="experience" className="text-[2rem] md:text-[3rem] font-bold text-center md:text-start">EXPERIENCE</h2>
              <VerticalTabs/>
        </div>

        <div className="min-h-screen ml-10 mr-10 md:ml-25 md:mr-25 mb-5 md:mb-10">
        <h2 id="work" className="text-[2rem] md:text-[3rem] font-bold mb-5 text-center md:text-start">PORTFOLIO</h2>

        <div className="flex flex-wrap justify-between">
          <div className="w-1/1 md:w-[49.5%]">
          <a className="h-150 md:h-125 bg-white border border-gray-300 p-5 flex flex-col items-center justify-center text-center">
            <div>
                <h2 className="text-2xl font-bold mb-4">VIRTUAL TRADING ASSISTANT</h2>
                <h4>MAY 2025 - PRESENT</h4>
                <ul className="flex flex-wrap justify-center gap-2 mt-4">
                      {[
                        "SOFTWARE DEVELOPMENT",
                        "PYTHON",
                        "COMPUTER VISION",
                        "OCR",
                      ].map((specialty) => (
                        <li
                          key={specialty}
                          className="bg-[#66615C] text-white text-xs font-medium px-3 py-1"
                        >
                          {specialty}
                        </li>
                      ))}
                    </ul>
                    <p className="p-5">
                      An automation tool designed to enhance the trading experience in a virtual game by using OCR technology to scan in-game user names. 
                      It then searches the users' inventories on a website and filters for specific items chosen by the user, with an emphasis on rarer items. 
                      This tool saves time by automating the inventory check process, quickly identifying valuable or hard-to-find items without the need for manual searches.
                    </p>
                    <a
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2 bg-black text-white hover:bg-[#66615C] transition mt-5"
                    >
                      LEARN MORE
                    </a>
            </div>
            </a>
          </div>

          <div className="w-1/1 md:w-[49.5%]">
          <a href="https://visionarymi.com/" className="h-150 md:h-125 bg-white border border-gray-300 p-5 flex flex-col items-center justify-center text-center">
            <div>
                <h2 className="text-2xl font-bold mb-4">VISIONARY PHOTOBOOTHS</h2>
                <h4>AUGUST 2024 - AUGUST 2024</h4>
                <ul className="flex flex-wrap justify-center gap-2 mt-4">
                      {[
                        "WEB DEVELOPMENT",
                        "PAGECLOUD CMS",
                        "UX/UI",
                        "SEARCH ENGINE OPTIMIZATION (SEO)",
                      ].map((specialty) => (
                        <li
                          key={specialty}
                          className="bg-[#66615C] text-white text-xs font-medium px-3 py-1"
                        >
                          {specialty}
                        </li>
                      ))}
                    </ul>
                    <p className="p-5">
                      This project involved revamping a local photo booth website by improving its contact information and optimizing it for SEO. 
                      Clear and accessible contact details were integrated, and targeted SEO strategies were implemented to enhance visibility and search engine rankings. 
                      The result is a more user-friendly site that drives increased traffic and customer engagement.
                    </p>

                    <a
                      href="https://visionarymi.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2 bg-black text-white hover:bg-[#66615C] transition mt-5"
                    >
                      LEARN MORE
                    </a>
            </div>
            </a>
          </div>
        </div>

        <div className="flex justify-start mt-5">
        <a href="https://capstone.cse.msu.edu/2024-01/projects/urban-science/" className="w-1/1 md:w-[49.5%] h-150 md:h-125 bg-white border border-gray-300 p-5 flex flex-col items-center justify-center text-center">
          <div>
              <h2 className="text-2xl font-bold mb-4">AUDITBUDDY</h2>
              <h4>AUGUST 2024 - AUGUST 2024</h4>
              <ul className="flex flex-wrap justify-center gap-2 mt-4">
                  {[
                    "WEB DEVELOPMENT",
                    "JAVASCRIPT",
                    "REACT",
                    "PYTHON FLASK",
                    "FIREBASE",
                    "YOLOv3"
                  ].map((specialty) => (
                    <li
                      key={specialty}
                      className="bg-[#66615C] text-white text-xs font-medium px-3 py-1"
                    >
                      {specialty}
                    </li>
                  ))}
                </ul>
                <p className="p-5">
                  AuditBuddy is a web app that automates dealership audits for automotive brands by analyzing photos and videos to assess performance. 
                  This eliminates the need for manual inspections, offering a more efficient and resource-effective solution. 
                  The app generates detailed performance reports and enables users to compare data across multiple dealerships.
                </p>
                <a
                  href="https://capstone.cse.msu.edu/2024-01/projects/urban-science/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-black text-white hover:bg-[#66615C] transition mt-5"
                >
                  LEARN MORE
                </a>
          </div>
          </a>
        </div>
        </div>
      </main>


      <footer className="row-start-3 flex gap-6 flex-wrap mt-15 mb-0 md:mt-25 md:mb-5 ml-15">
      </footer>
    </div>
  );
}

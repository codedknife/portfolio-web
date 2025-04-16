import Navigation from "./navigation";


export default function Home() {
  return (

    <div className="font-[family-name:var(--font-geist-sans)]">
      <main>

        <Navigation />
      
        {/* EXTERNAL LINKS */}
        <div className="fixed top-1/2 right-5 flex flex-col gap-5 z-50">
              <a href="https://github.com/codedknife">
                <img src="/github-mark.png" alt="GitHub Icon" className="w-5 h-5" />
              </a>

               <a href="https://www.linkedin.com/in/ash-tran/">
                <img src="/linkedin.png" alt="LinkedIn Icon" className="w-5 h-5" />
              </a>
        </div>

        {/* LANDING SECTION */}
        <div id="home" className="relative grid grid-cols-1 h-screen overflow-hidden place-items-center px-1 md:px-4">

          {/* COL-1 */}
          <div className="relative justify-center flex flex-col">
            {/* greeting */}
            <p className="text-[2rem] md:text-[3rem] text-left mt-25 md:mt-0 mb-5 md:mb-2">HI, I'M</p>
            {/* name */}
            <h1 className="text-[3rem] sm:text-xl md:text-[7.5rem] text-center name">ASHLEY TRAN.</h1>
            {/* specialization */}
            <h2 className="text-[1rem] mb-[2.5rem] md:text-[1.5rem] text-center"> WEB DEVELOPMENT + UX/UI</h2>

            {/* cta */}
            <div className="flex place-items-center grid">
              <a
                className="flex gap-2 text-center border border-solid bg-foreground text-background text-md p-5 min-w-35"
                href="/resume_march2025.pdf"
              >
                VIEW RESUME
              </a>
              <div className="w-0 h-0 border-l-8 mt-25 md:mt-25 border-r-8 border-b-0 border-t-8 border-transparent border-t-black"></div>
            </div>
          </div>

        </div>


        {/* ABOUT SECTION*/}
        <div className="min-h-screen">
          <div className="relative grid grid-cols-1 md:grid-cols-2 ml-15 mr-15 md:ml-25 md:mr-25 mb-5 md:mb-10">
            <div className="img-background w-4/4 md:w-3/4"></div>
            <div>
              <h2 id="about" className="section-heading text-center bold mb-5">ABOUT</h2>
              <p className="text-justify">
              I'm a front-end web developer with a degree in Computer Science and a minor in Business from Michigan State University, where I graduated in Spring 2024. 
              I’m passionate about building thoughtful, responsive, and accessible digital experiences that look great and feel intuitive to use.
              I specialize in front-end development and love working with modern frameworks and tools to bring ideas to life on the web. 
              Whether it’s collaborating with a team or diving into solo projects, I enjoy the challenge of turning designs into seamless, functional interfaces that users actually enjoy.
              Outside of coding, I’m a big fan of spending time outdoors — whether it’s hiking, exploring new places, or just getting some fresh air. 
              I also love horror movies, and I share life’s everyday adventures with my partner, our cat DaDa, and our hamster Cotton.
              </p>
              {/* tech stack */}
              <div className="mt-10">
                <h3 className="text-center bold text-[1rem] md:text-[1.5rem]">
                  SKILLS AND SPECIALIZATIONS
                </h3>
                <ul className="flex flex-wrap justify-center gap-2 mt-4">
                  {[
                    "FRONT-END DEVELOPMENT",
                    "UX/UI DESIGN",
                    "ACCESSIBILITY",
                    "SEARCH ENGINE OPTIMIZATION (SEO)",
                    "ANALYTICS",
                    "SOFTWARE DEVELOPMENT",
                  ].map((specialty) => (
                    <li
                      key={specialty}
                      className="bg-black text-white text-xs font-medium px-3 py-1"
                    >
                      {specialty}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
  

         {/* EXPERIENCE SECTION*/}
        <div className="min-h-screen relative relative grid grid-cols-1 ml-15 mr-15 md:ml-25 md:mr-25 mb-5 md:mb-10">
          <h2 id="experience" className="section-heading text-center bold mb-5">EXPERIENCE</h2>
          
          <ul className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 place-items-center mb-1">
              <div className="text-background p-3 job-card w-4/4 h-4/4 mb-7 md:mb-0 grid place-items-center">
                <li className="job-title">WEB CONTENT ADMINISTRATOR</li>
                <div className="">
                  <p><i>MSU COLLEGE OF ENGINEERING</i></p>
                  <p>MAY 2024 - PRESENT</p>
                </div>
              </div>

              <div className="relative border-l-2 h-full hidden md:block">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-5/5 h-0.5 w-25 bg-foreground"></div>
              </div>

              <div></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 place-items-center">
              <div></div>
              <div className="relative border-l-2 h-full">
                <div className="absolute left-1/2 top-1/2 transform h-0.5 w-25 bg-foreground"></div>
              </div>
              <div className="text-background p-3 job-card w-4/4 mb-5 md:mb-0">
                <li className="job-title">UNDERGRADUATE LEARNING ASSISTANT</li>
                  <div className="">
                    <p><i>MSU COLLEGE OF ENGINEERING</i></p>
                    <p>JANUARY 2024 - MAY 2024</p>
                  </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 place-items-center">
              <div className="text-background p-3 job-card w-4/4 mb-5 md:mb-0">
                <li className="job-title">STUDENT FRONT-END WEB ASSISTANT</li>
                <div className="">
                  <p><i>MSU COLLEGE OF ENGINEERING</i></p>
                  <p>MAY 2023 - MAY 2024</p>
                </div>
              </div>
              <div className="relative border-l-2 h-full hidden md:block">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-5/5 h-0.5 w-25 bg-foreground"></div>
              </div>
              <div></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 place-items-center">
              <div>
              </div>
              <div className="relative border-l-2 h-full hidden md:block">
                <div className="absolute left-1/2 top-1/2 transform h-0.5 w-25 bg-foreground"></div>
              </div>
              <div className="text-background p-3 job-card w-4/4 mb-8 md:mb-0">
                <li className="job-title">INFORMATION TECHNOLOGY INTERN</li>
                  <div className="">
                    <p><i>NORTH AMERICAN LIGHTING</i></p>
                    <p>MAY 2022 - AUGUST 2022</p>
                  </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 place-items-center">
              <div className="text-background p-3 job-card w-4/4 h-4/4 mb-5 md:mb-0 grid place-items-center">
                <li className="job-title">CASHIER</li>
                <div className="">
                  <p><i>ASIA'S FINEST</i></p>
                  <p>DECEMBER 2019 - DECEMBER 2023</p>
                </div>
              </div>
              <div className="relative border-l-2 h-full hidden md:block">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-5/5 h-0.5 w-25 bg-foreground"></div>
              </div>
              <div className="hidden md:block"></div>
            </div>
          </ul>
        </div>



        <div className="min-h-screen">
        <h2 id="work" className="section-heading text-center bold mb-5">WORK</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center ml-15 mr-15">
        <div className="project-background hidden sm:block"></div>
          <div className="text-center">
            <h3 className="project-name">VISIONARY PHOTOBOOTHS</h3>
            <h4>AUGUST 2024 - AUGUST 2024</h4>
            <ul className="flex flex-wrap justify-center gap-2 mt-4">
                  {[
                    "PAGECLOUD CMS",
                    "UX/UI",
                    "SEARCH ENGINE OPTIMIZATION (SEO)",
                  ].map((specialty) => (
                    <li
                      key={specialty}
                      className="bg-black text-white text-xs font-medium px-3 py-1"
                    >
                      {specialty}
                    </li>
                  ))}
                </ul>
            <p className="mb-10 mt-10 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a
              href="https://visionarymi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-black text-white hover:bg-gray-800 transition"
            >
              LEARN MORE
            </a>

          </div>

        </div>
        </div>


        
        
      </main>


      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}

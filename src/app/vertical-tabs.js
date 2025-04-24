'use client';

import React, { useState } from 'react';

const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [openAccordion, setOpenAccordion] = useState('tab1');

  const toggleAccordion = (tabId) => {
    setOpenAccordion(openAccordion === tabId ? null : tabId);
    setActiveTab(tabId);
  };

  const WebContentAdministratorContent = () => (
    <div className="space-y-5">
      <h2 className="text-xl font-bold">Michigan State University, College of Engineering</h2>
      <p className="text-[1rem] text-[#7e7c73]">MAY 2024 - PRESENT</p>
      <p className="mt-7">RESPONSIBILITIES</p>
      <ul className="items-start text-[1rem] py-1 list-none mt-1">
        <li>
            <span className="text-[#7e7c73] mr-2 font-bold">+</span>
            Lead the migration of web content of college website onto designated web platforms
        </li>
        <li>
            <span className="text-[#7e7c73] mr-2 font-bold">+</span>
            Serve as the Primary Digital Accessibility Liaison, ensuring adherence to website accessibility standards
        </li>
        <li>
            <span className="text-[#7e7c73] mr-2 font-bold">+</span>
            Research and implement options for ongoing website enhancement
        </li>
        <li>
            <span className="text-[#7e7c73] mr-2 font-bold">+</span>
            Ensure swift resolution of website-related issues through ticketing system
        </li>
        <li>
            <span className="text-[#7e7c73] mr-2 font-bold">+</span>
            Supervise student employees in maintaining website content
        </li>
      </ul>
      <p className="mt-7">SKILLS</p>
        <ul className="mt-1">
                   {[
                     "SITECORE CMS",
                     "DRUPAL CMS",
                     "HTML/CSS",
                     "JAVASCRIPT",
                     "SCREAMING FROG",
                     "GOOGLE ANALYTICS 4 (GA4)",
                   ].map((specialty) => (
                     <li
                       key={specialty}
                       className="flex items-start text-[0.75rem] font-medium py-1 list-none list-inside "
                     >
                        <span className="text-[#7e7c73] mr-2">+</span>
                       {specialty}
                     </li>
                   ))}
        </ul>
    </div>
  );

  const UndergraduateLearningAssistantContent = () => (
    <div className="space-y-5">
      <h2 className="text-xl font-bold">Michigan State University, College of Engineering</h2>
      <p className="text-[1rem] text-[#7e7c73]">JANUARY 2024 - MAY 2024</p>
      <p className="mt-7">RESPONSIBILITIES</p>
      <ul className="items-start list-none">
        <li>
            <span className="text-[#7e7c73] mr-2 font-bold">+</span>
            Facilitated learning in frontend technologies, backend development, and
            database management
        </li>
        <li>
            <span className="text-[#7e7c73] mr-2 font-bold">+</span>
            Provided support during office hours and addressed GitLab issues related to course content for a class of 200
            students
        </li>
        <li>
            <span className="text-[#7e7c73] mr-2 font-bold">+</span>
            Assist with grading student course work
        </li>
      </ul>
      <p className="mt-7">SKILLS</p>
      <ul className="mt-1">
                   {[
                     "JAVASCRIPT",
                     "HTML/CSS",
                     "PYTHON FLASK",
                     "MYSQL",
                     "GOOGLE CLOUD PLATFORM (GCP)",
            
                   ].map((specialty) => (
                     <li
                       key={specialty}
                       className="flex items-start text-[0.75rem] font-medium py-1 list-none list-inside "
                     >
                        <span className="text-[#7e7c73] mr-2">+</span>
                       {specialty}
                     </li>
                   ))}
        </ul>
    </div>
  );

  const StudentFrontEndWebAssistantContent = () => (
    <div className="space-y-5">
      <h2 className="text-xl font-bold">Michigan State University, College of Engineering</h2>
      <p className="text-[1rem] text-[#7e7c73]">MAY 2023 - MAY 2024</p>
      <p className="mt-7">RESPONSIBILITIES</p>
      <ul className="items-start text-[1rem] py-1 list-none mt-1">
        <li>
            <span className="text-[#7e7c73] mr-2 font-bold">+</span>
            Supported the launch and future phases of college website within Sitecore and Drupal
        </li>
        <li>
            <span className="text-[#7e7c73] mr-2 font-bold">+</span>
            Updated page layouts and assist with content migrations
        </li>
        <li>
            <span className="text-[#7e7c73] mr-2 font-bold">+</span>
            Ensured web pages and documents adhere to website accessibility standards
        </li>
      </ul>
      <p className="mt-7">SKILLS</p>
        <ul className="mt-1">
                   {[
                     "SITECORE CMS",
                     "DRUPAL CMS",
                     "HTML/CSS",
                     "JAVASCRIPT",
                   ].map((specialty) => (
                     <li
                       key={specialty}
                       className="flex items-start text-[0.75rem] font-medium py-1 list-none list-inside "
                     >
                        <span className="text-[#7e7c73] mr-2">+</span>
                       {specialty}
                     </li>
                   ))}
        </ul>
    </div>
  );

  const InformationTechnologyInternContent = () => (
    <div className="space-y-5">
      <h2 className="text-xl font-bold">North American Lighting</h2>
      <p className="text-[1rem] text-[#7e7c73]">MAY 2023 - AUGUST 2023</p>
      <p className="mt-7">RESPONSIBILITIES</p>
      <ul className="items-start text-[1rem] py-1 list-none mt-1">
        <li>
            <span className="text-[#7e7c73] mr-2 font-bold">+</span>
            Conducted computer imaging to customize factory laptops according to company standards, integrating essential software
            and security protocols
        </li>
        <li>
            <span className="text-[#7e7c73] mr-2 font-bold">+</span>
            Held appointments with staff to facilitate the seamless deployment of over 100 replacement laptops
        </li>
        <li>
            <span className="text-[#7e7c73] mr-2 font-bold">+</span>
            Provided Level 1 support in managing and resolving support tickets
        </li>
      </ul>
      <p className="mt-7">SKILLS</p>
        <ul className="mt-1">
                   {[
                     "IVANTI ENDPOINT MANAGEMENT",
                     "COMPUTER IMAGING",
                   ].map((specialty) => (
                     <li
                       key={specialty}
                       className="flex items-start text-[0.75rem] font-medium py-1 list-none list-inside "
                     >
                        <span className="text-[#7e7c73] mr-2">+</span>
                       {specialty}
                     </li>
                   ))}
        </ul>
    </div>
  );

  const CashierContent = () => (
    <div className="space-y-5">
      <h2 className="text-xl font-bold">Asia's Finest</h2>
      <p className="text-[1rem] text-[#7e7c73]">DECEMBER 2019 - DECEMBER 2023</p>
      <p className="mt-7">RESPONSIBILITIES</p>
      <ul className="items-start text-[1rem] py-1 list-none mt-1">
        <li>
            <span className="text-[#7e7c73] mr-2 font-bold">+</span>
            Packaged and organized to-go orders, ensuring items were correctly prepared and promptly delivered
        </li>
        <li>
            <span className="text-[#7e7c73] mr-2 font-bold">+</span>
            Communicated effectively with kitchen staff and management to resolve any customer issues or order discrepancies
        </li>
        <li>
            <span className="text-[#7e7c73] mr-2 font-bold">+</span>
            Manage customer transactions, handling cash, and assisting with other front-of-house duties as needed
        </li>
      </ul>
      <p className="mt-7">SKILLS</p>
        <ul className="mt-1">
                   {[
                     "CUSTOMER SERVICE",
                     "POS SYSTEM",
                   ].map((specialty) => (
                     <li
                       key={specialty}
                       className="flex items-start text-[0.75rem] font-medium py-1 list-none list-inside "
                     >
                        <span className="text-[#7e7c73] mr-2">+</span>
                       {specialty}
                     </li>
                   ))}
        </ul>
    </div>
  );

  const tabs = [
    { 
        id: 'tab1',
        label: 'WEB CONTENT ADMINISTRATOR', 
        content: <WebContentAdministratorContent/> 
    },
    { 
        id: 'tab2', 
        label: 'CSE 477 UNDERGRADUATE LEARNING ASSISTANT', 
        content: <UndergraduateLearningAssistantContent/> 
    },
    { 
        id: 'tab3', 
        label: 'STUDENT FRONT-END WEB ASSISTANT', 
        content: <StudentFrontEndWebAssistantContent/> 
    },
    { 
        id: 'tab4', 
        label: 'INFORMATION TECHNOLOGY INTERN', 
        content: <InformationTechnologyInternContent/> 
    },
    { 
        id: 'tab5', 
        label: 'CASHIER', 
        content: <CashierContent/>
    },

  ];

  return (
    <div>
        <div className="md:flex">
        {/* TABS */}
        <div className="hidden md:block w-2/5">
            <ul>
            {tabs.map((tab) => (
                <li key={tab.id}>
                <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left py-3.5 transition-all duration-200 ${
                    activeTab === tab.id
                        ? 'bg-[#66615C] text-white font-bold'
                        : 'bg-white text-black hover:bg-[#7e7c73]/50'
                    }`}
                >
                    <p>{tab.label}</p>
                </button>
                </li>
            ))}
            </ul>
        </div>

        {/* CONTENT */}
        <div className="hidden md:block w-3/5 pl-10">
            {tabs.map((tab) =>
            activeTab === tab.id ? (
                <div key={tab.id}>
                {tab.content}
                </div>
            ) : null
            )}
        </div>

        </div>

        {/* MOBILE ACCORDION */}
        <div className="md:hidden w-full p-3 bg-white">
            {tabs.map((tab) => (
                <div key={tab.id} className="border-l-4 border-l-[#7e7c73] mb-2">
                <button
                    onClick={() => toggleAccordion(tab.id)}
                    className="w-full p-3 flex justify-between items-center transition-colors duration-300"
                >
                    <span
                    className={`text-left transition-colors duration-300 ${
                        openAccordion === tab.id ? 'text-[#7e7c73]' : 'text-black'
                    }`}
                    >
                    {tab.label}
                    </span>

                    <span
                        className={`ml-2 text-xl inline-block transform transition-transform duration-300 ease-in-out ${
                            openAccordion === tab.id ? 'rotate-90 text-[#7e7c73]' : 'rotate-0 text-gray-500'
                        }`}
                        >
                        ›
                    </span>
                </button>

                {openAccordion === tab.id && (
                    <div className="bg-white p-3 border-t">
                    {tab.content}
                    </div>
                )}
                </div>
            ))}
            </div>
        </div>
  );
};

export default VerticalTabs;

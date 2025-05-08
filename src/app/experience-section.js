'use client';
import JobCard from '@/job-card';

import React from 'react';

const ExperienceSection = () => {
    const WebContentAdministratorData = {
        title: "Web Content Administrator",
        employer: "COLLEGE OF ENGINEERING, MICHIGAN STATE UNIVERSITY",
        date: "MAY 2024 - PRESENT",
      };
      const StudentFrontendWebAssistantData = {
        title: "Student Frontend Web Assistant",
        employer: "COLLEGE OF ENGINEERING, MICHIGAN STATE UNIVERSITY",
        date: "MAY 2023 - MAY 2024",
      };
      const UndergraduateLearningAssistantData = {
        title: "CSE 477 Undergraduate Learning Assistant",
        employer: "COLLEGE OF ENGINEERING, MICHIGAN STATE UNIVERSITY",
        date: "JAN 2024 - MAY 2024",
      };
      const InformationTechnologyInternData = {
        title: "Information Technology Intern",
        employer: "NORTH AMERICAN LIGHTING",
        date: "MAY 2022 - AUG 2022",
      };


  return (
    <div>
        <JobCard 
            title={WebContentAdministratorData.title}
            employer={WebContentAdministratorData.employer}
            date={WebContentAdministratorData.date}
        />

        <div className=" mb-3 relative bottom-0 left-1/2 transform -translate-x-1/2 h-3 w-0.5 bg-gray-300"></div>

        <JobCard 
            title={StudentFrontendWebAssistantData.title}
            employer={StudentFrontendWebAssistantData.employer}
            date={StudentFrontendWebAssistantData.date}
        />

        <div className=" mb-3 relative bottom-0 left-1/2 transform -translate-x-1/2 h-3 w-0.5 bg-gray-300"></div>

        <JobCard 
            title={UndergraduateLearningAssistantData.title}
            employer={UndergraduateLearningAssistantData.employer}
            date={UndergraduateLearningAssistantData.date}
        />

        <div className=" mb-3 relative bottom-0 left-1/2 transform -translate-x-1/2 h-3 w-0.5 bg-gray-300"></div>

          <JobCard 
            title={InformationTechnologyInternData.title}
            employer={InformationTechnologyInternData.employer}
            date={InformationTechnologyInternData.date}
        />
    </div>
  );
};

export default ExperienceSection;
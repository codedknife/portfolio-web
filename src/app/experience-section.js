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

      const jobs = [
        WebContentAdministratorData,
        StudentFrontendWebAssistantData,
        UndergraduateLearningAssistantData,
        InformationTechnologyInternData,
      ];

  return (
    <div>
      {jobs.map((job, index) => (
        <div key={index}>
          <JobCard
            title={job.title}
            employer={job.employer}
            date={job.date}
          />
  
          {index !== jobs.length - 1 && (
            <div className="mb-3 relative bottom-0 left-1/2 transform -translate-x-1/2 h-3 w-0.5 bg-gray-300"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
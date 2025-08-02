'use client';

import React from 'react';

const ProjectCard = ({ title, date, url, specialties, description }) => {
  return (
    <div className="w-1/1 md:w-[49.5%] pb-5 md:pb-0 relative group">
       <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card md:h-[35vh] bg-white border border-gray-300 p-5 flex flex-col items-center justify-center text-center relative overflow-hidden"
      >
        <div>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <h3>{date}</h3>
          <ul className="flex flex-wrap justify-center gap-2 mt-4">
            {specialties.map((specialty) => (
              <li
                key={specialty}
                className="bg-[#66615C] text-white text-xs font-medium px-3 py-1"
              >
                {specialty}
              </li>
            ))}
          </ul>
          <p className="p-5">{description}</p>
        </div>
        <span className="absolute bottom-3 right-4 text-sm text-[#66615C] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          ↗ View Project
        </span>
      </a>
    </div>

    
  );
};

export default ProjectCard;
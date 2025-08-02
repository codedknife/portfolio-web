'use client';

import React from 'react';

const ProjectCard = ({ title, date, type, url, specialties, description }) => {
  return (
    <div className="w-1/1 md:w-[49.5%] pb-5 md:pb-0 relative group">
       <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card md:h-[30vh] bg-white border border-gray-300 p-5 flex flex-col items-center justify-center text-left relative overflow-hidden"
      >
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <h3>{type}</h3>
          <h4>{date}</h4>  
                 
          <div className="text-xs font-medium py-5">
            {specialties.join(', ')}
          </div>
          <p>{description}</p>
        </div>
        <span className="absolute bottom-3 right-4 text-sm text-[#66615C] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          ↗ View Project
        </span>
      </a>
    </div>

    
  );
};

export default ProjectCard;
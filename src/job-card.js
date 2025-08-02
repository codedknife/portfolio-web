'use client';

import React from 'react';

const JobCard = ({ title, employer, date }) => {
  return (
    <div className="w-full mb-3">
      <div className="transition bg-white md:border border-gray-300 md:shadow-md p-3 flex flex-col md:flex-row justify-between text-centermd:text-left md:h-[12vh]">
        <div>
          <h2 className="text-2xl font-bold mb-1">{title}</h2>
          <h4 className="text-sm text-gray-600">{date}</h4>
        </div>
        <div className="md:mt-0 text-gray-700 font-medium text-sm md:text-base text-left md:text-right md:items-center flex h-full">
          {employer}
        </div>
        
      </div>
    </div>
  );
};

export default JobCard;
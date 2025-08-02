'use client';

import React from 'react';

const JobCard = ({ title, employer, date }) => {
  return (
    <div className="w-full mb-3">
      <div className="transition bg-white md:border border-gray-300 md:shadow-md p-3 flex flex-col md:flex-row justify-between text-centermd:text-left md:h-[10vh]">

        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-1">{title}</h2>
          <div className="text-[1.25rem] md:hidden">{employer}</div>
          <h4 className="text-sm">{date}</h4>
        </div>

        <div className="hidden md:flex items-center text-base text-right ml-auto">
          {employer}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
'use client';

import React from 'react';

const JobCard = ({ title, employer, date }) => {
  return (
    <div className="w-1/1 md:w-[100%] pb-5 md:pb-5">
        <div className="transition md:h-[15vh] bg-white border border-gray-300 p-5 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <h3>{employer}</h3>
          <h4>{date}</h4>
        </div>
  
    </div>
  );
};

export default JobCard;
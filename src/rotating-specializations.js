'use client';
import { useState, useEffect } from 'react';

const skills = [
  "FRONT-END DEVELOPMENT",
  "UX/UI DESIGN",
  "WEB ACCESSIBILITY",
  "SOFTWARE DEVELOPMENT",
  "SEARCH ENGINE OPTIMIZATION (SEO)",
];

export default function RotatingSpecializations() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % skills.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-5 mb-5 h-12 flex justify-center items-center text-center">
      <div
        className={`transition-opacity duration-500 ease-in-out text-[1.25rem] md:text-[2rem] text-[#66615C] ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {skills[index]}
      </div>
    </div>
  );
}
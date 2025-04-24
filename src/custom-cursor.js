'use client';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setIsMobile(true); 
      } else {
        setIsMobile(false); 
      }
      setIsDesktop(width > 768);
    };

    checkDevice(); 
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHover = (e) => {
      if 
      (
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.closest('.hover-target')
      ) 
      {
        setHovered(true);
      } 
      else 
      {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', addHover);
    window.addEventListener('mouseout', addHover);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', addHover);
      window.removeEventListener('mouseout', addHover);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      className="fixed z-[9999] pointer-events-none"
      style={{
        top: position.y,
        left: position.x,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`
          transition-all duration-300 ease-in-out
          rounded-full
          ${hovered ? 'w-10 h-10 bg-[#7e7c73]/50' : 'w-5 h-5 bg-[#7e7c73]/65'}
          mix-blend-multiply
        `}
      />
    </div>
  );
}

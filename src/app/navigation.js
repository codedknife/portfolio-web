"use client";

import { useState } from "react";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
    <>
        <div className="sm:hidden fixed top-0 left-0 w-full z-50 bg-white">
            {/* TOGGLE */}
            <div className="flex justify-end p-5">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black text-2xl focus:outline-none cursor-pointer"
            >
                {isMenuOpen ? "✕" : "☰"}
            </button>
            </div>

            {/* MOBILE MENU */}
            {isMenuOpen && (
            <nav className="pb-4">
                <ul className="flex flex-col gap-4 text-center">
                <li><a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>HOME</a></li>
                <li><a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>ABOUT</a></li>
                <li><a href="#experience" className="nav-link" onClick={() => setIsMenuOpen(false)}>EXPERIENCE</a></li>
                <li><a href="#work" className="nav-link" onClick={() => setIsMenuOpen(false)}>WORK</a></li>
                </ul>
            </nav>
            )}
        </div>

        {/* DESKTOP MENU */}
        <nav className="navigation mb-10 hidden sm:block">
            <ul className="nav-list flex space-x-10">
                <li><a href="#home" className="nav-link">HOME</a></li>
                <li><a href="#about" className="nav-link">ABOUT</a></li>
                <li><a href="#experience" className="nav-link">EXPERIENCE</a></li>
                <li><a href="#work" className="nav-link">WORK</a></li>
            </ul>
        </nav>
    </>
  );
}
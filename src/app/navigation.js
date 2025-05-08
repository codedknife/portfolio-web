"use client";

import { useState } from "react";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
    <>
        <div className="sm:hidden fixed top-0 left-0 w-full z-50 bg-white">
            {/* TOGGLE */}
            <div className="flex items-center justify-between ml-5">
                <div className="flex items-center space-x-2">
                    <a href="#landing" className="font-bold text-lg">&lt;/ash&gt;</a>
                </div>
                <div className="flex justify-end p-5">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-black text-2xl focus:outline-none cursor-pointer"
                >
                    {isMenuOpen ? "✕" : "☰"}
                </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {isMenuOpen && (
            <nav className="pb-4">
                <ul className="items-center flex flex-col gap-4 text-center">
                    <li><a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>ABOUT</a></li>
                    <li><a href="#experience" className="nav-link" onClick={() => setIsMenuOpen(false)}>EXPERIENCE</a></li>
                    <li><a href="#work" className="nav-link" onClick={() => setIsMenuOpen(false)}>PORTFOLIO</a></li>
                    <div className="flex flex-col gap-5">
                        <a href="https://github.com/codedknife">
                            <img src="/github-mark.png" alt="GitHub Icon" className="w-5 h-5" />
                        </a>

                        <a href="https://www.linkedin.com/in/ash-tran/">
                            <img src="/linkedin.png" alt="LinkedIn Icon" className="w-5 h-5" />
                        </a>
                    </div>
                </ul>
            </nav>
            )}
        </div>

        {/* DESKTOP MENU */}
        <nav className="navigation mb-10 hidden ml-10 sm:flex items-center justify-between">
        <div className="flex items-center">
            <a href="#landing" className="font-bold text-lg">&lt;/ash&gt;</a>
        </div>

        <ul className="nav-list flex space-x-10">
            <li><a href="#about" className="nav-link">ABOUT</a></li>
            <li><a href="#experience" className="nav-link">EXPERIENCE</a></li>
            <li><a href="#work" className="nav-link">PORTFOLIO</a></li>
        </ul>
        </nav>
    </>
  );
}
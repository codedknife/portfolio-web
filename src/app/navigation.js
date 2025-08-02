"use client";

import { useState } from "react";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
    <>
        <div className="fixed top-0 left-0 w-full z-50 bg-white">
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
                    {isMenuOpen ? "✕" : 
                    "☰"}
                </button>
                </div>
            </div>

            {/* MENU */}
            {isMenuOpen && (
            <nav className="pb-4">
                <ul className="flex flex-col gap-4 w-full h-screen justify-center animation-slide-up gap-15">
                    <li><a href="#about" className="nav-link text-5xl md:text-7xl font-bold md:pl-5 m-5 mb-1 md:ml-100" onClick={() => setIsMenuOpen(false)}>ABOUT</a></li>
                    <li><a href="#experience" className="nav-link text-5xl md:text-7xl font-bold md:pl-5 m-5 mb-10 md:ml-100" onClick={() => setIsMenuOpen(false)}>EXPERIENCE</a></li>
                    <li><a href="#work" className="nav-link text-5xl md:text-7xl font-bold m-5 md:pl-5 mb-10 md:ml-100" onClick={() => setIsMenuOpen(false)}>PORTFOLIO</a></li>
                    <div className="p-5 flex flex-row gap-10 md:ml-100">
                        <a href="https://github.com/codedknife" className="underline-link text-lg">
                            <p className="text-2xl">↗ GitHub</p>
                        </a>

                        <a href="https://www.linkedin.com/in/ash-tran/" className="underline-link text-lg">
                            <p className="text-2xl">↗ LinkedIn</p>
                        </a>
                        </div>
                </ul>
            </nav>
            )}
        </div>
    </>
  );
}
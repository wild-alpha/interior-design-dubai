"use client";

import { useState } from "react";
import { Menu, X, Search, User } from "lucide-react";
import {
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
  FaTiktok,
  FaFacebookF,
} from "react-icons/fa6";

const navLinks = [
  "Browse Photos",
  "House Tours",
  "Mood Board",
  "Decorating",
  "Cleaning",
  "Organizing",
  "Home Projects",
  "Deals",
];

const mobileNavLinks = navLinks.slice(0, 5);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 fixed top-0 left-0 z-50 bg-white">
      {/* Top Row: Desktop and Mobile */}
      <div className="max-w-7xl mx-auto px-4 py-2 mt-4 flex items-center justify-between relative">
        {/* Left: Logo and Name (Mobile only) */}
        <div className="flex items-center gap-2 md:absolute md:left-1/2 md:-translate-x-1/2">
          <img src="/images/logo.svg" alt="Logo" className="h-8" />
          <span className="font-semibold text-lg">Interior Design Dubai</span>
        </div>

        {/* Left: Desktop Search */}
        <div className="hidden md:flex items-center border rounded-full px-3 py-1 w-64 absolute left-0">
          <Search size={16} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none text-sm text-gray-700"
          />
        </div>

        {/* Right: Desktop Login */}
        <div className="hidden md:flex items-center gap-2 ml-auto">
          <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-black">
            <User size={16} /> LOG IN
          </button>
        </div>

        {/* Mobile Right Side: Menu + Login + Search */}
        <div className="flex items-center gap-3 md:hidden">
          <Search size={20} className="text-gray-700" />
          <User size={20} className="text-gray-700" />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Second Row: Nav Links and Socials */}
      <div className="hidden md:flex justify-between items-center border-t border-gray-100 px-4">
        <nav className="flex gap-6 text-sm py-2 mx-auto">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href="#"
              className="text-gray-700 hover:text-black transition"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex gap-3 text-gray-500 mr-10">
          <a href="#" aria-label="Instagram"><FaInstagram size={16} /></a>
          <a href="#" aria-label="Pinterest"><FaPinterestP size={16} /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn size={16} /></a>
          <a href="#" aria-label="Tiktok"><FaTiktok size={16} /></a>
          <a href="#" aria-label="Facebook"><FaFacebookF size={16} /></a>
        </div>
      </div>

      {/* Second Row: Mobile Nav (first 5 links only) */}
      <div className="flex md:hidden justify-center border-t border-gray-100">
        <nav className="flex gap-4 text-xs py-2 overflow-x-auto">
          {mobileNavLinks.map((link, idx) => (
            <a
              key={idx}
              href="#"
              className="text-gray-700 whitespace-nowrap hover:text-black transition"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full h-full bg-white z-40 overflow-y-auto">
          <ul className="flex flex-col gap-4 p-6 text-lg">
            {[
              "Read",
              ...navLinks,
              "Room Plan (Partner)",
              "Before & Afters",
              "Get Advice",
              "Watch",
              "Shop",
              "Holiday Gift Guide",
            ].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="block text-gray-800 hover:text-black">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Links Row */}
          <div className="flex justify-center gap-4 mt-6 text-gray-600">
            <a href="#" aria-label="Instagram"><FaInstagram size={18} /></a>
            <a href="#" aria-label="Pinterest"><FaPinterestP size={18} /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn size={18} /></a>
            <a href="#" aria-label="Tiktok"><FaTiktok size={18} /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF size={18} /></a>
          </div>
        </div>
      )}
    </header>
  );
}
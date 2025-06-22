"use client";

import { useState } from "react";
import {
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
  FaTiktok,
  FaFacebookF,
} from "react-icons/fa6";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-[#013458] text-white text-sm px-4 py-8 md:py-12 mt-20">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-5 gap-8">
        {/* About Us */}
        <div className="md:block">
          <button
            className="w-full flex items-center justify-between md:cursor-default font-semibold mb-3 uppercase text-xs tracking-wide md:mb-3"
            onClick={() => toggleSection("about")}
          >
            About Us
            <span className="md:hidden">
              {openSection === "about" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </span>
          </button>
          <ul className={`space-y-1 ${openSection === "about" || typeof window === "undefined" ? 'block' : 'hidden'} md:block`}>
            <li><a href="#">The Team</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Design Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        {/* Explore */}
        <div className="md:block mt-6 md:mt-0">
          <button
            className="w-full flex items-center justify-between md:cursor-default font-semibold mb-3 uppercase text-xs tracking-wide md:mb-3"
            onClick={() => toggleSection("explore")}
          >
            Explore
            <span className="md:hidden">
              {openSection === "explore" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </span>
          </button>
          <ul className={`space-y-1 ${openSection === "explore" || typeof window === "undefined" ? 'block' : 'hidden'} md:block`}>
            <li><a href="#">Style Quiz</a></li>
            <li><a href="#">Interior Design Blog</a></li>
            <li><a href="#">Sample Projects</a></li>
            <li><a href="#">Designer Portfolios</a></li>
            <li><a href="#">Virtual Interior Design</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Gift Cards</a></li>
          </ul>
        </div>

        {/* Locations */}
        <div className="md:block mt-6 md:mt-0">
          <button
            className="w-full flex items-center justify-between md:cursor-default font-semibold mb-3 uppercase text-xs tracking-wide md:mb-3"
            onClick={() => toggleSection("locations")}
          >
            Locations
            <span className="md:hidden">
              {openSection === "locations" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </span>
          </button>
          <ul className={`space-y-1 ${openSection === "locations" || typeof window === "undefined" ? 'block' : 'hidden'} md:block`}>
            <li><a href="#">New York</a></li>
            <li><a href="#">Miami</a></li>
            <li><a href="#">Los Angeles</a></li>
            <li><a href="#">Austin</a></li>
            <li><a href="#">Charlotte</a></li>
            <li><a href="#">Chicago</a></li>
            <li><a href="#">Seattle</a></li>
            <li><a href="#">See All Locations</a></li>
          </ul>
        </div>

        {/* Subscription & Social */}
        <div className="md:col-span-2 mt-6 md:mt-0">
          <h4 className="font-semibold mb-3 uppercase text-xs tracking-wide">Get Exclusive Tips & Offers</h4>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full px-4 py-2 rounded-md bg-black border border-white text-white placeholder-gray-400"
            />
          </div>
          <h4 className="font-semibold mb-3 uppercase text-xs tracking-wide">Connect with Us</h4>
          <div className="flex gap-4 text-lg">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaPinterestP /></a>
            <a href="#"><FaTiktok /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-400 pt-6 text-xs">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-center">
          {/* Left: Empty for spacing */}
          <div className="md:w-1/3" />

          {/* Center: Logo and Brand */}
          <div className="md:w-1/3 flex justify-center items-center gap-2 font-semibold">
            <img src="/images/logow.svg" alt="Logo" className="h-5" />
            <span>Interior Design Dubai</span>
          </div>

          {/* Right: Legal & Copyright */}
          <div className="md:w-1/3 text-center md:text-right">
            <a href="#" className="underline">Terms & Conditions</a> | <a href="#" className="underline">Privacy Policy</a> | &copy; 2025
          </div>
        </div>
      </div>
    </footer>
  );
}

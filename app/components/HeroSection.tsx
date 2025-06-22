"use client";

import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/idd-herosection.webp"
          alt="Luxury Interior Design Dubai"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>

      {/* Featured Story - Top */}
      <div className="absolute top-30 left-1/2 transform -translate-x-1/2 z-10">
        <p className="text-sm sm:text-base font-medium border-b-2 border-white pb-1 tracking-wider uppercase">
          Featured Story
        </p>
      </div>

      {/* Main Heading - Centered */}
      <div className="absolute inset-0 z-10 flex justify-center items-center px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold max-w-4xl leading-snug">
          Before & After <br/>Luxury Master Bedroom Online Interior Design
        </h1>
      </div>

      {/* Button - Bottom */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <button className="px-6 py-3 bg-[#003A5D] hover:bg-[#00507C] transition rounded-full text-white font-medium text-sm sm:text-base">
          READ MORE
        </button>
      </div>
    </section>
  );
}

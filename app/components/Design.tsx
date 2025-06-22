"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Design() {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/a (16).webp"
          alt="Luxury Living Room Interior"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Text Block */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-10 lg:px-24 max-w-[720px]">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
          Kickstart Your<br />Design Journey
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6">
          Take our interior design style quiz to ignite your inspiration today!
        </p>
        <Link href="/style-quiz">
          <button className="px-6 py-3 bg-[#003A5D] hover:bg-[#00507C] rounded-full text-white text-sm sm:text-base font-medium transition">
            FIND YOUR STYLE
          </button>
        </Link>
      </div>
    </section>
  );
}

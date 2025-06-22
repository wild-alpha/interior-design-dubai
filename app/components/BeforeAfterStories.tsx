"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = ["Full Home", "Offices", "Living & Dining", "Bedrooms", "Kitchen & Bath"];

const stories = [
  {
    id: 1,
    src: "/images/a (1).webp",
    title: "Luxury Living Room",
    description: "A complete transformation from classic to ultra-modern luxury in Dubai.",
    alt: "Luxury living room with rich brown tones and velvet furniture in Dubai",
    link: "/",
  },
  {
    id: 2,
    src: "/images/a (2).webp",
    title: "Modern Master Bedroom",
    description: "From dull to dreamy — lighting, layout, and comfort reimagined.",
    alt: "Modern master bedroom with ambient lighting and soft beige finishes",
    link: "/",
  },
  {
    id: 3,
    src: "/images/a (3).webp",
    title: "Executive Office Interior",
    description: "Before & after of a corporate office now infused with elegance and warmth.",
    alt: "Office interior design with neutral palette and modern furniture",
    link: "/",
  },
];

export default function BeforeAfterStories() {
  return (
    <section className="bg-[#f7f7f7] py-14 px-6 sm:px-10 lg:px-24 max-w-[1400px] mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8">
        Real Before & After Stories
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category, idx) => (
          <button
            key={idx}
            className="px-4 py-1.5 bg-[#D9D9D9BD] text-gray-800 rounded-full text-sm font-medium shadow-sm hover:bg-gray-100 transition"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {stories.map((story) => (
          <Link key={story.id} href={story.link} className="w-full">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src={story.src}
                  alt={story.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
                <p className="text-sm text-gray-600">{story.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "All",
  "Real Stories",
  "Decor Trends",
  "Seasonal",
  "Business Office",
  "Designers & Locations",
  "Style & Guides",
];

const cards = [
  {
    id: 1,
    title: "Luxury Living Room",
    image: "/images/a (10).webp",
    link: "/categories/luxury-living-room",
    alt: "Luxury living room in Dubai",
  },
  {
    id: 2,
    title: "Modern Bedroom",
    image: "/images/a (11).webp",
    link: "/categories/modern-bedroom",
    alt: "Modern master bedroom design",
  },
  {
    id: 3,
    title: "Office Interior",
    image: "/images/a (12).webp",
    link: "/categories/office-design",
    alt: "Office with modern interior",
  },
  {
    id: 4,
    title: "Open Kitchen",
    image: "/images/a (13).webp",
    link: "/",
    alt: "Open plan kitchen design",
  },
  {
    id: 5,
    title: "Luxury Spa",
    image: "/images/a (14).webp",
    link: "/",
    alt: "Spa with marble flooring and luxury decor",
  },
  {
    id: 6,
    title: "Villa Lounge",
    image: "/images/a (15).webp",
    link: "/",
    alt: "Lounge with glass walls and luxury furniture",
  },
];

export default function Categories() {
  return (
    <section className="bg-[#f9f9f9] py-16 px-6 sm:px-10 lg:px-24 max-w-[1400px] mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
        Categories
      </h2>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category, idx) => (
          <span
            key={idx}
            className="bg-gray-200 text-sm text-gray-800 px-4 py-1.5 rounded-full cursor-pointer hover:bg-gray-300 transition"
          >
            {category}
          </span>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
        {cards.map((card) => (
          <Link href={card.link} key={card.id}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
              <div className="relative w-full h-64">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-sm font-medium">{card.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View More */}
      <Link
        href="/categories"
        className="text-sm text-blue-700 hover:underline underline-offset-2"
      >
        view more
      </Link>
    </section>
  );
}

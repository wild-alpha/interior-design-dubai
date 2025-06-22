"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    id: 1,
    src: "/images/a (4).webp",
    title: "Luxury Living Room Interior",
    alt: "Luxury living room interior design with modern furniture in Dubai",
    link: "/",
  },
  {
    id: 2,
    src: "/images/a (5).webp",
    title: "Modern Master Bedroom",
    alt: "Modern master bedroom with ambient lighting and luxury bedding",
    link: "/",
  },
  {
    id: 3,
    src: "/images/a (6).webp",
    title: "Executive Office Interior",
    alt: "Executive office interior with marble flooring and LED lighting",
    link: "/",
  },
  {
    id: 4,
    src: "/images/a (7).webp",
    title: "Contemporary Kitchen",
    alt: "Contemporary open kitchen with wooden textures and bar seating",
    link: "/",
  },
  {
    id: 5,
    src: "/images/a (8).webp",
    title: "Spa Reception Area",
    alt: "Luxury spa reception area with marble floor and blush-toned decor",
    link: "/",
  },
  {
    id: 6,
    src: "/images/a (9).webp",
    title: "Glass Villa Lounge",
    alt: "Modern glass villa lounge with floor-to-ceiling windows and garden view",
    link: "/",
  },
];

export default function Body() {
  return (
    <section className="py-12 px-6 sm:px-10 lg:px-24 max-w-[1400px] mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-12">
        Recent Stories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center text-center">
            <Link href={story.link} className="w-full">
              <div className="relative w-full h-60 sm:h-64 md:h-72 rounded-xl overflow-hidden shadow-md">
                <Image
                  src={story.src}
                  alt={story.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </Link>
            <p className="mt-4 text-sm sm:text-base font-medium">{story.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

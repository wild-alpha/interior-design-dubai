"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const tips = [
  {
    id: 1,
    title: "Luxury Living Room Tips",
    description: "Learn how to bring elegance and depth into your living room using textures and lighting.",
    image: "/images/a (18).webp",
    link: "/",
    alt: "Luxury living room with velvet chairs and marble floors",
  },
  {
    id: 2,
    title: "Modern Bedroom Guide",
    description: "Discover layout and color tricks to turn your bedroom into a relaxing modern retreat.",
    image: "/images/a (17).webp",
    link: "/",
    alt: "Modern bedroom with ambient lighting and wooden floor",
  },
  {
    id: 3,
    title: "Functional Office Design",
    description: "Optimize your workspace with style and comfort — from furniture to lighting.",
    image: "/images/a (16).webp",
    link: "/",
    alt: "Office space with marble flooring and elegant furnishings",
  },
];

export default function Tips() {
  return (
    <section className="py-16 px-6 sm:px-10 lg:px-24 max-w-[1400px] mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
        Tips & Guides
      </h2>
      <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto mb-12">
        Embark on a journey of inspirations with our comprehensive interior design tips and guides.
        Gain invaluable insights and expert advice, helping you transform your home into a true design masterpiece.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {tips.map((tip) => (
          <Link href={tip.link} key={tip.id} className="w-full">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col h-full">
              <div className="relative w-full h-64">
                <Image
                  src={tip.image}
                  alt={tip.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-left flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

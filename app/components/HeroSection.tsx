// components/HeroSection.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-gray-100 py-16 px-4 text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-banner.jpg"
          alt="Modern Interior Design"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Explore Modern Interior Design Ideas
        </h1>
        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Discover trends, inspirations, and expert tips from leading designers in Dubai and beyond.
        </p>
      </div>
    </section>
  );
}

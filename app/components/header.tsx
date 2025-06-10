// components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900">
          Interior Blog
        </Link>

        <nav className="hidden md:flex space-x-6 text-sm">
          <Link href="/" className="text-gray-700 hover:text-black">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-black">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-black">Contact</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-black">Home</Link>
          <Link href="/about" className="block text-gray-700 hover:text-black">About</Link>
          <Link href="/contact" className="block text-gray-700 hover:text-black">Contact</Link>
        </div>
      )}
    </header>
  );
}

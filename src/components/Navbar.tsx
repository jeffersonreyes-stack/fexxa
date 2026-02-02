"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils"; // I need to create utils if I use cn, or just import clsx directly. Plan said I installed clsx tailwind-merge.

// I'll create a local utility for now or assume lib/utils exists (Next.js default sometimes creates it, or I create it).
// Let's create lib/utils.ts first in next turn.
// For now I will write Navbar and assume I'll create utils next.

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Remodelaciones", href: "/remodelaciones" },
  { name: "Mobiliario", href: "/mobiliario" },
  { name: "Ingeniería", href: "/ingenieria" },
  { name: "Experiencia", href: "/experiencia" },
  { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="relative w-[98px] h-[98px] md:w-[118px] md:h-[118px]">
            <Image
              src="/logo-fexxa.png"
              alt="Fexxa Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-[#C5A059] transition-colors ${
                isScrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={isScrolled ? "text-[#1B365D]" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-[#1B365D]" : "text-white"} />
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 text-lg font-medium hover:text-[#C5A059]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

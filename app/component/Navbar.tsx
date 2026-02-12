"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B1F3A] shadow-lg"
          : "bg-[#0B1F3A]/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Gabon Cacao & Sugar Company"
              width={55}
              height={50}
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-white">

            <Link href="/" className="hover:text-[#D4AF37] transition-colors">
              Home
            </Link>

            <Link href="/about" className="hover:text-[#D4AF37] transition-colors">
              About
            </Link>

            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors">
                Commodities
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 mt-3 w-48 bg-white text-gray-800 rounded-xl shadow-xl transition-all duration-200 origin-top ${
                  isDropdownOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <Link
                  href="/commodities/cocoa"
                  className="block px-5 py-3 hover:bg-gray-100 rounded-xl"
                >
                  Cocoa
                </Link>
              </div>
            </div>

            <Link href="/services" className="hover:text-[#D4AF37] transition-colors">
              Services
            </Link>

            <Link href="/sustainability" className="hover:text-[#D4AF37] transition-colors">
              Sustainability
            </Link>

            <Link href="/news" className="hover:text-[#D4AF37] transition-colors">
              News
            </Link>

            <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="bg-[#D4AF37] text-black px-5 py-2 rounded-xl font-semibold hover:bg-[#b8952e] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Request Trade Inquiry
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#0B1F3A] text-white transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-125 py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-6 text-sm font-medium">

          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>

          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>

          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between"
          >
            Commodities
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isDropdownOpen && (
            <Link
              href="/commodities/cocoa"
              onClick={() => setIsOpen(false)}
              className="pl-4 text-gray-300"
            >
              Cocoa
            </Link>
            
          )}

          <Link href="/services" onClick={() => setIsOpen(false)}>
            Services
          </Link>

          <Link href="/sustainability" onClick={() => setIsOpen(false)}>
            Sustainability
          </Link>

          <Link href="/news" onClick={() => setIsOpen(false)}>
            News
          </Link>

          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-[#D4AF37] text-black px-4 py-3 rounded-xl text-center font-semibold mt-4"
          >
            Request Trade Inquiry
          </Link>
        </div>
      </div>
    </header>
  );
}

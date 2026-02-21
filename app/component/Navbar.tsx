
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

  const commodityLinks = [
    { name: "Cocoa", href: "/commodities/cocoa" },
    { name: "Cashew", href: "/commodities/cashew" },
    { name: "Timber", href: "/commodities/timber" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#3C2A21] shadow-xl py-2" 
          : "bg-[#3C2A21]/90 backdrop-blur-md py-4" 
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo.png"
              alt="Gabon Cacao & Sugar Company"
              width={60}
              height={55}
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu - Adjusted Spacing (space-x-10) */}
          <nav className="hidden lg:flex items-center space-x-8 text-[13px] uppercase tracking-wider font-semibold text-white/90">
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
              <button className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors outline-none">
                Commodities
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180 text-[#D4AF37]" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 mt-4 w-52 bg-white text-gray-800 rounded-lg shadow-2xl transition-all duration-300 origin-top border-t-4 border-[#D4AF37] ${
                  isDropdownOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="py-2">
                  {commodityLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-6 py-3 text-sm hover:bg-amber-50 hover:text-[#D4AF37] transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/services" className="hover:text-[#D4AF37] transition-colors">
              Services
            </Link>

            <Link href="/career" className="hover:text-[#D4AF37] transition-colors">
              Careers
            </Link>

            <Link href="/sustainability" className="hover:text-[#D4AF37] transition-colors">
              Sustainability
            </Link>

            <Link href="/news" className="hover:text-[#D4AF37] transition-colors">
              News
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center ml-4">
            <Link
              href="/contact"
              className="bg-[#D4AF37] text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-md"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#3C2A21] text-white transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen py-8 border-t border-white/10" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-6 px-8 text-base font-medium">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          
          <div className="space-y-4">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between w-full text-[#D4AF37]"
            >
              Commodities
              <ChevronDown size={18} className={isDropdownOpen ? "rotate-180" : ""} />
            </button>
            {isDropdownOpen && (
              <div className="flex flex-col space-y-4 pl-4 border-l border-[#D4AF37]/30">
                {commodityLinks.map((item) => (
                  <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-gray-300">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/career" onClick={() => setIsOpen(false)}>Careers</Link>
          <Link href="/sustainability" onClick={() => setIsOpen(false)}>Sustainability</Link>
          <Link href="/news" onClick={() => setIsOpen(false)}>News</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-[#D4AF37] text-black px-4 py-4 rounded-lg text-center font-bold uppercase tracking-widest mt-4"
          >
            Request Inquiry
          </Link>
        </div>
      </div>
    </header>
  );
}
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Landmark } from "lucide-react";

export default function ExecutiveBio() {
  return (
    <section className="py-24 bg-[#F9F7F2] text-[#111111] px-6 border-t border-stone-200">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 border-b border-stone-200 pb-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
            Executive Profile
          </h2>
        </div>

        {/* Main Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Portrait Container */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl border border-stone-200/60 bg-stone-100 group">
              <Image 
                src="/images/neww.jpeg" 
                alt="Charles-Daniel Tchen — Chief Executive Officer"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white lg:hidden">
                <h3 className="text-2xl font-serif font-bold">Charles-Daniel Tchen</h3>
                <p className="text-xs opacity-90 font-mono tracking-wider">Chief Executive Officer</p>
              </div>
            </div>
          </div>

          {/* Right Column: Refined Strategic Narrative */}
          <div className="lg:col-span-7 space-y-8 font-sans text-gray-700 leading-relaxed text-base md:text-lg">
            
            <div className="space-y-1 hidden lg:block">
              <h3 className="text-3xl font-serif font-bold text-[#111111]">
                Charles-Daniel Tchen
              </h3>
              <p className="text-[#D4AF37] font-mono text-xs uppercase tracking-[0.2em] font-semibold">
                Chief Executive Officer
              </p>
            </div>

            <p className="font-light text-neutral-900 text-lg md:text-xl italic font-serif border-l-2 border-[#D4AF37] pl-6 py-1">
              "Driving the evolution of a modern, integrated, and competitive Central African commodities framework capable of local asset optimization and seamless global market alignment."
            </p>

            <div className="space-y-5 font-light text-gray-600 text-sm md:text-base">
              <p>
                Charles-Daniel Tchen is an agro-industrial developer specializing in international commerce, macro-logistics networks, and cross-border structural frameworks across Central Africa. Academic foundations in International Business from <strong>Brunel University London</strong> and training at <strong>Cheltenham College (UK)</strong> equip him to effectively bridge regional African production with international capital markets.
              </p>
              
              <p>
                Leveraging a deep operational understanding of Western corporate environments and trade syndicates, he concurrently serves as the <strong>Strategic Advisor for African Trade at S&D Capital Advisory</strong>, a specialized trade finance firm.
              </p>
            </div>

            {/* Sub-block: Mentorship & Technical Depths */}
            <div className="border-t border-stone-200 pt-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#D4AF37] font-semibold uppercase">
                <Award className="w-4 h-4" /> Trade Desk Advisory & Mentorship
              </div>
              <p className="font-light text-xs md:text-sm text-gray-500">
                His commercial strategy is backed by structured mentorship from prominent figures in global commodities and trade risk systems, including former executive operational heads of <strong>Trafigura</strong>, <strong>Natixis</strong>, <strong>Deutsche Bank</strong>, and the <strong>ICE Benchmark Administration</strong>, alongside institutional counsel from the former presidency of the CEMAC Commission.
              </p>
            </div>

            {/* Sub-block: Structural Origins */}
            <div className="border-t border-stone-200 pt-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#D4AF37] font-semibold uppercase">
                <Landmark className="w-4 h-4" /> Industrial Pedigree & Supply Networks
              </div>
              <p className="font-light text-xs md:text-sm text-gray-500">
                Raised within an established Gabonese enterprise ecosystem—with heritage extending across executive leadership at the <strong>Federation of Gabonese Enterprises (FEG)</strong> and <strong>Shell Gabon</strong>—Charles-Daniel combines high-level corporate strategy with local operational execution. His focus remains centered on raw material sourcing, local asset transformation, and securing long-term supply frameworks with tier-1 international commodity partners.
              </p>
            </div>

            {/* Footer Institutional Monospace Label */}
            <div className="pt-4 flex items-center justify-between text-xs font-mono text-gray-400 border-t border-stone-200/60">
              <span>EXECUTIVE DESK: LONDON // LIBREVILLE</span>
              <span className="text-[#D4AF37]/80">GCS COMMODITIES</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
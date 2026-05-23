"use client";

import { motion } from "framer-motion";
import { Landmark, Briefcase, TrendingUp, Calendar } from "lucide-react";

const TIMELINE_DATA = [
  {
    metaPeriod: "Q2 · 2026",
    label: "EXECUTIVE FORUM",
    labelIcon: <Landmark className="w-3.5 h-3.5" />,
    title: "ACFIF 2026 — Africa Cocoa Finance & Investment Forum",
    description: "GCS executive leadership engaged with finance ministries, institutional investors, and global trade syndicates to structure regional cocoa trade finance facilities and accelerate the Central African desk.",
    isOngoing: false
  },
  {
    metaPeriod: "ONGOING",
    label: "OFFTAKE STRATEGY",
    labelIcon: <Briefcase className="w-3.5 h-3.5" />,
    title: "Discussions with International Commodity Buyers",
    description: "GCS Cocoa continues advancing discussions with international commodity buyers and strategic offtake partners as part of its export and processing strategy across European, Gulf, and Asian corridors.",
    isOngoing: true
  },
  {
    metaPeriod: "2026",
    label: "COMMERCIAL GROWTH",
    labelIcon: <TrendingUp className="w-3.5 h-3.5" />,
    title: "Strategic Trading Counterparties & Global Offtake Partners",
    description: "Multi-season forward contracts and risk-shared procurement frameworks are being structured with strategic trading counterparties — anchoring GCS's processing roadmap and ecosystem positioning.",
    isOngoing: false
  }
];

export default function RecentActivitiesTimeline() {
  return (
    <section className="py-24 bg-[#F9F7F2] text-[#1A1A1A] px-6">
      <div className="container mx-auto max-w-4xl">
        
        <div className="text-center mb-20 space-y-3">
          <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.25em] uppercase block">
            RECENT ACTIVITIES
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111111]">
            Latest Updates From GCS
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            A chronicle of recent executive engagements, ecosystem positioning, and 
            commercial progress across the global cocoa and commodities desk.
          </p>
        </div>

        {/* Timeline Dynamic Track Wrapper */}
        <div className="relative border-l border-[#D4AF37]/40 ml-4 md:ml-32 pl-8 md:pl-12 space-y-16">
          
          {TIMELINE_DATA.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              
              {/* Timeline Gold Focal Nodes */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-[#F9F7F2] shadow-sm z-10 transition-transform duration-300 group-hover:scale-125" />

              <div className="hidden md:block absolute -left-44 top-1.5 w-28 text-right font-mono text-[11px] tracking-widest text-gray-400 font-semibold uppercase">
                [ {item.metaPeriod} ]
              </div>

              <div className="space-y-3">
                
                {/* Meta Labels Header Line */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono tracking-wider text-[#D4AF37] font-semibold">
                  <span className="md:hidden text-gray-400 bg-gray-200/50 px-2 py-0.5 rounded text-[10px]">
                    {item.metaPeriod}
                  </span>
                  
                  <span className="flex items-center gap-1.5 uppercase">
                    {item.labelIcon}
                    {item.label}
                  </span>
                </div>

                {/* Event Heading Row */}
                <h3 className="text-xl md:text-2xl font-serif font-bold text-[#111111] leading-snug group-hover:text-[#C19F30] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Clear Technical Narrative Copy */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl font-sans font-light">
                  {item.description}
                </p>
              </div>

            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
}
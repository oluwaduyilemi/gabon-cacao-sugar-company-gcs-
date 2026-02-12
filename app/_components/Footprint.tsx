"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const locations = [
  {
    city: "Libreville, Gabon",
    role: "Headquarters",
  },
  {
    city: "London, UK",
    role: "European Operations",
  },
  {
    city: "Seychelles",
    role: "Trade & Finance",
  },
];

export default function Footprint() {
  return (
    <section className="py-24 bg-[#0B1221] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span 
            variants={fadeInUp} 
            className="text-[#D4A017] font-bold tracking-[0.2em] text-sm uppercase"
          >
            Global Footprint
          </motion.span>
          
          <motion.h2 
            variants={fadeInUp} 
            className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6"
          >
            Strategically Positioned Worldwide
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp} 
            className="text-gray-400 text-lg leading-relaxed"
          >
            With offices across Africa, Europe, and the Indian Ocean, we connect local 
            producers with global markets.
          </motion.p>
        </motion.div>

        {/* Location Cards */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="p-10 rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center text-center transition-colors duration-300"
            >
              <div className="mb-6">
                <Globe className="w-8 h-8 text-[#D4A017]" />
              </div>
              <h3 className="text-xl font-bold mb-2">{loc.city}</h3>
              <p className="text-gray-400 text-sm">{loc.role}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Markets Served Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-17 text-center border-t border-white/5 pt-6"
        >
          <p className="text-gray-500 text-sm tracking-widest uppercase">
            Markets served: Africa • Europe • Middle East • Asia
          </p>
        </motion.div>
      </div>
    </section>
  );
}
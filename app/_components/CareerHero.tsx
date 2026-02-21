"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

export default function CareerHero() {
  return (
    <section className="relative pt-32 pb-20 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Tagline */}
          <motion.span 
            variants={fadeInUp}
            className="text-[#D4AF37] font-bold tracking-[0.3em] text-xs uppercase mb-6 block"
          >
            Join Our Team
          </motion.span>

          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-serif font-bold text-[#3C2A21] leading-[1.1] mb-8"
          >
            Build the Future of <br />
            <span className="text-[#D4AF37]">African Trade</span>
          </motion.h1>

          {/* Subtext Paragraph */}
          <motion.p 
            variants={fadeInUp}
            className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Join a company connecting African producers to global markets through 
            sustainable sourcing, transparent trade execution, and international 
            compliance standards.
          </motion.p>
          
          {/* Decorative Line */}
          <motion.div 
            variants={fadeInUp}
            className="mt-12 flex items-center justify-center gap-3"
          >
            <div className="h-[1px] w-12 bg-[#D4AF37]/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <div className="h-[1px] w-12 bg-[#D4AF37]/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
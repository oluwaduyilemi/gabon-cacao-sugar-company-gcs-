"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

export default function TeamHero() {
  return (
    <section className="relative pt-38 pb-24 bg-white overflow-hidden">
      {/* Subtle background element to keep it from looking too plain */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-50 via-transparent to-transparent pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          animate="visible" 
          className="max-w-4xl mx-auto"
        >
          {/* Gold Label */}
          <motion.span 
            variants={fadeInUp} 
            className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-bold mb-6 block"
          >
            The People Behind GCS
          </motion.span>

          {/* Main Title - Large Serif */}
          <motion.h1 
            variants={fadeInUp} 
            className="text-6xl md:text-7xl font-serif font-bold text-slate-900 mb-8 tracking-tight"
          >
            Our Team
          </motion.h1>

          {/* Description text from your image */}
          <motion.p 
            variants={fadeInUp} 
            className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium"
          >
            A seasoned collective of global trade experts, agricultural specialists, 
            and logistics professionals united by a shared vision — to build Africa&#39;s 
            most trusted commodities partnership.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
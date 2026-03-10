"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 bg-white ">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] max-w-[500px] h-[500px] rounded-full bg-[#D4A017] blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl font-bold text-slate-900 leading-[1.1] mb-8"
          >
            Restoring Africa Agricultural <br />
            Legacy Through <span className="text-[#D4A017]">Global Trade</span>
          </motion.h1>

          {/* Subtext Paragraph */}
          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Founded to restore Africa historic reputation in cocoa and agricultural excellence, 
            GCS operates as a vertically integrated soft-commodities brokerage bridging local 
            farmers and global markets.
          </motion.p>
          
          {/* Optional: Subtle Decorative Line */}
          <motion.div 
            variants={fadeInUp}
            className="mt-12 w-20 h-1 bg-[#D4A017] mx-auto rounded-full" 
          />
        </motion.div>
      </div>
    </section>
  );
}
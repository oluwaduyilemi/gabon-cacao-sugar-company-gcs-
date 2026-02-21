"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

export default function ServiceHero() {
  return (
    <section className="relative pt-32 pb-10 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#D4AF37] blur-[150px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-[#3C2A21] leading-tight mb-8"
          >
            Global Brokerage & Trade <br />
            <span className="text-[#D4AF37]">Execution Services</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Comprehensive trade facilitation from sourcing to delivery, 
            powered by deep regional expertise and international compliance.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
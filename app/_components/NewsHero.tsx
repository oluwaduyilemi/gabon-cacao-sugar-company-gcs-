"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

export default function NewsHero() {
  return (
    <section className="relative pt-32 pb-15 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-tight mb-8"
          >
            News & Insights
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-gray-500  text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium"
          >
            Stay updated on GCS activities, market insights, and our impact across the 
            global commodity landscape.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="mt-12 flex items-center justify-center gap-4"
          >
            <div className="h-px w-16 bg-[#D4AF37]/20" />
            <div className="w-2 h-2 rotate-45 border border-[#D4AF37]/40" />
            <div className="h-px w-16 bg-[#D4AF37]/20" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
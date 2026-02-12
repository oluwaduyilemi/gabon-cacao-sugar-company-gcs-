"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

export default function CTA() {
  return (
    <section className="pb-24 pt-10 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Heading */}
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight mb-6"
          >
            Ready to Source Premium Commodities?
          </motion.h2>

          {/* Descriptive Text */}
          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          >
            Connect with our team to discuss supply, pricing, and logistics for 
            your commodity needs.
          </motion.p>

          {/* Action Button */}
          <motion.div variants={fadeInUp}>
            <button className="px-10 py-3 bg-[#0B1221] hover:bg-[#D4A017] text-white hover:text-black font-bold rounded-md transition-all duration-300 shadow-lg hover:shadow-amber-200/50">
              Request Trade Inquiry
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
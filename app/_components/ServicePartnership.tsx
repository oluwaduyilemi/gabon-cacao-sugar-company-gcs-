"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const reasons = [
  { text: "Deep regional expertise across West and Central Africa" },
  { text: "Transparent transactions with full audit trails" },
  { text: "Global market access spanning four continents" },
  { text: "Sustainable and ethical sourcing practices" },
  { text: "Compliance with international trade regulations" },
  { text: "Flexible contract and payment structures" },
];

export default function ServicePartnership() {
  return (
    <section className="pt-5 pb-24 bg-gray-50/40">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase">
            Why GCS
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-[#3C2A21] mt-4">
            Why Partner With Us
          </motion.h2>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto mb-20"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-50 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
            >
              <div className="flex-shrink-0">
                <ArrowRight className="text-[#D4AF37] w-5 h-5" />
              </div>
              <p className="text-[#3C2A21] font-medium leading-tight">
                {reason.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-block bg-[#D4AF37] text-white px-10 py-3 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-[#3C2A21] transition-all duration-300 shadow-xl hover:shadow-[#D4AF37]/20"
          >
            Partner With Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
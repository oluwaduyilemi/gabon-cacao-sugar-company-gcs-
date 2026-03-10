"use client";

import { motion } from "framer-motion";
import { Users, Globe, ShieldCheck } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const values = [
  {
    title: "Expertise",
    icon: <Users size={24} className="text-[#D4AF37]" />,
    description: "Decades of combined experience in global commodity trading, supply chain management, and market intelligence."
  },
  {
    title: "Local Presence",
    icon: <Globe size={24} className="text-[#D4AF37]" />,
    description: "Rooted in West Africa with direct relationships to farmers, cooperatives, and local governments across Gabon and beyond."
  },
  {
    title: "Integrity",
    icon: <ShieldCheck size={24} className="text-[#D4AF37]" />,
    description: "Unwavering commitment to transparent transactions, ethical sourcing, and full regulatory compliance in every market."
  }
];

export default function CoreValues() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header Text from Screenshot */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span variants={fadeInUp} className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
            What Drives Us
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Core Values
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 text-lg">
            The principles that guide every decision, partnership, and transaction.
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-white p-10 rounded-2xl border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-[#FDFBF7] rounded-full flex items-center justify-center mb-8 border border-amber-50">
                {value.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#3C2A21] mb-4">
                {value.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";
import { Eye, ShieldCheck, Handshake, Globe } from "lucide-react";

const missionData = [
  {
    title: "Traceability",
    description: "Full supply chain visibility from farm to port.",
    icon: <Eye className="w-6 h-6 text-[#D4A017]" />,
  },
  {
    title: "Ethical Sourcing",
    description: "Fair practices supporting local communities.",
    icon: <ShieldCheck className="w-6 h-6 text-[#D4A017]" />,
  },
  {
    title: "Fair Value Flow",
    description: "Equitable returns for producers and buyers.",
    icon: <Handshake className="w-6 h-6 text-[#D4A017]" />,
  },
  {
    title: "Global Standards",
    description: "Compliance with international trade regulations.",
    icon: <Globe className="w-6 h-6 text-[#D4A017]" />,
  },
];

export default function Mission() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            variants={fadeInUp}
            className="text-[#D4A017] font-bold tracking-[0.2em] text-sm uppercase"
          >
            Our Mission
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-4 mb-6"
          >
            Sourcing Excellence With Transparency
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 text-lg leading-relaxed"
          >
            We bridge the gap between African agricultural producers and global markets 
            through ethical sourcing, full traceability, and international compliance.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {missionData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="p-8 bg-white border border-gray-100 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
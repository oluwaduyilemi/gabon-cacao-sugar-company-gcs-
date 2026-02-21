"use client";

import { motion } from "framer-motion";
import { Globe, Leaf, Users, Briefcase } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const values = [
  {
    title: "Work Within International Markets",
    description: "Engage with buyers, suppliers, and trade partners across Europe, Africa, the Middle East, and Asia.",
    icon: Globe,
  },
  {
    title: "Contribute to Sustainable Trade",
    description: "Be part of a team that champions ethical sourcing, traceability, and farmer-focused supply chains.",
    icon: Leaf,
  },
  {
    title: "Support Farmer-Focused Initiatives",
    description: "Help create real impact by connecting African producers with fair and transparent global markets.",
    icon: Users,
  },
  {
    title: "Grow With a Cross-Border Organisation",
    description: "Join a dynamic, expanding company with offices in Gabon, London, and Seychelles.",
    icon: Briefcase,
  },
];

export default function CareerValues() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.span variants={fadeInUp} className="text-[#D4AF37] font-bold tracking-[0.3em] text-xs uppercase">
            Why GCS
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-[#3C2A21] mt-4 mb-6">
            Join Our Trade & Operations Team
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            We are building a team of professionals who believe in responsible, 
            transparent, and impactful commodity trade.
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {values.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-500"
            >
              {/* Professional Icon Style */}
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#D4AF37] transition-colors duration-500">
                <item.icon className="text-[#D4AF37] group-hover:text-white w-6 h-6 transition-colors duration-500" />
              </div>

              <h3 className="text-xl font-serif font-bold text-[#3C2A21] mb-4 leading-snug">
                {item.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
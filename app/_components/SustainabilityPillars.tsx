"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";
import { ShieldCheck, Leaf, Heart, Trees, Users, BarChart3 } from "lucide-react";

const pillars = [
  {
    title: "Traceable Supply Chain",
    description: "Full visibility from farm to final buyer, with documented provenance at every stage of the value chain.",
    icon: <ShieldCheck className="text-[#D4A017]" size={24} />,
  },
  {
    title: "EUDR Compliance",
    description: "Proactive alignment with EU Deforestation Regulation requirements across all commodity sourcing activities.",
    icon: <Leaf className="text-[#D4A017]" size={24} />,
  },
  {
    title: "Farmer Support",
    description: "Direct initiatives including cocoa bag distribution, training programs, and fair pricing for local farming communities.",
    icon: <Heart className="text-[#D4A017]" size={24} />,
  },
  {
    title: "Environmental Stewardship",
    description: "Protecting biodiversity and implementing regenerative agricultural practices in all our sourcing regions.",
    icon: <Trees className="text-[#D4A017]" size={24} />,
  },
  {
    title: "Community Impact",
    description: "Investing in local infrastructure and educational programs to foster long-term regional development.",
    icon: <Users className="text-[#D4A017]" size={24} />,
  },
  {
    title: "Measurable Outcomes",
    description: "Data-driven reporting on our ESG goals to ensure accountability and continuous improvement.",
    icon: <BarChart3 className="text-[#D4A017]" size={24} />,
  },
];

export default function SustainabilityPillars() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span variants={fadeInUp} className="text-[#D4AF37] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
            Our Commitment
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-[#3C2A21] mb-6">
            Sustainability Pillars
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 text-lg leading-relaxed">
            Six core pillars guide our approach to responsible commodity sourcing and trade.
          </motion.p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="group p-8 bg-slate-50/50 border border-gray-100 rounded-3xl hover:bg-white transition-all duration-500"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-emerald-50 transition-colors duration-500">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-[#3C2A21] mb-4 group-hover:text-[#D4AF37] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
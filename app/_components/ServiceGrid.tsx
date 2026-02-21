"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  Users, 
  SearchCheck, 
  ShieldCheck, 
  FileText, 
  TrendingUp 
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const services = [
  {
    title: "Brokerage",
    description: "Expert commodity brokerage connecting African producers with international buyers across all soft commodity categories.",
    icon: Briefcase,
  },
  {
    title: "Negotiation",
    description: "Professional negotiation services ensuring fair pricing and favorable terms for all parties in every transaction.",
    icon: Users,
  },
  {
    title: "Supplier Vetting",
    description: "Rigorous supplier verification and due diligence to ensure quality, compliance, and reliability in sourcing.",
    icon: SearchCheck,
  },
  {
    title: "Buyer Qualification",
    description: "Comprehensive buyer assessment to match reliable demand with verified supply for secure transactions.",
    icon: ShieldCheck,
  },
  {
    title: "Contract Execution",
    description: "End-to-end contract management including legal compliance, documentation, and international trade procedures.",
    icon: FileText,
  },
  {
    title: "Market Entry Support",
    description: "Strategic advisory and facilitation for companies seeking to enter or expand in African commodity markets.",
    icon: TrendingUp,
  },
];

export default function ServiceGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.span variants={fadeInUp} className="text-[#D4AF37] font-bold tracking-[0.2em]  uppercase">
            What We Do
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-[#3C2A21] mt-4">
            Comprehensive Trade Services
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="group p-7 b rounded-2xl border border-gray-200 shadow-[0_15px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#D4AF37] transition-colors duration-500">
                <service.icon className="text-[#D4AF37] group-hover:text-white w-7 h-7 transition-colors duration-500" />
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-serif font-bold text-[#3C2A21] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
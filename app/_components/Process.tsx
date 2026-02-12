"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";
import { ShieldCheck, UserCheck, Handshake, FileText, Truck } from "lucide-react";

const processSteps = [
  {
    step: "Step 1",
    title: "Supplier Verification",
    description: "Rigorous vetting of all supply partners.",
    icon: <ShieldCheck className="w-6 h-6 text-[#D4A017]" />,
  },
  {
    step: "Step 2",
    title: "Buyer Qualification",
    description: "Matching buyers with compliant sourcing.",
    icon: <UserCheck className="w-6 h-6 text-[#D4A017]" />,
  },
  {
    step: "Step 3",
    title: "Negotiation",
    description: "Fair, transparent deal structuring.",
    icon: <Handshake className="w-6 h-6 text-[#D4A017]" />,
  },
  {
    step: "Step 4",
    title: "Contract Execution",
    description: "Legally compliant trade agreements.",
    icon: <FileText className="w-6 h-6 text-[#D4A017]" />,
  },
  {
    step: "Step 5",
    title: "Compliance & Delivery",
    description: "End-to-end international logistics.",
    icon: <Truck className="w-6 h-6 text-[#D4A017]" />,
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-18" 
        >
          <motion.span variants={fadeInUp} className="text-[#D4A017] font-bold tracking-[0.2em] text-sm uppercase">
            How We Operate
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-4 mb-6">
            Our Trade Process
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 text-lg">
            A transparent, compliance-driven approach from sourcing to delivery.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-5 gap-8 relative"
        >
          {processSteps.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Circle */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:bg-amber-100">
                  {item.icon}
                </div>
                {/* Step Badge */}
                <div className="absolute -top-1 -right-1 bg-white border border-gray-100 shadow-sm rounded-full w-6 h-6 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-slate-400">{index + 1}</span>
                </div>
              </div>

              {/* Text Content */}
              <span className="text-[#D4A017] font-bold text-sm mb-2">{item.step}</span>
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#D4A017] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed px-2">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
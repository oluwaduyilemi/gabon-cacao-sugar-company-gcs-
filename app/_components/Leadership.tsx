"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const leaders = [
  {
    name: "CEO & COO",
    role: "Joint Executive Leadership",
    src: "/images/together.jpeg", 
  },
  {
    name: "Chief Executive Officer",
    role: "Strategic Direction",
    src: "/images/standceo.jpeg",
  },
  {
    name: "Chief Operating Officer",
    role: "Operations Management",
    src: "/images/standcoo.jpeg",
  }
];

export default function Leadership() {
  return (
    <section className="py-24 bg-[#F9F7F2]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header matching your screenshot */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.span variants={fadeInUp} className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
            Our Leaders
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-[#1A1A1A] mb-8">
            Leadership Team
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-600 text-lg md:text-xl leading-relaxed">
            The executive team driving GCS&#39;s mission to connect African producers with global markets.
          </motion.p>
        </motion.div>

        {/* Leadership Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {leaders.map((leader, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="group text-center">
              <div className="relative aspect-[4/5] mb-8 overflow-hidden rounded-[2rem] shadow-lg">
                <Image
                  src={leader.src}
                  alt={leader.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Leader Title matching the screenshot style */}
              <h3 className="text-xl font-serif font-bold text-[#1A1A1A] uppercase tracking-wider">
                {leader.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
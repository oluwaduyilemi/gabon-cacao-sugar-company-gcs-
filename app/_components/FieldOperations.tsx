"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const fieldImages = [
  {
    src: "/images/bag.jpeg",
    alt: "Agricultural Sourcing in West Africa",
    title: "Sourcing Excellence"
  },
  {
    src: "/images/show1.jpeg",
    alt: "Logistics and Transport Operations",
    title: "Global Logistics"
  },
  {
    src: "/images/show2.jpeg",
    alt: "Quality Control and Inspection",
    title: "Quality Assurance"
  },
  {
    src: "/images/show3.jpeg",
    alt: "Community and Field Processing",
    title: "Field Processing"
  }
];

export default function FieldOperations() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header from Screenshot */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.span variants={fadeInUp} className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
            On The Ground
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-[#3C2A21] mb-6">
            Our Field Operations
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 text-lg leading-relaxed">
            A closer look at our sourcing, logistics, and quality control activities across West and Central Africa.
          </motion.p>
        </motion.div>

        {/* 2x2 Grid Layout */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {fieldImages.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="relative group aspect-[14/10] overflow-hidden shadow-xl"
            >
              {/* Replace with actual image paths */}
              <div className="absolute inset-0 bg-gray-200">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              
              {/* Image Label */}
              <div className="absolute bottom-8 left-8">
                <p className="text-white font-serif text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
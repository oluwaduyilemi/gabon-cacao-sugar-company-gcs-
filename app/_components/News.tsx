"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const newsItems = [
  {
    date: "Feb 2025",
    title: "GCS at Chocoa 2025",
    excerpt: "GCS participated in the world's leading cocoa conference, presenting sustainable sourcing initiatives.",
    slug: "gcs-at-chocoa-2025",
  },
  {
    date: "Jan 2025",
    title: "Supporting Our Farmers",
    excerpt: "Our cocoa bag distribution initiative reached over 500 farming families across Gabon.",
    slug: "supporting-our-farmers",
  },
  {
    date: "Dec 2024",
    title: "Sustainability Commitment",
    excerpt: "GCS announces compliance roadmap for EU Deforestation Regulation across all supply chains.",
    slug: "sustainability-commitment",
  },
];

export default function News() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span variants={fadeInUp} className="text-[#D4A017] font-bold tracking-[0.2em] text-sm uppercase">
            News & Impact
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-4 mb-6">
            Latest From GCS
          </motion.h2>
        </motion.div>

        {/* News Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {newsItems.map((article, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group p-10 bg-white border border-gray-100 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col h-full"
            >
              <span className="text-[#D4A017] font-semibold text-sm mb-4">
                {article.date}
              </span>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-[#D4A017] transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
                {article.excerpt}
              </p>
              
              <Link 
                href={`/news/${article.slug}`}
                className="inline-flex items-center text-[#D4A017] font-bold group/link"
              >
                Read more
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="ml-2"
                >
                  <ArrowRight size={18} />
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
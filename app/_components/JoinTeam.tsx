"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function JoinUsCTA() {
  return (
    <section className="py-24 bg-[#F9F7F2] px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#111111] rounded-[4rem] py-10 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl mx-auto px-3">
            <h2 className="text-4xl md:text-6xl font-serif font-medium mb-8 text-[#F3E5D8]">
              Join Us
            </h2>
            
            <p className="text-[#cfcece] text-lg md:text-xl leading-relaxed mb-12">
              We&#39;re always looking for exceptional talent to strengthen our global
              team. If you&#39;re driven by purpose and passionate about trade, we&#39;d
              love to hear from you.
            </p>
            
            <Link 
              href="/career" 
              className="inline-block bg-[#D4AF37] text-[#111111] px-10 py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-[#C19F30] hover:scale-105 shadow-[0_10px_30px_rgba(212,175,55,0.3)]"
            >
              Explore Careers
            </Link>
          </div>

          <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
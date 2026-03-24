"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Link } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const keyFeatures = [
  "ICUMSA quality grading",
  "Large volume capacity",
  "Flexible delivery terms",
  "Trade finance available"
];

export default function SugarPage() {
  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
          <div className="container relative z-10 mx-auto pt-15 px-6 text-center pb-25">
                  <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto"
                  >
                    <motion.span 
                      variants={fadeInUp}
                      className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-6 block"
                    >
                      Commodity
                    </motion.span>
                    
                    <motion.h1 
                      variants={fadeInUp}
                      className="text-6xl md:text-8xl font-serif font-bold text-slate-900 leading-tight"
                    >
                      Sugar
                    </motion.h1>
                  </motion.div>
        </div>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeInUp} className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/sugar-CVNvfYL9.jpg" 
              alt="Raw and Refined Sugar Crystals"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Side: Overview & Specs */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] mb-6">
                Overview
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Raw and refined sugar supplied to global food processors, distributors, and industrial buyers 
                through competitive and compliance-driven trade execution.
              </p>
            </div>

            {/* Trading Specs */}
            <div className="space-y-4 border-l-2 border-[#D4AF37] pl-6">
              <p className="text-gray-800 font-medium">
                <span className="font-bold">Sourcing Regions:</span> Central & West Africa, Brazil (sourcing partnerships)
              </p>
              <p className="text-gray-800 font-medium">
                <span className="font-bold">Volume Capabilities:</span> 1,000 – 20,000+ metric tonnes per annum
              </p>
              <p className="text-gray-800 font-medium">
                <span className="font-bold">Target Buyers:</span> Food & beverage companies, confectionery producers, and wholesale distributors.
              </p>
            </div>

            {/* Key Features with Icons */}
            <div className="pt-4">
              <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-6">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#D4AF37] w-5 h-5 shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gold CTA Button from Screenshot */}
            <div className="pt-6">
              <Link href="/contact" className="inline-block"> 
              <button className="bg-[#D4AF37] hover:bg-[#C19F30] text-[#1A1A1A] font-bold py-3 px-10 rounded-xl transition-all duration-300 shadow-lg active:scale-95">
                Request Supply Quote
              </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
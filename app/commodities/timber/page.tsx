"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

export default function TimberPage() {
  const keyFeatures = [
    "Sustainably harvested & certified",
    "Species diversity",
    "Custom processing available",
    "International shipping logistics"
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* SECTION 1: TIMBER HERO */}
      <section className="relative pt-48 pb-32 bg-white overflow-hidden">
        {/* Ambient gold glow to match Cashew/Cocoa theme */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent pointer-events-none" />

        <div className="container relative z-10 mx-auto px-6 text-center">
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
              Timber
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: TIMBER OVERVIEW */}
      <section className="py-24 bg-white text-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          >
            {/* Left Image: Matches your provided reference */}
            <motion.div variants={fadeInUp} className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="/images/timber.jpg" 
                alt="Sustainably harvested tropical hardwoods"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Right Content */}
            <motion.div variants={fadeInUp} className="space-y-8 ">
              <div>
                <h2 className="text-4xl font-serif font-bold text-[#3C2A21] mb-6">Overview</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Sustainably harvested tropical hardwoods from certified Gabonese forests, 
                  processed to international specifications for construction, furniture, 
                  and specialty applications.
                </p>
              </div>

              {/* Technical Specifications Container */}
              <div className="space-y-5 border-t border-gray-100 pt-8">
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="font-bold text-[#3C2A21] min-w-[160px]">Sourcing Regions:</span>
                  <span className="text-gray-500">Gabon</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="font-bold text-[#3C2A21] min-w-[160px]">Volume Capabilities:</span>
                  <span className="text-gray-500">Custom volumes based on species and specification</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="font-bold text-[#3C2A21] min-w-[160px]">Target Buyers:</span>
                  <span className="text-gray-500">Construction companies, furniture manufacturers, and international timber traders.</span>
                </div>
              </div>

              {/* Key Features with Lucide Check Icons */}
              <div className="pt-4">
                <h3 className="text-xl font-serif font-bold text-[#3C2A21] mb-5">Key Features</h3>
                <div className="grid grid-cols-1 gap-4">
                  {keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="text-[#D4AF37]" size={22} />
                      <span className="text-gray-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <Link href="/contact" className="inline-block">
                  <button className="bg-[#B8962F] hover:bg-[#3C2A21] text-white font-bold py-3 px-10 rounded-xl transition-all duration-300 shadow-lg shadow-amber-900/10">
                    Request Supply Quote
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
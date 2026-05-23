"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";
import { MapPin, TrendingUp } from "lucide-react";

export default function NewsContent() {
  return (
    <section className="py-15 bg-gray-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-[#D4AF37] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Events</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3C2A21] mb-6">GCS at Chocoa 2026 / 2025: Showcasing Sustainable Cocoa Sourcing</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* 2026 Image */}
              <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden relative">
                <Image 
                  src="/images/amster26.jpeg" 
                  alt="Chocoa Amsterdam 2026" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#3C2A21]/10 flex items-end p-4">
                  <span className="text-white text-xs font-bold bg-[#3C2A21]/60 backdrop-blur-md px-3 py-1 rounded-lg z-10">Amsterdam 2026</span>
                </div>
              </div>
              
              {/* 2025 Image */}
              <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden relative">
                <Image 
                  src="/images/amster20.jpg" 
                  alt="Chocoa Amsterdam 2025" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#3C2A21]/10 flex items-end p-4">
                  <span className="text-white text-xs font-bold bg-[#3C2A21]/60 backdrop-blur-md px-3 py-1 rounded-lg z-10">Amsterdam 2025</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              GCS participated in the world-leading cocoa conference in Amsterdam, presenting our sustainable sourcing model and connecting with international manufacturers and commodity traders. Our presence over the last two years underscores our commitment to transparent supply chains.
            </p>
          </motion.div>

          {/* 2. COMMUNITY BLOCK */}
          <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 aspect-video bg-gray-200 rounded-2xl overflow-hidden relative">
              <Image 
                src="/images/support.jpeg" 
                alt="Community Initiative" 
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <span className="bg-[#D4AF37] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Community</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#3C2A21] mb-4">Supporting Our Farmers: Cocoa Bag Distribution Initiative</h3>
              <p className="text-gray-600 leading-relaxed">
                In January 2025, GCS launched a regional initiative providing high-grade distribution materials to over 500 local farmers, ensuring the integrity and quality of the harvest during transport.
              </p>
            </div>
          </motion.div>

         {/* 3. BUSINESS BLOCK - NOW WITH IMAGE */}
          <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="w-full md:w-1/2 aspect-video bg-gray-200 rounded-2xl overflow-hidden relative">
              <Image 
                src="/images/exxporttt.jpeg" 
                alt="Record Export Volumes" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="w-full md:w-1/2">
              <span className="bg-[#D4AF37] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Business</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#3C2A21] mb-4">Q3 2024: Record Export Volumes</h3>
              <p className="text-gray-600 leading-relaxed">
                Traceable, fine-flavor cocoa exports reached a record high in the third quarter of 2024. Our logistics optimization has resulted in a 15% increase in efficiency for premium-grade shipments to North American and European markets.
              </p>
              <div className="mt-6 flex gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <span>September 2024</span>
                <span>•</span>
                <span>Quarterly Report</span>
              </div>
            </div>
          </motion.div>

          {/* 4. CORPORATE BLOCK - NOW TEXT ONLY */}
          <motion.div variants={fadeInUp} className="bg-[#3C2A21] rounded-3xl p-8 md:p-12 shadow-xl text-white">
            <div className="flex justify-between items-start mb-6">
              <span className="bg-[#D4AF37] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Corporate</span>
              <MapPin className="text-[#D4AF37]" size={24} />
            </div>
            <h3 className="text-3xl font-serif font-bold mb-4">New London Office Opens for European Operations</h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
              To better serve our international partners, GCS has officially opened its European representative office in London. This move strengthens our trade desk capabilities and regional compliance monitoring, providing a direct bridge between Gabonese production and European markets.
            </p>
            <div className="mt-8 pt-8 border-t border-white/10 flex gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              <span>November 2024</span>
              <span>•</span>
              <span>Regional Expansion</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
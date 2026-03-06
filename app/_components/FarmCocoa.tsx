"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FarmCocoa() {
  const galleryImages = [
    "/images/farm1.jpg", "/images/farm2.jpg", "/images/farm3.jpg",
    "/images/farm4.jpg", "/images/farm5.jpg", "/images/farm6.jpg"
  ];

  return (
    <main className="bg-white">
          <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#D4A017] uppercase tracking-widest text-xs font-bold">Our Cocoa Farms</span>
            <h2 className="text-4xl font-serif font-bold text-[#3C2A21] mt-4 mb-6">Production Activities</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We work closely with cocoa farms to ensure quality sourcing and responsible production. These photos show part of our cocoa farming and harvesting activities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((src, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative h-72 rounded-2xl overflow-hidden group shadow-lg"
              >
                <Image 
                  src={src} 
                  alt={`Farm activity ${idx + 1}`} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
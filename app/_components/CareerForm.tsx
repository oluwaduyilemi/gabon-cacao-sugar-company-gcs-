"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import { CheckCircle2, Loader2, AlertCircle, ChevronDown, Link as LinkIcon } from "lucide-react";

export default function CareerPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        form.reset();
        window.scrollTo({ top: 200, behavior: 'smooth' });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* SECTION 2: FORM / SUCCESS MESSAGE */}
      <section className="py-24 bg-white min-h-[600px]">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              // SUCCESS MESSAGE VIEW
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0 }}
                className="max-w-2xl mx-auto text-center p-16 rounded-[2.5rem] border border-gray-100 bg-[#FDFBF7] shadow-2xl shadow-amber-900/5"
              >
                <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-12 h-12 text-[#D4AF37]" />
                </div>
                <h2 className="text-4xl font-serif font-bold text-[#3C2A21] mb-6">Application Successful</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  Thank you for your interest in GCS. Your profile has been successfully submitted to our talent pool. 
                  Our HR and Operations team will review your information and reach out if your background matches our current needs.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)} 
                  className="bg-[#3C2A21] text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#D4AF37] transition-all shadow-lg"
                >
                  Return to Careers
                </button>
              </motion.div>
            ) : (
              // ACTUAL FORM VIEW
              <motion.div 
                key="form"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="max-w-3xl mx-auto"
              >
                <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.04)] p-8 md:p-12">
                  {error && (
                    <div className="mb-8 p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-3 text-sm">
                      <AlertCircle size={18} /> {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="access_key" value="7404713c-1c98-4262-95d4-00cbf55bfa4a" />
                    <input type="hidden" name="subject" value="New Career Interest - GCS" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-[#3C2A21] mb-2 uppercase tracking-widest">Full Name *</label>
                        <input required name="name" type="text" placeholder="Your full name" className="w-full px-5 py-4 bg-slate-50 border border-gray-100 rounded-xl outline-none focus:border-[#D4AF37] transition-all text-gray-900" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#3C2A21] mb-2 uppercase tracking-widest">Email Address *</label>
                        <input required name="email" type="email" placeholder="you@company.com" className="w-full px-5 py-4 bg-slate-50 border border-gray-100 rounded-xl outline-none focus:border-[#D4AF37] transition-all text-gray-900" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#3C2A21] mb-2 uppercase tracking-widest">Phone Number</label>
                        <input name="phone" type="tel" placeholder="+44 ..." className="w-full px-5 py-4 bg-slate-50 border border-gray-100 rounded-xl outline-none focus:border-[#D4AF37] transition-all text-gray-900" />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-xs font-bold text-[#3C2A21] mb-2 uppercase tracking-widest">Area of Interest *</label>
                      <div className="relative">
                        <select required name="department" className="w-full px-5 py-4 bg-slate-50 border border-gray-100 rounded-xl outline-none focus:border-[#D4AF37] text-gray-900 appearance-none cursor-pointer pr-12">
                          <option value="">Select an area</option>
                          <option value="Trade">Trade Operations</option>
                          <option value="Compliance">Compliance & Legal</option>
                          <option value="Logistics">Logistics & Supply Chain</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                          <ChevronDown size={20} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#3C2A21] mb-2 uppercase tracking-widest">LinkedIn Profile / Portfolio Link *</label>
                      <div className="relative">
                        <input required name="cv_link" type="url" placeholder="https://linkedin.com/in/yourprofile" className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-gray-100 rounded-xl outline-none focus:border-[#D4AF37] transition-all text-gray-900" />
                        <LinkIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#3C2A21] mb-2 uppercase tracking-widest">Message</label>
                      <textarea name="message" rows={4} placeholder="Briefly introduce yourself..." className="w-full px-5 py-4 bg-slate-50 border border-gray-100 rounded-xl outline-none focus:border-[#D4AF37] resize-none transition-all text-gray-900"></textarea>
                    </div>

                    <button disabled={isSubmitting} type="submit" className="w-full bg-[#D4AF37] hover:bg-[#3C2A21] text-white font-bold py-5 rounded-xl uppercase tracking-[0.2em] text-xs transition-all duration-300 shadow-lg flex items-center justify-center gap-3 disabled:opacity-50">
                      {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Processing...</> : "Submit Application"}
                    </button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
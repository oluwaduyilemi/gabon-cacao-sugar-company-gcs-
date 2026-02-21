"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export default function CareerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setError(null);

  // Use e.currentTarget to get the form element
  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/mlgwwbwd", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    const data = await response.json();

    if (response.ok) {
      setIsSubmitted(true);
      form.reset(); // Clear the form
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If Formspree returns an error array, show the first one
      throw new Error(data.errors ? data.errors[0].message : "Submission failed");
    }
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "An error occurred";
    setError(errorMessage);
  } finally {
    setIsSubmitting(false);
  }
};
  if (isSubmitted) {
    return (
      <section className="py-24 bg-white flex items-center min-h-[500px]">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center p-12 rounded-3xl border border-gray-100 bg-slate-50/50 shadow-xl"
          >
            <CheckCircle2 className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold text-[#3C2A21] mb-4">Application Received</h2>
            <p className="text-gray-600 text-lg">
              Thank you for your interest in GCS. Our HR and Trade Operations team has received your application. 
              We are currently reviewing your profile and will get back to you shortly via email.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-8 bg-[#3C2A21] text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-[#D4AF37] transition-all"
            >
              Back to Careers
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-bold tracking-[0.3em] text-xs uppercase block mb-4">Talent Pool</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3C2A21] mb-6">Submit a General Application</h2>
          <p className="text-gray-500 text-lg">
            Join our team of professionals in trade operations, sourcing, and international business.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.04)] p-8 md:p-12">
          {error && (
            <div className="mb-8 p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-3 text-sm">
              <AlertCircle size={18} /> {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-[#3C2A21] mb-2 uppercase tracking-widest">Full Name *</label>
                <input required name="Full Name" type="text" placeholder="Your full name" className="w-full px-5 py-4 bg-slate-50 border border-gray-100 rounded-xl outline-none focus:border-[#D4AF37] transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#3C2A21] mb-2 uppercase tracking-widest">Email Address *</label>
                <input required name="Email" type="email" placeholder="you@company.com" className="w-full px-5 py-4 bg-slate-50 border border-gray-100 rounded-xl outline-none focus:border-[#D4AF37] transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#3C2A21] mb-2 uppercase tracking-widest">Phone Number</label>
                <input name="Phone" type="tel" placeholder="+241 ..." className="w-full px-5 py-4 bg-slate-50 border border-gray-100 rounded-xl outline-none focus:border-[#D4AF37] transition-all" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#3C2A21] mb-2 uppercase tracking-widest">Area of Interest *</label>
              <select required name="Department" className="w-full px-5 py-4 bg-slate-50 border border-gray-100 rounded-xl outline-none focus:border-[#D4AF37] appearance-none cursor-pointer">
                <option value="">Select an area</option>
                <option value="Trade">Trade Operations</option>
                <option value="Compliance">Compliance & Legal</option>
                <option value="Logistics">Logistics & Supply Chain</option>
              </select>
            </div>

            {/* Resume Upload - This will be sent as a link in your email */}
            <div>
              <label className="block text-xs font-bold text-[#3C2A21] mb-2 uppercase tracking-widest">Upload CV (PDF/DOC)</label>
              <input name="Resume" type="file" accept=".pdf,.doc,.docx" className="w-full px-5 py-4 bg-slate-50 border border-gray-100 rounded-xl outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#D4AF37]/10 file:text-[#D4AF37] hover:file:bg-[#D4AF37]/20" />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#3C2A21] mb-2 uppercase tracking-widest">Message</label>
              <textarea name="Message" rows={4} placeholder="Briefly introduce yourself..." className="w-full px-5 py-4 bg-slate-50 border border-gray-100 rounded-xl outline-none focus:border-[#D4AF37] resize-none transition-all"></textarea>
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-[#D4AF37] hover:bg-[#3C2A21] text-white font-bold py-5 rounded-xl uppercase tracking-[0.2em] text-xs transition-all duration-300 shadow-lg flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {isSubmitting ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Processing...</>
              ) : (
                "Submit Application"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
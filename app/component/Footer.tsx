import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">
              GCS
            </h3>
            <p className="text-sm leading-relaxed">
              Gabon Cacao & Sugar Company — bridging African producers with
              international buyers through sustainable sourcing and
              compliance-driven trade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-[#D4AF37] transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#D4AF37] transition">About</Link></li>
              <li><Link href="/commodities/cocoa" className="hover:text-[#D4AF37] transition">Commodities</Link></li>
              <li><Link href="/services" className="hover:text-[#D4AF37] transition">Services</Link></li>
              <li><Link href="/sustainability" className="hover:text-[#D4AF37] transition">Sustainability</Link></li>
              <li><Link href="/news" className="hover:text-[#D4AF37] transition">News</Link></li>
              <li><Link href="/contact" className="hover:text-[#D4AF37] transition">Contact</Link></li>
            </ul>
          </div>

          {/* Commodities (Only Cocoa for now) */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">
              Commodities
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/commodities/cocoa"
                  className="hover:text-[#D4AF37] transition"
                >
                  Cocoa
                </Link>
              </li>
                <li>
                <Link
                  href="/commodities/cocoa"
                  className="hover:text-[#D4AF37] transition"
                >
                  Cashew
                </Link>
              </li>
                <li>
                <Link
                  href="/commodities/cocoa"
                  className="hover:text-[#D4AF37] transition"
                >
                  Timber
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">
              Contact
            </h4>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-[#D4AF37] mt-1" />
                <a
                  href="mailto:sales@gaboncs-co.com"
                  className="hover:text-[#D4AF37] transition"
                >
                  sales@gaboncs-co.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#D4AF37] mt-1" />
                <p>
                  Immeuble Dumez BP2326<br />
                  Libreville, Gabon
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>
            © {new Date().getFullYear()} Gabon Cacao & Sugar Company. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#D4AF37] transition">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#D4AF37] transition">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

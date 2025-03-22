import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8 md:mb-12">
          {/* About Column */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold">OdiaAds</h3>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed">
              Your trusted platform for discovering and promoting local businesses in Odisha.
            </p>
            <div className="flex flex-col gap-2 sm:gap-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#6366f1]" />
                <span>Bhubaneswar, Odisha</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#6366f1]" />
                <span>+91 123 456 7890</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#6366f1]" />
                <span>contact@odiads.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 md:mb-6">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
              <li>
                <Link href="/about" className="text-xs sm:text-sm md:text-base hover:text-[#6366f1] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs sm:text-sm md:text-base hover:text-[#6366f1] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-xs sm:text-sm md:text-base hover:text-[#6366f1] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-xs sm:text-sm md:text-base hover:text-[#6366f1] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 md:mb-6">Categories</h4>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
              <li>
                <Link href="/category/restaurants" className="text-xs sm:text-sm md:text-base hover:text-[#6366f1] transition-colors">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link href="/category/shopping" className="text-xs sm:text-sm md:text-base hover:text-[#6366f1] transition-colors">
                  Shopping
                </Link>
              </li>
              <li>
                <Link href="/category/services" className="text-xs sm:text-sm md:text-base hover:text-[#6366f1] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/category/real-estate" className="text-xs sm:text-sm md:text-base hover:text-[#6366f1] transition-colors">
                  Real Estate
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 md:mb-6">Support</h4>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
              <li>
                <Link href="/help" className="text-xs sm:text-sm md:text-base hover:text-[#6366f1] transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-xs sm:text-sm md:text-base hover:text-[#6366f1] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/advertise" className="text-xs sm:text-sm md:text-base hover:text-[#6366f1] transition-colors">
                  Advertise with Us
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-xs sm:text-sm md:text-base hover:text-[#6366f1] transition-colors">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 sm:pt-6 md:pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm md:text-base text-center sm:text-left">
              © 2024 OdiaAds. All rights reserved.
            </p>
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
              <a 
                href="#" 
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#6366f1] transition-colors"
              >
                <Facebook size={14} className="sm:w-4 sm:h-4" />
              </a>
              <a 
                href="#" 
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#6366f1] transition-colors"
              >
                <Twitter size={14} className="sm:w-4 sm:h-4" />
              </a>
              <a 
                href="#" 
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#6366f1] transition-colors"
              >
                <Instagram size={14} className="sm:w-4 sm:h-4" />
              </a>
              <a 
                href="#" 
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#6366f1] transition-colors"
              >
                <Linkedin size={14} className="sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
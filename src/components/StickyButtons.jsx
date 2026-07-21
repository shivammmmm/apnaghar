import * as React from "react"
import { MessageCircle, Phone } from 'lucide-react';

export default function StickyButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col gap-3 sm:bottom-8 sm:right-6">
      <a
        href="https://wa.me/919606835118?text=Hi%2C%20I%20am%20interested%20in%20a%20home%20loan.%20Please%20call%20me."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-full p-3.5 shadow-lg shadow-green-500/30 transition-all hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline text-sm font-medium pr-1">WhatsApp</span>
      </a>
      <a
        href="tel:+919606835118"
        className="group flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white rounded-full p-3.5 shadow-lg shadow-navy-900/30 transition-all hover:scale-105"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5" />
        <span className="hidden sm:inline text-sm font-medium pr-1">Call Us</span>
      </a>
    </div>
  );
}

import React from 'react';
import { Phone, Mail, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-kaka-charcoal text-kaka-cream text-xs border-b border-kaka-gold/30 py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        {/* Sattvic Creed */}
        <div className="flex items-center flex-wrap justify-center gap-2 font-medium">
          <span className="inline-flex items-center gap-1.5 text-sattvic-green bg-sattvic-green/10 px-2 py-0.5 rounded-full border border-sattvic-green/30 font-semibold">
            <span className="w-2 h-2 rounded-full bg-sattvic-green animate-ping" />
            100% Pure Vegetarian
          </span>
          <span className="text-kaka-gold/50 hidden sm:inline">•</span>
          <span className="text-kaka-ochre font-semibold">🧈 Pure Desi Ghee</span>
          <span className="text-kaka-gold/50 hidden sm:inline">•</span>
          <span className="text-kaka-cream/90">🚫 Zero Palm Oil</span>
          <span className="text-kaka-gold/50 hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1 text-jain-amber bg-jain-amber/10 px-2 py-0.5 rounded font-bold border border-jain-amber/30">
            Strict Jain Available [J]
          </span>
        </div>

        {/* Helplines and Timings */}
        <div className="flex items-center flex-wrap justify-center gap-4 text-kaka-cream/80 text-[11px] sm:text-xs">
          <div className="hidden lg:flex items-center gap-1 text-kaka-parchment/80">
            <Clock className="w-3.5 h-3.5 text-kaka-gold" />
            <span>Open Daily: 10:00 AM – 10:00 PM</span>
          </div>

          <a
            href="tel:+917022470962"
            className="flex items-center gap-1 text-kaka-ochre hover:text-white transition-colors font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-kaka-gold" />
            <span>+91 7022470962</span>
          </a>

          <a
            href="mailto:kakacafe.blr@gmail.com"
            className="hidden sm:flex items-center gap-1 hover:text-kaka-ochre transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-kaka-gold" />
            <span>kakacafe.blr@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}

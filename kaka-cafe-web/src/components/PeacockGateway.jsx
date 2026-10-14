import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, PartyPopper, Sparkles, ChevronDown, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';

export default function PeacockGateway({ onOpenKakaGroup }) {
  const [hoverScroll1, setHoverScroll1] = useState(false);

  const handleScrollToCafe = () => {
    const el = document.getElementById('offerings');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-kaka-ochre via-[#F4AA14] to-kaka-ochre text-kaka-charcoal py-8 sm:py-12 px-4 border-b-4 border-kaka-gold shadow-lg overflow-hidden">
      {/* Rajasthani Jaali subtle pattern overlay */}
      <div className="absolute inset-0 bg-jaali-pattern opacity-15 pointer-events-none" />

      {/* Royal Arch Crest Backdrop */}
      <div className="relative max-w-5xl mx-auto flex flex-col items-center">
        {/* Peacock Gateway Top Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kaka-charcoal/90 text-kaka-gold text-xs sm:text-sm font-serif font-bold uppercase tracking-widest border border-kaka-gold/50 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-kaka-ochre animate-spin" style={{ animationDuration: '6s' }} />
            <span>Royal Rajputana Peacock Gateway</span>
            <Sparkles className="w-3.5 h-3.5 text-kaka-ochre animate-spin" style={{ animationDuration: '6s' }} />
          </div>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-kaka-charcoal tracking-wide">
            One Heritage, Two Grand Royal Portals
          </h2>
          <p className="text-xs sm:text-sm font-medium text-kaka-charcoal/80 max-w-xl mx-auto mt-1">
            Choose your dining journey below — from our cozy Yelahanka neighborhood cafe to full-scale outdoor royal catering across Bangalore.
          </p>
        </motion.div>

        {/* Dual Interactive Royal Scrolls */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {/* SCROLL 1: Kaka Cafe (Yelahanka Dine-in & Hangout) */}
          <div
            className="relative"
            onMouseEnter={() => setHoverScroll1(true)}
            onMouseLeave={() => setHoverScroll1(false)}
          >
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              onClick={handleScrollToCafe}
              className="cursor-pointer bg-kaka-cream rounded-3xl p-6 sm:p-7 border-2 border-kaka-gold shadow-royal hover:shadow-royal-hover transition-all relative overflow-hidden flex flex-col justify-between h-full"
            >
              {/* Royal corner decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-kaka-gold/25 via-transparent to-transparent pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sattvic-green/10 text-sattvic-green text-xs font-bold border border-sattvic-green/20">
                    <span className="w-2 h-2 rounded-full bg-sattvic-green" />
                    SCROLL 1 • DINE-IN & HANGOUT
                  </span>
                  <span className="text-xs font-serif font-bold text-kaka-terracotta bg-kaka-parchment px-2.5 py-1 rounded-lg border border-kaka-gold/30">
                    Yelahanka, BLR
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-kaka-ochre to-kaka-terracotta flex items-center justify-center text-white shadow-md">
                    <Utensils className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-black text-kaka-charcoal tracking-wide">
                      Kaka Cafe
                    </h3>
                    <p className="text-xs font-medium text-kaka-terracotta">
                      Daily Comfort Homestyle Food & Garden Dine-In
                    </p>
                  </div>
                </div>

                <p className="text-sm text-kaka-charcoal/85 leading-relaxed font-sans mb-4">
                  Your cozy culinary corner for daily comfort food. Drop by for rich north indian breakfast dishes, crisp punjab de parathe, street-style dal pakwaan, refreshing beverages, and soulful north indian thali spreads.
                </p>
              </div>

              {/* Hover Preview Reveal Panel */}
              <AnimatePresence>
                {hoverScroll1 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-3.5 mb-4 bg-kaka-parchment rounded-xl border border-kaka-gold/40 text-xs text-kaka-charcoal/90 leading-relaxed font-medium"
                  >
                    <div className="flex items-center gap-1.5 text-kaka-terracotta font-serif font-bold mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Perfect For:</span>
                    </div>
                    College students, working professionals, evening chai catchups, and relaxed weekend family outings.
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="pt-2 flex items-center justify-between border-t border-kaka-gold/20 text-xs font-serif font-bold text-kaka-terracotta">
                <span className="flex items-center gap-1 group-hover:underline">
                  Explore Cafe Experience <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-kaka-gold-dark text-[11px]">Click to jump to dishes</span>
              </div>
            </motion.div>
          </div>

          {/* SCROLL 2: The Kaka Group (Catering, Decor & Large Events) */}
          <div className="relative">
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              onClick={onOpenKakaGroup}
              className="cursor-pointer bg-kaka-charcoal text-kaka-cream rounded-3xl p-6 sm:p-7 border-2 border-kaka-gold shadow-royal hover:shadow-royal-hover transition-all relative overflow-hidden flex flex-col justify-between h-full"
            >
              {/* Royal corner decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-kaka-gold/30 via-transparent to-transparent pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kaka-ochre/20 text-kaka-ochre text-xs font-bold border border-kaka-gold/40">
                    <Sparkles className="w-3 h-3 text-kaka-gold" />
                    SCROLL 2 • GRAND EVENT SYNDICATE
                  </span>
                  <span className="text-xs font-serif font-bold text-kaka-gold bg-black/40 px-2.5 py-1 rounded-lg border border-kaka-gold/30">
                    Bangalore-Wide
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-kaka-terracotta to-kaka-terracotta-dark flex items-center justify-center text-kaka-ochre shadow-md border border-kaka-gold/30">
                    <PartyPopper className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-black text-kaka-cream tracking-wide">
                      The Kaka Group
                    </h3>
                    <p className="text-xs font-medium text-kaka-gold">
                      Outdoor Banquets, Mandap Decor & Celebrations
                    </p>
                  </div>
                </div>

                <p className="text-sm text-kaka-cream/85 leading-relaxed font-sans mb-4">
                  Planning a milestone gathering, wedding reception, griha pravesh, or corporate gala? The Kaka Group delivers end-to-end event management, royal banquet catering, theme mandap decor, and live food counters across Bangalore.
                </p>
              </div>

              {/* Special Badge Notice */}
              <div className="p-3.5 mb-4 bg-[#231A17] rounded-xl border border-kaka-gold/30 text-xs text-kaka-parchment/90 leading-relaxed font-medium">
                <span className="text-kaka-ochre font-serif font-bold">100% Pure Vegetarian Spreads:</span>
                {" "}Authentic rajasthani bhojan, luxury punjabi items, and contemporary live counters (100 to 2,000+ guests).
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-kaka-gold/30 text-xs font-serif font-bold text-kaka-gold">
                <span className="flex items-center gap-1 hover:underline">
                  View Grand Catering Syndicate <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </span>
                <span className="text-kaka-ochre text-[11px]">Click to open details</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

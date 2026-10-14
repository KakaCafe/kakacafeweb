import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, MessageCircle, PartyPopper, Sparkles, MapPin, Star, Award, ShieldCheck } from 'lucide-react';
import PolymorphicFoodFrame from './PolymorphicFoodFrame';

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-gradient-to-b from-kaka-cream via-kaka-parchment/60 to-kaka-cream pt-10 pb-16 px-4 md:px-8 overflow-hidden">
      {/* Decorative jaali background pattern */}
      <div className="absolute inset-0 bg-jaali-light opacity-40 pointer-events-none" />

      {/* Floating Rajputana Gold Motifs */}
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-kaka-ochre/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-kaka-terracotta/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Hero Content & SEO Text */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Top Local Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kaka-parchment border border-kaka-gold/50 shadow-sm text-xs text-kaka-charcoal font-medium">
              <span className="p-1 rounded-full bg-kaka-ochre text-kaka-charcoal font-bold">
                <MapPin className="w-3 h-3" />
              </span>
              <span className="font-semibold">Shop No 5, Beside Sobha Althea, Yelahanka</span>
              <span className="text-kaka-gold font-bold">•</span>
              <span className="text-sattvic-green font-bold flex items-center gap-1">
                <Star className="w-3 h-3 fill-kaka-ochre text-kaka-ochre" /> 4.8 Rated
              </span>
            </div>

            {/* Main SEO H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-serif font-black text-kaka-charcoal leading-[1.18] tracking-tight">
              Authentic North Indian Food &{' '}
              <span className="gold-gradient-text block sm:inline">
                Royal Rajasthani Cuisine
              </span>{' '}
              in Yelahanka, Bangalore
            </h1>

            {/* SEO Paragraph Exactly as Blueprint */}
            <p className="text-sm md:text-base text-kaka-charcoal/85 leading-relaxed font-normal">
              If you are searching for the best north indian restaurants near me or longing for an authentic rajasthani thali near me, welcome to <strong className="text-kaka-charcoal font-bold">Kaka Cafe</strong>. We bring the rich heritage of a traditional marwadi bhojanalaya and the hearty soul of a punjabi kitchen to North Bangalore. From piping hot, golden-crisp aloo paratha slathered in white butter to the iconic royal dal bati churma, every single preparation is crafted with uncompromised honesty, farm-fresh ingredients, and authentic desi ghee. We do not use palm oil, artificial colors, or commercial shortcuts. Whether you are planning a relaxed family lunch, looking for a good north indian restaurants near me destination along Airport Road, or exploring places for a small birthday party cafe in Yelahanka, Kaka Cafe is your neighborhood food haven.
            </p>

            {/* 3 Prominent Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => scrollTo('menu')}
                className="py-3.5 px-6 rounded-2xl bg-gradient-to-r from-kaka-terracotta to-kaka-terracotta-dark text-white font-serif font-bold text-sm shadow-royal hover:shadow-royal-hover flex items-center justify-center gap-2 transform hover:-translate-y-0.5 transition-all"
              >
                <UtensilsCrossed className="w-4 h-4 text-kaka-ochre" />
                <span>🍽️ View Shahi Menu</span>
              </button>

              <a
                href="https://wa.me/917022470962?text=Namaste%20Kaka%20Cafe,%20I%20would%20like%20to%20order%20food%20online."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-2xl bg-sattvic-green text-white font-serif font-bold text-sm shadow-md hover:bg-emerald-700 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>🛍️ Order Online via WhatsApp</span>
              </a>

              <button
                onClick={() => scrollTo('host')}
                className="py-3.5 px-6 rounded-2xl bg-kaka-cream hover:bg-white text-kaka-charcoal font-serif font-bold text-sm border-2 border-kaka-gold/80 shadow-sm flex items-center justify-center gap-2 transform hover:-translate-y-0.5 transition-all"
              >
                <PartyPopper className="w-4 h-4 text-kaka-terracotta" />
                <span>🎉 Host with Us (15–60 Guests)</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-kaka-gold/30">
              <div className="flex items-center gap-2 text-xs font-semibold text-kaka-charcoal">
                <span className="w-2 h-2 rounded-full bg-sattvic-green" />
                <span>100% Pure Veg</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-kaka-charcoal">
                <span className="w-2 h-2 rounded-full bg-kaka-ochre" />
                <span>Pure Desi Ghee</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-kaka-charcoal">
                <span className="w-2 h-2 rounded-full bg-kaka-terracotta" />
                <span>Zero Palm Oil</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-kaka-charcoal">
                <span className="w-2 h-2 rounded-full bg-jain-amber" />
                <span>Strict Jain [J]</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Polymorphic Food Frame Hero Showcase */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full max-w-md relative">
              {/* Decorative Arch Backdrop Card */}
              <div className="relative p-3 bg-gradient-to-b from-kaka-ochre via-[#F5B418] to-kaka-terracotta rounded-[2.5rem] shadow-2xl border-4 border-kaka-gold/80">
                <PolymorphicFoodFrame
                  src="/assets/dal_bati_churma.webp"
                  alt="Royal Dal Bati Churma Thali at Kaka Cafe Yelahanka"
                  shape="jharokha"
                  badgeText="Signature Dal Bati Thali"
                  isJain={true}
                  aspectRatio="aspect-[4/3]"
                />

                {/* Floating Award Chip */}
                <motion.div
                  className="mt-3 bg-kaka-cream/95 backdrop-blur-md rounded-2xl p-3 border border-kaka-gold/50 shadow-md flex items-center justify-between"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-kaka-charcoal rounded-xl text-kaka-gold">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-serif font-black text-kaka-charcoal">
                        Kaka Cafe Moustache Kitchen
                      </div>
                      <div className="text-[11px] text-kaka-terracotta font-semibold">
                        Hand-Rolled Batis & Cast-Iron Tawa Parathas
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-sattvic-green bg-sattvic-green/10 px-2 py-1 rounded-lg">
                    Fresh Daily
                  </span>
                </motion.div>
              </div>

              {/* Little Floating Decorative Badge */}
              <div className="absolute -bottom-4 -left-4 bg-kaka-charcoal text-kaka-cream p-3 rounded-2xl border-2 border-kaka-gold shadow-xl flex items-center gap-2">
                <img
                  src="/assets/logo.png"
                  alt="Moustache Logo"
                  className="w-7 h-7 object-contain"
                />
                <div className="text-left">
                  <div className="text-[10px] text-kaka-gold uppercase font-serif font-bold">Heritage Taste</div>
                  <div className="text-xs font-bold text-kaka-cream">Marwari & Punjabi Rasoi</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Play, 
  X, 
  CheckCircle2, 
  TrendingUp, 
  Layout, 
  ShoppingCart, 
  Headphones, 
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Zap,
  Globe,
  Star
} from 'lucide-react';
import { FreeQuoteModal } from './FreeQuoteModal';
import laptopDeskImg from '../assets/images/biznext_laptop_desk_1789652320181.jpg';

interface BizNextHeroSectionProps {
  navigate: (route: string, slug?: string) => void;
  onFilterCategory?: (category: string) => void;
}

export const BizNextHeroSection: React.FC<BizNextHeroSectionProps> = ({
  navigate,
  onFilterCategory
}) => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedStyleForQuote, setSelectedStyleForQuote] = useState('Business Website Design');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(1); // Default to 'SEO & Growth' (Index 1) as in image

  const openQuoteFor = (title: string) => {
    setSelectedStyleForQuote(title);
    setIsQuoteOpen(true);
  };

  const featureCards = [
    {
      id: 'website-design',
      title: 'Website Design',
      category: 'Web Development Services',
      icon: (
        <div className="w-11 h-11 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center shadow-inner border border-emerald-100">
          <Layout className="w-5 h-5 text-emerald-700 stroke-[2.2]" />
        </div>
      ),
      activeIcon: (
        <div className="w-11 h-11 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shadow-inner border border-emerald-400/40">
          <Layout className="w-5 h-5 text-emerald-300 stroke-[2.2]" />
        </div>
      ),
      tag: 'Custom UI/UX'
    },
    {
      id: 'seo-growth',
      title: 'SEO & Growth',
      category: 'Digital Marketing Services',
      icon: (
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/30">
          <TrendingUp className="w-5 h-5 text-slate-950 stroke-[2.5]" />
        </div>
      ),
      activeIcon: (
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-400/40">
          <TrendingUp className="w-5 h-5 text-slate-950 stroke-[2.5]" />
        </div>
      ),
      tag: 'Rank #1 on Google'
    },
    {
      id: 'e-commerce',
      title: 'E-Commerce',
      category: 'Web Development Services',
      icon: (
        <div className="w-11 h-11 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center shadow-inner border border-emerald-100">
          <ShoppingCart className="w-5 h-5 text-emerald-700 stroke-[2.2]" />
        </div>
      ),
      activeIcon: (
        <div className="w-11 h-11 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shadow-inner border border-emerald-400/40">
          <ShoppingCart className="w-5 h-5 text-emerald-300 stroke-[2.2]" />
        </div>
      ),
      tag: 'High Conversion'
    },
    {
      id: 'support-24-7',
      title: '24/7 Support',
      category: 'Hosting & Technical Services',
      icon: (
        <div className="w-11 h-11 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center shadow-inner border border-emerald-100">
          <Headphones className="w-5 h-5 text-emerald-700 stroke-[2.2]" />
        </div>
      ),
      activeIcon: (
        <div className="w-11 h-11 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shadow-inner border border-emerald-400/40">
          <Headphones className="w-5 h-5 text-emerald-300 stroke-[2.2]" />
        </div>
      ),
      tag: 'Instant SLA'
    }
  ];

  const handleCardClick = (index: number, card: typeof featureCards[0]) => {
    setActiveCardIndex(index);
    if (onFilterCategory) {
      onFilterCategory(card.category);
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#031310] via-[#051c17] to-[#020b09] text-white">
      {/* Background Ambience & Cyber Grid Glow */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Radial Center Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[150px]" />

        {/* Ambient Top Light Beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-gradient-to-b from-emerald-400/15 via-transparent to-transparent blur-2xl" />

        {/* Cyber Grid Vector Overlay at Bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-96 opacity-25"
          style={{
            backgroundImage: `radial-gradient(circle at bottom, rgba(16, 185, 129, 0.25) 0%, transparent 70%), linear-gradient(rgba(16, 185, 129, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.08) 1px, transparent 1px)`,
            backgroundSize: '100% 100%, 40px 40px, 40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-20">
        
        {/* ======================================================== */}
        {/* HERO HEADLINE: EXACT TYPOGRAPHY & BRONZE GRADIENT        */}
        {/* ======================================================== */}
        <div className="text-center pb-6 max-w-4xl mx-auto">
          {/* Top Subtitle: — Professional — */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-3 mb-2"
          >
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-emerald-400/60" />
            <span className="text-sm sm:text-base italic font-serif tracking-widest text-emerald-300/90 font-medium">
              Professional
            </span>
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-emerald-400/60" />
          </motion.div>

          {/* Main Huge Display Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] mb-4"
          >
            <span className="bg-gradient-to-r from-[#f0be80] via-[#dda25e] to-[#c78844] bg-clip-text text-transparent drop-shadow-sm">
              Business Website
            </span>
            <br />
            <span className="text-white drop-shadow-md">
              Design
            </span>
          </motion.h1>

          {/* Subtitle text */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-emerald-100/80 font-medium max-w-xl mx-auto"
          >
            Modern Layout for Startups and Companies
          </motion.p>

          {/* Glowing Green Pill Accent Divider */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center space-x-2 mt-5 mb-8"
          >
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-emerald-500" />
            <div className="w-10 h-1.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/80 animate-pulse" />
            <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-emerald-500" />
          </motion.div>
        </div>

        {/* ======================================================== */}
        {/* 3. HERO CENTERPIECE: LAPTOP ON DESK SETUP                */}
        {/* ======================================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glow backdrop behind laptop */}
          <div className="absolute -inset-4 bg-gradient-to-b from-emerald-500/20 via-teal-500/10 to-transparent rounded-[3rem] blur-2xl -z-10" />

          {/* Outer Showcase Container with Real Desk Composition */}
          <div className="relative rounded-[2.5rem] overflow-hidden border border-emerald-500/30 shadow-[0_25px_70px_rgba(0,0,0,0.85)] bg-[#071916]">
            
            {/* The High Resolution Desk Image (Plant, Coffee, Laptop, Lamp, Phone) */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full overflow-hidden bg-slate-950">
              <img 
                src={laptopDeskImg} 
                alt="BizNext Professional Laptop Desk Setup with Modern Dashboard"
                className="w-full h-full object-cover object-center transform hover:scale-[1.01] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Vignette to seamlessly blend with theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020d0b] via-transparent to-[#020d0b]/40 pointer-events-none" />

              {/* Interactive Video Play Button Trigger in Hero */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsVideoModalOpen(true);
                }}
                className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-[#09221c]/90 hover:bg-emerald-500 hover:text-slate-950 text-white px-4 py-2 rounded-full border border-emerald-400/40 shadow-2xl backdrop-blur-md text-xs font-bold flex items-center space-x-2 transition-all group cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center group-hover:bg-slate-950 group-hover:text-emerald-400 transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Video Demo</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* 4. FOUR FLOATING GLASSMORPHISM CARDS (EXACT IMAGE CARDS) */}
        {/* ======================================================== */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {featureCards.map((card, idx) => {
            const isActive = activeCardIndex === idx;

            return (
              <motion.div
                key={card.id}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCardClick(idx, card)}
                className={`relative rounded-2xl p-4 sm:p-5 cursor-pointer transition-all duration-300 text-center flex flex-col items-center justify-between min-h-[140px] sm:min-h-[160px] ${
                  isActive
                    ? 'bg-gradient-to-b from-[#0c3e34] via-[#082e26] to-[#041c17] border-2 border-emerald-400 text-white shadow-[0_10px_35px_rgba(16,185,129,0.35)] ring-2 ring-emerald-400/40'
                    : 'bg-white/95 hover:bg-white text-slate-800 border border-white/60 shadow-xl shadow-slate-950/20 backdrop-blur-md'
                }`}
              >
                {/* Active Indicator Top Light */}
                {isActive && (
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-emerald-300 rounded-full shadow-md shadow-emerald-400" />
                )}

                {/* Icon Container */}
                <div className="mb-2">
                  {isActive ? card.activeIcon : card.icon}
                </div>

                {/* Title */}
                <div className="font-extrabold text-xs sm:text-sm tracking-tight mb-1">
                  {card.title}
                </div>

                {/* Three Dots at Bottom */}
                <div className="flex items-center space-x-1 mt-auto pt-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-300' : 'bg-emerald-500/50'}`} />
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-300' : 'bg-emerald-500/50'}`} />
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-300' : 'bg-emerald-500/50'}`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* 5. STATS & FLOATING QUOTE PILL BAR                      */}
        {/* ======================================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 max-w-3xl mx-auto"
        >
          <div className="rounded-full bg-[#08221b]/80 backdrop-blur-xl border border-emerald-500/30 p-2 sm:p-2.5 pl-5 sm:pl-8 flex items-center justify-between shadow-2xl shadow-emerald-950/60">
            
            {/* Stat 1: 500+ Projects */}
            <div className="text-left">
              <div className="text-sm sm:text-lg font-black text-white leading-tight tracking-tight">
                500+
              </div>
              <div className="text-[10px] sm:text-xs text-emerald-200/70 font-medium">
                Projects
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-7 bg-emerald-500/20" />

            {/* Stat 2: 98% Client Satisfaction */}
            <div className="text-left">
              <div className="text-sm sm:text-lg font-black text-white leading-tight tracking-tight">
                98%
              </div>
              <div className="text-[10px] sm:text-xs text-emerald-200/70 font-medium">
                Client Satisfaction
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-7 bg-emerald-500/20" />

            {/* Stat 3: 24/7 Support */}
            <div className="text-left">
              <div className="text-sm sm:text-lg font-black text-white leading-tight tracking-tight">
                24/7
              </div>
              <div className="text-[10px] sm:text-xs text-emerald-200/70 font-medium">
                Support
              </div>
            </div>

            {/* Right Action Button: Get Free Quote -> */}
            <button
              onClick={() => openQuoteFor('BizNext Full Suite Package')}
              className="group ml-2 sm:ml-4 inline-flex items-center space-x-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/50 transition-all duration-300 cursor-pointer shrink-0"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* 6. BOTTOM TAGLINE WITH CYBER LASER RAY                   */}
        {/* ======================================================== */}
        <div className="mt-12 text-center relative max-w-2xl mx-auto">
          {/* Cyber Laser Horizon Line */}
          <div className="relative flex items-center justify-center mb-3">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
            <div className="absolute w-16 h-1 bg-emerald-300 rounded-full blur-[2px] shadow-lg shadow-emerald-400" />
          </div>

          {/* Tagline: Modern • Fast • Secure • Scalable */}
          <div className="flex items-center justify-center space-x-3 text-xs sm:text-sm font-semibold tracking-wide text-emerald-200/80">
            <span className="w-4 h-px bg-emerald-400/60 inline-block" />
            <span>Modern</span>
            <span className="text-emerald-400 font-bold">•</span>
            <span>Fast</span>
            <span className="text-emerald-400 font-bold">•</span>
            <span>Secure</span>
            <span className="text-emerald-400 font-bold">•</span>
            <span>Scalable</span>
            <span className="w-4 h-px bg-emerald-400/60 inline-block" />
          </div>
        </div>

      </div>

      {/* Free Quote Consultation Modal */}
      <FreeQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialWebsiteStyle={selectedStyleForQuote}
      />

      {/* Video Demo Presentation Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl rounded-3xl bg-[#091b17] border border-emerald-500/40 p-6 shadow-2xl overflow-hidden text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold mb-2">
                <Sparkles className="w-4 h-4" />
                <span>BIZNEXT WEBSITE DEVELOPMENT SHOWCASE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-4">
                High-Conversion Business Websites That Generate 10x ROI
              </h3>

              {/* Video Mockup Player */}
              <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 aspect-video bg-slate-950 flex items-center justify-center">
                <img 
                  src={laptopDeskImg}
                  alt="Video Showcase Preview"
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                <div className="absolute text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center mx-auto mb-3 shadow-xl shadow-emerald-400/40 animate-pulse">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                  <div className="font-extrabold text-base sm:text-lg text-white">
                    Live Demo: Fast, Responsive & Custom Engineered
                  </div>
                  <p className="text-xs text-emerald-200/70 mt-1 max-w-md mx-auto">
                    Built with modern React, Tailwind, Next-gen microservices & automated lead capture.
                  </p>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-emerald-900/50">
                <div className="text-xs text-slate-400 flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Satisfaction Guarantee • 24/7 Dedicated Support</span>
                </div>

                <button
                  onClick={() => {
                    setIsVideoModalOpen(false);
                    openQuoteFor('BizNext Full Custom Design Package');
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/30 transition"
                >
                  Book Instant Strategy Call →
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

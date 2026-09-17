import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Rocket,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Code2,
  Monitor,
  Gauge,
  Headphones,
  ArrowRight,
  Sparkles,
  Play,
  Check,
  CheckCircle,
  Lock,
  Clock,
  Gem,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { FreeQuoteModal } from './FreeQuoteModal';
import presenterImg from '../assets/images/hero_female_presenter_1789598092843.jpg';

interface WebsiteDevelopmentHeroShowcaseProps {
  navigate: (route: string, slug?: string) => void;
  onFilterCategory?: (category: string) => void;
}

export const WebsiteDevelopmentHeroShowcase: React.FC<WebsiteDevelopmentHeroShowcaseProps> = ({ 
  navigate,
  onFilterCategory 
}) => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedStyleForQuote, setSelectedStyleForQuote] = useState('Agency Website');

  const openQuoteFor = (styleName: string) => {
    setSelectedStyleForQuote(styleName);
    setIsQuoteOpen(true);
  };

  const handleStyleClick = (style: typeof websiteStyles[0]) => {
    if (onFilterCategory) {
      onFilterCategory(style.category);
    }
    const el = document.getElementById('services-catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 6 Website Design Styles from user image (Directly mapped to real services)
  const websiteStyles = [
    {
      id: 'agency',
      badge: 'AGENCY WEBSITE',
      badgeColor: 'bg-[#1e40af] text-blue-100 hover:bg-[#1d4ed8] border border-blue-400/30',
      brandName: 'NEXORA',
      headline: 'Creative Agency For Forward Thinking Brands',
      subtext: 'We craft digital experiences that inspire and engage.',
      buttonText: 'Discover More',
      buttonColor: 'bg-[#2563eb] text-white hover:bg-[#1d4ed8]',
      bgTheme: 'bg-[#070c18]',
      textColor: 'text-white',
      serviceSlug: 'corporate-website',
      category: 'Web Development Services',
      imgSrc: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80',
      imgAlt: 'Abstract Purple 3D Waves for Creative Agency'
    },
    {
      id: 'environment',
      badge: 'ENVIRONMENT WEBSITE',
      badgeColor: 'bg-[#15803d] text-emerald-100 hover:bg-[#166534] border border-emerald-400/30',
      brandName: 'GreenLeaf',
      headline: 'Sustainable Solutions for a Better Planet',
      subtext: 'We build eco-friendly websites for a sustainable future.',
      buttonText: 'Explore More',
      buttonColor: 'bg-[#16a34a] text-white hover:bg-[#15803d]',
      bgTheme: 'bg-[#08150e]',
      textColor: 'text-white',
      serviceSlug: 'business-website',
      category: 'Web Development Services',
      imgSrc: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=700&q=80',
      imgAlt: 'Fresh Green Leaves for Eco Sustainable Website'
    },
    {
      id: 'ecommerce',
      badge: 'E-COMMERCE WEBSITE',
      badgeColor: 'bg-[#1e40af] text-blue-100 hover:bg-[#1d4ed8] border border-blue-400/30',
      brandName: 'ShopCo.',
      headline: 'Great Products Great Prices Better Living',
      subtext: 'Find amazing products at the best prices.',
      buttonText: 'Shop Now',
      buttonColor: 'bg-[#2563eb] text-white hover:bg-[#1d4ed8]',
      bgTheme: 'bg-[#ffffff]',
      textColor: 'text-slate-900',
      isLight: true,
      serviceSlug: 'e-commerce-website',
      category: 'Web Development Services',
      imgSrc: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80',
      imgAlt: 'Pink Luxury Handbag for E-Commerce Website'
    },
    {
      id: 'restaurant',
      badge: 'RESTAURANT WEBSITE',
      badgeColor: 'bg-[#ea580c] text-orange-100 hover:bg-[#c2410c] border border-orange-400/30',
      brandName: 'Shodie.',
      headline: 'Delicious Food Made with Love',
      subtext: "Experience the best flavors from our chef's special menu.",
      buttonText: 'View Menu',
      buttonColor: 'bg-[#f97316] text-white hover:bg-[#ea580c]',
      bgTheme: 'bg-[#140b07]',
      textColor: 'text-white',
      serviceSlug: 'business-website',
      category: 'Web Development Services',
      imgSrc: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80',
      imgAlt: 'Gourmet Dish Food Presentation for Restaurant Website'
    },
    {
      id: 'healthcare',
      badge: 'HEALTHCARE WEBSITE',
      badgeColor: 'bg-[#0284c7] text-sky-100 hover:bg-[#0369a1] border border-sky-400/30',
      brandName: 'MediCare',
      headline: 'Your Health is Our Priority',
      subtext: 'Quality healthcare services you can trust.',
      buttonText: 'Book Appointment',
      buttonColor: 'bg-[#0284c7] text-white hover:bg-[#0369a1]',
      bgTheme: 'bg-[#f0f9ff]',
      textColor: 'text-slate-900',
      isLight: true,
      serviceSlug: 'web-application',
      category: 'Web Development Services',
      imgSrc: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80',
      imgAlt: 'Friendly Healthcare Doctor with Stethoscope'
    },
    {
      id: 'portfolio',
      badge: 'PORTFOLIO WEBSITE',
      badgeColor: 'bg-[#4338ca] text-indigo-100 hover:bg-[#3730a3] border border-indigo-400/30',
      brandName: 'Alex Smith',
      headline: "I'm Alex Smith Creative Developer",
      subtext: 'I build modern websites and web applications that perform.',
      buttonText: 'View My Work',
      buttonColor: 'bg-[#4f46e5] text-white hover:bg-[#4338ca]',
      bgTheme: 'bg-[#0a0e1a]',
      textColor: 'text-white',
      serviceSlug: 'react-nextjs-development',
      category: 'Web Development Services',
      imgSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80',
      imgAlt: 'Creative Software Developer with Glasses'
    }
  ];

  return (
    <div className="w-full bg-[#050811] text-white font-sans overflow-x-hidden relative">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-48 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[900px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/8 rounded-full blur-[160px] pointer-events-none" />

      {/* ==================================================== */}
      {/* 1. TOP HERO SECTION (TITLE & FAST/SECURE/MOBILE/SEO ICONS) */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 relative z-10">
        
        {/* Top Header Row: Left Title & Right 4 Feature Icons */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-slate-800/60">
          
          {/* Left Title Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            {/* Pill Badge: </> PROFESSIONAL */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0b1224] border border-indigo-500/40 text-xs font-black tracking-widest text-indigo-300 shadow-md shadow-indigo-500/10">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>PROFESSIONAL</span>
            </div>

            {/* Giant Title: WEBSITE DEVELOPMENT */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none uppercase">
              <span className="text-white block">WEBSITE</span>
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent block">
                DEVELOPMENT
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 font-semibold tracking-wide">
              <span>Modern Designs. Powerful Websites. </span>
              <span className="text-[#38bdf8] font-bold">Built for Your Success.</span>
            </p>
          </motion.div>

          {/* Right 4 Pillars: FAST LOADING, SECURE, MOBILE, SEO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full lg:w-auto"
          >
            {/* 1. Fast Loading */}
            <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-[#090e1c] border border-slate-800/80 hover:border-cyan-500/40 transition group">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Rocket className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-black tracking-wider uppercase text-slate-200">
                FAST<br />LOADING
              </span>
            </div>

            {/* 2. Secure & Reliable */}
            <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-[#090e1c] border border-slate-800/80 hover:border-cyan-500/40 transition group">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-black tracking-wider uppercase text-slate-200">
                SECURE<br />& RELIABLE
              </span>
            </div>

            {/* 3. Mobile Friendly */}
            <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-[#090e1c] border border-slate-800/80 hover:border-cyan-500/40 transition group">
              <div className="w-10 h-10 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-black tracking-wider uppercase text-slate-200">
                MOBILE<br />FRIENDLY
              </span>
            </div>

            {/* 4. SEO Optimized */}
            <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-[#090e1c] border border-slate-800/80 hover:border-cyan-500/40 transition group">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-black tracking-wider uppercase text-slate-200">
                SEO<br />OPTIMIZED
              </span>
            </div>
          </motion.div>

        </div>

        {/* ==================================================== */}
        {/* 2. CENTERPIECE: PRESENTER WOMAN & 3D TABLET SHOWCASE */}
        {/* ==================================================== */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Professional Presenter Woman */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 relative flex justify-center lg:justify-start"
          >
            <div className="relative group max-w-sm sm:max-w-md">
              {/* Lilac presenter photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-indigo-500/20 bg-gradient-to-b from-indigo-950/40 to-[#070c18]">
                <img
                  src={presenterImg}
                  alt="Professional Website Development Presenter"
                  className="w-full h-auto object-cover max-h-[580px] hover:scale-102 transition duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating badges around presenter */}
              <div className="absolute -bottom-3 left-4 bg-[#0e1628]/95 border border-cyan-500/40 rounded-2xl px-4 py-2.5 shadow-xl flex items-center space-x-3 backdrop-blur-md">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <div className="text-xs font-black text-white">Award-Winning UI/UX</div>
                  <div className="text-[10px] text-cyan-300 font-semibold">100% Tailored Code</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Modern 3D Tilted Tablet Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            {/* Tablet Outer Body with Metallic Edge */}
            <div className="relative rounded-[2.5rem] bg-[#1a2233] p-3 sm:p-4 shadow-2xl shadow-blue-500/10 border-2 border-slate-700/80 overflow-hidden transform lg:rotate-[-0.8deg] hover:rotate-0 transition-transform duration-500">
              
              {/* Glossy Glare Reflection */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/5 to-transparent pointer-events-none rounded-tr-[2.5rem]" />

              {/* Tablet Screen Content: WEBOX Website */}
              <div className="rounded-[1.8rem] bg-[#0c1220] border border-slate-800 p-4 sm:p-6 text-white overflow-hidden relative">
                
                {/* Webox Top Nav Bar */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800/80">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-black text-xs text-slate-950">
                      <Code2 className="w-4 h-4 text-slate-950 stroke-[2.5]" />
                    </div>
                    <span className="text-base font-black tracking-tight text-white">Webox</span>
                  </div>

                  {/* Tablet Nav Links */}
                  <div className="hidden sm:flex items-center space-x-5 text-xs font-medium text-slate-300">
                    <span className="text-white font-bold cursor-pointer hover:text-cyan-300">Home</span>
                    <span className="cursor-pointer hover:text-cyan-300">About</span>
                    <span className="cursor-pointer hover:text-cyan-300">Services</span>
                    <span className="cursor-pointer hover:text-cyan-300">Portfolio</span>
                    <span className="cursor-pointer hover:text-cyan-300">Blog</span>
                  </div>

                  <button
                    onClick={() => openQuoteFor('Webox Custom Project')}
                    className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold transition shadow-md cursor-pointer"
                  >
                    Contact Us
                  </button>
                </div>

                {/* Webox Hero Inside Tablet */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-4">
                  
                  {/* Left Side: Headline & Buttons */}
                  <div className="md:col-span-7 space-y-4 text-left">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
                      We Build Digital Experiences That <span className="text-cyan-400">Drive Results</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
                      We create modern, fast and responsive websites that help businesses grow online.
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => openQuoteFor('Webox Digital Experience')}
                        className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-black shadow-lg shadow-blue-600/30 transition flex items-center space-x-2 cursor-pointer"
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => {
                          const el = document.getElementById('website-styles-catalog');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 flex items-center space-x-1.5 transition cursor-pointer"
                      >
                        <Play className="w-3 h-3 fill-slate-200 text-slate-200" />
                        <span>View Portfolio</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Side: Floating UI Card Mockups */}
                  <div className="md:col-span-5 relative">
                    <div className="space-y-3">
                      {/* Code Block Card */}
                      <div className="p-3 rounded-xl bg-[#141b2c] border border-slate-700/80 shadow-lg text-[11px] font-mono text-cyan-300 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Code2 className="w-4 h-4 text-purple-400" />
                          <span>&lt;ResponsiveLayout /&gt;</span>
                        </div>
                        <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-sans font-bold">
                          100% Speed
                        </span>
                      </div>

                      {/* Image Preview Card */}
                      <div className="rounded-xl overflow-hidden border border-slate-700/80 bg-slate-900 h-28 relative">
                        <img
                          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=500&q=80"
                          alt="Modern UI visual"
                          className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                        <div className="absolute bottom-2 left-2 text-[10px] font-bold text-white">
                          Clean Architecture
                        </div>
                      </div>

                      {/* Stats Metric Mini Card */}
                      <div className="p-2.5 rounded-xl bg-gradient-to-r from-blue-900/60 to-purple-900/60 border border-slate-700 flex items-center justify-between text-xs">
                        <span className="text-slate-300 text-[10px] font-semibold">SEO Lighthouse Score</span>
                        <span className="text-emerald-400 font-mono font-black">99/100</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Tablet Bottom Metrics Bar */}
                <div className="mt-6 pt-5 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="p-2">
                    <div className="text-xl sm:text-2xl font-black text-white">250+</div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Projects Done</div>
                  </div>
                  <div className="p-2">
                    <div className="text-xl sm:text-2xl font-black text-cyan-300">98%</div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Client Satisfaction</div>
                  </div>
                  <div className="p-2">
                    <div className="text-xl sm:text-2xl font-black text-white">5+</div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Years Experience</div>
                  </div>
                  <div className="p-2">
                    <div className="text-xl sm:text-2xl font-black text-purple-300">24/7</div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Support</div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ==================================================== */}
      {/* 3. SECTION DIVIDER: MODERN WEBSITE DESIGN STYLES */}
      {/* ==================================================== */}
      <section id="website-styles-catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Glowing Title Divider Line */}
        <div className="flex items-center justify-center space-x-4 my-6">
          <div className="h-[2px] w-12 sm:w-28 bg-gradient-to-r from-transparent via-cyan-500 to-indigo-500" />
          <h2 className="text-sm sm:text-base md:text-lg font-black tracking-widest text-white uppercase text-center">
            MODERN WEBSITE DESIGN STYLES
          </h2>
          <div className="h-[2px] w-12 sm:w-28 bg-gradient-to-l from-transparent via-cyan-500 to-indigo-500" />
        </div>

        {/* 6 High-Fidelity Website Design Style Cards (Exact Match to Image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
          {websiteStyles.map((style, idx) => (
            <motion.div
              key={style.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center group cursor-pointer"
              onClick={() => openQuoteFor(style.badge)}
            >
              {/* Inner Website Mockup Container */}
              <div className={`w-full rounded-2xl overflow-hidden border border-slate-700/90 shadow-xl ${style.bgTheme} ${style.textColor} transition-all duration-300 transform group-hover:-translate-y-1.5 group-hover:shadow-2xl group-hover:border-cyan-400/50 flex flex-col justify-between min-h-[300px]`}>
                
                {/* Mockup Mini Nav Header */}
                <div className={`px-4 py-2.5 flex items-center justify-between border-b ${style.isLight ? 'border-slate-200 bg-slate-50' : 'border-slate-800 bg-black/40'}`}>
                  <span className="font-black text-xs tracking-tight">{style.brandName}</span>
                  
                  <div className={`flex items-center space-x-2 text-[9px] ${style.isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    <span>Home</span>
                    <span>About</span>
                    <span>Contact</span>
                    <span className="text-[11px] font-bold">≡</span>
                  </div>
                </div>

                {/* Mockup Content Grid */}
                <div className="p-4 grid grid-cols-12 gap-3 items-center flex-grow">
                  
                  {/* Left Text */}
                  <div className="col-span-7 space-y-2 text-left">
                    <h3 className="font-black text-xs sm:text-sm leading-snug">
                      {style.headline}
                    </h3>
                    <p className={`text-[10px] leading-relaxed line-clamp-2 ${style.isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                      {style.subtext}
                    </p>
                    
                    <div className="flex items-center space-x-2 pt-1">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate('service-detail', style.serviceSlug);
                        }}
                        className={`px-3 py-1.5 rounded-md text-[10px] font-bold transition shadow-xs cursor-pointer ${style.buttonColor}`}
                      >
                        {style.buttonText}
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStyleClick(style);
                        }}
                        className="px-2 py-1 rounded-md text-[9px] font-semibold text-slate-400 hover:text-white transition cursor-pointer"
                        title="View service specifications below"
                      >
                        Details & Scope ↓
                      </button>
                    </div>
                  </div>

                  {/* Right Image Visual */}
                  <div className="col-span-5">
                    <div className="rounded-xl overflow-hidden h-28 w-full bg-slate-800/60 shadow-md">
                      <img
                        src={style.imgSrc}
                        alt={style.imgAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom Category Pill Badge (Right below the card as in image) */}
              <div className="mt-3">
                <span className={`px-4 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-md transition ${style.badgeColor}`}>
                  {style.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* ==================================================== */}
      {/* 4. KEY FEATURE PILLARS (5 Horizontal Icons & Titles) */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="p-8 rounded-3xl bg-[#090e1c] border border-slate-800/80 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            
            {/* 1. Custom Development */}
            <div className="space-y-2 p-3 group">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <h4 className="text-xs font-black tracking-wider uppercase text-white">
                CUSTOM DEVELOPMENT
              </h4>
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                Tailored solutions for your business
              </p>
            </div>

            {/* 2. Responsive Design */}
            <div className="space-y-2 p-3 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/15 text-blue-400 border border-blue-500/30 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Monitor className="w-6 h-6" />
              </div>
              <h4 className="text-xs font-black tracking-wider uppercase text-white">
                RESPONSIVE DESIGN
              </h4>
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                Looks perfect on all devices
              </p>
            </div>

            {/* 3. SEO Friendly */}
            <div className="space-y-2 p-3 group">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/15 text-purple-400 border border-purple-500/30 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="text-xs font-black tracking-wider uppercase text-white">
                SEO FRIENDLY
              </h4>
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                Rank higher and get more traffic
              </p>
            </div>

            {/* 4. High Performance */}
            <div className="space-y-2 p-3 group">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Gauge className="w-6 h-6" />
              </div>
              <h4 className="text-xs font-black tracking-wider uppercase text-white">
                HIGH PERFORMANCE
              </h4>
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                Fast loading speed better experience
              </p>
            </div>

            {/* 5. Support & Maintenance */}
            <div className="space-y-2 p-3 group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Headphones className="w-6 h-6" />
              </div>
              <h4 className="text-xs font-black tracking-wider uppercase text-white">
                SUPPORT & MAINTENANCE
              </h4>
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                We are here even after launch
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 5. CALL TO ACTION: LET'S BUILD SOMETHING AMAZING TOGETHER! */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0d1424] via-[#0f172a] to-[#0c1220] border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Curved arrow & Let's Build Something Amazing Together */}
            <div className="lg:col-span-6 space-y-3 text-left">
              <div className="flex items-start gap-4">
                {/* Curved white arrow matching exact image design */}
                <div className="hidden sm:block shrink-0 pt-1">
                  <svg 
                    className="w-16 h-16 text-white/90 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" 
                    viewBox="0 0 100 100" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3"
                  >
                    <path
                      d="M18 75 C 18 35, 55 25, 82 48"
                      strokeLinecap="round"
                    />
                    <path
                      d="M70 42 L 84 50 L 73 62"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                    Let's Build Something<br />
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
                      Amazing Together!
                    </span>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed mt-2">
                    From idea to launch, we are with you every step of the way.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Big Gradient GET A FREE QUOTE Card Button */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <button
                onClick={() => openQuoteFor('General Free Quote')}
                className="w-full max-w-md p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#9333ea] hover:from-[#1d4ed8] hover:to-[#7e22ce] text-white shadow-2xl shadow-indigo-500/30 border border-indigo-400/40 flex items-center justify-between group transition transform hover:scale-102 cursor-pointer text-left"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center shrink-0">
                    <Rocket className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-black tracking-tight uppercase">
                      GET A FREE QUOTE
                    </div>
                    <div className="text-xs text-indigo-100 font-medium">
                      Let's turn your ideas into reality
                    </div>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full bg-white text-slate-950 flex items-center justify-center shrink-0 shadow-md group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </div>
              </button>
            </div>

          </div>

          {/* Bottom Trust Badges Row */}
          <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center sm:justify-between gap-4 text-xs font-bold text-slate-300">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% SATISFACTION</span>
            </div>

            <div className="flex items-center space-x-2">
              <Lock className="w-4 h-4 text-cyan-400" />
              <span>SECURE & TRUSTED</span>
            </div>

            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>ON-TIME DELIVERY</span>
            </div>

            <div className="flex items-center space-x-2">
              <Gem className="w-4 h-4 text-purple-400" />
              <span>AFFORDABLE PRICING</span>
            </div>
          </div>

        </div>
      </section>

      {/* Free Quote Modal */}
      <FreeQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialWebsiteStyle={selectedStyleForQuote}
      />
    </div>
  );
};

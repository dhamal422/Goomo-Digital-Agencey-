import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Bot, 
  Globe, 
  TrendingUp, 
  Sparkles, 
  Workflow, 
  Zap, 
  MessageSquare, 
  Code2, 
  Share2, 
  Image as ImageIcon, 
  ShieldCheck, 
  Star, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Cpu, 
  Layers, 
  Award, 
  Clock, 
  Rocket 
} from 'lucide-react';
import { Service } from '../types';
import { useCurrency } from '../context/CurrencyContext';
import serviceGirlImg from '../assets/images/ai_service_girl_presentation_1785934753905.jpg';

interface ScrollDrivenRightVisualProps {
  children: React.ReactNode;
  className?: string;
  initialX?: number;
  rotateAngle?: number;
}

/**
 * ScrollDrivenRightVisual:
 * Directly linked to scroll position ("scroll karne ke anusar").
 * When scrolling down into view, the element/image smoothly glides in from the right to 0.
 * When scrolling up, it glides back.
 */
const ScrollDrivenRightVisual: React.FC<ScrollDrivenRightVisualProps> = ({
  children,
  className = "",
  initialX = 140,
  rotateAngle = 8
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const rawX = useTransform(scrollYProgress, [0, 1], [initialX, 0]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.7], [0.25, 1]);
  const rawRotateY = useTransform(scrollYProgress, [0, 1], [rotateAngle, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 1], [0.93, 1]);

  const x = useSpring(rawX, { stiffness: 220, damping: 26 });
  const opacity = useSpring(rawOpacity, { stiffness: 220, damping: 26 });
  const rotateY = useSpring(rawRotateY, { stiffness: 220, damping: 26 });
  const scale = useSpring(rawScale, { stiffness: 220, damping: 26 });

  return (
    <motion.div
      ref={containerRef}
      style={{
        x,
        opacity,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
        perspective: 1000,
        willChange: 'transform, opacity'
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface FiveFeaturedBoxesProps {
  navigate: (route: string, slug?: string) => void;
  services: Service[];
  onInstantBuy?: (serviceTitle: string, priceINR: number) => void;
}

export const FiveFeaturedBoxes: React.FC<FiveFeaturedBoxesProps> = ({ navigate, services, onInstantBuy }) => {
  const { formatPrice } = useCurrency();
  const [expandedBox, setExpandedBox] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedBox(expandedBox === index ? null : index);
  };

  // Map specific service slugs to navigate directly when clicked
  const getSlugForIndex = (index: number) => {
    const defaultSlugs = [
      'ai-chatbot-development',
      'ai-website-development',
      'ai-video-generation',
      'ai-content-generation',
      'ai-workflow-automation'
    ];
    return defaultSlugs[index] || 'ai-website-development';
  };

  const prices = [1499, 2499, 1999, 1199, 1799];

  return (
    <section id="featured-5-services" className="py-16 my-8 bg-gradient-to-r from-[#a9f1df] to-[#ffbbbb] hover:from-[#9be8d7] hover:to-[#ffa4a4] text-slate-100 rounded-[2.5rem] sm:rounded-[3rem] relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border border-emerald-300/50 hover:border-pink-300/80 shadow-xl hover:shadow-2xl transition-all duration-500">
      <div className="relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-200 border border-slate-300 text-black text-xs font-extrabold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span className="text-black">Featured Core Agency Services</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
            Top 5 High-Impact Services <br className="hidden sm:inline" /> 
            <span className="text-black">Engineered For Rapid Growth</span>
          </h2>
          <p className="text-black text-sm sm:text-base mt-4 leading-relaxed font-medium max-w-2xl mx-auto">
            Explore our 5 core agency modules below. Each box is formatted with instant local currency conversion and direct payment checkout.
          </p>
        </motion.div>

        {/* The 5 Service Boxes Grid with Double-Nested Charcoal Containers */}
        <div className="space-y-10 max-w-6xl mx-auto">
          
          {/* BOX 1: 24/7 AI WhatsApp & Web Sales Agents */}
          <motion.div 
            initial={{ opacity: 0, x: -80, rotateY: -10, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.015, rotateX: 2, rotateY: -2 }}
            style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
            className="bg-gradient-to-r from-[#11998e] to-[#38ef7d] border border-emerald-400/50 rounded-3xl p-6 sm:p-10 shadow-2xl transition-all duration-300 transform group relative overflow-hidden text-slate-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column - Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-[#b2ebf2] border border-slate-700 text-xs font-extrabold tracking-wide uppercase flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Service #1 • AI Automation
                  </span>
                  <span className="text-xs font-black text-white">24/7 Autonomous Agent</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                  24/7 AI WhatsApp & Web Sales Agents
                </h3>

                <p className="text-white font-bold text-sm leading-relaxed">
                  Compare customer query responses across OpenAI, Claude, and Gemini in real-time, or deploy automated sales bots on WhatsApp that convert leads while you sleep.
                </p>

                {/* Bullets with Green Checkmarks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start space-x-2 text-xs font-bold text-white">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-white font-bold">24/7 Lead Qualification & Auto-Booking</span>
                  </div>
                  <div className="flex items-start space-x-2 text-xs font-bold text-white">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-white font-bold">Official Meta WhatsApp Business API</span>
                  </div>
                  <div className="flex items-start space-x-2 text-xs font-bold text-white">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-white font-bold">Dynamic Inventory & Pricing Training</span>
                  </div>
                  <div className="flex items-start space-x-2 text-xs font-bold text-white">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-white font-bold">Instant Human Agent Escalation</span>
                  </div>
                </div>

                {/* Buttons Style: Primary Glowing Cyan & Transparent Secondary */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    onClick={() => {
                      if (onInstantBuy) onInstantBuy('24/7 AI WhatsApp & Web Sales Agents', prices[0]);
                      else navigate('service-detail', getSlugForIndex(0));
                    }}
                    className="px-8 py-4 btn-cyan-primary text-slate-950 text-xs sm:text-sm font-black rounded-full transition flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Get Now for {formatPrice(prices[0])}</span>
                    <span className="text-base font-bold">»</span>
                  </button>
                  <button
                    onClick={() => toggleExpand(0)}
                    className="px-5 py-3.5 bg-gradient-to-r from-zinc-900 via-neutral-900 to-black hover:from-black hover:via-zinc-800 hover:to-neutral-900 text-white text-xs font-black rounded-full border border-zinc-700/80 hover:border-zinc-500 shadow-lg hover:shadow-black/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <span>{expandedBox === 0 ? 'Hide Specifications' : 'Full Specifications'}</span>
                    {expandedBox === 0 ? <ChevronUp className="w-4 h-4 text-white" /> : <ChevronDown className="w-4 h-4 text-zinc-400" />}
                  </button>
                  <button
                    onClick={() => navigate('service-detail', getSlugForIndex(0))}
                    className="px-5 py-3.5 bg-white hover:bg-slate-100 text-slate-950 text-xs font-black rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[2px_2px_0px_0px_#000000] transition-all duration-200 text-center sm:ml-auto cursor-pointer"
                  >
                    View Details Page
                  </button>
                </div>

                {/* EXPANDABLE DEEP SPECIFICATIONS PANEL */}
                {expandedBox === 0 && (
                  <div className="mt-6 p-5 bg-[#0e1622] text-white rounded-2xl border border-slate-700/80 space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <span className="text-xs font-black text-[#b2ebf2] uppercase tracking-wider flex items-center gap-1.5">
                        <Cpu className="w-4 h-4" /> Technical Specifications & Features
                      </span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                        98% Open Rate Guarantee
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-slate-400 font-bold block mb-1">Core Capability & Tech Stack:</span>
                        <ul className="space-y-1 text-slate-300">
                          <li>• Powered by OpenAI GPT-4o & Claude 3.5 Sonnet</li>
                          <li>• Official Meta WhatsApp Business Cloud API Integration</li>
                          <li>• Multi-lingual (Hindi, English, Hinglish, Regional)</li>
                          <li>• Instant Razorpay & UPI Payment Link Generation in Chat</li>
                        </ul>
                      </div>
                      <div>
                        <span className="text-slate-400 font-bold block mb-1">SLA & Setup Roadmap:</span>
                        <ul className="space-y-1 text-slate-300">
                          <li>• SLA: 24 to 48 Hours Live Deployment</li>
                          <li>• Direct Webhook Sync to Google Sheets / CRM</li>
                          <li>• Custom Knowledge Base Ingestion (PDFs & URLs)</li>
                          <li>• Live Agent Fallback & Dashboard Alert Routing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Custom Visual Mockup Frame */}
              <div className="lg:col-span-5">
                <ScrollDrivenRightVisual initialX={140} rotateAngle={8}>
                  <div className="bg-[#1a2332] rounded-2xl p-5 border border-slate-700 shadow-2xl relative overflow-hidden">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400 font-mono">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                      </div>
                      <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">● LIVE AGENT ACTIVE</span>
                    </div>

                    <div className="mt-4 space-y-3 font-sans text-xs">
                      <div className="bg-[#0f172a] p-3 rounded-xl border border-slate-800 text-slate-300">
                        <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1">
                          <span className="font-bold text-slate-400">Incoming Customer</span>
                          <span>10:42 AM</span>
                        </div>
                        <p className="text-slate-200 font-medium">"Hi, what is the price for custom website design & AI WhatsApp setup?"</p>
                      </div>

                      <div className="bg-cyan-950/40 p-3 rounded-xl border border-cyan-800/60 text-cyan-100 ml-4">
                        <div className="flex items-center justify-between text-[10px] text-cyan-300 mb-1">
                          <span className="font-bold text-[#b2ebf2] flex items-center gap-1">
                            <Bot className="w-3 h-3 text-[#b2ebf2]" /> Goomo AI WhatsApp Bot
                          </span>
                          <span className="text-emerald-400 font-bold">0.3s reply</span>
                        </div>
                        <p className="text-slate-200">"Hello! Our Custom Website Design starts at {formatPrice(prices[1])} and WhatsApp AI Agent setup is {formatPrice(prices[0])}. Would you like an instant checkout?"</p>
                      </div>

                      <div className="bg-emerald-950/50 p-2.5 rounded-lg border border-emerald-800/60 text-emerald-300 text-[11px] flex items-center justify-between">
                        <span className="flex items-center gap-1.5 font-bold">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Lead Qualified & Payment Gateway Attached
                        </span>
                        <span className="text-[10px] bg-emerald-400 text-slate-950 px-2 py-0.5 rounded font-extrabold">CONFIRMED</span>
                      </div>
                    </div>
                  </div>
                </ScrollDrivenRightVisual>
              </div>

            </div>
          </motion.div>

          {/* BOX 2: Custom Website & Web Application Architecture */}
          <motion.div 
            initial={{ opacity: 0, x: 80, rotateY: 10, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.015, rotateX: 2, rotateY: 2 }}
            style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
            className="bg-[#131b26] border border-slate-700/70 hover:border-cyan-400/50 rounded-3xl p-6 sm:p-10 shadow-2xl transition-all duration-300 transform group relative overflow-hidden text-slate-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column - Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-[#b2ebf2] border border-slate-700 text-xs font-extrabold tracking-wide uppercase flex items-center gap-1.5">
                    Service #2 • Web & App Dev
                  </span>
                  <span className="text-xs font-bold text-slate-400">Next.js & React Engine</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug group-hover:text-[#b2ebf2] transition-colors">
                  Custom Website & Web Application Architecture
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Bespoke, high-converting digital platforms engineered with high-speed React frameworks, custom animation loops, and seamless payment gateway integrations.
                </p>

                {/* Bullets with Green Checkmarks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start space-x-2 text-xs font-medium text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Pixel-Perfect Fluid Mobile Responsiveness</span>
                  </div>
                  <div className="flex items-start space-x-2 text-xs font-medium text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>98+ Google PageSpeed Optimization</span>
                  </div>
                  <div className="flex items-start space-x-2 text-xs font-medium text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Stripe & Razorpay Payment Integration</span>
                  </div>
                  <div className="flex items-start space-x-2 text-xs font-medium text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>100% Full Source Code Ownership</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    onClick={() => {
                      if (onInstantBuy) onInstantBuy('Custom Website & Web Application Architecture', prices[1]);
                      else navigate('service-detail', getSlugForIndex(1));
                    }}
                    className="px-8 py-4 btn-cyan-primary text-slate-950 text-xs sm:text-sm font-black rounded-full transition flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Get Now for {formatPrice(prices[1])}</span>
                    <span className="text-base font-bold">»</span>
                  </button>
                  <button
                    onClick={() => toggleExpand(1)}
                    className="px-5 py-3.5 btn-secondary-outline text-white text-xs font-bold rounded-full transition flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <span>{expandedBox === 1 ? 'Hide Specifications' : 'Full Specifications'}</span>
                    {expandedBox === 1 ? <ChevronUp className="w-4 h-4 text-[#b2ebf2]" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </button>
                  <button
                    onClick={() => navigate('service-detail', getSlugForIndex(1))}
                    className="text-xs text-slate-400 hover:text-[#b2ebf2] font-bold underline text-center sm:ml-auto"
                  >
                    View Details Page
                  </button>
                </div>

                {/* EXPANDABLE DEEP SPECIFICATIONS PANEL */}
                {expandedBox === 1 && (
                  <div className="mt-6 p-5 bg-[#0e1622] text-white rounded-2xl border border-slate-700/80 space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <span className="text-xs font-black text-[#b2ebf2] uppercase tracking-wider flex items-center gap-1.5">
                        <Cpu className="w-4 h-4" /> Technical Deep-Dive & Performance Stack
                      </span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                        Google Speed Score: 99/100
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-slate-400 font-bold block mb-1">Architecture & Tech Stack:</span>
                        <ul className="space-y-1 text-slate-300">
                          <li>• React 18, Vite & Tailwind CSS modern stack</li>
                          <li>• Express Node.js backend with Cloud Run CDN</li>
                          <li>• Integrated Razorpay, UPI & Stripe Checkout</li>
                          <li>• SEO Metadata Schema & Mobile-First Layout</li>
                        </ul>
                      </div>
                      <div>
                        <span className="text-slate-400 font-bold block mb-1">Turnaround & SLA:</span>
                        <ul className="space-y-1 text-slate-300">
                          <li>• SLA: 3 to 5 Days Complete Build</li>
                          <li>• Includes Free Domain & SSL Configuration</li>
                          <li>• 100% Full Source Code & GitHub Ownership</li>
                          <li>• 30 Days Free Post-Launch Maintenance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Custom Web Mockup Frame */}
              <div className="lg:col-span-5">
                <ScrollDrivenRightVisual initialX={150} rotateAngle={8}>
                  <div className="bg-[#1a2332] rounded-2xl border border-slate-700 shadow-2xl p-4">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                      <div className="flex items-center space-x-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                      </div>
                      <div className="bg-[#0f172a] px-3 py-1 rounded text-[10px] text-cyan-300 font-mono">https://yourbrand.com</div>
                    </div>

                    <div className="bg-[#0f172a] p-4 rounded-xl border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <Code2 className="w-4 h-4 text-[#b2ebf2]" /> Web Performance Index
                        </span>
                        <span className="bg-emerald-500/20 text-emerald-400 font-bold text-[10px] px-2 py-0.5 rounded border border-emerald-500/30">
                          SCORE: 99 / 100
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-[11px] text-slate-300">
                          <span>First Contentful Paint (FCP)</span>
                          <span className="text-emerald-400 font-bold">0.4s</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-1.5">
                          <div className="bg-emerald-400 h-1.5 rounded-full w-[98%]"></div>
                        </div>

                        <div className="flex justify-between text-[11px] text-slate-300 pt-1">
                          <span>Speed Index Metric</span>
                          <span className="text-emerald-400 font-bold">0.6s</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-1.5">
                          <div className="bg-cyan-400 h-1.5 rounded-full w-[96%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollDrivenRightVisual>
              </div>

            </div>
          </motion.div>

          {/* BOX 3: Social Media & Viral Growth Engine */}
          <motion.div 
            initial={{ opacity: 0, x: -80, rotateY: -10, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.015, rotateX: 2, rotateY: -2 }}
            style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
            className="bg-[#131b26] border border-slate-700/70 hover:border-cyan-400/50 rounded-3xl p-6 sm:p-10 shadow-2xl transition-all duration-300 transform group relative overflow-hidden text-slate-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column - Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-[#b2ebf2] border border-slate-700 text-xs font-extrabold tracking-wide uppercase flex items-center gap-1.5">
                    Service #3 • Organic Growth
                  </span>
                  <span className="text-xs font-bold text-slate-400">Instagram, LinkedIn & YouTube</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug group-hover:text-[#b2ebf2] transition-colors">
                  Social Media & Viral Organic Growth Campaigns
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Turn casual viewers into active followers and loyal clients with automated content schedules, viral video editing, and strategic hashtag positioning.
                </p>

                {/* Bullets with Green Checkmarks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start space-x-2 text-xs font-medium text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>30 HD Short-Form Viral Reels/Shorts</span>
                  </div>
                  <div className="flex items-start space-x-2 text-xs font-medium text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>AI Trend Analysis & Script Writing</span>
                  </div>
                  <div className="flex items-start space-x-2 text-xs font-medium text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Strategic Hashtag & Keyword SEO</span>
                  </div>
                  <div className="flex items-start space-x-2 text-xs font-medium text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Monthly Engagement & ROI Reports</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    onClick={() => {
                      if (onInstantBuy) onInstantBuy('Social Media & Viral Organic Growth Campaigns', prices[2]);
                      else navigate('service-detail', getSlugForIndex(2));
                    }}
                    className="px-8 py-4 btn-cyan-primary text-slate-950 text-xs sm:text-sm font-black rounded-full transition flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Get Now for {formatPrice(prices[2])}</span>
                    <span className="text-base font-bold">»</span>
                  </button>
                  <button
                    onClick={() => toggleExpand(2)}
                    className="px-5 py-3.5 btn-secondary-outline text-white text-xs font-bold rounded-full transition flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <span>{expandedBox === 2 ? 'Hide Specifications' : 'Full Specifications'}</span>
                    {expandedBox === 2 ? <ChevronUp className="w-4 h-4 text-[#b2ebf2]" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </button>
                  <button
                    onClick={() => navigate('service-detail', getSlugForIndex(2))}
                    className="text-xs text-slate-400 hover:text-[#b2ebf2] font-bold underline text-center sm:ml-auto"
                  >
                    View Details Page
                  </button>
                </div>

                {/* EXPANDABLE DEEP SPECIFICATIONS PANEL */}
                {expandedBox === 2 && (
                  <div className="mt-6 p-5 bg-[#0e1622] text-white rounded-2xl border border-slate-700/80 space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <span className="text-xs font-black text-[#b2ebf2] uppercase tracking-wider flex items-center gap-1.5">
                        <Cpu className="w-4 h-4" /> Technical Deep-Dive & SLA
                      </span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                        Guaranteed 340% Reach Growth
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-slate-400 font-bold block mb-1">Deliverables Included:</span>
                        <ul className="space-y-1 text-slate-300">
                          <li>• 30 HD Vertical Short Reels/Shorts per month</li>
                          <li>• AI Viral Scriptwriting & Trend Hook formulas</li>
                          <li>• Strategic Hashtag Clusters & SEO indexing</li>
                          <li>• Automated Instagram Broadcast Drips</li>
                        </ul>
                      </div>
                      <div>
                        <span className="text-slate-400 font-bold block mb-1">Execution SLA & Tools:</span>
                        <ul className="space-y-1 text-slate-300">
                          <li>• SLA: Weekly Content Batches</li>
                          <li>• Tools: CapCut Pro, Midjourney V6, Descript AI</li>
                          <li>• Support: 1-on-1 Dedicated Growth Manager</li>
                          <li>• Analytics: Monthly PDF ROI & Reach Reports</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Custom Analytics Graph Frame */}
              <div className="lg:col-span-5">
                <ScrollDrivenRightVisual initialX={160} rotateAngle={10}>
                  <div className="bg-[#1a2332] rounded-2xl border border-slate-700 shadow-2xl p-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <span className="text-xs font-bold text-white flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-[#b2ebf2]" /> Organic Reach Growth
                      </span>
                      <span className="bg-cyan-500/20 text-[#b2ebf2] text-[10px] font-bold px-2 py-0.5 rounded border border-cyan-500/30">
                        +342% THIS MONTH
                      </span>
                    </div>

                    <div className="mt-4 bg-[#0f172a] p-4 rounded-xl border border-slate-800 space-y-3">
                      <div className="flex items-baseline justify-between">
                        <span className="text-2xl font-black text-white">1,240,800</span>
                        <span className="text-xs text-slate-400">Total Views</span>
                      </div>

                      <div className="h-16 flex items-end justify-between gap-1 pt-2">
                        <div className="bg-slate-800 w-full h-[25%] rounded-t"></div>
                        <div className="bg-slate-700 w-full h-[40%] rounded-t"></div>
                        <div className="bg-cyan-900 w-full h-[55%] rounded-t"></div>
                        <div className="bg-cyan-700 w-full h-[70%] rounded-t"></div>
                        <div className="bg-cyan-500 w-full h-[88%] rounded-t"></div>
                        <div className="bg-[#b2ebf2] w-full h-[100%] rounded-t shadow-lg"></div>
                      </div>
                    </div>
                  </div>
                </ScrollDrivenRightVisual>
              </div>

            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* UNIQUE MIDDLE SHOWCASE BANNER: FEMALE AI SERVICE PRESENTER & EXPERT HUB */}
          {/* ========================================================================= */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92, rotateX: 8 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
            className="my-14 bg-[#131b26] rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl relative overflow-hidden group"
          >
            
            {/* Background Decorative Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: Girl Presenter Portrait with Floating Badges */}
              <div className="lg:col-span-6 relative">
                <ScrollDrivenRightVisual initialX={160} rotateAngle={10}>
                  <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-[#0c131f]">
                    <img 
                      src={serviceGirlImg} 
                      alt="AI Service Specialist & Engineering Team Lead"
                      className="w-full h-auto object-cover max-h-[420px] mx-auto hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c131f]/90 via-transparent to-transparent"></div>
                    
                    <div className="absolute bottom-4 left-4 right-4 bg-[#131b26]/90 backdrop-blur border border-slate-700/80 p-3 rounded-xl flex items-center justify-between">
                      <div>
                        <div className="text-xs font-extrabold text-white flex items-center gap-1.5">
                          <Award className="w-4 h-4 text-amber-400" />
                          <span>Executive AI Service Specialist</span>
                        </div>
                        <div className="text-[10px] text-slate-400 font-medium mt-0.5">
                          Guaranteed 10x Operational Speed & ROI
                        </div>
                      </div>
                      <span className="bg-emerald-400 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                        ● Active SLA
                      </span>
                    </div>
                  </div>

                  {/* Floating 3D Badge overlays around image */}
                  <div className="absolute -top-3 -left-3 animate-float-left bg-[#131b26] text-white border border-slate-700 px-3 py-1.5 rounded-xl shadow-xl flex items-center space-x-1.5 text-xs font-bold">
                    <span className="text-emerald-400">⚡</span>
                    <span>ChatGPT 4o & Gemini</span>
                  </div>
                  <div className="absolute top-1/3 -right-3 animate-float-right bg-[#131b26] text-white border border-slate-700 px-3 py-1.5 rounded-xl shadow-xl flex items-center space-x-1.5 text-xs font-bold">
                    <span className="text-cyan-400">💬</span>
                    <span>Meta WhatsApp Bot</span>
                  </div>
                  <div className="absolute -bottom-3 right-6 animate-float-slow bg-[#131b26] text-white border border-slate-700 px-3 py-1.5 rounded-xl shadow-xl flex items-center space-x-1.5 text-xs font-bold">
                    <span className="text-amber-400">✨</span>
                    <span>Midjourney V6 4K</span>
                  </div>
                </ScrollDrivenRightVisual>
              </div>

              {/* Right Column: Service Hub Presentation & Core Advantages */}
              <div className="lg:col-span-6 space-y-6 text-white">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-[#b2ebf2] border border-slate-700 text-xs font-extrabold uppercase tracking-wider">
                  <Rocket className="w-4 h-4 text-[#b2ebf2]" />
                  <span>Enterprise Service Execution Engine</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                  Intelligent Agency Services <br />
                  <span className="text-[#b2ebf2]">
                    Custom-Tailored For Your Brand
                  </span>
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed font-normal">
                  Our dedicated service delivery engineers don't just supply code—we build fully automated ecosystems. From WhatsApp auto-responders that close sales 24/7 to viral social video campaigns and custom web apps, every service comes backed by SLA speed and transparent reporting.
                </p>

                {/* Grid of Key Service Highlights */}
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="bg-[#1a2332] p-3 rounded-xl border border-slate-700 flex items-start space-x-2">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-extrabold text-white">24-48 Hour SLA</div>
                      <div className="text-[10px] text-slate-400">Fast service delivery</div>
                    </div>
                  </div>

                  <div className="bg-[#1a2332] p-3 rounded-xl border border-slate-700 flex items-start space-x-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-extrabold text-white">100% Verified ROI</div>
                      <div className="text-[10px] text-slate-400">Tracked lead conversion</div>
                    </div>
                  </div>

                  <div className="bg-[#1a2332] p-3 rounded-xl border border-slate-700 flex items-start space-x-2">
                    <Layers className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-extrabold text-white">38 Micro-Services</div>
                      <div className="text-[10px] text-slate-400">Full stack agency menu</div>
                    </div>
                  </div>

                  <div className="bg-[#1a2332] p-3 rounded-xl border border-slate-700 flex items-start space-x-2">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-extrabold text-white">Custom AI Prompts</div>
                      <div className="text-[10px] text-slate-400">Trained on your brand voice</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={() => navigate('services')}
                    className="w-full sm:w-auto px-8 py-4 btn-cyan-primary text-slate-950 font-black text-xs sm:text-sm rounded-2xl transition flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Browse All 38 Micro-Services Catalog</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>

          {/* BOX 4: AI Content & Photorealistic Image Studio */}
          <motion.div 
            initial={{ opacity: 0, x: 80, rotateY: 10, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.015, rotateX: 2, rotateY: 2 }}
            style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
            className="bg-[#131b26] border border-slate-700/70 hover:border-cyan-400/50 rounded-3xl p-6 sm:p-10 shadow-2xl transition-all duration-300 transform group relative overflow-hidden text-slate-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column - Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-[#b2ebf2] border border-slate-700 text-xs font-extrabold tracking-wide uppercase flex items-center gap-1.5">
                    Service #4 • AI Media Studio
                  </span>
                  <span className="text-xs font-bold text-slate-400">Generative Images & Copy</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug group-hover:text-[#b2ebf2] transition-colors">
                  AI Content & Photorealistic Media Studio
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Generate studio-quality 4K product photos, high-converting ad headlines, and SEO articles using customized AI prompt templates.
                </p>

                {/* Bullets with Green Checkmarks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start space-x-2 text-xs font-medium text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>4K Studio Quality Product Renders</span>
                  </div>
                  <div className="flex items-start space-x-2 text-xs font-medium text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>SEO-Optimized Blog Posts & Headlines</span>
                  </div>
                  <div className="flex items-start space-x-2 text-xs font-medium text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Multilingual Generation (25+ Languages)</span>
                  </div>
                  <div className="flex items-start space-x-2 text-xs font-medium text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Brand Voice & Consistency Guarantee</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    onClick={() => {
                      if (onInstantBuy) onInstantBuy('AI Content & Photorealistic Media Studio', prices[3]);
                      else navigate('service-detail', getSlugForIndex(3));
                    }}
                    className="px-8 py-4 btn-cyan-primary text-slate-950 text-xs sm:text-sm font-black rounded-full transition flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Get Now for {formatPrice(prices[3])}</span>
                    <span className="text-base font-bold">»</span>
                  </button>
                  <button
                    onClick={() => toggleExpand(3)}
                    className="px-5 py-3.5 btn-secondary-outline text-white text-xs font-bold rounded-full transition flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <span>{expandedBox === 3 ? 'Hide Specifications' : 'Full Specifications'}</span>
                    {expandedBox === 3 ? <ChevronUp className="w-4 h-4 text-[#b2ebf2]" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </button>
                  <button
                    onClick={() => navigate('service-detail', getSlugForIndex(3))}
                    className="text-xs text-slate-400 hover:text-[#b2ebf2] font-bold underline text-center sm:ml-auto"
                  >
                    View Details Page
                  </button>
                </div>

                {/* EXPANDABLE DEEP SPECIFICATIONS PANEL */}
                {expandedBox === 3 && (
                  <div className="mt-6 p-5 bg-[#0e1622] text-white rounded-2xl border border-slate-700/80 space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <span className="text-xs font-black text-[#b2ebf2] uppercase tracking-wider flex items-center gap-1.5">
                        <Cpu className="w-4 h-4" /> Generative AI Engines & Specifications
                      </span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                        4K Studio Upscaling
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-slate-400 font-bold block mb-1">AI Generative Models Used:</span>
                        <ul className="space-y-1 text-slate-300">
                          <li>• Midjourney V6 photorealistic rendering</li>
                          <li>• Stable Diffusion XL custom LoRA fine-tuning</li>
                          <li>• GPT-4o copy engine for headlines & blogs</li>
                          <li>• Multi-lingual translation in 25+ Indian languages</li>
                        </ul>
                      </div>
                      <div>
                        <span className="text-slate-400 font-bold block mb-1">Deliverables & Speed:</span>
                        <ul className="space-y-1 text-slate-300">
                          <li>• SLA: 24 Hour Turnaround Batch Delivery</li>
                          <li>• Includes High-Res TIFF & PNG Export Formats</li>
                          <li>• Commercial Rights & Full Copyright Transfer</li>
                          <li>• Direct Integration into Social Scheduler</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Custom Media Frame */}
              <div className="lg:col-span-5">
                <ScrollDrivenRightVisual initialX={150} rotateAngle={8}>
                  <div className="bg-[#1a2332] rounded-2xl border border-slate-700 shadow-2xl p-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <ImageIcon className="w-4 h-4 text-[#b2ebf2]" /> AI Image Generator Engine
                    </span>
                    <span className="bg-cyan-500/20 text-[#b2ebf2] text-[10px] font-bold px-2 py-0.5 rounded border border-cyan-500/30">
                      4K RENDER
                    </span>
                  </div>

                  <div className="mt-3 bg-[#0f172a] p-3 rounded-xl border border-slate-800 space-y-2">
                    <div className="text-[11px] font-mono text-slate-300 bg-[#0c131f] p-2 rounded border border-slate-800">
                      <span className="text-[#b2ebf2] font-bold">Prompt:</span> "Minimalist studio shot of premium tech product on sleek dark background with dramatic blue lighting"
                    </div>

                    <div className="h-28 rounded-lg bg-gradient-to-tr from-[#0f172a] via-[#131b26] to-[#0f172a] border border-slate-800 flex items-center justify-center relative overflow-hidden">
                      <div className="text-center z-10 space-y-1">
                        <Sparkles className="w-6 h-6 text-[#b2ebf2] mx-auto animate-pulse" />
                        <span className="text-xs font-bold text-slate-200">Generating Ultra-HD Render</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollDrivenRightVisual>
            </div>

            </div>
          </motion.div>

          {/* BOX 5: Automated CRM & Lead Pipelines */}
          <motion.div 
            initial={{ opacity: 0, x: -80, rotateY: -10, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.015, rotateX: 2, rotateY: -2 }}
            style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
            className="bg-[#131b26] border border-slate-700/70 hover:border-cyan-400/50 rounded-3xl p-6 sm:p-10 shadow-2xl transition-all duration-300 transform group relative overflow-hidden text-slate-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column - Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-[#b2ebf2] border border-slate-700 text-xs font-extrabold tracking-wide uppercase flex items-center gap-1.5">
                    Service #5 • CRM & Workflows
                  </span>
                  <span className="text-xs font-bold text-slate-400">Zero-Code Automation</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug group-hover:text-[#b2ebf2] transition-colors">
                  Automated CRM & Lead Qualification Pipelines
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Eliminate manual copy-pasting and missed leads. Connect lead forms automatically to CRM databases, email drip sequences, and team notifications.
                </p>

                {/* Bullets with Green Checkmarks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start space-x-2 text-xs font-medium text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Instant Lead Alerts via Email & WhatsApp</span>
                  </div>
                  <div className="flex items-start space-x-2 text-xs font-medium text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Automatic Google Calendar / Calendly Sync</span>
                  </div>
                  <div className="flex items-start space-x-2 text-xs font-medium text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Multi-Stage Lead Scoring & Conversion Funnels</span>
                  </div>
                  <div className="flex items-start space-x-2 text-xs font-medium text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Custom Webhook & Zapier / Make Integrations</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    onClick={() => {
                      if (onInstantBuy) onInstantBuy('Automated CRM & Lead Qualification Pipelines', prices[4]);
                      else navigate('service-detail', getSlugForIndex(4));
                    }}
                    className="px-8 py-4 btn-cyan-primary text-slate-950 text-xs sm:text-sm font-black rounded-full transition flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Get Now for {formatPrice(prices[4])}</span>
                    <span className="text-base font-bold">»</span>
                  </button>
                  <button
                    onClick={() => toggleExpand(4)}
                    className="px-5 py-3.5 btn-secondary-outline text-white text-xs font-bold rounded-full transition flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <span>{expandedBox === 4 ? 'Hide Specifications' : 'Full Specifications'}</span>
                    {expandedBox === 4 ? <ChevronUp className="w-4 h-4 text-[#b2ebf2]" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </button>
                  <button
                    onClick={() => navigate('service-detail', getSlugForIndex(4))}
                    className="text-xs text-slate-400 hover:text-[#b2ebf2] font-bold underline text-center sm:ml-auto"
                  >
                    View Details Page
                  </button>
                </div>

                {/* EXPANDABLE DEEP SPECIFICATIONS PANEL */}
                {expandedBox === 4 && (
                  <div className="mt-6 p-5 bg-[#0e1622] text-white rounded-2xl border border-slate-700/80 space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <span className="text-xs font-black text-[#b2ebf2] uppercase tracking-wider flex items-center gap-1.5">
                        <Cpu className="w-4 h-4" /> Workflow Architecture & Integrations
                      </span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                        Zero Dropped Leads
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-slate-400 font-bold block mb-1">Integrations Supported:</span>
                        <ul className="space-y-1 text-slate-300">
                          <li>• Meta Lead Ads & Google Ads webhooks</li>
                          <li>• Google Sheets, HubSpot & Zoho CRM Sync</li>
                          <li>• Automated Razorpay invoice & payment triggers</li>
                          <li>• Slack / WhatsApp team alert dispatchers</li>
                        </ul>
                      </div>
                      <div>
                        <span className="text-slate-400 font-bold block mb-1">Execution SLA & Guarantee:</span>
                        <ul className="space-y-1 text-slate-300">
                          <li>• SLA: 24 to 48 Hours Full Setup</li>
                          <li>• Includes Custom Webhook Endpoints & API Tokens</li>
                          <li>• Real-Time Lead Scoring & Anti-Spam Filtering</li>
                          <li>• 99.9% Pipeline Reliability Guarantee</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Custom Workflow Nodes Frame */}
              <div className="lg:col-span-5">
                <ScrollDrivenRightVisual initialX={150} rotateAngle={8}>
                  <div className="bg-[#1a2332] rounded-2xl border border-slate-700 shadow-2xl p-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <span className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Workflow className="w-4 h-4 text-[#b2ebf2]" /> Automated Workflow Canvas
                      </span>
                      <span className="bg-cyan-500/20 text-[#b2ebf2] text-[10px] font-bold px-2 py-0.5 rounded border border-cyan-500/30">
                        TRIGGERED
                      </span>
                    </div>

                    <div className="mt-3 space-y-2 text-xs">
                      <div className="bg-[#0f172a] p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                          <span className="font-bold text-slate-200">1. Form Submission Received</span>
                        </div>
                        <span className="text-[10px] text-slate-400">Trigger</span>
                      </div>

                      <div className="w-0.5 h-3 bg-cyan-500/40 mx-auto"></div>

                      <div className="bg-[#0f172a] p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                          <span className="font-bold text-slate-200">2. AI Lead Qualification Score</span>
                        </div>
                        <span className="text-[10px] text-emerald-400 font-bold">94/100</span>
                      </div>

                      <div className="w-0.5 h-3 bg-emerald-500/40 mx-auto"></div>

                      <div className="bg-emerald-950/60 p-2.5 rounded-lg border border-emerald-800 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="font-bold text-emerald-200">3. WhatsApp Alert & CRM Entry</span>
                        </div>
                        <span className="text-[10px] bg-emerald-400 text-slate-950 px-1.5 py-0.5 rounded font-black">DONE</span>
                      </div>
                    </div>
                  </div>
                </ScrollDrivenRightVisual>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Catalog Navigation Banner (Connecting Front Page 5 Services to Full Menu Catalog) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 bg-[#131b26] rounded-3xl p-8 text-center text-white relative overflow-hidden max-w-5xl mx-auto shadow-2xl border border-slate-700/80"
        >
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <span className="px-3.5 py-1 rounded-full bg-slate-800 text-[#b2ebf2] border border-slate-700 text-xs font-bold uppercase tracking-widest inline-block mb-3">
            38+ Agency Services Available
          </span>
          
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-2 text-white">
            Need Other Specialized Growth Solutions?
          </h3>
          
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            Explore our complete agency catalog featuring all 38+ micro-services across Web Development, AI Automation, Organic Growth, and Custom API Integrations.
          </p>

          <button
            onClick={() => navigate('services')}
            className="px-8 py-4 btn-cyan-primary text-slate-950 font-black rounded-full text-xs sm:text-sm shadow-xl transition inline-flex items-center space-x-2 cursor-pointer"
          >
            <span>Explore All 38+ Micro-Services in Menu Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

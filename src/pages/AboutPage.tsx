import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Zap, Globe, Users, Award, ArrowRight, Bot, Cpu } from 'lucide-react';

interface AboutPageProps {
  navigate: (route: string, slug?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-[#064e3b] text-white min-h-screen">
      {/* Hero Header */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-emerald-900/40">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-extrabold uppercase tracking-widest backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>About Goomo Digital Agency</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Next-Generation <span className="text-emerald-300">AI & Social Growth</span> Agency
          </h1>
          <p className="text-base sm:text-lg text-emerald-100/80 leading-relaxed font-normal">
            Goomo Digital Agency is a full-stack digital agency delivering 38+ enterprise micro-services. We bridge cutting-edge artificial intelligence, 24/7 WhatsApp customer automation, and hyper-targeted social growth to transform modern businesses.
          </p>
        </motion.div>
      </section>

      {/* Core Values / Stats */}
      <section className="py-16 bg-transparent border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="p-8 bg-[#131b26]/90 border border-emerald-500/20 rounded-2xl shadow-xl backdrop-blur-md"
            >
              <div className="w-12 h-12 bg-emerald-500/20 text-emerald-300 rounded-xl flex items-center justify-center mb-5 font-bold border border-emerald-500/30">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-2">Autonomous AI Integration</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We engineer intelligent custom conversational agents and CRM automations that convert visitors into active clients 24 hours a day without human delay.
              </p>
            </motion.div>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="p-8 bg-[#131b26]/90 border border-emerald-500/20 rounded-2xl shadow-xl backdrop-blur-md"
            >
              <div className="w-12 h-12 bg-emerald-500/20 text-emerald-300 rounded-xl flex items-center justify-center mb-5 font-bold border border-emerald-500/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-2">100% Fixed Transparent Pricing</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                No hidden retainer markups or obscure hourly billing. Every single service item carries a published, verified price tag with full SLA guarantees.
              </p>
            </motion.div>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="p-8 bg-[#131b26]/90 border border-emerald-500/20 rounded-2xl shadow-xl backdrop-blur-md"
            >
              <div className="w-12 h-12 bg-emerald-500/20 text-emerald-300 rounded-xl flex items-center justify-center mb-5 font-bold border border-emerald-500/30">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-2">Agile Sprint Delivery</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our modular engineering process guarantees execution turnarounds between 3 to 10 business days for complete web applications, CRM workflows, and campaign setups.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-gradient-to-br from-slate-900/90 via-emerald-950/70 to-slate-950 border border-emerald-500/30 text-white p-10 sm:p-14 rounded-3xl shadow-2xl relative overflow-hidden backdrop-blur-md"
          >
            <div className="relative z-10 space-y-6">
              <span className="text-xs font-black text-emerald-400 uppercase tracking-widest">
                Our Foundational Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Democratizing Enterprise-Grade Automation for Ambitious Brands Worldwide
              </h2>
              <p className="text-emerald-100/90 text-sm leading-relaxed max-w-3xl">
                We believe every growing business deserves instant, hyper-scalable technology. By combining automated AI agents with expert human design and strategy, we enable founders and enterprise teams to scale revenue without exponentially increasing overhead.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('services')}
                  className="px-6 py-3.5 btn-cyan-primary text-slate-950 font-black text-xs rounded-xl shadow-lg transition flex items-center space-x-2 cursor-pointer"
                >
                  <span>Explore 38+ Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate('contact')}
                  className="px-6 py-3.5 bg-slate-800/80 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition border border-emerald-500/30 cursor-pointer"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

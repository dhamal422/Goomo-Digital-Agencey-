import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  Zap, 
  ShieldCheck, 
  Search, 
  SlidersHorizontal,
  Bot,
  MessageSquare,
  BarChart3,
  Globe,
  Star,
  Layers,
  Award,
  Clock,
  TrendingUp,
  Check
} from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { FiveFeaturedBoxes } from '../components/FiveFeaturedBoxes';
import { Testimonials } from '../components/Testimonials';
import { Service } from '../types';
import { CATEGORIES_LIST } from '../data/seedServices';
import { useAuth } from '../context/AuthContext';
import heroGirlImg from '../assets/images/ai_hero_girl_1785633344664.jpg';
import agencyLeaderGirlImg from '../assets/images/agency_leader_female_1786720136118.jpg';

interface HomePageProps {
  navigate: (route: string, slug?: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  navigate,
  searchQuery,
  setSearchQuery
}) => {
  const { openAuthModal, user } = useAuth();
  const [services, setServices] = useState<Service[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [loading, setLoading] = useState(true);

  // Lead Form state
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadService, setLeadService] = useState('24/7 AI WhatsApp Agents');
  const [leadMessage, setLeadMessage] = useState('');
  const [leadSuccess, setLeadSuccess] = useState(false);
  const [leadLoading, setLeadLoading] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await fetch('/api/services');
      const data = await res.json();
      if (data.success) {
        setServices(data.data);
      }
    } catch (err) {
      console.error('Failed to fetch services', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredServices = services.filter((s) => {
    const matchesCategory = selectedCategory === 'All' || s.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadLoading(true);

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: leadName,
          clientEmail: leadEmail,
          selectedService: leadService,
          message: leadMessage
        })
      });

      const data = await res.json();
      if (data.success) {
        setLeadSuccess(true);
        setLeadName('');
        setLeadEmail('');
        setLeadMessage('');
      }
    } catch (err) {
      alert('Error submitting inquiry');
    } finally {
      setLeadLoading(false);
    }
  };

  const TRUST_TICKER_ITEMS = [
    { label: 'Recent Projects Completed', value: '450+', icon: '🚀', badge: 'Verified SLA' },
    { label: 'Active Clients', value: '38', icon: '⭐', badge: 'Live Retainers' },
    { label: 'Average Delivery Time', value: '24-48 Hours', icon: '⚡', badge: 'Fast Turnaround' },
    { label: 'Client Satisfaction Rating', value: '4.98 / 5.0', icon: '🏆', badge: 'Top Rated' },
    { label: 'AI & WhatsApp Messages Executed', value: '1,000,000+', icon: '🤖', badge: 'High Concurrency' },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-[#a9f1df] to-[#ffbbbb] hover:from-[#9be8d7] hover:to-[#ffa4a4] transition-all duration-500 text-slate-100 min-h-screen relative overflow-hidden border-none">
      
      {/* AUTO-SCROLLING HORIZONTAL TRUST TICKER AT TOP OF HOMEPAGE */}
      <div className="bg-[#080d15] text-white py-2.5 overflow-hidden border-none relative z-20 shadow-md">
        <div className="animate-marquee flex items-center space-x-12 whitespace-nowrap text-xs font-bold">
          {[...TRUST_TICKER_ITEMS, ...TRUST_TICKER_ITEMS, ...TRUST_TICKER_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-2.5 shrink-0">
              <span className="text-sm">{item.icon}</span>
              <span className="text-slate-400 font-medium">{item.label}:</span>
              <span className="font-black text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">{item.value}</span>
              <span className="text-[10px] uppercase font-extrabold bg-cyan-500/20 text-[#b2ebf2] px-2 py-0.5 rounded tracking-wider border border-cyan-500/30">{item.badge}</span>
              <span className="text-slate-700 font-normal ml-4">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* HERO SECTION - DOUBLE NESTED CONTAINER ARCHITECTURE */}
      <section className="relative pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center bg-[#f8fafc] rounded-3xl my-4">
        
        {/* Outer Container with Gradient Green with Gray */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gradient-to-br from-emerald-950/80 via-slate-900/90 to-slate-950/95 border border-emerald-500/20 rounded-3xl p-6 sm:p-12 shadow-2xl backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Top Tag Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-800/90 border border-emerald-500/30 mb-6 text-xs font-bold text-slate-200 shadow-inner"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Full-Stack Social Media & AI Automation Agency</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-emerald-400 font-black">38 Micro-Services</span>
          </motion.div>

          {/* Crisp Premium White Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight max-w-3xl mx-auto leading-snug mb-4"
          >
            Digital Marketing Agency, Powered By <span className="text-emerald-300">AI & Intelligent Automation</span>.
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed mb-8"
          >
            We bridge the gap between creative marketing and high-tech engineering. Our agency deploys intelligent AI systems, custom software development, and viral social strategies designed to maximize your revenue automatically.
          </motion.p>

          {/* Hero Service Search Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl mx-auto mb-10"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate('services');
              }}
              className="relative flex items-center group transition-all duration-300"
            >
              <div className="absolute left-4 pointer-events-none text-slate-400 group-hover:text-[#b2ebf2] transition-colors">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search 38+ AI & Marketing Services (e.g. WhatsApp Bot, SEO, Web Design)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-32 py-4 bg-[#1a2332] border border-slate-700 group-hover:border-cyan-400 focus:border-cyan-400 rounded-2xl text-sm font-semibold text-white placeholder-slate-400 shadow-inner group-hover:shadow-xl transition-all outline-none"
              />
              <button
                type="submit"
                className="absolute right-2.5 px-5 py-2.5 btn-cyan-primary text-slate-950 text-xs font-black rounded-xl transition flex items-center space-x-1.5 cursor-pointer"
              >
                <span>Search</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>

          {/* FEMALE PRESENTER IMAGE SECTION */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-2xl mx-auto mb-10 group"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#1a2332]">
              <img 
                src={heroGirlImg} 
                alt="AI Agency Female Founder Presenter" 
                className="w-full h-auto object-cover max-h-[460px] mx-auto hover:scale-102 transition duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating AI Badges around the Girl Image */}
            <div className="absolute -top-3 -left-2 sm:-left-6 animate-float-left bg-[#131b26]/95 backdrop-blur border border-slate-700 px-3.5 py-1.5 rounded-xl shadow-lg flex items-center space-x-1.5 text-xs font-extrabold text-white">
              <span className="text-emerald-400">⚡</span>
              <span>ChatGPT 4o</span>
            </div>
            <div className="absolute top-1/4 -right-2 sm:-right-6 animate-float-right bg-[#131b26]/95 backdrop-blur border border-slate-700 px-3.5 py-1.5 rounded-xl shadow-lg flex items-center space-x-1.5 text-xs font-extrabold text-white">
              <span className="text-cyan-400">🤖</span>
              <span>24/7 AI Bot</span>
            </div>
            <div className="absolute bottom-6 -left-2 sm:-left-6 animate-float-right bg-[#131b26]/95 backdrop-blur border border-slate-700 px-3.5 py-1.5 rounded-xl shadow-lg flex items-center space-x-1.5 text-xs font-extrabold text-white">
              <span className="text-amber-400">✨</span>
              <span>Midjourney V6</span>
            </div>
          </motion.div>

          {/* BUTTON CTA SECTION WITH ANIMATED BACKGROUND */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl mx-auto mb-12 p-6 rounded-3xl border border-slate-700 shadow-xl animated-dot-bg relative overflow-hidden bg-[#1a2332]/90 backdrop-blur"
          >
            <div className="relative z-10 space-y-3">
              <button
                onClick={() => navigate('services')}
                className="w-full py-4 px-8 btn-cyan-primary text-slate-950 font-black text-base sm:text-lg rounded-2xl transition flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Get Now for All 38 AI & Marketing Services</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-xs font-bold text-slate-300 tracking-tight">
                ⚡ <span className="text-[#b2ebf2] uppercase font-black">Hurry Up! Limited Time Offer</span> — Unlock Enterprise AI Automation
              </p>
            </div>
          </motion.div>

          {/* Metrics Bar inside Double-Nested Container */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-800 max-w-4xl mx-auto"
          >
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">38+</div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Micro-Services</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-[#b2ebf2] tracking-tight">98%</div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">WhatsApp Open Rate</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">24/7</div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">AI Response SLA</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight">100%</div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">SLA Execution Guarantee</div>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* 5 FEATURED SERVICES SECTION */}
      <FiveFeaturedBoxes navigate={navigate} services={services} />

      {/* FEATURED SERVICES CATALOG (FIRST 6 TOP SERVICES ON HOMEPAGE) */}
      <section className="py-16 bg-white rounded-[2.5rem] sm:rounded-[3rem] my-8 max-w-7xl mx-auto border border-slate-200/80 shadow-xl" id="services-catalog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#131b26]/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md"
          >
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <span className="text-xs font-extrabold text-[#b2ebf2] uppercase tracking-widest">
                  Featured Agency Services (Showing Top 6 of 38+)
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
                  Core AI & Growth Solutions
                </h2>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => navigate('services')}
                  className="px-5 py-2.5 btn-cyan-primary text-slate-950 text-xs font-black rounded-xl shadow-md transition flex items-center space-x-1.5 cursor-pointer"
                >
                  <span>Explore All 38 Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-4 scrollbar-none border-b border-slate-800 mb-8">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                  selectedCategory === 'All'
                    ? 'btn-cyan-primary text-slate-950 shadow-md'
                    : 'pill-tag-dark text-slate-300'
                }`}
              >
                All Featured ({services.length})
              </button>

              {CATEGORIES_LIST.map((cat) => {
                const count = services.filter((s) => s.category === cat).length;
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                      isSelected
                        ? 'btn-cyan-primary text-slate-950 shadow-md'
                        : 'pill-tag-dark text-slate-300'
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>

            {/* Services Grid Sliced to 6 items on Homepage */}
            {loading ? (
              <div className="py-20 text-center text-slate-400 text-sm">
                Loading micro-services from agency database...
              </div>
            ) : filteredServices.length === 0 ? (
              <div className="py-16 text-center bg-[#1a2332] rounded-2xl border border-slate-700 p-8 shadow-sm">
                <Search className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <h4 className="text-base font-bold text-white">No matching services found</h4>
                <p className="text-xs text-slate-400 mt-1">Try selecting a different category filter or browse the entire catalog.</p>
                <button
                  onClick={() => navigate('services')}
                  className="mt-4 px-4 py-2 btn-cyan-primary text-slate-950 text-xs font-bold rounded-lg cursor-pointer"
                >
                  View All 38 Services
                </button>
              </div>
            ) : (
              <div className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredServices.slice(0, 6).map((service, idx) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <ServiceCard service={service} navigate={navigate} />
                    </motion.div>
                  ))}
                </div>

                {/* View All Services Callout Banner */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 rounded-2xl bg-[#1a2332] border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
                >
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-black text-white flex items-center justify-center sm:justify-start space-x-2">
                      <Sparkles className="w-4 h-4 text-[#b2ebf2]" />
                      <span>Looking for our complete engineering & marketing directory?</span>
                    </h4>
                    <p className="text-xs text-slate-400">
                      Explore all 38 micro-services across WhatsApp Automation, SaaS Development, Creative Design, and SMM.
                    </p>
                  </div>
                  <button
                    onClick={() => navigate('services')}
                    className="w-full sm:w-auto px-6 py-3 btn-cyan-primary text-slate-950 text-xs font-black rounded-xl shadow-lg transition transform hover:scale-105 whitespace-nowrap cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <span>View All 38 Services ({services.length})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </div>
            )}

          </motion.div>

        </div>
      </section>

      {/* AGENCY CAPABILITIES / VALUE PROPOSITION */}
      <section className="py-20 bg-white rounded-[2.5rem] sm:rounded-[3rem] my-8 max-w-7xl mx-auto border border-slate-200/80 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Executive Female Lead & AI Architecture Showcase Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-4xl mx-auto mb-16 group"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#131b26]">
              <img 
                src={agencyLeaderGirlImg} 
                alt="AI Agency Director and Growth Systems Architect" 
                className="w-full h-auto object-cover max-h-[460px] mx-auto hover:scale-102 transition duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c131f] via-[#0c131f]/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-1.5 text-left">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-[#b2ebf2] border border-cyan-500/40 text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Executive AI Strategy</span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight">
                    Human Intelligence × Autonomous AI Scale
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed font-normal">
                    Supervised by senior technical directors ensuring precision, security, and measurable ROI across every automated deployment.
                  </p>
                </div>

                <button
                  onClick={() => navigate('services')}
                  className="px-6 py-3 btn-cyan-primary text-slate-950 text-xs font-black rounded-xl shadow-lg transition transform hover:scale-105 flex items-center space-x-2 whitespace-nowrap self-start sm:self-auto cursor-pointer"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-3 -right-2 sm:-right-4 animate-float-right bg-[#131b26]/95 backdrop-blur border border-slate-700 px-3.5 py-1.5 rounded-xl shadow-xl flex items-center space-x-1.5 text-xs font-extrabold text-white">
              <span className="text-cyan-400">🤖</span>
              <span>AI Lead Architect</span>
            </div>
            <div className="absolute top-1/3 -left-2 sm:-left-4 animate-float-left bg-[#131b26]/95 backdrop-blur border border-slate-700 px-3.5 py-1.5 rounded-xl shadow-xl flex items-center space-x-1.5 text-xs font-extrabold text-white">
              <span className="text-emerald-400">⚡</span>
              <span>100% SLA Guarantee</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-black text-black uppercase tracking-widest">
              Built For Enterprise Scale
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight mt-2">
              Why Global Brands Choose Goomo Digital Agency
            </h2>
            <p className="text-black font-medium text-sm mt-3 leading-relaxed">
              We combine deep social media strategy with state-of-the-art AI automation to deliver measurable, bottom-line business ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-3xl border border-slate-700/80 bg-[#131b26] shadow-xl hover:border-cyan-400/50 hover:bg-[#1a2332] transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 text-[#b2ebf2] border border-cyan-500/30 flex items-center justify-center font-bold mb-6">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#b2ebf2] transition-colors">Autonomous 24/7 AI Agents</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Deploy trained WhatsApp and web AI agents that handle customer FAQs, qualify incoming leads, and generate payment links without human latency.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-3xl border border-slate-700/80 bg-[#131b26] shadow-xl hover:border-cyan-400/50 hover:bg-[#1a2332] transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 text-[#b2ebf2] border border-cyan-500/30 flex items-center justify-center font-bold mb-6">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#b2ebf2] transition-colors">Transparent Live Rates</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Zero retainers with hidden markup. Log into our portal to view exact base price figures for all 38 micro-services backed by strict SLA guarantees.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-3xl border border-slate-700/80 bg-[#131b26] shadow-xl hover:border-cyan-400/50 hover:bg-[#1a2332] transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 text-[#b2ebf2] border border-cyan-500/30 flex items-center justify-center font-bold mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#b2ebf2] transition-colors">Rapid Turnaround Sprints</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                From website design to WhatsApp API setups and bulk content generation, our modular engineering sprints deliver completed projects in 3 to 10 days.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* CLIENT TESTIMONIALS & SOCIAL PROOF */}
      <Testimonials />

      {/* LEAD GENERATION CONTACT FORM */}
      <section className="py-20 bg-white rounded-[2.5rem] sm:rounded-[3rem] my-8 max-w-7xl mx-auto border border-slate-200/80 shadow-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#131b26] border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl"
          >
            
            <div className="text-center mb-8">
              <span className="text-xs font-extrabold text-[#b2ebf2] uppercase tracking-widest">
                Direct Agency Consultation
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight mt-1">
                Request a Custom Strategy Proposal
              </h3>
              <p className="text-xs text-slate-400 mt-2 max-w-md mx-auto">
                Fill out the form below to receive a detailed execution plan and fixed-price quote from our lead systems architect.
              </p>
            </div>

            {leadSuccess ? (
              <div className="p-8 bg-[#1a2332] border border-emerald-500/40 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">Inquiry Received Successfully!</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you! Our senior systems architect will review your project requirements and respond within 2 business hours.
                </p>
                <button
                  onClick={() => setLeadSuccess(false)}
                  className="mt-2 px-6 py-2 btn-cyan-primary text-slate-950 text-xs font-bold rounded-xl cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Client Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rachel Green"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-300 bg-[#1a2332]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rachel@brand.com"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-300 bg-[#1a2332]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Primary Service of Interest
                  </label>
                  <select
                    value={leadService}
                    onChange={(e) => setLeadService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-300 bg-[#1a2332]"
                  >
                    {services.map((s) => (
                      <option key={s.id} value={s.title} className="bg-[#131b26] text-white">
                        {s.category}: {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Project Scope & Objectives
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your goals, current challenges, target channels, and estimated timeline..."
                    value={leadMessage}
                    onChange={(e) => setLeadMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-300 bg-[#1a2332]"
                  />
                </div>

                <button
                  id="lead-submit-btn"
                  type="submit"
                  disabled={leadLoading}
                  className="w-full py-4 btn-cyan-primary text-slate-950 font-black rounded-xl shadow-lg transition text-sm flex items-center justify-center space-x-2 cursor-pointer"
                >
                  {leadLoading ? (
                    <span>Transmitting Proposal Request...</span>
                  ) : (
                    <>
                      <span>Submit Proposal Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </motion.div>
        </div>
      </section>

      {/* BOTTOM TRUST BADGES (CAPSULE PILLS WITH CUSTOM ICONS) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="bg-slate-800/60 border border-slate-700/50 px-4 py-2 rounded-full flex items-center space-x-2 text-xs text-slate-300">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="font-bold">4.5/5.0 Verified Reviews</span>
          </div>
          <div className="bg-slate-800/60 border border-slate-700/50 px-4 py-2 rounded-full flex items-center space-x-2 text-xs text-slate-300">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-bold">24-48h Fast Turnaround SLA</span>
          </div>
          <div className="bg-slate-800/60 border border-slate-700/50 px-4 py-2 rounded-full flex items-center space-x-2 text-xs text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-bold">100% Guaranteed SLA & Privacy</span>
          </div>
          <div className="bg-slate-800/60 border border-slate-700/50 px-4 py-2 rounded-full flex items-center space-x-2 text-xs text-slate-300">
            <Bot className="w-3.5 h-3.5 text-purple-400" />
            <span className="font-bold">Meta & OpenAI Cloud Certified</span>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Search, 
  Layers, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Cpu, 
  Server, 
  Megaphone, 
  Palette, 
  Users, 
  X,
  Filter,
  ChevronDown,
  ChevronUp,
  Plus
} from 'lucide-react';
import { Service, ServiceCategory } from '../types';
import { INITIAL_SERVICES, CATEGORIES_LIST } from '../data/seedServices';
import { useSettings } from '../context/SettingsContext';
import { useAuth } from '../context/AuthContext';
import { BizNextHeroSection } from '../components/BizNextHeroSection';
import { WebsiteDevelopmentHeroShowcase } from '../components/WebsiteDevelopmentHeroShowcase';
import { FiveFeaturedBoxes } from '../components/FiveFeaturedBoxes';
import { ServiceCard } from '../components/ServiceCard';
import { Testimonials } from '../components/Testimonials';
import { ServiceDetailsModal } from '../components/ServiceDetailsModal';
import { FreeQuoteModal } from '../components/FreeQuoteModal';

interface HomePageProps {
  navigate: (route: string, slug?: string) => void;
  searchQuery?: string;
  setSearchQuery?: (q: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  navigate, 
  searchQuery = '', 
  setSearchQuery 
}) => {
  const { getWhatsAppUrl, servicesWhatsAppNumber } = useSettings();
  const { openAuthModal } = useAuth();

  // Services State
  const [services, setServices] = useState<Service[]>(INITIAL_SERVICES);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [localSearch, setLocalSearch] = useState<string>('');
  const [showAllServices, setShowAllServices] = useState<boolean>(false);
  
  // Modals State
  const [selectedModalService, setSelectedModalService] = useState<Service | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quoteStyle, setQuoteStyle] = useState<string>('Agency Website');

  // Consultation Form State
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [selectedService, setSelectedService] = useState('Custom Website Development');
  const [projectBudget, setProjectBudget] = useState('Standard (₹10,000 - ₹50,000)');
  const [projectMessage, setProjectMessage] = useState('');
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadSuccessMessage, setLeadSuccessMessage] = useState(false);

  // Sync search query if passed from Navbar
  const activeSearch = searchQuery || localSearch;

  useEffect(() => {
    setLoading(true);
    fetch('/api/services')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setServices(data.data);
        }
      })
      .catch((err) => {
        console.warn('Using local seed services:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  // Filter services by Category and Search
  const filteredServices = services.filter((srv) => {
    const matchesCategory = selectedCategory === 'All' || srv.category === selectedCategory;
    if (!matchesCategory) return false;

    if (!activeSearch) return true;
    const query = activeSearch.toLowerCase().trim();
    return (
      srv.title.toLowerCase().includes(query) ||
      srv.shortDesc.toLowerCase().includes(query) ||
      srv.category.toLowerCase().includes(query)
    );
  });

  // Limit initial display to 6 services unless expanded
  const displayedServices = showAllServices ? filteredServices : filteredServices.slice(0, 6);

  // Handle consultation lead submit
  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingLead(true);

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName,
          clientEmail,
          clientPhone,
          selectedService,
          budget: projectBudget,
          message: projectMessage
        })
      });

      const data = await res.json();
      if (data.success) {
        setLeadSuccessMessage(true);
        setClientName('');
        setClientEmail('');
        setClientPhone('');
        setProjectMessage('');
        setTimeout(() => setLeadSuccessMessage(false), 6000);
      }
    } catch (err) {
      console.error('Lead submission failed:', err);
      // Still show success fallback for client prototype
      setLeadSuccessMessage(true);
      setTimeout(() => setLeadSuccessMessage(false), 6000);
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Web Development Services':
        return <Globe className="w-4 h-4 text-cyan-400" />;
      case 'SaaS Development Services':
        return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'Hosting & Technical Services':
        return <Server className="w-4 h-4 text-emerald-400" />;
      case 'AI Solutions & Services':
      case 'AI Micro-Services & Automation':
        return <Sparkles className="w-4 h-4 text-amber-400" />;
      case 'Social Media Management Services':
      case 'Social Media Growth Services':
        return <Users className="w-4 h-4 text-rose-400" />;
      case 'Content & Creative Services':
        return <Palette className="w-4 h-4 text-indigo-400" />;
      case 'Digital Marketing Services':
        return <Megaphone className="w-4 h-4 text-yellow-400" />;
      default:
        return <Layers className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans pb-16">
      
      {/* ======================================================== */}
      {/* 1. BIZNEXT PROFESSIONAL BUSINESS WEBSITE DESIGN HERO     */}
      {/* ======================================================== */}
      <section id="biznext-hero" className="w-full">
        <BizNextHeroSection 
          navigate={navigate}
          onFilterCategory={(cat) => {
            setSelectedCategory(cat);
            const el = document.getElementById('services-catalog');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </section>

      {/* ======================================================== */}
      {/* 2. MODERN WEBSITE DEVELOPMENT & STYLES CATALOG          */}
      {/* ======================================================== */}
      <motion.div 
        id="website-styles-catalog"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <WebsiteDevelopmentHeroShowcase 
          navigate={navigate}
          onFilterCategory={(cat) => {
            setSelectedCategory(cat);
            const el = document.getElementById('services-catalog');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </motion.div>

      {/* ======================================================== */}
      {/* 2. 5 FEATURED TOP-PICK AI MICRO-SERVICES                */}
      {/* ======================================================== */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ perspective: 1200 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4"
      >
        <FiveFeaturedBoxes 
          navigate={navigate} 
          services={services}
          onInstantBuy={(serviceTitle) => {
            setQuoteStyle(serviceTitle);
            setIsQuoteModalOpen(true);
          }}
        />
      </motion.div>

      {/* ======================================================== */}
      {/* 3. MAIN SERVICES CATALOG SECTION WITH FILTER TABS        */}
      {/* ======================================================== */}
      <motion.section 
        id="services-catalog" 
        initial={{ opacity: 0, x: -70, rotateY: -6 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
        className="py-16 my-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#090f1d] border border-slate-800/90 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
      >
        {/* Subtle Ambient Backing Glow */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 relative z-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-cyan-300 text-xs font-black tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Complete Services Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Explore All <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">38+ Agency Services</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Select a specialized category below or search by feature to browse our fully modular micro-services, turnkey development packages, and automated solutions.
          </p>
        </div>

        {/* Search Bar & Clear Action */}
        <div className="max-w-2xl mx-auto mb-8 px-2 relative z-10">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 absolute left-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={activeSearch}
              onChange={(e) => {
                setLocalSearch(e.target.value);
                if (setSearchQuery) setSearchQuery(e.target.value);
              }}
              placeholder="Search services (e.g., E-Commerce, SaaS, WhatsApp Bot, SEO, Hosting)..."
              className="w-full bg-[#111927] border border-slate-700/80 hover:border-slate-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-2xl pl-12 pr-10 py-3.5 text-sm text-white placeholder-slate-400 shadow-inner transition outline-none"
            />
            {activeSearch && (
              <button
                onClick={() => {
                  setLocalSearch('');
                  if (setSearchQuery) setSearchQuery('');
                }}
                className="absolute right-3.5 text-slate-400 hover:text-white p-1 rounded-lg transition"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Horizontal Filter Pills */}
        <div className="relative z-10 mb-10 overflow-x-auto scrollbar-none pb-2">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-max px-2 justify-start md:justify-center">
            {/* All Filter Pill */}
            <button
              onClick={() => setSelectedCategory('All')}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === 'All'
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 scale-105'
                  : 'bg-[#121a29] text-slate-300 hover:bg-[#182338] border border-slate-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All Services</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-black ${
                selectedCategory === 'All' ? 'bg-cyan-900/40 text-slate-950' : 'bg-slate-800 text-slate-400'
              }`}>
                {services.length}
              </span>
            </button>

            {/* Specific Categories */}
            {CATEGORIES_LIST.map((cat) => {
              const count = services.filter(s => s.category === cat).length;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex items-center space-x-2 px-3.5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 scale-105'
                      : 'bg-[#121a29] text-slate-300 hover:bg-[#182338] border border-slate-800'
                  }`}
                >
                  {getCategoryIcon(cat)}
                  <span>{cat}</span>
                  {count > 0 && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-black ${
                      isSelected ? 'bg-cyan-900/40 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Info Counter */}
        <div className="flex items-center justify-between px-2 mb-6 text-xs text-slate-400 font-semibold relative z-10">
          <div className="flex items-center space-x-2">
            <Filter className="w-3.5 h-3.5 text-cyan-400" />
            <span>
              Showing <strong className="text-white">{displayedServices.length}</strong> of <strong className="text-white">{filteredServices.length}</strong> services
              {selectedCategory !== 'All' && <span> in <span className="text-cyan-300">{selectedCategory}</span></span>}
              {activeSearch && <span> matching "<strong>{activeSearch}</strong>"</span>}
            </span>
          </div>

          <button
            onClick={() => navigate('services')}
            className="text-cyan-400 hover:text-cyan-300 font-bold transition flex items-center space-x-1"
          >
            <span>Full Catalog View</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Services Cards Grid (Shows 6 initial or all when expanded with alternating 3D slide-in) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {displayedServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ 
                opacity: 0, 
                x: idx % 2 === 0 ? -50 : 50, 
                rotateY: idx % 2 === 0 ? -8 : 8,
                scale: 0.95 
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0, 
                rotateY: 0,
                scale: 1 
              }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.65, delay: (idx % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02, rotateY: idx % 2 === 0 ? -2 : 2, rotateX: 2 }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              className="h-full"
            >
              <ServiceCard
                service={service}
                navigate={navigate}
                onInstantBuy={(title) => {
                  setQuoteStyle(title);
                  setIsQuoteModalOpen(true);
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* View More Services Toggle Button */}
        {filteredServices.length > 6 && (
          <div className="mt-10 text-center relative z-10 flex flex-col items-center justify-center space-y-2">
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              id="view-more-services-btn"
              className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-300 hover:to-indigo-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              {showAllServices ? (
                <>
                  <span>Show Less (Show First 6 Services)</span>
                  <ChevronUp className="w-4 h-4 text-slate-950 stroke-[3]" />
                </>
              ) : (
                <>
                  <span>View More Services (+{filteredServices.length - 6} More)</span>
                  <ChevronDown className="w-4 h-4 text-slate-950 stroke-[3]" />
                </>
              )}
            </button>
            <p className="text-[11px] text-slate-400 font-medium">
              {showAllServices 
                ? `Showing all ${filteredServices.length} services`
                : `Currently showing first 6 of ${filteredServices.length} services. Click View More to expand all.`
              }
            </p>
          </div>
        )}

        {/* Empty State if No Match */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16 px-4 bg-[#111827]/60 rounded-3xl border border-slate-800 my-4">
            <Search className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No services found</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto mb-4">
              We couldn't find any services matching your search criteria. Try a different keyword or reset filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setLocalSearch('');
                if (setSearchQuery) setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition"
            >
              Reset Filters
            </button>
          </div>
        )}
      </motion.section>

      {/* ======================================================== */}
      {/* 4. CLIENT TESTIMONIALS & VERIFIED REVIEWS                */}
      {/* ======================================================== */}
      <motion.section 
        initial={{ opacity: 0, x: 70, rotateY: 6 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
        className="py-12 my-6"
      >
        <Testimonials />
      </motion.section>

      {/* ======================================================== */}
      {/* 5. CLIENT CONSULTATION & DIRECT PROJECT INTAKE FORM      */}
      {/* ======================================================== */}
      <motion.section 
        id="consultation-form" 
        initial={{ opacity: 0, y: 50, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
        className="py-16 my-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-gradient-to-br from-[#0c1527] to-[#070b16] border border-slate-800 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Ambient Corner Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Form Info & Direct WhatsApp Connect (Slide in from Left with 3D tilt) */}
            <motion.div 
              initial={{ opacity: 0, x: -70, rotateY: -8 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-black tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Instant Consultation</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Ready to Scale Your Business Online?
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Connect directly with our senior development leads and digital growth specialists. We provide transparent architectural scopes, project timelines, and fixed-price proposals within 24 hours.
              </p>

              {/* 3 Pillars */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-xs text-slate-200">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <span>100% Free Initial Discovery & Architecture Scoping</span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-slate-200">
                  <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <span>Direct WhatsApp Assistance & Real-Time Tracking</span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-slate-200">
                  <div className="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <span>Transparent Pricing With No Hidden Surprises</span>
                </div>
              </div>

              {/* WhatsApp Fast Connect Card */}
              <div className="pt-4">
                <a
                  href={getWhatsAppUrl 
                    ? getWhatsAppUrl('Hello! I would like to discuss a custom website or digital growth project with Goomo Digital Agency.') 
                    : `https://wa.me/919876543210?text=${encodeURIComponent('Hello! I would like to discuss a custom website project.')}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 hover:bg-emerald-900/50 hover:border-emerald-400 transition group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-black group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-white">Direct WhatsApp Assistance</div>
                      <div className="text-[11px] text-emerald-300 font-semibold">{servicesWhatsAppNumber || '+91 98765 43210'}</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
                    Chat Now →
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Lead Form (Slide in from Right with 3D tilt) */}
            <motion.div 
              initial={{ opacity: 0, x: 70, rotateY: 8 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
              className="lg:col-span-7"
            >
              <div className="bg-[#101826] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-xl">
                
                {leadSuccessMessage ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto border border-emerald-500/30">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-black text-white">Inquiry Received Successfully!</h4>
                    <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Goomo Digital Agency. One of our technical solution architects will review your project requirements and message you shortly.
                    </p>
                    <button
                      onClick={() => setLeadSuccessMessage(false)}
                      className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-black text-xs hover:bg-cyan-400 transition"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div className="border-b border-slate-800 pb-3 mb-4">
                      <h4 className="text-xl font-black text-white">Request a Project Proposal</h4>
                      <p className="text-xs text-slate-400">Fill in your requirements below for an instant preliminary estimate.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1.5">
                          Full Name <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="e.g., Alex Johnson"
                          className="w-full bg-[#0a0f1a] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1.5">
                          Email Address <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          placeholder="alex@company.com"
                          className="w-full bg-[#0a0f1a] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone / WhatsApp */}
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1.5">
                          WhatsApp / Phone Number
                        </label>
                        <input
                          type="tel"
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-[#0a0f1a] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                        />
                      </div>

                      {/* Selected Service */}
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1.5">
                          Desired Service / Style
                        </label>
                        <select
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="w-full bg-[#0a0f1a] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition"
                        >
                          <option value="Custom Website Development">Custom Website Development</option>
                          <option value="SaaS Platform Development">SaaS Platform Development</option>
                          <option value="E-Commerce Store Setup">E-Commerce Store Setup</option>
                          <option value="WhatsApp AI Automation Agent">WhatsApp AI Automation Agent</option>
                          <option value="Mobile App Development">Mobile App Development</option>
                          <option value="Social Media Growth Strategy">Social Media Growth Strategy</option>
                          <option value="Dedicated Hosting & Server Setup">Dedicated Hosting & Server Setup</option>
                          <option value="Other Custom Project">Other Custom Project</option>
                        </select>
                      </div>
                    </div>

                    {/* Estimated Budget */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Target Budget Range
                      </label>
                      <select
                        value={projectBudget}
                        onChange={(e) => setProjectBudget(e.target.value)}
                        className="w-full bg-[#0a0f1a] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition"
                      >
                        <option value="Starter (< ₹10,000 / $150)">Starter (&lt; ₹10,000 / $150)</option>
                        <option value="Standard (₹10,000 - ₹50,000 / $600)">Standard (₹10,000 - ₹50,000 / $600)</option>
                        <option value="Growth (₹50,000 - ₹1,50,000 / $1,800)">Growth (₹50,000 - ₹1,50,000 / $1,800)</option>
                        <option value="Enterprise (₹1,50,000+ / $3,000+)">Enterprise (₹1,50,000+ / $3,000+)</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Project Brief / Requirements <span className="text-rose-400">*</span>
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={projectMessage}
                        onChange={(e) => setProjectMessage(e.target.value)}
                        placeholder="Tell us about your brand goals, target timeline, or features needed..."
                        className="w-full bg-[#0a0f1a] border border-slate-700 rounded-xl p-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmittingLead}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-xs uppercase tracking-wider transition shadow-lg shadow-cyan-500/20 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmittingLead ? (
                        <span>Submitting Your Requirements...</span>
                      ) : (
                        <>
                          <span>Submit Proposal Request</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </motion.div>

          </div>

        </div>
      </motion.section>

      {/* ======================================================== */}
      {/* 6. MODALS                                                */}
      {/* ======================================================== */}
      {selectedModalService && (
        <ServiceDetailsModal
          service={selectedModalService}
          onClose={() => setSelectedModalService(null)}
          navigate={navigate}
        />
      )}

      {isQuoteModalOpen && (
        <FreeQuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
          initialWebsiteStyle={quoteStyle}
        />
      )}

    </div>
  );
};

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquare, 
  Star, 
  Layers, 
  Cpu, 
  Award,
  Zap,
  Building2,
  Check,
  Briefcase,
  ArrowRight,
  TrendingUp,
  MapPin,
  Calendar,
  Lock,
  Globe,
  ThumbsUp,
  Users
} from 'lucide-react';
import { Service } from '../types';
import { getRichServiceDetails, ClientReview, PortfolioCaseStudy } from '../data/serviceDetailsData';
import saasGirlImg from '../assets/images/saas_female_expert_1786627762182.jpg';
import smmGirlImg from '../assets/images/smm_female_expert_1786619726092.jpg';
import smmMgmtImg from '../assets/images/smm_mgmt_female_expert_1786620162810.jpg';
import dmGirlImg from '../assets/images/dm_female_expert_1786625067371.jpg';
import creativeGirlImg from '../assets/images/creative_female_expert_1786620652187.jpg';
import agencyLeaderImg from '../assets/images/agency_leader_female_1786720136118.jpg';
import { ServiceEcommerceActionCard } from './ServiceEcommerceActionCard';
import { CheckoutModal } from './CheckoutModal';
import { SocialGrowthRateMatrixGrid } from './SocialGrowthRateMatrixGrid';

interface ServiceDetailsModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
  onWhatsApp: (serviceTitle: string) => void;
  formatPrice: (price: number) => string;
}

// Component for rendering manual visuals and case study images with guaranteed fallbacks
interface CaseStudyVisualProps {
  caseStudy: PortfolioCaseStudy;
  index: number;
  isSMM: boolean;
  serviceTitle: string;
}

const CaseStudyVisual: React.FC<CaseStudyVisualProps> = ({
  caseStudy,
  index,
  isSMM,
  serviceTitle
}) => {
  const [imgError, setImgError] = useState(false);

  // Local fallback images based on index and theme
  const localImages = [smmGirlImg, smmMgmtImg, dmGirlImg, creativeGirlImg, agencyLeaderImg, saasGirlImg];
  const selectedLocalImage = localImages[index % localImages.length];

  // Specific theme detection
  const isInstagram = caseStudy.projectName.toLowerCase().includes('instagram') ||
    caseStudy.summary.toLowerCase().includes('reels') ||
    caseStudy.techStack.some(t => t.toLowerCase().includes('reels') || t.toLowerCase().includes('instagram')) ||
    serviceTitle.toLowerCase().includes('instagram');

  const isFacebook = caseStudy.projectName.toLowerCase().includes('facebook') ||
    caseStudy.summary.toLowerCase().includes('facebook') ||
    caseStudy.techStack.some(t => t.toLowerCase().includes('facebook')) ||
    serviceTitle.toLowerCase().includes('facebook');

  const isYoutube = caseStudy.projectName.toLowerCase().includes('monetization') ||
    caseStudy.projectName.toLowerCase().includes('youtube') ||
    caseStudy.summary.toLowerCase().includes('youtube') ||
    caseStudy.techStack.some(t => t.toLowerCase().includes('youtube')) ||
    serviceTitle.toLowerCase().includes('youtube');

  // Gradient themes
  let badgeText = 'Verified Client Proof';
  let badgeColor = 'bg-cyan-950/90 text-cyan-300 border-cyan-700/80';
  let metricLabel = isSMM ? 'Organic Growth' : 'High Performance';
  let metricValue = '+420% Impressions';
  let gradientClass = 'from-cyan-950 via-slate-900 to-slate-950';

  if (isInstagram) {
    badgeText = 'Instagram Verified Proof';
    badgeColor = 'bg-pink-950/90 text-pink-300 border-pink-700/80';
    metricLabel = 'Reels Reach';
    metricValue = '1M ➔ 52.4M Views';
    gradientClass = 'from-[#370b28] via-[#1a0f28] to-slate-950';
  } else if (isFacebook) {
    badgeText = 'Facebook Community Proof';
    badgeColor = 'bg-blue-950/90 text-blue-300 border-blue-700/80';
    metricLabel = 'Organic Lift';
    metricValue = '10x Reach Multiplier';
    gradientClass = 'from-[#0b1c37] via-[#0f1d2e] to-slate-950';
  } else if (isYoutube) {
    badgeText = 'YouTube Monetization Proof';
    badgeColor = 'bg-red-950/90 text-red-300 border-red-700/80';
    metricLabel = 'Watch Time';
    metricValue = '4,000+ Hrs Approved';
    gradientClass = 'from-[#370b0b] via-[#241010] to-slate-950';
  }

  const primaryImageSrc = (!imgError && caseStudy.imageUrl) ? caseStudy.imageUrl : selectedLocalImage;

  return (
    <div className={`w-full h-44 rounded-2xl overflow-hidden bg-gradient-to-br ${gradientClass} relative -mt-1 border border-slate-800/90 shadow-inner group/img`}>
      {/* Background manual photo */}
      <img
        src={primaryImageSrc}
        alt={caseStudy.projectName}
        onError={() => setImgError(true)}
        className="w-full h-full object-cover opacity-40 group-hover/img:opacity-50 group-hover/img:scale-105 transition-all duration-700"
        referrerPolicy="no-referrer"
      />

      {/* Modern High-Tech Vector & Sparkline Graph Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-3.5 flex flex-col justify-between">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2">
          <span className={`text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-md border backdrop-blur-md shadow-md ${badgeColor}`}>
            {badgeText}
          </span>
          <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-950/90 border border-emerald-700/70 px-2 py-0.5 rounded-full flex items-center shadow">
            <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-400" />
            Active Case
          </span>
        </div>

        {/* Middle Vector Analytics Chart Representation */}
        <div className="my-auto py-1">
          <svg className="w-full h-12 overflow-visible" viewBox="0 0 200 40">
            <defs>
              <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={isInstagram ? '#ec4899' : isFacebook ? '#3b82f6' : isYoutube ? '#ef4444' : '#06b6d4'} stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
              </linearGradient>
              <linearGradient id={`fill-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={isInstagram ? '#ec4899' : isFacebook ? '#3b82f6' : isYoutube ? '#ef4444' : '#06b6d4'} stopOpacity="0.35" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M 0 35 Q 30 30, 60 22 T 110 24 T 150 10 T 200 4 L 200 40 L 0 40 Z"
              fill={`url(#fill-${index})`}
            />
            <path
              d="M 0 35 Q 30 30, 60 22 T 110 24 T 150 10 T 200 4"
              fill="none"
              stroke={`url(#grad-${index})`}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="200" cy="4" r="3.5" fill="#10b981" className="animate-ping opacity-75" />
            <circle cx="200" cy="4" r="3" fill="#10b981" />
          </svg>
        </div>

        {/* Bottom Banner Stats */}
        <div className="flex items-center justify-between text-white pt-1">
          <div>
            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">
              {metricLabel}
            </span>
            <span className="text-xs font-black text-amber-300 flex items-center">
              <TrendingUp className="w-3 h-3 mr-1 text-emerald-400" />
              {metricValue}
            </span>
          </div>

          <div className="text-right">
            <span className="text-[9px] text-slate-400 font-semibold block">Live Proof Audit</span>
            <span className="text-[10px] font-bold text-cyan-300">100% Policy-Safe</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ServiceDetailsModal: React.FC<ServiceDetailsModalProps> = ({
  service,
  isOpen,
  onClose,
  onWhatsApp,
  formatPrice
}) => {
  const [reviewFilter, setReviewFilter] = useState<'all' | 'recent'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlanPrice, setSelectedPlanPrice] = useState<number | null>(null);
  const [selectedPlanTitle, setSelectedPlanTitle] = useState<string>('');

  useEffect(() => {
    if (service) {
      setSelectedPlanPrice(service.basePrice);
      setSelectedPlanTitle(service.title);
    }
  }, [service]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !service) return null;

  const details = getRichServiceDetails(service);
  const isSMM =
    service.category === 'Social Media Management Services' ||
    service.category.includes('Social Media Management') ||
    service.category === 'SMM Management';

  // Filter reviews
  const filteredReviews = details.clientReviews.filter((rev: ClientReview) => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        rev.clientName.toLowerCase().includes(q) ||
        rev.company.toLowerCase().includes(q) ||
        rev.location.toLowerCase().includes(q) ||
        rev.review.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-40 cursor-pointer"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-50 w-full max-w-5xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col text-white my-auto"
        >
          {/* Top Bar Header */}
          <div className="relative px-5 sm:px-7 py-4 border-b border-slate-800 bg-slate-900/95 backdrop-blur-md flex items-center justify-between shrink-0">
            <div className="flex items-center space-x-2.5 overflow-hidden">
              <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/80 text-purple-300 text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 shrink-0 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span className="truncate max-w-[150px] sm:max-w-none">{service.category}</span>
              </span>
              <span className="hidden sm:inline-flex items-center text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded-full shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                100% SLA Guarantee
              </span>
              <span className="hidden md:inline-flex items-center text-xs font-bold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2.5 py-0.5 rounded-full shrink-0">
                <Users className="w-3.5 h-3.5 mr-1 text-amber-400" />
                {details.clientReviews.length}+ Verified Clients
              </span>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-2xl bg-slate-800/90 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition cursor-pointer group shadow-lg shrink-0 ml-3"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
            </button>
          </div>

          {/* Scrollable Modal Content */}
          <div className="overflow-y-auto px-5 sm:px-7 py-6 space-y-9 custom-scrollbar">
            
            {/* ========================================================
                SECTION 1: HERO BANNER & REAL WORKING IMAGES
            ======================================================== */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl group">
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <img
                  src={details.imageUrl}
                  alt={service.title}
                  onError={(e) => {
                    // Fallback to local high-res female expert if external image fails
                    const target = e.currentTarget;
                    if (!target.src.includes('female_expert') && !target.src.includes('ai_hero_girl')) {
                      target.src = saasGirlImg;
                    }
                  }}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
              </div>

              {/* Floating Hero Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="space-y-1 max-w-2xl">
                    <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight drop-shadow-md">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-medium text-slate-300">
                      {details.subHeadline}
                    </p>
                  </div>

                  {isSMM ? (
                    <div className="flex items-center space-x-2 px-4 py-2 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 backdrop-blur-md shadow-xl">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs sm:text-sm font-black text-cyan-300 uppercase tracking-wider">
                        DIGITAL GROWTH & DEVELOPMENT SERVICES
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-baseline space-x-2 px-4 py-2 rounded-2xl bg-amber-500/20 border border-amber-500/40 backdrop-blur-md shadow-xl">
                      <span className="text-xs text-amber-300 font-bold uppercase tracking-wider">Starts at</span>
                      <span className="text-xl sm:text-2xl font-black text-amber-300">
                        {formatPrice(service.basePrice)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                  <span className="flex items-center text-slate-200">
                    <Clock className="w-3.5 h-3.5 text-purple-400 mr-1.5" />
                    Turnaround: <strong className="ml-1 text-white">{service.deliveryTime || '2-4 Days'}</strong>
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="flex items-center text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                    {isSMM ? 'Real-World Proof & Case Studies' : 'Turnkey Engineering'}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="flex items-center text-cyan-400">
                    <Zap className="w-3.5 h-3.5 mr-1" />
                    Instant WhatsApp Support
                  </span>
                </div>
              </div>
            </div>

            {/* ========================================================
                ACTION ROW: CUSTOM E-COMMERCE ACTION BUTTONS & BADGES
            ======================================================== */}
            {isSMM ? (
              <div className="bg-gradient-to-r from-slate-900 via-[#131d2b] to-slate-900 p-5 sm:p-6 rounded-3xl border border-cyan-500/40 shadow-xl shadow-cyan-500/5 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-2">
                      <span className="text-[11px] font-black uppercase tracking-widest text-cyan-400 bg-cyan-950/80 border border-cyan-800/80 px-2.5 py-1 rounded-md">
                        DIGITAL GROWTH & DEVELOPMENT SERVICES
                      </span>
                      <span className="text-xs text-emerald-400 font-bold flex items-center">
                        <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                        100% Real-World Verified Proof
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-white">
                      Ready to scale your brand presence with guaranteed organic reach?
                    </h3>
                    <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                      Explore our real-world portfolio case studies below or connect directly on WhatsApp to get a tailored growth strategy and execution plan.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => onWhatsApp(service.title)}
                      className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black transition-all shadow-lg shadow-emerald-600/30 flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Request Custom Strategy on WhatsApp</span>
                    </button>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-slate-800/80 text-[11px] text-slate-300 font-medium">
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Zero Upfront Risk</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Dedicated Strategist</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Real-World Analytics</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>100% Policy-Safe Methods</span>
                  </div>
                </div>
              </div>
            ) : (
              <ServiceEcommerceActionCard
                serviceTitle={selectedPlanTitle || service.title}
                basePrice={selectedPlanPrice !== null ? selectedPlanPrice : service.basePrice}
                onBuyNow={() => setIsCheckoutOpen(true)}
                onAddToCart={() => {
                  // Trigger feedback
                }}
              />
            )}

            {/* ========================================================
                RATE MATRIX GRID (IF AVAILABLE: INSTAGRAM / YOUTUBE / FACEBOOK)
            ======================================================== */}
            {!isSMM && (service.rateMatrix || details.rateMatrix) && (
              <div className="bg-slate-950/70 p-5 sm:p-6 rounded-3xl border border-slate-800">
                <SocialGrowthRateMatrixGrid
                  rateMatrix={service.rateMatrix || details.rateMatrix || []}
                  serviceTitle={service.title}
                  onSelectItem={(item, price) => {
                    setSelectedPlanPrice(price);
                    setSelectedPlanTitle(`${service.title} - ${item.name} (${item.quantity || ''})`);
                    setIsCheckoutOpen(true);
                  }}
                />
              </div>
            )}

            {/* ========================================================
                SECTION 2: IN-DEPTH SERVICE OVERVIEW & DESCRIPTION
            ======================================================== */}
            <div className="space-y-4 bg-slate-950/70 p-6 sm:p-7 rounded-3xl border border-slate-800">
              <div className="flex items-center space-x-2 text-purple-400 text-xs font-extrabold uppercase tracking-widest">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>In-Depth Service Overview</span>
              </div>
              
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {details.inDepthDescription}
              </p>

              {/* Problem Solved Highlight Card */}
              <div className="mt-4 p-4 rounded-2xl bg-purple-950/30 border border-purple-900/50 flex items-start space-x-3">
                <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300">Why Your Business Needs This</h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    {details.problemSolved}
                  </p>
                </div>
              </div>
            </div>

            {/* ========================================================
                SECTION 3: CORE DELIVERABLES & FEATURES GRID (4-GRID)
            ======================================================== */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-cyan-400 text-xs font-extrabold uppercase tracking-widest">
                  <Layers className="w-4 h-4" />
                  <span>Core Deliverables & Technical Specs</span>
                </div>
                <span className="text-xs text-slate-400 font-medium">Enterprise Grade</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {details.featuresGrid.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-slate-700/80 transition-all space-y-2 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Deliverable Checkmarks & Tech Badges */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
                  <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Included Package Deliverables</span>
                  </div>
                  <div className="space-y-2">
                    {details.deliverables.map((del, idx) => (
                      <div key={idx} className="flex items-center text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 mr-2 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 text-pink-400 text-xs font-bold uppercase tracking-wider">
                      <Award className="w-4 h-4" />
                      <span>Production Tech Stack</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Built using modern, battle-tested programming frameworks:
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {details.techPortfolio.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================
                SECTION 4: LIVE PORTFOLIO & CASE STUDIES
            ======================================================== */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-amber-400 text-xs font-extrabold uppercase tracking-widest">
                  <Briefcase className="w-4 h-4" />
                  <span>
                    {isSMM
                      ? 'Real-World Business Portfolio & Case Studies'
                      : 'Our Portfolio & Past Work'}
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  {isSMM ? 'Verified Growth Case Studies' : 'Real Case Studies'}
                </span>
              </div>

              <div className={`grid grid-cols-1 ${isSMM ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-3'} gap-4`}>
                {details.portfolioCaseStudies.map((caseStudy, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition-all space-y-3 flex flex-col justify-between overflow-hidden group"
                  >
                    {/* Manual Graphic & Verified Proof Visual Banner */}
                    <CaseStudyVisual
                      caseStudy={caseStudy}
                      index={idx}
                      isSMM={isSMM}
                      serviceTitle={service.title}
                    />

                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest px-2.5 py-1 rounded-md bg-amber-950/60 border border-amber-800/60 inline-block">
                          {caseStudy.clientType}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {caseStudy.projectName}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {caseStudy.summary}
                      </p>

                      {caseStudy.bulletPoints && caseStudy.bulletPoints.length > 0 && (
                        <div className="pt-2 space-y-1.5 border-t border-slate-800/60">
                          {caseStudy.bulletPoints.map((point, pIdx) => (
                            <div key={pIdx} className="flex items-start space-x-1.5 text-[11px] text-slate-200">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {caseStudy.growthStats && caseStudy.growthStats.length > 0 && (
                        <div className="grid grid-cols-3 gap-1.5 pt-2">
                          {caseStudy.growthStats.map((stat, sIdx) => (
                            <div key={sIdx} className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
                              <span className="block text-[11px] font-black text-cyan-300">{stat.value}</span>
                              <span className="block text-[9px] text-slate-400 leading-tight">{stat.label}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 space-y-2">
                      <div className="flex items-center space-x-1.5 text-xs text-emerald-400 font-semibold">
                        <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                        <span className="text-[11px]">{caseStudy.metricHighlight}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {caseStudy.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ========================================================
                SECTION 5: OUR STEP-BY-STEP WORKING PROCESS TIMELINE
            ======================================================== */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-rose-400 text-xs font-extrabold uppercase tracking-widest">
                <Clock className="w-4 h-4" />
                <span>Our Step-by-Step Working Process</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {details.processTimeline.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 relative space-y-2 flex flex-col justify-between"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-black text-rose-400 font-mono">
                          {step.stepNumber}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-400 px-2 py-0.5 rounded bg-slate-800">
                          {step.duration}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-white leading-snug">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ========================================================
                SECTION 6: MASSIVE CLIENT REVIEWS & TESTIMONIALS (BULK)
            ======================================================== */}
            <div className="space-y-4">
              {/* Header & Stats Bar */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <h3 className="text-base sm:text-lg font-black text-white">
                      Verified Client Reviews ({details.clientReviews.length})
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400">
                    100% authentic ratings and feedback from verified business clients.
                  </p>
                </div>

                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-amber-950/50 border border-amber-800/60 text-amber-300 text-xs font-bold">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>5.0 / 5.0 Rating</span>
                  </div>
                  <div className="text-xs font-bold text-emerald-400 px-3 py-1.5 rounded-xl bg-emerald-950/50 border border-emerald-800/60">
                    100% Verified
                  </div>
                </div>
              </div>

              {/* Search / Filter Control */}
              <div className="flex items-center justify-between gap-3">
                <input
                  type="text"
                  placeholder="Search reviews by client, company or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:max-w-md px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 transition"
                />
                <span className="text-xs text-slate-400 font-semibold whitespace-nowrap hidden sm:inline">
                  Showing {filteredReviews.length} of {details.clientReviews.length}
                </span>
              </div>

              {/* Scrollable Reviews Grid (Scrollable Container to protect layout) */}
              <div className="max-h-[380px] overflow-y-auto pr-1 space-y-3 custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {filteredReviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/90 hover:border-slate-700 transition-all space-y-2.5 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, rIdx) => (
                              <Star key={rIdx} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                            ))}
                          </div>
                          <span className="text-[10px] text-slate-500 font-medium">{rev.date}</span>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed italic">
                          "{rev.review}"
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-800/70 flex items-center justify-between">
                        <div className="flex items-center space-x-2.5">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${rev.avatarGradient} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm`}>
                            {rev.clientName.charAt(0)}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white leading-tight">{rev.clientName}</p>
                            <p className="text-[10px] text-slate-400 leading-tight flex items-center mt-0.5">
                              <Building2 className="w-2.5 h-2.5 mr-1 text-slate-500 shrink-0" />
                              <span className="truncate max-w-[180px]">{rev.company}</span>
                            </p>
                          </div>
                        </div>

                        <span className="text-[10px] text-slate-500 flex items-center">
                          <MapPin className="w-2.5 h-2.5 mr-0.5 text-slate-600" />
                          {rev.location.split(',')[0]}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Sticky Bottom Action Bar */}
          <div className="px-5 sm:px-7 py-4 border-t border-slate-800 bg-slate-900/95 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <span className="font-semibold text-white truncate max-w-[200px] sm:max-w-none">{service.title}</span>
              <span>•</span>
              {isSMM ? (
                <span className="text-cyan-400 font-bold text-xs uppercase tracking-wider">
                  DIGITAL GROWTH & DEVELOPMENT SERVICES
                </span>
              ) : (
                <span className="text-amber-400 font-black text-sm">{formatPrice(service.basePrice)}</span>
              )}
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold transition cursor-pointer"
              >
                Close Details
              </button>

              <button
                type="button"
                onClick={() => onWhatsApp(service.title)}
                className="w-1/2 sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold shadow-lg shadow-emerald-600/30 transition flex items-center justify-center space-x-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isSMM ? 'Chat on WhatsApp for Strategy' : 'Chat on WhatsApp'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Direct Checkout Modal within Details */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        serviceTitle={selectedPlanTitle || service.title}
        priceINR={selectedPlanPrice !== null ? selectedPlanPrice : service.basePrice}
      />
    </AnimatePresence>
  );
};

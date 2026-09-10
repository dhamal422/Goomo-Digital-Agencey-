import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Search, 
  MessageSquare, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  Globe, 
  Bot, 
  Workflow, 
  FileText, 
  Image as ImageIcon, 
  Video, 
  Mic, 
  Sliders, 
  Code2, 
  Cpu, 
  Box, 
  Wrench, 
  ArrowRight, 
  Clock, 
  Check, 
  Brain, 
  Star,
  ShoppingBag,
  Building,
  Share2,
  Calendar,
  Truck,
  BarChart3,
  Palette,
  Users,
  CreditCard,
  Target,
  Server,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Linkedin,
  Heart,
  Eye,
  TrendingUp,
  AlertCircle,
  Hash,
  LayoutGrid,
  Megaphone,
  RefreshCw,
  Cloud,
  Folder,
  RotateCcw,
  Mail,
  Lock,
  ShieldAlert
} from 'lucide-react';
import { Service, ServiceCategory } from '../types';
import { INITIAL_SERVICES } from '../data/seedServices';
import { useSettings } from '../context/SettingsContext';
import { useCurrency } from '../context/CurrencyContext';
import { ServiceDetailsModal } from '../components/ServiceDetailsModal';
import hostingGirlImg from '../assets/images/hosting_female_expert_1786628658423.jpg';
import saasGirlImg from '../assets/images/saas_female_expert_1786627762182.jpg';
import dmGirlImg from '../assets/images/dm_female_expert_1786625067371.jpg';
import creativeGirlImg from '../assets/images/creative_female_expert_1786620652187.jpg';
import smmMgmtGirlImg from '../assets/images/smm_mgmt_female_expert_1786620162810.jpg';
import smmGirlImg from '../assets/images/smm_female_expert_1786619726092.jpg';
import webDevGirlImg from '../assets/images/web_dev_female_expert_1786619460774.jpg';
import appDevGirlImg from '../assets/images/app_dev_female_expert_1786619118618.jpg';
import aiGirlImg from '../assets/images/ai_service_girl_presentation_1785934753905.jpg';

interface AllServicesPageProps {
  navigate: (route: string, slug?: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const AllServicesPage: React.FC<AllServicesPageProps> = ({
  navigate,
  searchQuery,
  setSearchQuery
}) => {
  const { getWhatsAppUrl } = useSettings();
  const { formatPrice } = useCurrency();
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('Hosting & Technical Services');
  const [services, setServices] = useState<Service[]>(INITIAL_SERVICES);
  const [loading, setLoading] = useState(false);
  const [selectedModalService, setSelectedModalService] = useState<Service | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch('/api/services')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setServices(data.data);
        }
      })
      .catch(() => {
        // Fallback to INITIAL_SERVICES
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredServices = services.filter((s) => {
    if (s.category !== activeCategory) return false;
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      s.title.toLowerCase().includes(q) ||
      s.shortDesc.toLowerCase().includes(q)
    );
  });

  const getServiceIcon = (title: string) => {
    const t = title.toLowerCase();

    // Hosting & Technical Services Specific Icons
    if (t.includes('domain & hosting') || t.includes('domain')) return <Globe className="w-6 h-6 text-cyan-400" />;
    if (t.includes('cpanel setup') || t.includes('cpanel')) return <Sliders className="w-6 h-6 text-amber-400" />;
    if (t.includes('website deployment') || t.includes('deployment')) return <Zap className="w-6 h-6 text-emerald-400" />;
    if (t.includes('cloud deployment')) return <Cloud className="w-6 h-6 text-sky-400" />;
    if (t.includes('ssl installation') || t.includes('ssl')) return <Lock className="w-6 h-6 text-emerald-400" />;
    if (t.includes('website migration') || t.includes('migration')) return <RotateCcw className="w-6 h-6 text-purple-400" />;
    if (t.includes('database setup')) return <Server className="w-6 h-6 text-blue-400" />;
    if (t.includes('server configuration') || t.includes('server')) return <Server className="w-6 h-6 text-indigo-400" />;
    if (t.includes('website backup') || t.includes('backup')) return <Folder className="w-6 h-6 text-teal-400" />;
    if (t.includes('technical support')) return <Wrench className="w-6 h-6 text-amber-500" />;
    if (t.includes('website security') || t.includes('security')) return <ShieldAlert className="w-6 h-6 text-rose-400" />;

    // SaaS Development Specific Icons
    if (t.includes('custom saas platform') || t.includes('custom saas')) return <Box className="w-6 h-6 text-cyan-400" />;
    if (t.includes('ai saas')) return <Sparkles className="w-6 h-6 text-purple-400" />;
    if (t.includes('saas dashboard') || t.includes('dashboard')) return <BarChart3 className="w-6 h-6 text-indigo-400" />;
    if (t.includes('subscription system') || t.includes('subscription')) return <CreditCard className="w-6 h-6 text-emerald-400" />;
    if (t.includes('payment integration') || t.includes('payment')) return <CreditCard className="w-6 h-6 text-amber-400" />;
    if (t.includes('user authentication') || t.includes('authentication')) return <Lock className="w-6 h-6 text-blue-400" />;
    if (t.includes('admin panel')) return <Sliders className="w-6 h-6 text-violet-400" />;
    if (t.includes('api integration')) return <Workflow className="w-6 h-6 text-teal-400" />;
    if (t.includes('database development') || t.includes('database')) return <Server className="w-6 h-6 text-rose-400" />;
    if (t.includes('cloud deployment') || t.includes('cloud')) return <Globe className="w-6 h-6 text-sky-400" />;
    if (t.includes('saas maintenance') || t.includes('maintenance')) return <ShieldCheck className="w-6 h-6 text-[#0052FF]" />;

    // Digital Marketing Specific Icons
    if (t === 'meta ads') return <Target className="w-6 h-6 text-blue-500" />;
    if (t === 'google ads') return <Search className="w-6 h-6 text-amber-500" />;
    if (t === 'youtube ads') return <Youtube className="w-6 h-6 text-red-500" />;
    if (t === 'instagram ads') return <Instagram className="w-6 h-6 text-pink-500" />;
    if (t.includes('lead generation')) return <Users className="w-6 h-6 text-emerald-400" />;
    if (t.includes('e-commerce marketing')) return <ShoppingBag className="w-6 h-6 text-amber-400" />;
    if (t.includes('conversion optimization')) return <TrendingUp className="w-6 h-6 text-purple-400" />;
    if (t === 'seo') return <Search className="w-6 h-6 text-cyan-400" />;
    if (t === 'local seo') return <Building className="w-6 h-6 text-teal-400" />;
    if (t.includes('google business profile')) return <CheckCircle2 className="w-6 h-6 text-blue-400" />;
    if (t.includes('email marketing')) return <FileText className="w-6 h-6 text-amber-500" />;
    if (t.includes('whatsapp marketing')) return <MessageSquare className="w-6 h-6 text-emerald-500" />;
    if (t.includes('remarketing') || t.includes('retargeting')) return <RefreshCw className="w-6 h-6 text-rose-500" />;

    // Content & Creative Specific Icons
    if (t.includes('ai video creation')) return <Video className="w-6 h-6 text-pink-500" />;
    if (t.includes('reels editing')) return <Video className="w-6 h-6 text-rose-500" />;
    if (t.includes('shorts editing')) return <Youtube className="w-6 h-6 text-red-500" />;
    if (t.includes('youtube video editing')) return <Youtube className="w-6 h-6 text-red-600" />;
    if (t.includes('motion graphics')) return <Sparkles className="w-6 h-6 text-amber-400" />;
    if (t.includes('logo design')) return <Palette className="w-6 h-6 text-purple-400" />;
    if (t.includes('brand identity')) return <Building className="w-6 h-6 text-blue-400" />;
    if (t.includes('social media post design')) return <ImageIcon className="w-6 h-6 text-emerald-400" />;
    if (t.includes('thumbnail design')) return <Eye className="w-6 h-6 text-cyan-400" />;
    if (t.includes('promotional videos')) return <Video className="w-6 h-6 text-indigo-400" />;
    if (t.includes('product videos')) return <ShoppingBag className="w-6 h-6 text-amber-500" />;
    if (t.includes('ai avatar videos')) return <Bot className="w-6 h-6 text-pink-400" />;
    if (t.includes('ugc-style videos')) return <Users className="w-6 h-6 text-teal-400" />;

    // Social Media Management Specific
    if (t.includes('instagram account management')) return <Instagram className="w-6 h-6 text-pink-500" />;
    if (t.includes('facebook page management')) return <Facebook className="w-6 h-6 text-blue-500" />;
    if (t.includes('youtube channel management')) return <Youtube className="w-6 h-6 text-red-500" />;
    if (t.includes('tiktok management')) return <Video className="w-6 h-6 text-cyan-400" />;
    if (t.includes('linkedin management')) return <Linkedin className="w-6 h-6 text-blue-400" />;
    if (t.includes('content planning')) return <Calendar className="w-6 h-6 text-amber-400" />;
    if (t.includes('content creation')) return <Palette className="w-6 h-6 text-purple-400" />;
    if (t.includes('reels creation')) return <Video className="w-6 h-6 text-rose-500" />;
    if (t.includes('shorts creation')) return <Youtube className="w-6 h-6 text-rose-400" />;
    if (t.includes('post & story design') || t.includes('story design')) return <ImageIcon className="w-6 h-6 text-pink-400" />;
    if (t.includes('caption & hashtag strategy') || t.includes('hashtag')) return <Hash className="w-6 h-6 text-emerald-400" />;
    if (t.includes('community management')) return <MessageSquare className="w-6 h-6 text-teal-400" />;
    if (t.includes('monthly social media management')) return <Sparkles className="w-6 h-6 text-amber-400" />;

    // Social Media Growth Icons
    if (t.includes('instagram')) return <Instagram className="w-6 h-6 text-pink-500" />;
    if (t.includes('youtube')) return <Youtube className="w-6 h-6 text-red-500" />;
    if (t.includes('facebook')) return <Facebook className="w-6 h-6 text-blue-500" />;
    if (t.includes('tiktok')) return <Video className="w-6 h-6 text-cyan-400" />;
    if (t.includes('x (twitter)') || t === 'x growth') return <Twitter className="w-6 h-6 text-slate-200" />;
    if (t.includes('linkedin')) return <Linkedin className="w-6 h-6 text-blue-400" />;
    if (t.includes('followers')) return <Users className="w-6 h-6 text-emerald-400" />;
    if (t.includes('reels') || t.includes('shorts')) return <Video className="w-6 h-6 text-rose-400" />;
    if (t.includes('views')) return <Eye className="w-6 h-6 text-purple-400" />;
    if (t.includes('engagement')) return <Heart className="w-6 h-6 text-rose-500" />;
    if (t.includes('organic growth strategy') || t.includes('strategy')) return <TrendingUp className="w-6 h-6 text-amber-400" />;
    if (t.includes('audit')) return <Search className="w-6 h-6 text-teal-400" />;

    // Web Dev Icons
    if (t.includes('business website')) return <Building className="w-6 h-6 text-indigo-400" />;
    if (t.includes('corporate website')) return <Building className="w-6 h-6 text-blue-400" />;
    if (t.includes('e-commerce website')) return <ShoppingBag className="w-6 h-6 text-amber-400" />;
    if (t.includes('landing page')) return <Target className="w-6 h-6 text-rose-400" />;
    if (t.includes('web application')) return <Code2 className="w-6 h-6 text-cyan-400" />;
    if (t.includes('saas website')) return <Box className="w-6 h-6 text-purple-400" />;
    if (t.includes('ai website')) return <Bot className="w-6 h-6 text-pink-400" />;
    if (t.includes('custom php')) return <Server className="w-6 h-6 text-violet-400" />;
    if (t.includes('react') || t.includes('next.js')) return <Zap className="w-6 h-6 text-sky-400" />;
    if (t.includes('wordpress')) return <Globe className="w-6 h-6 text-blue-500" />;
    if (t.includes('shopify')) return <ShoppingBag className="w-6 h-6 text-emerald-400" />;
    if (t.includes('redesign')) return <Sparkles className="w-6 h-6 text-amber-400" />;
    if (t.includes('api integration')) return <Workflow className="w-6 h-6 text-teal-400" />;
    if (t.includes('payment gateway')) return <CreditCard className="w-6 h-6 text-emerald-500" />;
    if (t.includes('website maintenance')) return <ShieldCheck className="w-6 h-6 text-slate-300" />;

    // App Dev Icons
    if (t.includes('android')) return <Smartphone className="w-6 h-6 text-emerald-400" />;
    if (t.includes('ios')) return <Smartphone className="w-6 h-6 text-blue-400" />;
    if (t.includes('cross-platform')) return <Globe className="w-6 h-6 text-indigo-400" />;
    if (t.includes('flutter')) return <Sparkles className="w-6 h-6 text-cyan-400" />;
    if (t.includes('react native')) return <Code2 className="w-6 h-6 text-sky-400" />;
    if (t.includes('ai-powered') || t.includes('ai app')) return <Bot className="w-6 h-6 text-purple-400" />;
    if (t.includes('e-commerce app')) return <ShoppingBag className="w-6 h-6 text-amber-400" />;
    if (t.includes('business app')) return <Building className="w-6 h-6 text-slate-300" />;
    if (t.includes('social media')) return <Share2 className="w-6 h-6 text-pink-400" />;
    if (t.includes('booking')) return <Calendar className="w-6 h-6 text-teal-400" />;
    if (t.includes('delivery')) return <Truck className="w-6 h-6 text-orange-400" />;
    if (t.includes('crm') || t.includes('management')) return <BarChart3 className="w-6 h-6 text-blue-500" />;
    if (t.includes('ui/ux')) return <Palette className="w-6 h-6 text-violet-400" />;
    if (t.includes('app maintenance')) return <ShieldCheck className="w-6 h-6 text-emerald-500" />;
    
    // AI Services Icons
    if (t.includes('chatbot')) return <Bot className="w-6 h-6 text-emerald-400" />;
    if (t.includes('assistant')) return <Brain className="w-6 h-6 text-purple-400" />;
    if (t.includes('content')) return <FileText className="w-6 h-6 text-amber-400" />;
    if (t.includes('image')) return <ImageIcon className="w-6 h-6 text-pink-400" />;
    if (t.includes('video generation')) return <Video className="w-6 h-6 text-rose-400" />;
    if (t.includes('voice') || t.includes('speech')) return <Mic className="w-6 h-6 text-cyan-400" />;
    if (t.includes('editing')) return <Sliders className="w-6 h-6 text-orange-400" />;
    if (t.includes('api')) return <Code2 className="w-6 h-6 text-blue-400" />;
    if (t.includes('gemini') || t.includes('openai')) return <Cpu className="w-6 h-6 text-purple-400" />;
    if (t.includes('saas')) return <Box className="w-6 h-6 text-emerald-400" />;
    if (t.includes('tools')) return <Wrench className="w-6 h-6 text-amber-400" />;
    if (t.includes('workflow')) return <Workflow className="w-6 h-6 text-violet-400" />;
    return <Zap className="w-6 h-6 text-blue-400" />;
  };

  const isHostingCategory = activeCategory === 'Hosting & Technical Services';
  const isSaaSDevCategory = activeCategory === 'SaaS Development Services';
  const isDigitalMarketingCategory = activeCategory === 'Digital Marketing Services';
  const isContentCreativeCategory = activeCategory === 'Content & Creative Services';
  const isSMMMgmtCategory = activeCategory === 'Social Media Management Services';
  const isSMMGrowthCategory = activeCategory === 'Social Media Growth Services';
  const isWebDevCategory = activeCategory === 'Web Development Services';
  const isAppDevCategory = activeCategory === 'App Development Services';
  const isBusinessAutomationCategory = activeCategory === 'Business Automation';

  const handleWhatsAppAccess = () => {
    let message = "Hello, I am interested in the Hosting & Technical Services – All Services Access package for ₹1,999.";
    if (isSaaSDevCategory) {
      message = "Hello, I am interested in the SaaS Development – All Services Access package for ₹1,999.";
    } else if (isDigitalMarketingCategory) {
      message = "Hello, I am interested in the Digital Marketing – All Services Access package for ₹1,999.";
    } else if (isContentCreativeCategory) {
      message = "Hello, I am interested in the Content & Creative – All Services Access package for ₹1,999.";
    } else if (isSMMMgmtCategory) {
      message = "Hello, I am interested in the Social Media Management – All Services Access package for ₹1,999.";
    } else if (isSMMGrowthCategory) {
      message = "Hello, I am interested in the Social Media Growth – All Services Access package for ₹1,999.";
    } else if (isWebDevCategory) {
      message = "Hello, I am interested in the Web Development – All Services Access package for ₹1,999.";
    } else if (isAppDevCategory) {
      message = "Hello, I am interested in the App Development – All Services Access package for ₹1,999.";
    } else if (isBusinessAutomationCategory) {
      message = "Hello, I am interested in the Business Automation – All Services Access package for ₹1,999.";
    } else if (!isHostingCategory && !isSaaSDevCategory && !isDigitalMarketingCategory && !isContentCreativeCategory && !isSMMMgmtCategory && !isSMMGrowthCategory && !isWebDevCategory && !isAppDevCategory && !isBusinessAutomationCategory) {
      message = "Hello, I am interested in the AI Services – All Services Access package for ₹1,999.";
    }
    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  const handleGeneralWhatsApp = () => {
    let message = "Hello! I would like to inquire about your Hosting & Technical Services.";
    if (isSaaSDevCategory) {
      message = "Hello! I would like to inquire about your SaaS Development Services.";
    } else if (isDigitalMarketingCategory) {
      message = "Hello! I would like to inquire about your Digital Marketing Services.";
    } else if (isContentCreativeCategory) {
      message = "Hello! I would like to inquire about your Content & Creative Services.";
    } else if (isSMMMgmtCategory) {
      message = "Hello! I would like to inquire about your Social Media Management Services.";
    } else if (isSMMGrowthCategory) {
      message = "Hello! I would like to inquire about your Social Media Growth Services.";
    } else if (isWebDevCategory) {
      message = "Hello! I would like to inquire about your Web Development Services.";
    } else if (isAppDevCategory) {
      message = "Hello! I would like to inquire about your App Development Services.";
    } else if (isBusinessAutomationCategory) {
      message = "Hello! I would like to inquire about your Business Automation Services.";
    } else if (!isHostingCategory && !isSaaSDevCategory && !isDigitalMarketingCategory && !isContentCreativeCategory && !isSMMMgmtCategory && !isSMMGrowthCategory && !isWebDevCategory && !isAppDevCategory && !isBusinessAutomationCategory) {
      message = "Hello! I would like to inquire about your AI Solutions & Services.";
    }
    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  const handleServiceWhatsApp = (serviceTitle: string) => {
    const message = `Hello, I am interested in the ${serviceTitle} service for ₹1,999. Please share the details and onboarding steps.`;
    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  const categoryBoxes: { id: ServiceCategory; name: string; icon: React.ReactNode; color: string; activeStyle: string }[] = [
    {
      id: 'Hosting & Technical Services',
      name: 'Hosting & Technical',
      icon: <Server className="w-5 h-5" />,
      color: 'text-cyan-400',
      activeStyle: 'bg-gradient-to-br from-cyan-600 via-teal-600 to-cyan-700 text-white shadow-cyan-500/30 border-cyan-400/80 ring-2 ring-cyan-400/40'
    },
    {
      id: 'SaaS Development Services',
      name: 'SaaS Development',
      icon: <Box className="w-5 h-5" />,
      color: 'text-blue-400',
      activeStyle: 'bg-gradient-to-br from-blue-600 via-cyan-600 to-indigo-600 text-white shadow-blue-500/30 border-blue-400/80 ring-2 ring-blue-400/40'
    },
    {
      id: 'Digital Marketing Services',
      name: 'Digital Marketing',
      icon: <Megaphone className="w-5 h-5" />,
      color: 'text-emerald-400',
      activeStyle: 'bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white shadow-emerald-500/30 border-emerald-400/80 ring-2 ring-emerald-400/40'
    },
    {
      id: 'Content & Creative Services',
      name: 'Content & Creative',
      icon: <Palette className="w-5 h-5" />,
      color: 'text-purple-400',
      activeStyle: 'bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 text-white shadow-purple-500/30 border-purple-400/80 ring-2 ring-purple-400/40'
    },
    {
      id: 'Social Media Management Services',
      name: 'Social Media Mgmt',
      icon: <LayoutGrid className="w-5 h-5" />,
      color: 'text-fuchsia-400',
      activeStyle: 'bg-gradient-to-br from-fuchsia-600 via-pink-600 to-purple-600 text-white shadow-fuchsia-500/30 border-fuchsia-400/80 ring-2 ring-fuchsia-400/40'
    },
    {
      id: 'Social Media Growth Services',
      name: 'Social Media Growth',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'text-rose-400',
      activeStyle: 'bg-gradient-to-br from-pink-600 via-rose-600 to-pink-700 text-white shadow-rose-500/30 border-rose-400/80 ring-2 ring-rose-400/40'
    },
    {
      id: 'Web Development Services',
      name: 'Web Development',
      icon: <Globe className="w-5 h-5" />,
      color: 'text-indigo-400',
      activeStyle: 'bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-700 text-white shadow-indigo-500/30 border-indigo-400/80 ring-2 ring-indigo-400/40'
    },
    {
      id: 'App Development Services',
      name: 'App Development',
      icon: <Smartphone className="w-5 h-5" />,
      color: 'text-sky-400',
      activeStyle: 'bg-gradient-to-br from-sky-600 via-blue-600 to-sky-700 text-white shadow-sky-500/30 border-sky-400/80 ring-2 ring-sky-400/40'
    },
    {
      id: 'Business Automation',
      name: 'Business Automation',
      icon: <Workflow className="w-5 h-5" />,
      color: 'text-teal-400',
      activeStyle: 'bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-700 text-white shadow-teal-500/30 border-teal-400/80 ring-2 ring-teal-400/40'
    },
    {
      id: 'AI Solutions & Services',
      name: 'AI Solutions & Services',
      icon: <Sparkles className="w-5 h-5" />,
      color: 'text-amber-400',
      activeStyle: 'bg-gradient-to-br from-purple-600 via-indigo-600 to-violet-700 text-white shadow-purple-500/30 border-purple-400/80 ring-2 ring-purple-400/40'
    }
  ];

  return (
    <div className="bg-transparent text-white min-h-screen py-8 relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-cyan-500/5 pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================== */}
        {/* CATEGORY SWITCHER TABS - 2 LINES SMALL BOX GRID */}
        {/* ========================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-6xl mx-auto mb-10 px-2"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3 p-3 bg-[#131b26] rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-xl">
            {categoryBoxes.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                  className={`relative cursor-pointer p-3 rounded-2xl border text-center flex flex-col items-center justify-center gap-1.5 transition-all duration-300 group overflow-hidden ${
                    isActive
                      ? 'btn-cyan-primary text-slate-950 shadow-lg border-cyan-300'
                      : 'bg-[#0c131f]/90 hover:bg-slate-800/90 text-slate-300 border-slate-700/60 hover:border-slate-600'
                  }`}
                >
                  <div
                    className={`p-2 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-slate-950/20 text-slate-950 shadow-inner'
                        : 'bg-[#1a2332] group-hover:bg-slate-700/80 ' + cat.color
                    }`}
                  >
                    {cat.icon}
                  </div>

                  <span
                    className={`text-[11px] sm:text-xs font-extrabold tracking-tight leading-tight ${
                      isActive ? 'text-slate-950 font-black' : 'text-slate-300 group-hover:text-white'
                    }`}
                  >
                    {cat.name}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryDot"
                      className="w-1.5 h-1.5 rounded-full bg-slate-950 shadow-sm mt-0.5"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* ========================================== */}
        {/* TOP SECTION: CATEGORY HEADING & DESCRIPTION */}
        {/* ========================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-10 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full text-purple-300 font-extrabold text-xs uppercase tracking-widest shadow-inner">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span>
              {isHostingCategory
                ? 'Cloud Infrastructure, Server Administration & Hosting Suite'
                : isSaaSDevCategory
                ? 'Cloud Software Engineering & Microservices Architecture'
                : isDigitalMarketingCategory
                ? 'Full-Funnel Growth & Performance Marketing'
                : isContentCreativeCategory
                ? 'Creative Video & Digital Design Suite'
                : isSMMMgmtCategory
                ? 'Full-Service Brand Management Suite'
                : isSMMGrowthCategory
                ? 'Audience Expansion & Viral Agency Suite'
                : isWebDevCategory 
                ? 'Web Engineering & Agency Suite' 
                : isAppDevCategory 
                ? 'Mobile App Engineering Suite' 
                : 'Next-Gen Enterprise AI Suite'}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            {isHostingCategory
              ? 'Hosting & Technical Services'
              : isSaaSDevCategory
              ? 'SaaS Development Services'
              : isDigitalMarketingCategory
              ? 'Digital Marketing Services'
              : isContentCreativeCategory
              ? 'Content & Creative Services'
              : isSMMMgmtCategory
              ? 'Social Media Management Services'
              : isSMMGrowthCategory
              ? 'Social Media Growth Services'
              : isWebDevCategory 
              ? 'Web Development Services' 
              : isAppDevCategory 
              ? 'App Development Services' 
              : isBusinessAutomationCategory
              ? 'Business Automation'
              : 'AI Solutions & Services'}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal pt-2 px-2 sm:px-6">
            {isHostingCategory ? (
              'We provide technical infrastructure and deployment support for websites, applications and online businesses. Our services include domain and hosting setup, cPanel configuration, website deployment, cloud deployment, SSL installation, website migration, database setup, server configuration, backups, maintenance and technical support. These services help clients keep their websites and applications secure, accessible and properly configured.'
            ) : isSaaSDevCategory ? (
              'We build scalable Software-as-a-Service products for startups, businesses and entrepreneurs. We can transform an idea into a complete web-based SaaS platform with user authentication, dashboards, subscriptions, payment systems, APIs, databases, admin panels, AI integrations and scalable infrastructure. SaaS products can be customized according to business requirements.'
            ) : isDigitalMarketingCategory ? (
              'We provide complete digital marketing solutions designed to increase online visibility, generate leads, improve conversions and grow businesses. Our services cover Meta Ads, Google Ads, YouTube Ads, Instagram Ads, lead generation, e-commerce marketing, conversion optimization, SEO, Local SEO, Google Business Profile Optimization, email marketing, WhatsApp marketing and remarketing/retargeting. Every campaign is engineered with data-driven audience targeting, continuous ad testing, clear ROI tracking, and performance optimization to maximize sales and business profitability.'
            ) : isContentCreativeCategory ? (
              'We create professional digital content for brands, businesses, creators, influencers and marketing campaigns. Our creative services include AI videos, Reels, Shorts, YouTube editing, motion graphics, logo design, brand identity, social media designs, thumbnails, promotional videos, product videos, AI avatar videos and UGC-style videos. Our objective is to create attractive, platform-ready content that communicates the brand message effectively.'
            ) : isSMMMgmtCategory ? (
              'We provide complete social media management for brands, businesses, creators and organizations, including account management, content planning, content creation, Reels, Shorts, posts, stories, captions, hashtags, community management and monthly management. Our service is designed to maintain a consistent online presence, improve brand presentation, increase audience engagement and save business owners time.'
            ) : isSMMGrowthCategory ? (
              'We help creators, influencers, brands, businesses and organizations grow their social media presence across major platforms. Our services focus on account growth strategy, audience development, Instagram, YouTube, Facebook, TikTok, X and LinkedIn growth, followers, Reels and Shorts reach, views, engagement, organic growth strategy and account audits. Every campaign is tailored according to the platform, target audience and business objective.'
            ) : isWebDevCategory ? (
              'We create professional, fast, secure, responsive and scalable digital experiences for businesses, startups, entrepreneurs and organizations. Our services include business websites, corporate websites, e-commerce stores, landing pages, web applications, SaaS platforms, AI websites, custom PHP development, React/Next.js development, WordPress websites, Shopify store development, website redesign, API integrations, payment gateway integrations, and comprehensive website maintenance. Every website is designed for mobile, tablet and desktop with modern UI/UX, high performance, SEO-friendly structure, and long-term scalability.'
            ) : isAppDevCategory ? (
              'We develop modern, scalable and user-friendly mobile applications for startups, businesses, creators and enterprises. Our team can build Android, iOS and cross-platform applications, AI-powered applications, e-commerce apps, business applications, social platforms, booking systems, delivery applications, CRM and management applications, as well as complete app UI/UX, maintenance and support. Our development process focuses on performance, security, scalability, responsive interfaces and smooth user experience.'
            ) : isBusinessAutomationCategory ? (
              'We streamline and automate repetitive business workflows across marketing, lead capture, CRM, messaging, order processing, and internal operations. Our automation solutions connect your Meta Ads, WhatsApp, Email, CRM, payment systems, and databases into autonomous pipelines that save hundreds of hours, minimize human error, and accelerate business growth.'
            ) : (
              'We provide complete AI development and implementation solutions for businesses, startups, creators and organizations, including AI-powered applications, websites, automation, chatbots, content generation, image and video generation, voice solutions, AI API integrations, SaaS products and customized artificial intelligence tools. Our AI solutions are designed to automate repetitive work, improve customer experience, increase productivity, reduce operational costs and create scalable digital products.'
            )}
          </p>
        </motion.div>

        {/* ========================================== */}
        {/* FEMALE DIGITAL MARKETING SPECIALIST IMAGE  */}
        {/* ========================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto mb-10 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500 pointer-events-none" />
          
          <div className="relative rounded-3xl overflow-hidden border-2 border-slate-800 bg-slate-900 shadow-2xl">
            <img
              src={isHostingCategory ? hostingGirlImg : isSaaSDevCategory ? saasGirlImg : isDigitalMarketingCategory ? dmGirlImg : isContentCreativeCategory ? creativeGirlImg : isSMMMgmtCategory ? smmMgmtGirlImg : isSMMGrowthCategory ? smmGirlImg : isWebDevCategory ? webDevGirlImg : isAppDevCategory ? appDevGirlImg : aiGirlImg}
              alt={isHostingCategory ? "Professional Female IT & Server Administrator Managing Hosting Infrastructure, cPanel & Cloud Deployments" : isSaaSDevCategory ? "Professional Female SaaS & Software Developer Building Cloud Software Dashboards & Microservices" : isDigitalMarketingCategory ? "Professional Female Digital Marketing Specialist Analyzing Ads & Conversion Analytics" : isContentCreativeCategory ? "Professional Female Creative Designer Video Editor & Digital Artist" : isSMMMgmtCategory ? "Professional Female Social Media Manager Content Planner & Digital Marketer" : isSMMGrowthCategory ? "Professional Female Social Media Growth Manager & Creator Expert" : isWebDevCategory ? "Professional Female Web Developer & Technology Expert" : isAppDevCategory ? "Professional Female Mobile App Developer & Technology Expert" : "Professional Female AI & Technology Expert"}
              className="w-full h-[320px] sm:h-[420px] object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="bg-slate-900/90 backdrop-blur border border-purple-500/30 px-4 py-2 rounded-2xl flex items-center space-x-3 shadow-lg">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {isHostingCategory
                      ? 'Verified Cloud Infrastructure Engineers & Systems Administrators'
                      : isSaaSDevCategory
                      ? 'Verified SaaS Architecture Lead & Senior Software Engineers'
                      : isDigitalMarketingCategory
                      ? 'Verified Performance Marketing Lead & Media Buyers'
                      : isContentCreativeCategory
                      ? 'Verified Creative Director Lead & Pro Video Editors'
                      : isSMMMgmtCategory
                      ? 'Verified Social Media Management Lead & Content Strategists'
                      : isSMMGrowthCategory
                      ? 'Verified Social Media Growth Lead & Viral Campaign Strategists'
                      : isWebDevCategory 
                      ? 'Verified Web Architecture Lead & Senior Full-Stack Engineers' 
                      : isAppDevCategory 
                      ? 'Verified Mobile App Lead & Senior Software Engineers' 
                      : 'Verified AI Development Lead & Expert Engineers'}
                  </span>
                </div>
                
                <div className="bg-amber-500/20 border border-amber-500/40 text-amber-300 px-3 py-1.5 rounded-xl text-xs font-black flex items-center space-x-1.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{isHostingCategory ? '1,000+ Servers & Sites Deployed' : isSaaSDevCategory ? '100+ SaaS Platforms Built' : '500+ Campaigns Scaled'}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================== */}
        {/* PROMINENT WHATSAPP CONTACT BUTTON          */}
        {/* ========================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <button
            type="button"
            onClick={handleGeneralWhatsApp}
            className="inline-flex items-center space-x-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-emerald-600/30 hover:shadow-emerald-500/50 transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer border border-emerald-400/40"
          >
            <div className="w-7 h-7 rounded-full bg-white text-emerald-600 flex items-center justify-center font-black">
              <MessageSquare className="w-4 h-4 fill-emerald-600 text-emerald-600" />
            </div>
            <span>Talk to Us on WhatsApp</span>
          </button>
        </motion.div>

        {/* ========================================== */}
        {/* PREMIUM PRICING CARD / BOX                */}
        {/* ========================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto mb-16 relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-3xl blur-md opacity-75 animate-pulse pointer-events-none" />
          
          <div className="relative bg-slate-900 border-2 border-purple-500/40 rounded-3xl p-6 sm:p-8 text-center space-y-5 shadow-2xl">
            <div className="inline-block bg-purple-500/20 text-purple-300 border border-purple-400/30 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full">
              Limited Period All-Inclusive Offer
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              This Category – All Services Access
            </h2>

            <div className="flex items-center justify-center space-x-3">
              <span className="text-slate-400 line-through text-lg font-bold">₹15,000</span>
              <span className="text-4xl sm:text-5xl font-black text-amber-400 tracking-tight">
                {formatPrice(1999)}
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 text-xs font-black px-2.5 py-1 rounded-lg border border-emerald-500/30">
                SAVE 87%
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              {isHostingCategory ? (
                'Get complete access to all 11 specialized Hosting & Technical services, domain and hosting setup, cPanel configuration, cloud deployments, SSL certificates, migrations, database setup, server hardening, automated backups, and 24/7 technical support.'
              ) : isSaaSDevCategory ? (
                'Get complete access to all 11 specialized SaaS Development services, custom platform architecture, AI integrations, multi-tenant databases, payment gateways, and dedicated senior software engineer consultation.'
              ) : isDigitalMarketingCategory ? (
                'Get complete access to all 13 specialized Digital Marketing services, Meta & Google Ads management, SEO audits, lead generation funnels, and dedicated performance marketer consultation.'
              ) : isContentCreativeCategory ? (
                'Get complete access to all 13 specialized Content & Creative services, AI videos, Reels & Shorts editing, Motion Graphics, Logo & Brand Identity, and dedicated creative team consultation.'
              ) : isSMMMgmtCategory ? (
                'Get complete access to all 13 specialized Social Media Management services, content creation, Reels, Shorts, posting schedules, and dedicated account manager consultation.'
              ) : isSMMGrowthCategory ? (
                'Get complete access to all 12 specialized Social Media Growth services, organic campaigns, platform growth strategies, and dedicated manager consultation.'
              ) : isWebDevCategory ? (
                'Get complete access to all 15 specialized Web Development services, responsive designs, source code delivery, and dedicated team consultation.'
              ) : isAppDevCategory ? (
                'Get complete access to all 14 specialized Mobile App Development services, architecture blueprints, source code delivery, and dedicated team consultation.'
              ) : (
                'Get complete, unrestricted deployment access to all 15 specialized AI engineering services, custom automation flows, and dedicated strategy consultation.'
              )}
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleWhatsAppAccess}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-500 hover:to-rose-500 text-white font-black text-sm sm:text-base rounded-2xl shadow-xl shadow-purple-600/30 hover:shadow-purple-500/50 transition-all transform hover:scale-[1.02] active:scale-100 flex items-center justify-center space-x-2.5 mx-auto border border-purple-400/30 cursor-pointer"
              >
                <span>Get All Services – ₹1,999</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-400 font-semibold pt-2">
              <span className="flex items-center"><Check className="w-3.5 h-3.5 text-emerald-400 mr-1" /> Instant WhatsApp Onboarding</span>
              <span className="flex items-center"><Check className="w-3.5 h-3.5 text-emerald-400 mr-1" /> Fast Turnaround SLA</span>
              <span className="flex items-center"><Check className="w-3.5 h-3.5 text-emerald-400 mr-1" /> 100% Dedicated Support</span>
            </div>
          </div>
        </motion.div>

        {/* ========================================== */}
        {/* SEARCH & CATALOG HEADER                    */}
        {/* ========================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800"
        >
          <div>
            <h3 className="text-xl font-extrabold text-white">
              {isHostingCategory
                ? 'All 11 Hosting & Technical Services'
                : isSaaSDevCategory
                ? 'All 11 SaaS Development Services'
                : isDigitalMarketingCategory
                ? 'All 13 Digital Marketing Services'
                : isContentCreativeCategory
                ? 'All 13 Content & Creative Services'
                : isSMMMgmtCategory
                ? 'All 13 Social Media Management Services'
                : isSMMGrowthCategory
                ? 'All 12 Social Media Growth Services'
                : isWebDevCategory 
                ? 'All 15 Web Development Services' 
                : isAppDevCategory 
                ? 'All 14 App Development Services' 
                : 'All 15 AI Specialized Services'}
            </h3>
            <p className="text-xs text-slate-400">
              Browse individual capabilities or order specific custom campaigns.
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
            <input
              type="text"
              placeholder={`Search ${isHostingCategory ? 'hosting' : isSaaSDevCategory ? 'SaaS' : isDigitalMarketingCategory ? 'digital marketing' : isSMMMgmtCategory || isSMMGrowthCategory ? 'social' : isWebDevCategory ? 'web' : isAppDevCategory ? 'app' : 'AI'} services...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-700 text-xs text-white bg-slate-900 focus:outline-none focus:border-purple-500"
            />
          </div>
        </motion.div>

        {/* ========================================== */}
        {/* SERVICES GRID LAYOUT                       */}
        {/* ========================================== */}
        {loading ? (
          <div className="py-20 text-center text-sm text-slate-400">
            Loading services directory...
          </div>
        ) : filteredServices.length === 0 ? (
          <div className="py-16 text-center text-slate-400 bg-slate-900 rounded-2xl border border-slate-800">
            No services found matching "{searchQuery}" in {activeCategory}.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-3xl p-6 shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-yellow-300 via-amber-300 to-pink-400 hover:from-yellow-200 hover:via-pink-300 hover:to-pink-500 border-2 border-yellow-100/90 hover:border-pink-200 shadow-2xl shadow-pink-500/20 hover:shadow-pink-500/40 text-slate-950 transform hover:-translate-y-1"
              >
                {/* Numbering badge */}
                <div className="absolute top-4 right-4 font-black text-2xl transition-colors text-pink-950/30 group-hover:text-pink-950/50">
                  #{index + 1}
                </div>

                <div>
                  {/* Icon & Category Tag */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl border flex items-center justify-center transition-colors bg-slate-950/15 border-slate-950/20 text-slate-950 group-hover:bg-slate-950/20">
                      {getServiceIcon(service.title)}
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md border text-slate-950 bg-slate-950/15 border-slate-950/20">
                        {service.category}
                      </span>
                      {service.featured && (
                        <span className="ml-2 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded border text-slate-950 bg-white/40 border-slate-950/20">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-black transition-colors mb-2 text-slate-950 group-hover:text-slate-900">
                    {service.title}
                  </h4>

                  {/* Short Description */}
                  <p className="text-xs leading-relaxed mb-4 min-h-[48px] text-slate-900 font-medium">
                    {service.shortDesc}
                  </p>

                  {/* Feature Highlights Grid */}
                  <div className="space-y-2 mb-6 pt-2 border-t border-slate-950/15">
                    {service.featuresGrid.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start text-xs text-slate-950 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-2 shrink-0 mt-0.5 text-slate-950" />
                        <span className="truncate font-medium">{feat.headline}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t space-y-3 border-slate-950/15">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center text-slate-900 font-semibold">
                      <Clock className="w-3.5 h-3.5 mr-1 text-slate-950" />
                      {service.deliveryTime || '2-4 Days'}
                    </span>
                    {(service.category === 'Social Media Management Services' || service.category.includes('Social Media Management') || service.category === 'SMM Management') ? (
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-950 bg-slate-950/15 border border-slate-950/20 px-2 py-0.5 rounded">
                        DIGITAL GROWTH & DEVELOPMENT SERVICES
                      </span>
                    ) : (
                      <span className="text-base font-black text-slate-950">
                        {formatPrice(service.basePrice)}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedModalService(service)}
                      className="py-2.5 px-3 font-bold text-xs rounded-xl transition text-center cursor-pointer flex items-center justify-center space-x-1 bg-slate-950 text-white hover:bg-slate-900 shadow-md"
                    >
                      <span>View Details</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleServiceWhatsApp(service.title)}
                      className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl transition flex items-center justify-center space-x-1 shadow-md shadow-emerald-600/20 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* Dynamic View Details Modal Popup */}
      <ServiceDetailsModal
        service={selectedModalService}
        isOpen={!!selectedModalService}
        onClose={() => setSelectedModalService(null)}
        onWhatsApp={handleServiceWhatsApp}
        formatPrice={formatPrice}
      />
    </div>
  );
};

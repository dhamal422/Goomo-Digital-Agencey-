import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Send, 
  Check, 
  Layout, 
  Zap, 
  Smartphone, 
  Shield, 
  Monitor, 
  Cpu, 
  RefreshCw, 
  ShoppingCart, 
  CreditCard, 
  Box, 
  BarChart3, 
  Target, 
  Split, 
  Lock, 
  Activity, 
  Database, 
  Eye, 
  Figma, 
  TrendingUp, 
  Layers, 
  Sliders, 
  UserCheck, 
  Palette, 
  Search, 
  Filter, 
  Bot, 
  Globe, 
  MessageCircle, 
  MessageSquare, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Youtube, 
  Twitter, 
  AlertTriangle
} from 'lucide-react';
import { Service } from '../types';
import { LockedPricingWall } from '../components/LockedPricingWall';
import { ServiceCard } from '../components/ServiceCard';
import { StickyCheckoutBar } from '../components/StickyCheckoutBar';
import { CheckoutModal } from '../components/CheckoutModal';
import { ServiceEcommerceActionCard } from '../components/ServiceEcommerceActionCard';
import { SocialGrowthRateMatrixGrid } from '../components/SocialGrowthRateMatrixGrid';
import { useCurrency } from '../context/CurrencyContext';

interface ServiceDetailPageProps {
  slug: string;
  navigate: (route: string, slug?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug, navigate }) => {
  const { formatPrice } = useCurrency();
  const [service, setService] = useState<Service | null>(null);
  const [relatedServices, setRelatedServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedPlanPrice, setSelectedPlanPrice] = useState<number | null>(null);
  const [selectedPlanTitle, setSelectedPlanTitle] = useState<string>('');

  // Checkout modal state
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Contact form state
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    fetchServiceDetail();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const fetchServiceDetail = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/services/${slug}`);
      const data = await res.json();

      if (data.success && data.data) {
        setService(data.data);

        // Fetch related services in same category
        const allRes = await fetch(`/api/services?category=${encodeURIComponent(data.data.category)}`);
        const allData = await allRes.json();
        if (allData.success) {
          setRelatedServices(
            allData.data.filter((s: Service) => s.slug !== slug).slice(0, 3)
          );
        }
        setSelectedPlanPrice(data.data.basePrice);
        setSelectedPlanTitle(data.data.title);
      } else {
        setError('Service not found in agency directory.');
      }
    } catch (err) {
      setError('Network communication failure with agency registry.');
    } finally {
      setLoading(false);
    }
  };

  const handleInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName,
          clientEmail,
          selectedService: service?.title,
          message
        })
      });

      const data = await res.json();
      if (data.success) {
        setFormSuccess(true);
        setClientName('');
        setClientEmail('');
        setMessage('');
      }
    } catch (err) {
      alert('Error submitting inquiry. Please try again.');
    } finally {
      setFormLoading(false);
    }
  };

  const renderFeatureIcon = (iconName: string) => {
    switch (iconName?.toLowerCase()) {
      case 'bot':
        return <Bot className="w-5 h-5 text-[#b2ebf2]" />;
      case 'globe':
        return <Globe className="w-5 h-5 text-indigo-400" />;
      case 'zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'shield':
        return <Shield className="w-5 h-5 text-emerald-400" />;
      case 'message':
      case 'messagesquare':
        return <MessageSquare className="w-5 h-5 text-emerald-400" />;
      case 'barchart':
      case 'barchart3':
        return <BarChart3 className="w-5 h-5 text-cyan-400" />;
      case 'target':
        return <Target className="w-5 h-5 text-rose-400" />;
      case 'palette':
        return <Palette className="w-5 h-5 text-purple-400" />;
      case 'figma':
        return <Figma className="w-5 h-5 text-fuchsia-400" />;
      case 'smartphone':
        return <Smartphone className="w-5 h-5 text-sky-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-teal-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  if (loading) {
    return (
      <div className="bg-transparent min-h-screen flex items-center justify-center py-20">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-slate-400 text-sm font-medium">Fetching technical architecture specs...</p>
        </div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="bg-transparent min-h-screen flex items-center justify-center px-4 py-20">
        <div className="bg-[#131b26] border border-slate-800 rounded-3xl p-8 max-w-md text-center shadow-2xl">
          <AlertTriangle className="w-12 h-12 text-amber-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">{error || 'Service Not Found'}</h3>
          <p className="text-xs text-slate-400 mb-6">
            The requested service slug could not be located in our active database registry.
          </p>
          <button
            onClick={() => navigate('services')}
            className="px-6 py-2.5 btn-cyan-primary text-slate-950 text-xs font-black rounded-xl shadow-md cursor-pointer"
          >
            Back to All 38 Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-transparent text-slate-100 min-h-screen">
      
      {/* MINIMALIST HEADER SECTION (DOUBLE NESTED CONTAINER) */}
      <section className="pt-8 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#131b26] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          
          {/* Back Navigation */}
          <button
            onClick={() => navigate('services')}
            className="inline-flex items-center space-x-2 text-xs font-bold text-slate-400 hover:text-[#b2ebf2] transition mb-6 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Services</span>
          </button>

          {/* Category Badge & Title */}
          <div className="space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#b2ebf2] bg-slate-800/90 px-3.5 py-1.5 rounded-full border border-slate-700/80 inline-block">
              Category: {service.category}
            </span>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed font-medium">
              {service.shortDesc}
            </p>
          </div>

          {/* SLA & Delivery Meta */}
          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-slate-800 text-xs font-semibold text-slate-400">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#b2ebf2]" />
              <span>Turnaround SLA: <strong className="text-white">{service.deliveryTime || '3-5 Days'}</strong></span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Guaranteed Execution</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Dedicated Senior Architect</span>
            </div>
          </div>

        </div>
      </section>

      {/* MAIN CONTENT & PRICING WALL GRID */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Deep Content Body & Feature Grid */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Rate Matrix Grid (If service has pricing rate matrix like Instagram, YouTube, Facebook) */}
            {service.rateMatrix && service.rateMatrix.length > 0 && (
              <div className="bg-[#131b26] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
                <SocialGrowthRateMatrixGrid
                  rateMatrix={service.rateMatrix}
                  serviceTitle={service.title}
                  onSelectItem={(item, price) => {
                    setSelectedPlanPrice(price);
                    setSelectedPlanTitle(`${service.title} - ${item.name} (${item.quantity || ''})`);
                    setIsCheckoutOpen(true);
                  }}
                />
              </div>
            )}

            {/* Multi-Paragraph Service Overview */}
            <div className="bg-[#131b26] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-3 mb-4">
                Service Overview & Strategic Execution Plan
              </h2>

              <div className="prose prose-invert max-w-none text-sm text-slate-300 leading-relaxed space-y-4 font-normal whitespace-pre-line">
                {service.fullDeepContent}
              </div>
            </div>

            {/* Individual Feature Grid (Extracted from Object) */}
            <div className="bg-[#131b26] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <div className="mb-6">
                <span className="text-xs font-bold text-[#b2ebf2] uppercase tracking-wider">
                  Technical Specifications
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  Extracted Core Deliverables
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.featuresGrid.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl border border-slate-700/70 bg-[#1a2332] hover:border-cyan-400/50 transition space-y-2"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center mb-2">
                      {renderFeatureIcon(feature.icon)}
                    </div>
                    <h4 className="text-sm font-bold text-white">{feature.headline}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Inquiry Form */}
            <div className="bg-[#131b26] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-1">
                Book {service.title}
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Submit your project details to receive a custom statement of work and immediate project onboarding.
              </p>

              {formSuccess ? (
                <div className="p-6 bg-[#1a2332] border border-emerald-500/40 rounded-2xl text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Inquiry Received</h4>
                  <p className="text-xs text-slate-300">
                    Our lead architect assigned to <strong>{service.title}</strong> will contact you shortly.
                  </p>
                  <button
                    onClick={() => setFormSuccess(false)}
                    className="mt-2 text-xs font-bold text-[#b2ebf2] underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquiry} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-700 text-white text-sm bg-[#1a2332] focus:border-cyan-300 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-700 text-white text-sm bg-[#1a2332] focus:border-cyan-300 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Project Message</label>
                    <textarea
                      rows={3}
                      placeholder={`Tell us about your objectives for ${service.title}...`}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-700 text-white text-sm bg-[#1a2332] focus:border-cyan-300 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full py-3.5 btn-cyan-primary text-slate-950 font-black rounded-xl text-sm transition flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{formLoading ? 'Submitting...' : 'Submit Request'}</span>
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Column: Locked Pricing & Custom Ecommerce Action Component */}
          <div className="space-y-6">
            
            {/* Custom Ecommerce Action Box (Sample, Add to cart, Buy Now, Badges, WhatsApp Support) */}
            <ServiceEcommerceActionCard
              serviceTitle={selectedPlanTitle || service.title}
              basePrice={selectedPlanPrice !== null ? selectedPlanPrice : service.basePrice}
              onBuyNow={() => setIsCheckoutOpen(true)}
              onAddToCart={() => {
                // Open checkout or cart confirmation
              }}
            />

            <LockedPricingWall 
              basePrice={service.basePrice} 
              deliveryTime={service.deliveryTime}
              serviceTitle={service.title}
              size="full"
            />

            {/* Quick Guarantees Card */}
            <div className="bg-[#131b26] border border-slate-800 rounded-3xl p-6 shadow-2xl text-xs space-y-3">
              <h4 className="font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
                Agency Guarantee Terms
              </h4>
              <div className="flex items-start space-x-2 text-slate-300">
                <Check className="w-4 h-4 text-[#b2ebf2] shrink-0 mt-0.5" />
                <span>Dedicated senior agency account manager assignment.</span>
              </div>
              <div className="flex items-start space-x-2 text-slate-300">
                <Check className="w-4 h-4 text-[#b2ebf2] shrink-0 mt-0.5" />
                <span>Full vector & code source file transfer upon completion.</span>
              </div>
              <div className="flex items-start space-x-2 text-slate-300">
                <Check className="w-4 h-4 text-[#b2ebf2] shrink-0 mt-0.5" />
                <span>Unlimited revision cycles until 100% sign-off.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* BOTTOM PAYMENT BUTTON & CHECKOUT SECTION FOR SERVICE */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#131b26] border border-slate-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
          <span className="px-3 py-1 rounded-full bg-slate-800 text-[#b2ebf2] border border-slate-700 text-xs font-bold uppercase tracking-widest inline-block">
            Instant Direct Checkout
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Ready to Start {service.title}?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
            Order directly now with multi-currency support and instant automated order confirmation.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full sm:w-auto px-10 py-4 btn-cyan-primary text-slate-950 text-base font-black rounded-2xl shadow-xl transition transform hover:scale-[1.02] flex items-center justify-center space-x-3 cursor-pointer"
            >
              <span>Get Now for {formatPrice(service.basePrice)}</span>
              <span className="text-xl font-bold">»</span>
            </button>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES SECTION */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold text-[#b2ebf2] uppercase tracking-wider">
                  Explore Related Capabilities
                </span>
                <h3 className="text-2xl font-black text-white">
                  More in {service.category}
                </h3>
              </div>
              <button
                onClick={() => navigate('services')}
                className="text-xs font-bold text-[#b2ebf2] hover:underline cursor-pointer"
              >
                View Catalog →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <ServiceCard 
                  key={rel.id} 
                  service={rel} 
                  navigate={navigate} 
                  onInstantBuy={(title, price) => {
                    setIsCheckoutOpen(true);
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* STICKY CHECKOUT BAR AT BOTTOM OF SCREEN */}
      <StickyCheckoutBar 
        serviceTitle={selectedPlanTitle || service.title} 
        discountedPriceINR={selectedPlanPrice !== null ? selectedPlanPrice : service.basePrice} 
        originalPriceINR={Math.round((selectedPlanPrice !== null ? selectedPlanPrice : service.basePrice) * 1.5)}
        onCheckout={() => setIsCheckoutOpen(true)} 
      />

      {/* CHECKOUT PAYMENT MODAL */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        serviceTitle={selectedPlanTitle || service.title} 
        priceINR={selectedPlanPrice !== null ? selectedPlanPrice : service.basePrice} 
      />

    </div>
  );
};

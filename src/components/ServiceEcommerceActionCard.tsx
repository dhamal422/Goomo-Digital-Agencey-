import React, { useState } from 'react';
import { 
  FileText, 
  ShoppingCart, 
  Zap, 
  Lock, 
  Check, 
  Infinity as InfinityIcon, 
  Star, 
  MessageSquare,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { useSettings } from '../context/SettingsContext';

interface ServiceEcommerceActionCardProps {
  serviceTitle: string;
  basePrice?: number;
  sampleUrl?: string;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  onSampleClick?: () => void;
}

export const ServiceEcommerceActionCard: React.FC<ServiceEcommerceActionCardProps> = ({
  serviceTitle,
  basePrice,
  onAddToCart,
  onBuyNow,
  onSampleClick
}) => {
  const { getWhatsAppUrl } = useSettings();
  const [addedToCart, setAddedToCart] = useState(false);
  const [sampleOpened, setSampleOpened] = useState(false);

  const handleCartClick = () => {
    setAddedToCart(true);
    if (onAddToCart) {
      onAddToCart();
    }
    setTimeout(() => setAddedToCart(false), 2500);
  };

  const handleSample = () => {
    setSampleOpened(true);
    if (onSampleClick) {
      onSampleClick();
    } else {
      // Provide a clean sample preview alert / feedback if no specific sample link
      setTimeout(() => setSampleOpened(false), 2000);
    }
  };

  // Build the WhatsApp message link pointing to wa.me
  const whatsAppMessage = `Hello, I am interested in ${serviceTitle}. Please share more details and onboarding roadmap.`;
  const whatsAppUrl = getWhatsAppUrl 
    ? getWhatsAppUrl(whatsAppMessage)
    : `https://wa.me/919876543210?text=${encodeURIComponent(whatsAppMessage)}`;

  return (
    <div className="w-full bg-[#131b26]/95 border border-slate-700/80 rounded-3xl p-5 sm:p-6 shadow-2xl backdrop-blur-md space-y-6">
      
      {/* =========================================================================
          1. TOP ROW - PRIMARY ACTION BUTTONS (Sample, Add to cart, Buy Now)
      ========================================================================= */}
      <div className="flex items-center gap-3">
        
        {/* Sample Button: Small dark-translucent square capsule with dashed/dotted border */}
        <button
          type="button"
          onClick={handleSample}
          className="shrink-0 w-20 h-14 bg-slate-900/90 hover:bg-slate-800/90 border-2 border-dashed border-slate-600 hover:border-cyan-400 rounded-2xl flex flex-col items-center justify-center transition-all duration-200 cursor-pointer group shadow-inner"
          title={`View sample deliverable for ${serviceTitle}`}
        >
          <FileText className="w-4 h-4 text-slate-300 group-hover:text-cyan-300 transition-colors" />
          <span className="text-[11px] font-bold text-slate-300 group-hover:text-white mt-1 tracking-wide">
            {sampleOpened ? 'Opened' : 'Sample'}
          </span>
        </button>

        {/* Add to Cart Button: Glossy charcoal black with rounded-2xl & inner gloss accent */}
        <button
          type="button"
          onClick={handleCartClick}
          className="flex-1 h-14 bg-[#1c2431] hover:bg-[#232d3d] border-t border-slate-600/70 border-b border-slate-800 border-x border-slate-700/80 rounded-2xl flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg hover:shadow-cyan-500/10 group relative overflow-hidden"
        >
          {/* Subtle top inner gloss accent */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-400/40 to-transparent" />
          
          <div className="flex items-center justify-center space-x-2 text-white font-extrabold text-sm sm:text-base">
            <ShoppingCart className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
            <span className="tracking-wide">
              {addedToCart ? 'Added to Cart ✓' : 'Add to cart'}
            </span>
          </div>
        </button>

        {/* Buy Now Button: Vibrant pastel holographic gradient with lightning bolt & dark bold text */}
        <button
          type="button"
          onClick={onBuyNow}
          className="flex-1 h-14 bg-gradient-to-r from-[#ffffff] via-[#e0f7fa] to-[#a7f3d0] hover:from-[#f8fafc] hover:to-[#6ee7b7] rounded-full sm:rounded-2xl px-4 flex items-center justify-center transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.99] cursor-pointer shadow-xl shadow-cyan-400/20 group border border-white/60"
        >
          <div className="flex items-center justify-center space-x-1.5 text-slate-950 font-black text-sm sm:text-base">
            <span className="text-amber-500 text-base filter drop-shadow-sm">⚡</span>
            <span className="tracking-tight font-black">Buy Now</span>
          </div>
        </button>

      </div>

      {/* =========================================================================
          2. DYNAMIC BADGES SECTION (2-COLUMN RESPONSIVE GRID)
      ========================================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
        
        {/* Badge 1: Secure Payment (Dark blue translucent tint with yellow padlock) */}
        <div className="flex items-center space-x-2.5 px-3.5 py-2.5 rounded-xl bg-blue-950/40 border border-blue-800/40 backdrop-blur-sm">
          <div className="w-7 h-7 rounded-lg bg-blue-900/60 flex items-center justify-center shrink-0">
            <span className="text-amber-400 text-sm">🔒</span>
          </div>
          <span className="text-xs font-bold text-blue-200">Secure Payment</span>
        </div>

        {/* Badge 2: Instant Download (Dark bronze/gold translucent tint with orange lightning bolt) */}
        <div className="flex items-center space-x-2.5 px-3.5 py-2.5 rounded-xl bg-amber-950/40 border border-amber-800/40 backdrop-blur-sm">
          <div className="w-7 h-7 rounded-lg bg-amber-900/60 flex items-center justify-center shrink-0">
            <span className="text-amber-400 text-sm">⚡</span>
          </div>
          <span className="text-xs font-bold text-amber-200">Instant Download</span>
        </div>

        {/* Badge 3: Verified Quality (Dark green translucent tint with violet checkmark) */}
        <div className="flex items-center space-x-2.5 px-3.5 py-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40 backdrop-blur-sm">
          <div className="w-7 h-7 rounded-lg bg-emerald-900/60 flex items-center justify-center shrink-0">
            <span className="text-purple-400 font-black text-sm">✓</span>
          </div>
          <span className="text-xs font-bold text-emerald-200">Verified Quality</span>
        </div>

        {/* Badge 4: Lifetime Access (Deep purple/indigo translucent tint with infinity icon) */}
        <div className="flex items-center space-x-2.5 px-3.5 py-2.5 rounded-xl bg-purple-950/40 border border-purple-800/40 backdrop-blur-sm">
          <div className="w-7 h-7 rounded-lg bg-purple-900/60 flex items-center justify-center shrink-0">
            <span className="text-purple-300 font-extrabold text-base leading-none">∞</span>
          </div>
          <span className="text-xs font-bold text-purple-200">Lifetime Access</span>
        </div>

        {/* Badge 5: Satisfaction Guaranteed (Dark olive/gold translucent tint with yellow star) - Spans 2 cols on tablet/desktop */}
        <div className="sm:col-span-2 flex items-center space-x-2.5 px-3.5 py-2.5 rounded-xl bg-yellow-950/30 border border-yellow-700/40 backdrop-blur-sm">
          <div className="w-7 h-7 rounded-lg bg-yellow-900/50 flex items-center justify-center shrink-0">
            <span className="text-amber-300 text-sm">⭐</span>
          </div>
          <span className="text-xs font-bold text-amber-200">Satisfaction Guaranteed</span>
        </div>

      </div>

      {/* =========================================================================
          3. SPECIAL BOTTOM WHATSAPP INTEGRATION (Green Translucent Pill)
      ========================================================================= */}
      <div className="pt-2">
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-13 px-5 rounded-full bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-500/50 hover:border-emerald-400 text-emerald-300 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2.5 shadow-lg shadow-emerald-950/50 group cursor-pointer"
        >
          {/* Professional white chat bubble icon */}
          <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm shrink-0 group-hover:scale-110 transition-transform">
            <MessageSquare className="w-3.5 h-3.5 fill-white text-white" />
          </div>
          <span className="text-sm font-extrabold tracking-wide text-white">
            WhatsApp Support
          </span>
        </a>
      </div>

    </div>
  );
};

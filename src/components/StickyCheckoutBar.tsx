import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

interface StickyCheckoutBarProps {
  onCheckout: () => void;
  serviceTitle?: string;
  originalPriceINR?: number;
  discountedPriceINR?: number;
}

export const StickyCheckoutBar: React.FC<StickyCheckoutBarProps> = ({
  onCheckout,
  serviceTitle = 'Goomo Digital Growth & Automation Suite',
  originalPriceINR = 11988,
  discountedPriceINR = 6999,
}) => {
  const { formatPrice, currentCurrency } = useCurrency();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2 sm:p-3 bg-slate-950/90 backdrop-blur-md border-t border-pink-500/30 shadow-[0_-10px_30px_rgba(236,72,153,0.15)] animate-fadeIn">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left Side: Offer Badge & Converted Currency Price */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
          <div className="hidden md:flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-200 truncate max-w-[200px] sm:max-w-[300px]">
              {serviceTitle}
            </span>
          </div>

          <div className="flex items-baseline space-x-2">
            <span className="text-lg sm:text-2xl font-black text-white tracking-tight">
              {formatPrice(discountedPriceINR)}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-400 line-through">
              {formatPrice(originalPriceINR)}
            </span>
            <span className="text-[10px] sm:text-xs font-extrabold text-pink-400 bg-pink-950/80 border border-pink-800/80 px-2 py-0.5 rounded-full uppercase tracking-wide">
              Limited Time Offer
            </span>
          </div>
        </div>

        {/* Right Side: Screenshot-Style Vibrant Gradient Pill Button */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onCheckout}
            id="sticky-checkout-btn"
            className="px-5 sm:px-8 py-2.5 sm:py-3.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 hover:from-blue-700 hover:to-pink-600 text-white font-extrabold text-xs sm:text-sm rounded-full shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2 whitespace-nowrap"
          >
            <span>Get Now for {formatPrice(discountedPriceINR)}</span>
            <span className="text-sm font-bold">»</span>
          </button>
        </div>

      </div>
    </div>
  );
};

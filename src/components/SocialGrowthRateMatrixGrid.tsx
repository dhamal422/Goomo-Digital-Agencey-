import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  Flame, 
  Lock, 
  ShieldCheck, 
  Zap, 
  Eye, 
  Users, 
  MessageSquare, 
  Share2, 
  Bookmark, 
  Heart, 
  Play,
  Clock
} from 'lucide-react';
import { RateMatrixItem } from '../types';
import { useCurrency } from '../context/CurrencyContext';

interface SocialGrowthRateMatrixGridProps {
  rateMatrix: RateMatrixItem[];
  serviceTitle: string;
  onSelectItem?: (item: RateMatrixItem, selectedPrice: number) => void;
}

export const SocialGrowthRateMatrixGrid: React.FC<SocialGrowthRateMatrixGridProps> = ({
  rateMatrix,
  serviceTitle,
  onSelectItem
}) => {
  const { formatPrice } = useCurrency();
  // State to track selected package variant for items with altOptions (e.g. Reels views 10K vs 1M)
  const [altSelected, setAltSelected] = useState<{ [key: string]: boolean }>({});

  if (!rateMatrix || rateMatrix.length === 0) {
    return null;
  }

  const toggleAltOption = (itemId: string) => {
    setAltSelected(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const getIconForService = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('follower')) return <Users className="w-4 h-4 text-cyan-400" />;
    if (lower.includes('reels view') || lower.includes('views')) return <Eye className="w-4 h-4 text-purple-400" />;
    if (lower.includes('reach')) return <TrendingUp className="w-4 h-4 text-emerald-400" />;
    if (lower.includes('engagement')) return <Flame className="w-4 h-4 text-amber-400" />;
    if (lower.includes('share')) return <Share2 className="w-4 h-4 text-blue-400" />;
    if (lower.includes('save')) return <Bookmark className="w-4 h-4 text-indigo-400" />;
    if (lower.includes('like')) return <Heart className="w-4 h-4 text-rose-400" />;
    if (lower.includes('comment')) return <MessageSquare className="w-4 h-4 text-teal-400" />;
    if (lower.includes('monetization')) return <Sparkles className="w-4 h-4 text-yellow-400" />;
    return <Zap className="w-4 h-4 text-cyan-400" />;
  };

  return (
    <div className="space-y-4">
      {/* Grid Header */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2 text-cyan-400 text-xs font-extrabold uppercase tracking-widest">
          <Sparkles className="w-4 h-4" />
          <span>Transparent Growth Rate Matrix & Packages</span>
        </div>
        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-700/60 text-cyan-300">
          Real Instant Delivery • Guaranteed SLA
        </span>
      </div>

      {/* 2-Column Responsive Card Grid with border-slate-700 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {rateMatrix.map((item) => {
          const isAlt = altSelected[item.id] && item.altOption;
          const currentPrice = isAlt && item.altOption ? item.altOption.priceINR : item.priceINR;
          const currentBadge = isAlt && item.altOption ? item.altOption.featureBadge : item.featureBadge;
          const currentQuantity = isAlt && item.altOption ? item.altOption.quantity : item.quantity;
          const currentLabel = isAlt && item.altOption ? item.altOption.rateLabel : item.rateLabel;

          return (
            <div
              key={item.id}
              className={`p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between relative group ${
                item.isComingSoon
                  ? 'bg-slate-900/40 border-slate-800/80 opacity-75'
                  : 'bg-slate-900/90 hover:bg-slate-900 border-slate-700 hover:border-cyan-500/70 shadow-lg hover:shadow-cyan-950/40'
              }`}
            >
              <div className="space-y-2.5">
                {/* Top Title & Quantity Row */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center shrink-0">
                      {getIconForService(item.name)}
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-white group-hover:text-cyan-300 transition-colors">
                        {item.name}
                      </h4>
                      {currentQuantity && (
                        <p className="text-[11px] font-bold text-slate-400">
                          Package: <span className="text-slate-200">{currentQuantity}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Pricing or "Added Soon!" Badge */}
                  {item.isComingSoon ? (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-slate-800 text-slate-400 border border-slate-700">
                      Added Soon!
                    </span>
                  ) : (
                    <div className="text-right">
                      <div className="text-base sm:text-lg font-black text-amber-400">
                        {currentPrice !== null ? formatPrice(currentPrice) : 'Custom'}
                      </div>
                      <span className="text-[10px] text-slate-500 font-semibold block uppercase">
                        Fixed Rate
                      </span>
                    </div>
                  )}
                </div>

                {/* Optional Multi-Option Switcher (e.g. 10K Views vs 1M Views + Viral) */}
                {item.altOption && (
                  <div className="pt-1.5">
                    <div className="flex items-center p-1 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                      <button
                        type="button"
                        onClick={() => setAltSelected(prev => ({ ...prev, [item.id]: false }))}
                        className={`flex-1 py-1 px-2 rounded-lg text-[11px] font-bold transition-all ${
                          !altSelected[item.id]
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        10K Views ({formatPrice(item.priceINR || 10)})
                      </button>
                      <button
                        type="button"
                        onClick={() => setAltSelected(prev => ({ ...prev, [item.id]: true }))}
                        className={`flex-1 py-1 px-2 rounded-lg text-[11px] font-bold transition-all ${
                          altSelected[item.id]
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        1M Viral Package ({formatPrice(item.altOption.priceINR)})
                      </button>
                    </div>
                  </div>
                )}

                {/* Feature Badges */}
                {currentBadge && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-950/60 border border-emerald-700/50 text-emerald-300">
                      <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-400" />
                      {currentBadge}
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60">
                      ⚡ Instant Dispatch
                    </span>
                  </div>
                )}
              </div>

              {/* Action Bottom */}
              <div className="pt-3 mt-3 border-t border-slate-800/90 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium truncate max-w-[160px] sm:max-w-[200px]">
                  {currentLabel}
                </span>

                {item.isComingSoon ? (
                  <button
                    disabled
                    className="px-3 py-1 rounded-xl text-[11px] font-bold bg-slate-800/50 text-slate-500 border border-slate-800 cursor-not-allowed"
                  >
                    Unavailable
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectItem && currentPrice !== null) {
                        onSelectItem(
                          isAlt && item.altOption
                            ? { ...item, name: item.altOption.name, priceINR: item.altOption.priceINR, rateLabel: item.altOption.rateLabel }
                            : item,
                          currentPrice
                        );
                      }
                    }}
                    className="px-3 py-1.5 rounded-xl text-[11px] font-black bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 border border-cyan-500/40 hover:border-cyan-400 transition-all duration-150 cursor-pointer shadow-sm"
                  >
                    Select Plan →
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

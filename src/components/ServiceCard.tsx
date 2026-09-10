import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Check, Clock, ShieldCheck } from 'lucide-react';
import { Service } from '../types';
import { useCurrency } from '../context/CurrencyContext';

interface ServiceCardProps {
  service: Service;
  navigate: (route: string, slug?: string) => void;
  onInstantBuy?: (serviceTitle: string, priceINR: number) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, navigate, onInstantBuy }) => {
  const { formatPrice } = useCurrency();
  const isSMMCategory = 
    service.category === 'Social Media Management Services' || 
    service.category.includes('Social Media Management') || 
    service.category === 'SMM Management';

  return (
    <motion.div
      id={`service-card-${service.slug}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => navigate('service-detail', service.slug)}
      className="group relative bg-[#131b26] border border-slate-700/70 hover:border-cyan-400/60 hover:bg-[#1a2332] rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer text-slate-100 overflow-hidden"
    >
      {/* Background soft glow on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 group-hover:bg-cyan-400/15 rounded-full blur-2xl pointer-events-none transition-all duration-300"></div>

      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-300 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/60">
            {service.category}
          </span>
          {service.featured && (
            <span className="text-[10px] font-extrabold text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 rounded-full flex items-center">
              <Sparkles className="w-3 h-3 mr-1 text-amber-400" />
              Popular Choice
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-black text-white tracking-tight group-hover:text-[#b2ebf2] transition-colors mb-2">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
          {service.shortDesc}
        </p>

        {/* Feature Highlights Grid with Green Ticks */}
        <div className="space-y-2 mb-6">
          {service.featuresGrid.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-start text-xs text-slate-300">
              <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mr-2 mt-0.5">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span className="truncate font-medium">{feat.headline}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer: Pricing or Growth Label & Button */}
      <div className="pt-4 border-t border-slate-800/80 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-[11px] text-slate-400 font-medium">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Delivery: {service.deliveryTime || '3-5 Days'}</span>
          </div>

          <div className="text-right">
            {isSMMCategory ? (
              <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300 bg-cyan-950/80 border border-cyan-800/80 px-2.5 py-1 rounded-md inline-block">
                DIGITAL GROWTH & DEVELOPMENT SERVICES
              </span>
            ) : (
              <>
                <span className="text-[10px] text-slate-400 font-bold uppercase block">
                  Package Price
                </span>
                <span className="text-lg font-black text-white">
                  {formatPrice(service.basePrice)}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Glowing Cyan Action Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (isSMMCategory) {
              navigate('service-detail', service.slug);
            } else if (onInstantBuy) {
              onInstantBuy(service.title, service.basePrice);
            } else {
              navigate('service-detail', service.slug);
            }
          }}
          className="w-full py-3 btn-cyan-primary rounded-xl text-xs font-black transition-all flex items-center justify-center space-x-2 cursor-pointer"
        >
          {isSMMCategory ? (
            <>
              <span>Explore Portfolio & Case Studies</span>
              <span className="text-sm font-bold">»</span>
            </>
          ) : (
            <>
              <span>Get Now for {formatPrice(service.basePrice)}</span>
              <span className="text-sm font-bold">»</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};

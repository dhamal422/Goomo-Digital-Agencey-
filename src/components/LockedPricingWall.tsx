import React from 'react';
import { Lock, Unlock, ArrowRight, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface LockedPricingWallProps {
  basePrice: number;
  deliveryTime?: string;
  serviceTitle?: string;
  size?: 'compact' | 'full';
}

export const LockedPricingWall: React.FC<LockedPricingWallProps> = ({
  basePrice,
  deliveryTime = '3-5 Days',
  serviceTitle,
  size = 'full'
}) => {
  const { user, openAuthModal } = useAuth();
  const isUnlocked = Boolean(user && user.viewRatesUnlocked);

  if (size === 'compact') {
    return (
      <div className="flex items-center justify-between pt-3 border-t border-neutral-200">
        <div>
          <span className="text-[10px] uppercase tracking-wider font-bold text-neutral-500 block">
            Base Pricing
          </span>
          {isUnlocked ? (
            <div className="text-lg font-extrabold text-black tracking-tight">
              ${basePrice.toLocaleString()}
              <span className="text-xs font-normal text-neutral-500 ml-1">/ project</span>
            </div>
          ) : (
            <div className="relative inline-block mt-0.5">
              <span className="text-lg font-extrabold text-black/20 blur-md select-none font-mono">
                $2,499
              </span>
              <div className="absolute inset-0 flex items-center justify-start">
                <span className="text-xs font-semibold text-[#0052FF] flex items-center space-x-1">
                  <Lock className="w-3 h-3" />
                  <span>Locked</span>
                </span>
              </div>
            </div>
          )}
        </div>

        {!isUnlocked && (
          <button
            id="unlock-rates-compact-btn"
            onClick={(e) => {
              e.stopPropagation();
              openAuthModal();
            }}
            className="px-3 py-1.5 bg-[#0052FF] hover:bg-[#0042cc] text-white text-xs font-bold rounded-lg transition shadow-sm flex items-center space-x-1"
          >
            <span>Unlock Rates</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="w-full bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-sm text-black">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-200">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0052FF]">
            Verified Agency Rates
          </span>
          <h4 className="text-lg font-bold text-black mt-0.5">
            {serviceTitle ? `${serviceTitle} Investment` : 'Transparent Service Pricing'}
          </h4>
        </div>
        <div className="flex items-center space-x-1.5 text-xs font-medium text-neutral-600 bg-neutral-100 px-3 py-1.5 rounded-full border border-neutral-200">
          <ShieldCheck className="w-4 h-4 text-[#0052FF]" />
          <span>No Commission Markups</span>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-center">
        {/* Conditional Pricing Display */}
        {isUnlocked ? (
          <div className="animate-fadeIn">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full mb-3">
              <Unlock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified Rate Unlocked</span>
            </div>

            <div className="text-4xl sm:text-5xl font-black text-black tracking-tight mb-2">
              ${basePrice.toLocaleString()}
              <span className="text-base font-medium text-neutral-500 ml-2">USD</span>
            </div>

            <p className="text-xs text-neutral-600 max-w-sm mx-auto mb-4">
              Estimated Delivery SLA: <strong className="text-black">{deliveryTime}</strong> • Includes full source files, multi-revision pass, and dedicated project manager.
            </p>

            <div className="inline-flex items-center space-x-2 text-xs font-medium text-neutral-500">
              <span>Account Verified:</span>
              <span className="font-bold text-black">{user?.name} ({user?.email})</span>
            </div>
          </div>
        ) : (
          <div>
            {/* Blurry Currency Block */}
            <div className="relative py-2 mb-4">
              <div className="text-4xl sm:text-5xl font-black text-neutral-900/20 blur-md select-none font-mono tracking-widest">
                ${basePrice.toLocaleString()}
                <span className="text-base text-neutral-400 font-sans ml-2">USD</span>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white border border-neutral-300 shadow-md flex items-center justify-center text-[#0052FF] mb-1">
                  <Lock className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-black uppercase tracking-wider bg-white/90 px-3 py-1 rounded-full border border-neutral-200 shadow-sm">
                  Rates Protected by Agency Portal
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-600 max-w-md mx-auto mb-6">
              To prevent competitor scraping and maintain agency quote integrity, official live rates are restricted to verified client accounts.
            </p>

            {/* Unlock Button */}
            <button
              id="unlock-pricing-wall-btn"
              onClick={openAuthModal}
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-[#0052FF] hover:bg-[#0042cc] text-white text-sm font-bold rounded-xl shadow-md transition group"
            >
              <Lock className="w-4 h-4" />
              <span>Login / Register to View Rates</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

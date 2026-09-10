import React from 'react';
import { Sparkles, Shield, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { CATEGORIES_LIST } from '../data/seedServices';

interface FooterProps {
  navigate: (route: string, slug?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-gradient-to-br from-[#071322] via-[#0b1f38] to-[#0f2a4d] hover:from-[#091b30] hover:via-[#0e2747] hover:to-[#13355f] transition-all duration-500 border-t border-blue-900/50 text-[#90b9b6] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => navigate('home')}
              className="flex items-center space-x-3 cursor-pointer inline-flex group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#b2ebf2] text-slate-950 flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition-transform">
                G
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight flex items-center space-x-1">
                  <span>GOOMO</span>
                  <span className="text-[#b2ebf2]">DIGITAL</span>
                </span>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block -mt-1">
                  Social Media & AI Automation Agency
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Goomo Digital Agency is a full-service social growth and artificial intelligence agency. We automate lead acquisition, streamline client communication, and scale visual content production for enterprise brands worldwide.
            </p>

            <div className="pt-2 text-xs space-y-2 text-slate-300">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#b2ebf2]" />
                <span>contact@goomodigital.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#b2ebf2]" />
                <span>+1 (800) 555-GOOMO</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#b2ebf2]" />
                <span>Silicon Valley • London • Singapore</span>
              </div>
            </div>
          </div>

          {/* Col 2: Service Categories (Part 1) */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Core Capabilities
            </h5>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              {CATEGORIES_LIST.slice(0, 4).map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => navigate('services')}
                    className="hover:text-[#b2ebf2] transition text-left"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Categories (Part 2) */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Automation & CRM
            </h5>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              {CATEGORIES_LIST.slice(4).map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => navigate('services')}
                    className="hover:text-[#b2ebf2] transition text-left"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Platform Navigation */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Agency Navigation
            </h5>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li>
                <button onClick={() => navigate('home')} className="hover:text-[#b2ebf2]">
                  Agency Overview
                </button>
              </li>
              <li>
                <button onClick={() => navigate('services')} className="hover:text-[#b2ebf2]">
                  All 38 Micro-Services
                </button>
              </li>
              <li>
                <button onClick={() => navigate('calculator')} className="hover:text-[#b2ebf2]">
                  Custom Quote Builder
                </button>
              </li>
              <li>
                <button onClick={() => navigate('contact')} className="hover:text-[#b2ebf2]">
                  Client Consultation Form
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} Goomo Digital Agency. All rights reserved. Enterprise AI & Marketing Infrastructure.
          </div>
          <div className="flex space-x-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 cursor-pointer">SLA Guarantee</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

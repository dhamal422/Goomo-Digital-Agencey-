import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  ChevronDown, 
  Lock, 
  Unlock, 
  User as UserIcon, 
  LogOut, 
  ShieldAlert, 
  Menu, 
  X,
  Layers,
  Bot,
  Globe,
  Share2,
  TrendingUp,
  LayoutGrid,
  Palette,
  Megaphone,
  Cpu,
  Server,
  MessageSquare,
  DollarSign
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCurrency, SUPPORTED_CURRENCIES } from '../context/CurrencyContext';
import { useNavigation } from '../context/NavigationContext';
import { CATEGORIES_LIST, INITIAL_SERVICES } from '../data/seedServices';

interface NavbarProps {
  activeRoute: string;
  navigate: (route: string, slug?: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeRoute,
  navigate,
  searchQuery,
  setSearchQuery
}) => {
  const { user, openAuthModal, logout } = useAuth();
  const { currentCurrency, setCurrencyByCode, detectedCountry, formatPrice } = useCurrency();
  const { menuItems } = useNavigation();
  const activeMenuItems = menuItems.filter(item => item.enabled && item.id !== 'admin' && item.route !== 'admin-portal');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedNavCategory, setSelectedNavCategory] = useState<string>('All');
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 text-slate-900 shadow-md">
      
      {/* Top Quality & Trust Pillars Bar */}
      <div className="bg-[#060a14] text-slate-300 text-[11px] py-1.5 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4 overflow-x-auto scrollbar-none text-[11px]">
            <div className="flex items-center space-x-1.5 font-bold text-cyan-400">
              <span>⚡</span>
              <span>FAST LOADING</span>
            </div>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <div className="flex items-center space-x-1.5 font-bold text-emerald-400 hidden sm:flex">
              <span>🛡️</span>
              <span>SECURE & RELIABLE</span>
            </div>
            <span className="text-slate-700 hidden md:inline">•</span>
            <div className="flex items-center space-x-1.5 font-bold text-sky-400 hidden md:flex">
              <span>📱</span>
              <span>MOBILE FRIENDLY</span>
            </div>
            <span className="text-slate-700 hidden lg:inline">•</span>
            <div className="flex items-center space-x-1.5 font-bold text-indigo-400 hidden lg:flex">
              <span>📈</span>
              <span>SEO OPTIMIZED</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            <button
              onClick={() => {
                const el = document.getElementById('website-styles-catalog');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else navigate('home');
              }}
              className="text-[11px] font-bold text-cyan-300 hover:text-cyan-200 transition cursor-pointer flex items-center space-x-1"
            >
              <span>Modern Website Styles</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <div 
            id="nav-logo"
            onClick={() => { navigate('home'); setIsMobileMenuOpen(false); }}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-[#b2ebf2] flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition-transform">
              G
            </div>
            <div>
              <span className="text-xl font-black text-slate-900 tracking-tight flex items-center space-x-1">
                <span>GOOMO</span>
                <span className="text-cyan-600">DIGITAL</span>
              </span>
              <span className="text-[9px] font-bold tracking-widest text-slate-500 uppercase block -mt-1">
                Digital & AI Agency
              </span>
            </div>
          </div>

          {/* Dynamic Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 text-sm font-semibold text-slate-700 overflow-x-auto scrollbar-none">
            {activeMenuItems.map((item) => {
              // 1. Services Dropdown
              if (item.isDropdown || item.id === 'services') {
                const navFilteredServices = selectedNavCategory === 'All'
                  ? INITIAL_SERVICES
                  : INITIAL_SERVICES.filter(s => s.category === selectedNavCategory);

                return (
                  <div 
                    key={item.id} 
                    className="relative shrink-0"
                    onMouseEnter={() => setIsCategoryOpen(true)}
                    onMouseLeave={() => setIsCategoryOpen(false)}
                  >
                    <button
                      id="nav-services-dropdown-btn"
                      type="button"
                      onClick={() => {
                        navigate('services');
                        setIsCategoryOpen(!isCategoryOpen);
                      }}
                      className={`px-3.5 py-2 rounded-xl transition flex items-center space-x-1.5 whitespace-nowrap shrink-0 cursor-pointer ${
                        activeRoute === 'services' || activeRoute === 'service-detail'
                          ? 'text-cyan-800 font-bold bg-cyan-50 border border-cyan-200'
                          : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                      }`}
                    >
                      <span className="whitespace-nowrap">{item.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isCategoryOpen ? 'rotate-180 text-cyan-600' : 'text-slate-400'}`} />
                    </button>

                    {/* Dropdown Mega-Menu showing Categories & All 38 Services */}
                    {isCategoryOpen && (
                      <div 
                        className="absolute left-0 mt-2 w-[580px] max-w-[92vw] bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 animate-fadeIn overflow-hidden"
                      >
                        {/* Header */}
                        <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Sparkles className="w-4 h-4 text-cyan-600" />
                            <span className="text-xs font-black text-slate-900 uppercase tracking-wider whitespace-nowrap">
                              38 Micro-Services Catalog
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => { navigate('services'); setIsCategoryOpen(false); }}
                            className="text-xs font-extrabold text-cyan-600 hover:text-cyan-700 hover:underline whitespace-nowrap cursor-pointer"
                          >
                            View All Services Page →
                          </button>
                        </div>

                        {/* 2-Column Mega Layout: Left Categories, Right Services List */}
                        <div className="grid grid-cols-12 divide-x divide-slate-200 max-h-[380px]">
                          {/* Left Column: Categories List */}
                          <div className="col-span-4 bg-slate-50/70 p-2 space-y-1 overflow-y-auto max-h-[380px]">
                            <button
                              type="button"
                              onClick={() => setSelectedNavCategory('All')}
                              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                                selectedNavCategory === 'All'
                                  ? 'bg-cyan-50 text-cyan-900 border border-cyan-200 shadow-xs'
                                  : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                              }`}
                            >
                              <span>All Services</span>
                              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                                selectedNavCategory === 'All' ? 'bg-cyan-200/80 text-cyan-950 font-bold' : 'bg-slate-200 text-slate-600'
                              }`}>
                                {INITIAL_SERVICES.length}
                              </span>
                            </button>

                            {CATEGORIES_LIST.map((cat) => {
                              const count = INITIAL_SERVICES.filter(s => s.category === cat).length;
                              const isSelected = selectedNavCategory === cat;
                              return (
                                <button
                                  key={cat}
                                  type="button"
                                  onClick={() => setSelectedNavCategory(cat)}
                                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                                    isSelected
                                      ? 'bg-cyan-50 text-cyan-900 border border-cyan-200 shadow-xs'
                                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                                  }`}
                                >
                                  <span className="truncate pr-1">{cat}</span>
                                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full shrink-0 ${
                                    isSelected ? 'bg-cyan-200/80 text-cyan-950 font-bold' : 'bg-slate-200 text-slate-600'
                                  }`}>
                                    {count}
                                  </span>
                                </button>
                              );
                            })}
                          </div>

                          {/* Right Column: Services List (38 Services) */}
                          <div className="col-span-8 overflow-y-auto max-h-[380px] divide-y divide-slate-100 py-1 bg-white">
                            {navFilteredServices.map((srv) => (
                              <button
                                key={srv.id}
                                type="button"
                                onClick={() => {
                                  navigate('service-detail', srv.slug);
                                  setIsCategoryOpen(false);
                                }}
                                className="w-full text-left px-4 py-2.5 hover:bg-slate-50 transition flex items-center justify-between group cursor-pointer"
                              >
                                <div className="space-y-0.5 pr-2">
                                  <div className="text-xs font-extrabold text-slate-900 group-hover:text-cyan-600 transition flex items-center space-x-2">
                                    <span className="line-clamp-1">{srv.title}</span>
                                    {srv.featured && (
                                      <span className="px-1.5 py-0.5 bg-cyan-100 text-cyan-800 text-[9px] font-extrabold rounded shrink-0 border border-cyan-200">
                                        POPULAR
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-[11px] text-slate-500 line-clamp-1">
                                    {srv.shortDesc}
                                  </div>
                                </div>
                                <div className="text-right shrink-0">
                                  <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 uppercase">
                                    Free Quote
                                  </span>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // 2. Special Login Button in Navbar stream
              if (item.isSpecialButton || item.id === 'login') {
                if (user) {
                  return (
                    <div key={item.id} className="flex items-center space-x-3 bg-slate-50 border border-slate-200 pl-3 pr-2 py-1.5 rounded-full ml-2 shrink-0 whitespace-nowrap shadow-xs">
                      <div className="flex items-center space-x-2 text-xs font-bold text-slate-900 whitespace-nowrap">
                        <div className="w-6 h-6 rounded-full bg-slate-900 text-[#b2ebf2] flex items-center justify-center text-xs font-black shrink-0">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                        <span className="truncate max-w-[100px] whitespace-nowrap">{user.name}</span>
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-full text-[10px] font-bold flex items-center whitespace-nowrap">
                          <Unlock className="w-2.5 h-2.5 mr-1 shrink-0" />
                          Rates Unlocked
                        </span>
                      </div>
                      <button
                        id="nav-logout-btn"
                        onClick={logout}
                        title="Sign Out"
                        className="p-1.5 text-slate-400 hover:text-rose-600 transition rounded-full hover:bg-slate-200 shrink-0 cursor-pointer"
                      >
                        <LogOut className="w-4 h-4" />
                      </button>
                    </div>
                  );
                }
                return (
                  <button
                    key={item.id}
                    id="nav-login-register-btn"
                    onClick={openAuthModal}
                    className="ml-2 px-5 py-2.5 btn-cyan-primary rounded-xl text-xs font-black transition flex items-center space-x-2 whitespace-nowrap shrink-0 cursor-pointer shadow-xs text-slate-950"
                  >
                    <UserIcon className="w-4 h-4 shrink-0" />
                    <span className="whitespace-nowrap">{item.label}</span>
                  </button>
                );
              }

              // 3. Regular Navigation Links
              const targetRoute = item.route || (item as any).routeTarget || (item.id === 'home' ? 'home' : item.id);
              const isItemActive = activeRoute === targetRoute || (targetRoute === 'home' && (activeRoute === 'home' || activeRoute === ''));
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => {
                    navigate(targetRoute);
                    setIsCategoryOpen(false);
                  }}
                  className={`px-3.5 py-2 rounded-xl transition whitespace-nowrap shrink-0 cursor-pointer ${
                    isItemActive
                      ? 'text-cyan-800 font-bold bg-cyan-50 border border-cyan-200'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Trigger Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-100 cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <div className="relative mb-3">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
            <input
              type="text"
              placeholder="Search 38+ micro-services..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (activeRoute !== 'services') navigate('services');
              }}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="space-y-1">
            {activeMenuItems.map((item) => {
              if (item.isDropdown || item.id === 'services') {
                return (
                  <button
                    key={item.id}
                    id={`nav-mobile-${item.id}`}
                    onClick={() => {
                      navigate('services');
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                      activeRoute === 'services' || activeRoute === 'service-detail'
                        ? 'bg-cyan-50 text-cyan-900 border border-cyan-200'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-slate-400" />
                  </button>
                );
              }
              if (item.isSpecialButton || item.id === 'login') {
                return null;
              }
              const targetRoute = item.route || (item as any).routeTarget || (item.id === 'home' ? 'home' : item.id);
              const isItemActive = activeRoute === targetRoute || (targetRoute === 'home' && (activeRoute === 'home' || activeRoute === ''));
              return (
                <button
                  key={item.id}
                  id={`nav-mobile-${item.id}`}
                  onClick={() => {
                    navigate(targetRoute);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                    isItemActive
                      ? 'bg-cyan-50 text-cyan-900 border border-cyan-200'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-slate-400" />
                </button>
              );
            })}
          </div>
        </div>
      )}

    </header>
  );
};

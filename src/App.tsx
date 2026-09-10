import React, { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { CurrencyProvider } from './context/CurrencyContext';
import { PaymentGatewayProvider } from './context/PaymentGatewayContext';
import { NavigationProvider } from './context/NavigationContext';
import { SettingsProvider } from './context/SettingsContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';

import { HomePage } from './pages/HomePage';
import { AllServicesPage } from './pages/AllServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { QuoteEstimatorPage } from './pages/QuoteEstimatorPage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';

export function MainApp() {
  const [activeRoute, setActiveRoute] = useState<string>('home');
  const [activeSlug, setActiveSlug] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Handle URL path & hash parsing on load
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash.replace('#', '');

      if (path.startsWith('/services/') && path.split('/services/')[1]) {
        setActiveRoute('service-detail');
        setActiveSlug(path.split('/services/')[1]);
      } else if (path === '/services' || hash === 'services') {
        setActiveRoute('services');
      } else if (path === '/about' || hash === 'about') {
        setActiveRoute('about');
      } else if (path === '/faqs' || hash === 'faqs') {
        setActiveRoute('faqs');
      } else if (path === '/calculator' || hash === 'calculator') {
        setActiveRoute('calculator');
      } else if (path === '/contact' || hash === 'contact') {
        setActiveRoute('contact');
      } else if (hash.startsWith('service/')) {
        setActiveRoute('service-detail');
        setActiveSlug(hash.replace('service/', ''));
      } else {
        setActiveRoute('home');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = (route: string, slug?: string) => {
    const targetRoute = route || 'home';
    setActiveRoute(targetRoute);
    setActiveSlug(slug || '');

    let targetUrl = '/';
    if (targetRoute === 'home') targetUrl = '/';
    else if (targetRoute === 'services') targetUrl = '/services';
    else if (targetRoute === 'service-detail' && slug) targetUrl = `/services/${slug}`;
    else if (targetRoute === 'about') targetUrl = '/about';
    else if (targetRoute === 'faqs') targetUrl = '/faqs';
    else if (targetRoute === 'calculator') targetUrl = '/calculator';
    else if (targetRoute === 'contact') targetUrl = '/contact';

    window.history.pushState({}, '', targetUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-[#ffffff] p-0">
      <div className="w-full min-h-screen bg-gradient-to-br from-[#0c131f] via-[#0f172a] to-[#131d2e] text-slate-100 font-sans selection:bg-[#b2ebf2] selection:text-slate-950 flex flex-col justify-between rounded-none shadow-none border-none overflow-x-clip relative">
        <Navbar
          activeRoute={activeRoute}
          navigate={navigate}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <main className="flex-grow">
          {activeRoute === 'home' && (
            <HomePage navigate={navigate} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          )}

          {activeRoute === 'services' && (
            <AllServicesPage navigate={navigate} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          )}

          {activeRoute === 'service-detail' && (
            <ServiceDetailPage slug={activeSlug || 'custom-website-design'} navigate={navigate} />
          )}

          {activeRoute === 'about' && (
            <AboutPage navigate={navigate} />
          )}

          {activeRoute === 'faqs' && (
            <FaqPage navigate={navigate} />
          )}

          {activeRoute === 'calculator' && (
            <QuoteEstimatorPage navigate={navigate} />
          )}

          {activeRoute === 'contact' && (
            <ContactPage />
          )}
        </main>

        <Footer navigate={navigate} />
        <AuthModal />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <SettingsProvider>
      <AuthProvider>
        <CurrencyProvider>
          <PaymentGatewayProvider>
            <NavigationProvider>
              <MainApp />
            </NavigationProvider>
          </PaymentGatewayProvider>
        </CurrencyProvider>
      </AuthProvider>
    </SettingsProvider>
  );
}

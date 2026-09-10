import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CurrencyConfig {
  code: string;
  symbol: string;
  name: string;
  flag: string;
  rateFromINR: number; // Multiply INR base price by this rate
  formatPattern: 'prefix' | 'suffix';
}

export const SUPPORTED_CURRENCIES: CurrencyConfig[] = [
  { code: 'INR', symbol: '₹', name: 'India (INR)', flag: '🇮🇳', rateFromINR: 1, formatPattern: 'prefix' },
  { code: 'USD', symbol: '$', name: 'United States (USD)', flag: '🇺🇸', rateFromINR: 0.012, formatPattern: 'prefix' },
  { code: 'BDT', symbol: '৳', name: 'Bangladesh (BDT)', flag: '🇧🇩', rateFromINR: 1.40, formatPattern: 'prefix' },
  { code: 'AED', symbol: 'د.إ', name: 'Dubai / UAE (AED)', flag: '🇦🇪', rateFromINR: 0.044, formatPattern: 'suffix' },
  { code: 'EUR', symbol: '€', name: 'Europe (EUR)', flag: '🇪🇺', rateFromINR: 0.011, formatPattern: 'prefix' },
  { code: 'GBP', symbol: '£', name: 'United Kingdom (GBP)', flag: '🇬🇧', rateFromINR: 0.0094, formatPattern: 'prefix' },
  { code: 'CAD', symbol: 'CA$', name: 'Canada (CAD)', flag: '🇨🇦', rateFromINR: 0.016, formatPattern: 'prefix' },
  { code: 'AUD', symbol: 'AU$', name: 'Australia (AUD)', flag: '🇦🇺', rateFromINR: 0.018, formatPattern: 'prefix' },
  { code: 'SAR', symbol: '﷼', name: 'Saudi Arabia (SAR)', flag: '🇸🇦', rateFromINR: 0.045, formatPattern: 'suffix' },
  { code: 'PKR', symbol: '₨', name: 'Pakistan (PKR)', flag: '🇵🇰', rateFromINR: 3.34, formatPattern: 'prefix' },
];

interface CurrencyContextType {
  currentCurrency: CurrencyConfig;
  setCurrencyByCode: (code: string) => void;
  formatPrice: (inrAmount: number, includePeriod?: string) => string;
  detectedCountry: string | null;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyConfig>(SUPPORTED_CURRENCIES[0]);
  const [detectedCountry, setDetectedCountry] = useState<string | null>(null);

  useEffect(() => {
    // 1. Check if user manually saved currency before
    const savedCode = localStorage.getItem('nexus_selected_currency');
    if (savedCode) {
      const found = SUPPORTED_CURRENCIES.find(c => c.code === savedCode);
      if (found) {
        setCurrentCurrency(found);
        return;
      }
    }

    // 2. Auto Geo-Detection by Timezone or IP API
    const autoDetectUserCurrency = async () => {
      try {
        // Try IP geolocation API first
        const res = await fetch('https://ipapi.co/json/').catch(() => null);
        if (res && res.ok) {
          const data = await res.json();
          const countryCode = data.country_code; // e.g. "US", "BD", "AE", "IN", "GB"
          setDetectedCountry(data.country_name || countryCode);

          let matchedCode = 'USD';
          if (countryCode === 'IN') matchedCode = 'INR';
          else if (countryCode === 'BD') matchedCode = 'BDT';
          else if (countryCode === 'AE') matchedCode = 'AED';
          else if (countryCode === 'SA') matchedCode = 'SAR';
          else if (countryCode === 'PK') matchedCode = 'PKR';
          else if (countryCode === 'GB') matchedCode = 'GBP';
          else if (countryCode === 'CA') matchedCode = 'CAD';
          else if (countryCode === 'AU') matchedCode = 'AUD';
          else if (['DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'PT', 'FI', 'GR', 'IE'].includes(countryCode)) matchedCode = 'EUR';

          const curr = SUPPORTED_CURRENCIES.find(c => c.code === matchedCode);
          if (curr) {
            setCurrentCurrency(curr);
            return;
          }
        }
      } catch (e) {
        console.warn('IP Geo detection failed, falling back to browser timezone detection.');
      }

      // Fallback: TimeZone based auto-detection
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
        if (tz.includes('Kolkata') || tz.includes('India')) setCurrentCurrency(SUPPORTED_CURRENCIES.find(c => c.code === 'INR') || SUPPORTED_CURRENCIES[0]);
        else if (tz.includes('Dhaka')) setCurrentCurrency(SUPPORTED_CURRENCIES.find(c => c.code === 'BDT') || SUPPORTED_CURRENCIES[2]);
        else if (tz.includes('Dubai') || tz.includes('Muscat')) setCurrentCurrency(SUPPORTED_CURRENCIES.find(c => c.code === 'AED') || SUPPORTED_CURRENCIES[3]);
        else if (tz.includes('Karachi')) setCurrentCurrency(SUPPORTED_CURRENCIES.find(c => c.code === 'PKR') || SUPPORTED_CURRENCIES[9]);
        else if (tz.includes('Riyadh')) setCurrentCurrency(SUPPORTED_CURRENCIES.find(c => c.code === 'SAR') || SUPPORTED_CURRENCIES[8]);
        else if (tz.includes('London')) setCurrentCurrency(SUPPORTED_CURRENCIES.find(c => c.code === 'GBP') || SUPPORTED_CURRENCIES[5]);
        else if (tz.includes('Europe')) setCurrentCurrency(SUPPORTED_CURRENCIES.find(c => c.code === 'EUR') || SUPPORTED_CURRENCIES[4]);
        else if (tz.includes('America/Toronto') || tz.includes('America/Vancouver')) setCurrentCurrency(SUPPORTED_CURRENCIES.find(c => c.code === 'CAD') || SUPPORTED_CURRENCIES[6]);
        else if (tz.includes('Australia')) setCurrentCurrency(SUPPORTED_CURRENCIES.find(c => c.code === 'AUD') || SUPPORTED_CURRENCIES[7]);
        else setCurrentCurrency(SUPPORTED_CURRENCIES.find(c => c.code === 'USD') || SUPPORTED_CURRENCIES[1]);
      } catch (err) {
        // default to INR
        setCurrentCurrency(SUPPORTED_CURRENCIES[0]);
      }
    };

    autoDetectUserCurrency();
  }, []);

  const setCurrencyByCode = (code: string) => {
    const found = SUPPORTED_CURRENCIES.find(c => c.code === code);
    if (found) {
      setCurrentCurrency(found);
      localStorage.setItem('nexus_selected_currency', code);
    }
  };

  const formatPrice = (inrAmount: number | string | undefined | null, includePeriod?: string) => {
    let num = typeof inrAmount === 'number' ? inrAmount : parseFloat(String(inrAmount || 0));
    if (isNaN(num) || num <= 0) {
      num = 1499;
    }
    const rate = currentCurrency?.rateFromINR || 1;
    const converted = num * rate;
    
    // Format nicely with commas
    let formattedVal = '';
    const code = currentCurrency?.code || 'INR';
    if (code === 'INR' || code === 'BDT' || code === 'PKR') {
      formattedVal = Math.round(converted).toLocaleString('en-IN');
    } else {
      // For USD, EUR, GBP, AED show clean rounded or 2 decimals if small
      if (converted < 100) {
        formattedVal = converted.toFixed(2);
      } else {
        formattedVal = Math.round(converted).toLocaleString('en-US');
      }
    }

    const symbol = currentCurrency?.symbol || '₹';
    const pattern = currentCurrency?.formatPattern || 'prefix';
    const priceString = pattern === 'prefix'
      ? `${symbol}${formattedVal}`
      : `${formattedVal} ${symbol}`;

    return includePeriod ? `${priceString}/${includePeriod}` : priceString;
  };

  return (
    <CurrencyContext.Provider value={{ currentCurrency, setCurrencyByCode, formatPrice, detectedCountry }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};

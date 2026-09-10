import React, { createContext, useContext, useState, useEffect } from 'react';

export interface PaymentGatewayConfig {
  id: string;
  name: string;
  type: 'razorpay' | 'stripe' | 'bkash' | 'paypal' | 'upi' | 'bank_transfer';
  enabled: boolean;
  isDefault: boolean;
  currenciesSupported: string[]; // e.g. ["INR", "USD", "BDT", "AED", "EUR", "GBP"]
  credentials: {
    publishableKey?: string;
    secretKey?: string;
    keyId?: string;
    merchantId?: string;
    upiId?: string;
    accountNumber?: string;
    ifscCode?: string;
    instructions?: string;
  };
}

const DEFAULT_GATEWAYS: PaymentGatewayConfig[] = [
  {
    id: 'razorpay',
    name: 'Razorpay (Cards, UPI, Netbanking)',
    type: 'razorpay',
    enabled: true,
    isDefault: true,
    currenciesSupported: ['INR', 'USD', 'AED', 'EUR', 'GBP'],
    credentials: {
      keyId: 'rzp_live_NEXUS9876543210',
      secretKey: 'rzp_secret_live_9876543210',
    }
  },
  {
    id: 'stripe',
    name: 'Stripe International (Global Cards & Apple Pay)',
    type: 'stripe',
    enabled: true,
    isDefault: false,
    currenciesSupported: ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'AED', 'SAR'],
    credentials: {
      publishableKey: 'pk_live_51NEXUS_GLOBAL_KEY_999',
      secretKey: 'sk_live_51NEXUS_SECRET_KEY_888',
    }
  },
  {
    id: 'bkash',
    name: 'bKash / Nagad / Rocket (Bangladesh 🇧🇩)',
    type: 'bkash',
    enabled: true,
    isDefault: false,
    currenciesSupported: ['BDT'],
    credentials: {
      merchantId: '01700000000',
      instructions: 'Send money to bKash/Nagad Merchant: 01700000000. Enter Transaction ID at checkout.'
    }
  },
  {
    id: 'upi',
    name: 'UPI Direct / PhonePe / Google Pay 🇮🇳',
    type: 'upi',
    enabled: true,
    isDefault: false,
    currenciesSupported: ['INR'],
    credentials: {
      upiId: 'goomodigital@ybl',
      instructions: 'Pay via any UPI App (GPay, PhonePe, Paytm) to goomodigital@ybl and attach screenshot or UTR.'
    }
  },
  {
    id: 'paypal',
    name: 'PayPal Global 🌐',
    type: 'paypal',
    enabled: true,
    isDefault: false,
    currenciesSupported: ['USD', 'EUR', 'GBP', 'CAD', 'AUD'],
    credentials: {
      merchantId: 'payments@goomodigital.com',
      instructions: 'Instant PayPal checkout to payments@goomodigital.com.'
    }
  }
];

interface PaymentGatewayContextType {
  gateways: PaymentGatewayConfig[];
  updateGateway: (id: string, updated: Partial<PaymentGatewayConfig>) => void;
  setDefaultGateway: (id: string) => void;
  getActiveGatewayForCurrency: (currencyCode: string) => PaymentGatewayConfig;
}

const PaymentGatewayContext = createContext<PaymentGatewayContextType | undefined>(undefined);

export const PaymentGatewayProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gateways, setGateways] = useState<PaymentGatewayConfig[]>(() => {
    const saved = localStorage.getItem('nexus_admin_payment_gateways');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* use default */ }
    }
    return DEFAULT_GATEWAYS;
  });

  useEffect(() => {
    localStorage.setItem('nexus_admin_payment_gateways', JSON.stringify(gateways));
  }, [gateways]);

  const updateGateway = (id: string, updated: Partial<PaymentGatewayConfig>) => {
    setGateways(prev => prev.map(g => {
      if (g.id === id) {
        return {
          ...g,
          ...updated,
          credentials: {
            ...g.credentials,
            ...updated.credentials,
          }
        };
      }
      return g;
    }));
  };

  const setDefaultGateway = (id: string) => {
    setGateways(prev => prev.map(g => ({
      ...g,
      isDefault: g.id === id,
    })));
  };

  const getActiveGatewayForCurrency = (currencyCode: string): PaymentGatewayConfig => {
    const enabledList = gateways.filter(g => g.enabled);
    if (enabledList.length === 0) return DEFAULT_GATEWAYS[0];

    // Check if a gateway specifically matches currency
    const currencyMatch = enabledList.find(g => g.currenciesSupported.includes(currencyCode));
    if (currencyMatch) return currencyMatch;

    // Check if default is enabled
    const defaultG = enabledList.find(g => g.isDefault);
    if (defaultG) return defaultG;

    return enabledList[0];
  };

  return (
    <PaymentGatewayContext.Provider value={{ gateways, updateGateway, setDefaultGateway, getActiveGatewayForCurrency }}>
      {children}
    </PaymentGatewayContext.Provider>
  );
};

export const usePaymentGateways = () => {
  const context = useContext(PaymentGatewayContext);
  if (!context) {
    throw new Error('usePaymentGateways must be used within a PaymentGatewayProvider');
  }
  return context;
};

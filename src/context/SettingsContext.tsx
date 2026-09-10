import React, { createContext, useContext, useState, useEffect } from 'react';

interface SettingsContextType {
  servicesWhatsAppNumber: string;
  cleanPhoneNumber: string;
  updateWhatsAppNumber: (newNumber: string) => Promise<{ success: boolean; error?: string }>;
  getWhatsAppUrl: (customMessage?: string) => string;
  loading: boolean;
}

const DEFAULT_WHATSAPP = '+919876543210';

const SettingsContext = createContext<SettingsContextType>({
  servicesWhatsAppNumber: DEFAULT_WHATSAPP,
  cleanPhoneNumber: '919876543210',
  updateWhatsAppNumber: async () => ({ success: false }),
  getWhatsAppUrl: () => `https://wa.me/919876543210`,
  loading: false
});

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [servicesWhatsAppNumber, setServicesWhatsAppNumber] = useState<string>(() => {
    return localStorage.getItem('nexus_services_whatsapp_number') || DEFAULT_WHATSAPP;
  });
  const [loading, setLoading] = useState(true);

  // Helper to strip non-digit characters for https://wa.me/ links
  const formatCleanNumber = (rawNum: string) => {
    return rawNum.replace(/\D/g, '') || '919876543210';
  };

  const [cleanPhoneNumber, setCleanPhoneNumber] = useState<string>(() => {
    return formatCleanNumber(servicesWhatsAppNumber);
  });

  // Sync with backend API
  useEffect(() => {
    fetch('/api/settings')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.settings?.servicesWhatsAppNumber) {
          const fetchedNum = data.settings.servicesWhatsAppNumber;
          setServicesWhatsAppNumber(fetchedNum);
          setCleanPhoneNumber(formatCleanNumber(fetchedNum));
          localStorage.setItem('nexus_services_whatsapp_number', fetchedNum);
        }
      })
      .catch((err) => {
        console.warn('Could not fetch settings from API, using fallback:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  const updateWhatsAppNumber = async (newNumber: string): Promise<{ success: boolean; error?: string }> => {
    const cleanedDigits = newNumber.replace(/\D/g, '');
    if (!cleanedDigits || cleanedDigits.length < 8) {
      return { success: false, error: 'Please enter a valid phone number with country code (e.g. +91 98765 43210).' };
    }

    try {
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ servicesWhatsAppNumber: newNumber })
      });
      const data = await res.json();

      if (data.success) {
        const savedNum = data.settings?.servicesWhatsAppNumber || newNumber;
        setServicesWhatsAppNumber(savedNum);
        const clean = formatCleanNumber(savedNum);
        setCleanPhoneNumber(clean);
        localStorage.setItem('nexus_services_whatsapp_number', savedNum);
        return { success: true };
      } else {
        return { success: false, error: data.error || 'Failed to update settings.' };
      }
    } catch (err: any) {
      // Fallback update locally if server fails
      setServicesWhatsAppNumber(newNumber);
      const clean = formatCleanNumber(newNumber);
      setCleanPhoneNumber(clean);
      localStorage.setItem('nexus_services_whatsapp_number', newNumber);
      return { success: true };
    }
  };

  const getWhatsAppUrl = (customMessage?: string): string => {
    const clean = cleanPhoneNumber || '919876543210';
    if (!customMessage) {
      return `https://wa.me/${clean}`;
    }
    return `https://wa.me/${clean}?text=${encodeURIComponent(customMessage)}`;
  };

  return (
    <SettingsContext.Provider
      value={{
        servicesWhatsAppNumber,
        cleanPhoneNumber,
        updateWhatsAppNumber,
        getWhatsAppUrl,
        loading
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);

import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import { CurrencyProvider } from '../context/CurrencyContext';
import { PaymentGatewayProvider } from '../context/PaymentGatewayContext';
import { NavigationProvider } from '../context/NavigationContext';
import { SettingsProvider } from '../context/SettingsContext';
import { AdminPortalPage } from './AdminDashboard';

/**
 * Dedicated Standalone Admin Panel Application Environment
 * Isolated completely from the customer-facing client application.
 */
export const AdminApp: React.FC = () => {
  return (
    <AuthProvider>
      <SettingsProvider>
        <CurrencyProvider>
          <PaymentGatewayProvider>
            <NavigationProvider>
              <div className="min-h-screen bg-[#070c14] text-slate-100 font-sans selection:bg-[#b2ebf2] selection:text-slate-950">
                <AdminPortalPage />
              </div>
            </NavigationProvider>
          </PaymentGatewayProvider>
        </CurrencyProvider>
      </SettingsProvider>
    </AuthProvider>
  );
};

export default AdminApp;

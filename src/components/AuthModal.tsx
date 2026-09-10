import React, { useState } from 'react';
import { X, Lock, Sparkles, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, closeAuthModal, login, register } = useAuth();
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('register');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (activeTab === 'register') {
        if (!name.trim()) {
          setError('Please enter your full name.');
          setLoading(false);
          return;
        }
        const res = await register(name, email, password);
        if (!res.success) setError(res.error || 'Failed to create account.');
      } else {
        const res = await login(email, password);
        if (!res.success) setError(res.error || 'Invalid credentials.');
      }
    } catch (err: any) {
      setError('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div 
        id="auth-modal-card"
        className="relative w-full max-w-md bg-white border border-neutral-200 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 text-black"
      >
        {/* Close Button */}
        <button
          id="close-auth-modal-btn"
          onClick={closeAuthModal}
          className="absolute top-5 right-5 p-2 text-neutral-500 hover:text-black rounded-lg hover:bg-neutral-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0052FF]/10 text-[#0052FF] mb-3">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-black tracking-tight">
            {activeTab === 'register' ? 'Unlock Service Pricing' : 'Welcome Back'}
          </h3>
          <p className="text-sm text-neutral-600 mt-1">
            {activeTab === 'register'
              ? 'Create a free agency account to instantly view verified live rates for all 38 micro-services.'
              : 'Log in to view live pricing, manage leads, and access custom agency quotes.'}
          </p>
        </div>

        {/* Unlock Perk Highlights */}
        <div className="mb-6 bg-neutral-50 border border-neutral-200 rounded-xl p-3 text-xs space-y-1.5">
          <div className="flex items-center text-neutral-800 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#0052FF] mr-2 shrink-0" />
            Instant access to all 38 service base price figures
          </div>
          <div className="flex items-center text-neutral-800 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#0052FF] mr-2 shrink-0" />
            Direct communication portal with project managers
          </div>
          <div className="flex items-center text-neutral-800 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#0052FF] mr-2 shrink-0" />
            Zero hidden fees or commitments
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex bg-neutral-100 p-1 rounded-xl mb-6 border border-neutral-200">
          <button
            id="tab-register-btn"
            onClick={() => { setActiveTab('register'); setError(''); }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition ${
              activeTab === 'register'
                ? 'bg-white text-black shadow-sm'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            Create Free Account
          </button>
          <button
            id="tab-login-btn"
            onClick={() => { setActiveTab('login'); setError(''); }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition ${
              activeTab === 'login'
                ? 'bg-white text-black shadow-sm'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            Log In
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-xs font-medium">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {activeTab === 'register' && (
            <div>
              <label className="block text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Morgan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-black placeholder-neutral-400 focus:outline-none focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] transition text-sm bg-white"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1">
              Work Email
            </label>
            <input
              type="email"
              required
              placeholder="alex@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-black placeholder-neutral-400 focus:outline-none focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] transition text-sm bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-black placeholder-neutral-400 focus:outline-none focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] transition text-sm bg-white"
            />
          </div>

          <button
            id="auth-submit-btn"
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-[#0052FF] hover:bg-[#0042cc] text-white font-semibold rounded-xl shadow-md transition flex items-center justify-center space-x-2 text-sm disabled:opacity-50"
          >
            {loading ? (
              <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>
                  {activeTab === 'register' ? 'Register & Unlock Rates' : 'Log In & Continue'}
                </span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

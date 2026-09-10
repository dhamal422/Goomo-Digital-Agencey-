import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Check, Lock, Unlock, Calculator, ArrowRight, ShieldCheck } from 'lucide-react';
import { Service } from '../types';
import { useAuth } from '../context/AuthContext';

interface QuoteEstimatorPageProps {
  navigate: (route: string, slug?: string) => void;
}

export const QuoteEstimatorPage: React.FC<QuoteEstimatorPageProps> = ({ navigate }) => {
  const { user, openAuthModal } = useAuth();
  const [services, setServices] = useState<Service[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const isUnlocked = Boolean(user && user.viewRatesUnlocked);

  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setServices(data.data);
          // Pre-select featured services
          setSelectedIds(['srv-1', 'srv-36', 'srv-16'].filter(id => data.data.some((s: Service) => s.id === id)));
        }
      });
  }, []);

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const selectedServices = services.filter(s => selectedIds.includes(s.id));
  const totalPrice = selectedServices.reduce((sum, s) => sum + s.basePrice, 0);

  const handleSubmitPackage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServices.length === 0) return alert('Please select at least one service.');
    setSubmitting(true);

    try {
      const summaryText = `Custom Package Request (${selectedServices.length} services): ${selectedServices.map(s => s.title).join(', ')}. Total Estimated Value: ₹${totalPrice.toLocaleString()}`;

      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName,
          clientEmail,
          selectedService: 'Custom Agency Package',
          message: summaryText
        })
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      }
    } catch (err) {
      alert('Error submitting package estimate');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-transparent text-white min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#b2ebf2] bg-slate-800/90 px-3.5 py-1.5 rounded-full border border-slate-700 inline-block mb-3">
            Interactive Cost Builder
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Agency Package Estimator
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Select services across any of our core categories to build a custom solution package with instant price calculations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column: Multi-Select Service Picker */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-base font-bold text-white border-b border-slate-800 pb-2">
              Select Services to Bundle ({selectedIds.length} Selected)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto pr-2">
              {services.map((service) => {
                const isSelected = selectedIds.includes(service.id);
                return (
                  <div
                    key={service.id}
                    onClick={() => toggleSelect(service.id)}
                    className={`p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-cyan-400 bg-[#1a2332] shadow-lg'
                        : 'border-slate-800 bg-[#131b26] hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold text-[#b2ebf2] uppercase">
                          {service.category}
                        </span>
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                          isSelected ? 'bg-cyan-300 border-cyan-300 text-slate-950' : 'border-slate-700 bg-slate-900'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-white">{service.title}</h4>
                      <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">{service.shortDesc}</p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-[10px] text-slate-500">Est. SLA: {service.deliveryTime || '3-5 Days'}</span>
                      {isUnlocked ? (
                        <span className="font-bold text-white">₹{service.basePrice.toLocaleString()}</span>
                      ) : (
                        <span className="font-bold text-slate-500 blur-xs select-none font-mono">₹1,499</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Dynamic Quote Summary Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="bg-[#131b26] border border-slate-800 rounded-3xl p-6 shadow-2xl sticky top-28">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <span className="text-xs font-bold text-[#b2ebf2] uppercase tracking-wider flex items-center">
                  <Calculator className="w-4 h-4 mr-1.5" /> Package Quote
                </span>
                <span className="text-xs text-slate-400 font-semibold">{selectedIds.length} Items</span>
              </div>

              {/* Selected Items List */}
              <div className="space-y-2 mb-6 max-h-48 overflow-y-auto">
                {selectedServices.length === 0 ? (
                  <p className="text-xs text-slate-500 italic text-center py-4">Click services on the left to add them to your package.</p>
                ) : (
                  selectedServices.map((s) => (
                    <div key={s.id} className="flex items-center justify-between text-xs py-1">
                      <span className="truncate max-w-[180px] font-medium text-slate-200">{s.title}</span>
                      {isUnlocked ? (
                        <span className="font-bold text-white">₹{s.basePrice.toLocaleString()}</span>
                      ) : (
                        <span className="text-slate-500 blur-xs select-none">₹---</span>
                      )}
                    </div>
                  ))
                )}
              </div>

              {/* Total Figure */}
              <div className="pt-4 border-t border-slate-800 mb-6">
                <span className="text-xs font-bold text-slate-400 uppercase block">Estimated Total Investment</span>
                {isUnlocked ? (
                  <div className="text-3xl font-black text-white mt-0.5">
                    ₹{totalPrice.toLocaleString()} <span className="text-xs font-normal text-slate-400">INR</span>
                  </div>
                ) : (
                  <div className="relative mt-1">
                    <span className="text-3xl font-black text-slate-500 blur-md select-none font-mono">
                      ₹{totalPrice > 0 ? (totalPrice * 1.2).toFixed(0) : '4,999'}
                    </span>
                    <button
                      onClick={openAuthModal}
                      className="absolute inset-0 flex items-center justify-center text-xs font-bold text-slate-950 btn-cyan-primary rounded-xl px-2 shadow-sm cursor-pointer"
                    >
                      <Lock className="w-3.5 h-3.5 mr-1" />
                      <span>Unlock Live Quote Rates</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Submit Form */}
              {submitted ? (
                <div className="p-4 bg-[#1a2332] border border-emerald-500/40 rounded-2xl text-center space-y-2">
                  <ShieldCheck className="w-8 h-8 text-emerald-400 mx-auto" />
                  <div className="text-xs font-bold text-white">Package Proposal Sent</div>
                  <p className="text-[11px] text-slate-400">An architect will contact you within 2 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitPackage} className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-700 bg-[#1a2332] text-white rounded-xl focus:border-cyan-300 focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Business Email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-700 bg-[#1a2332] text-white rounded-xl focus:border-cyan-300 focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={submitting || selectedServices.length === 0}
                    className="w-full py-3 btn-cyan-primary text-slate-950 font-black rounded-xl text-xs shadow-md transition flex items-center justify-center space-x-1.5 cursor-pointer disabled:opacity-50"
                  >
                    <span>{submitting ? 'Generating...' : 'Request Custom Scope Proposal'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

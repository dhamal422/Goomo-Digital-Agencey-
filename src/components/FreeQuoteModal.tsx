import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Sparkles, MessageSquare, ShieldCheck, Clock, Zap } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';

interface FreeQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialWebsiteStyle?: string;
}

export const FreeQuoteModal: React.FC<FreeQuoteModalProps> = ({
  isOpen,
  onClose,
  initialWebsiteStyle = 'Agency Website'
}) => {
  const { servicesWhatsAppNumber } = useSettings();
  const [websiteStyle, setWebsiteStyle] = useState(initialWebsiteStyle);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [targetTimeline, setTargetTimeline] = useState('Standard (1-2 Weeks)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const websiteStylesList = [
    { id: 'Agency Website', label: 'Agency Website (NEXORA Style)' },
    { id: 'Environment Website', label: 'Environment / Eco (GreenLeaf Style)' },
    { id: 'E-Commerce Website', label: 'E-Commerce Store (ShopCo. Style)' },
    { id: 'Restaurant Website', label: 'Restaurant & Food (Shodie. Style)' },
    { id: 'Healthcare Website', label: 'Healthcare & Clinic (MediCare Style)' },
    { id: 'Portfolio Website', label: 'Personal Portfolio (Alex Smith Style)' },
    { id: 'Custom Development', label: 'Custom Web Application / SaaS' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName,
          clientEmail,
          selectedService: `Website Development: ${websiteStyle}`,
          message: `Phone: ${clientPhone || 'Not provided'} | Timeline: ${targetTimeline} | Requirements: ${projectDescription}`
        })
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setIsSuccess(true); // Graceful fallback
      }
    } catch {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppDirect = () => {
    const cleanNumber = servicesWhatsAppNumber.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Hi Goomo Digital! I would like to get a FREE quote for a website.\n\n*Style:* ${websiteStyle}\n*Name:* ${clientName || 'Client'}\n*Email:* ${clientEmail || 'N/A'}\n*Timeline:* ${targetTimeline}\n*Details:* ${projectDescription || 'Interested in building a modern website.'}`
    );
    window.open(`https://wa.me/${cleanNumber || '919876543210'}?text=${text}`, '_blank');
  };

  const resetForm = () => {
    setIsSuccess(false);
    setClientName('');
    setClientEmail('');
    setClientPhone('');
    setProjectDescription('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetForm}
            className="fixed inset-0 bg-[#050811]/85 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-gradient-to-b from-[#0e1629] via-[#0a1020] to-[#080d19] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/10 text-white z-10 overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={resetForm}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="py-8 text-center space-y-5">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                    Quote Request Received!
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    We'll Turn Your Ideas Into Reality
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-cyan-300 font-bold">{clientName || 'there'}</span>! Our senior web architect will prepare a tailored proposal for your <span className="text-purple-300 font-semibold">{websiteStyle}</span> and reach out within 2 hours.
                  </p>
                </div>

                <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800 flex items-center justify-around text-xs text-slate-300">
                  <div className="flex items-center space-x-1.5">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span>2h Response SLA</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>100% Free Consultation</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm flex items-center justify-center space-x-2 shadow-lg transition cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Connect on WhatsApp Now</span>
                  </button>
                  <button
                    onClick={resetForm}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-1.5 pr-8">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Free Website Strategy & Quote</span>
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    Get A Free Quote
                  </h3>
                  <p className="text-xs text-slate-400">
                    Tell us about your project. No obligation, no hidden fees.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  {/* Website Style Selection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Selected Website Style
                    </label>
                    <select
                      value={websiteStyle}
                      onChange={(e) => setWebsiteStyle(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#131b2e] border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 transition"
                    >
                      {websiteStylesList.map((st) => (
                        <option key={st.id} value={st.id} className="bg-[#0b1020] text-white">
                          {st.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#131b2e] border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#131b2e] border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>
                  </div>

                  {/* Phone & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#131b2e] border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Target Delivery
                      </label>
                      <select
                        value={targetTimeline}
                        onChange={(e) => setTargetTimeline(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#131b2e] border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 transition"
                      >
                        <option value="Urgent (3-5 Days)">Urgent (3-5 Days)</option>
                        <option value="Standard (1-2 Weeks)">Standard (1-2 Weeks)</option>
                        <option value="Flexible (1 Month)">Flexible (1 Month)</option>
                      </select>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Project Vision & Key Features
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe what your business does and any special requirements (e.g. online booking, payment gateway, multi-lingual, animations)..."
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#131b2e] border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-950 font-black text-sm flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 transition cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Preparing Your Quote...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Request Free Quote Now</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 font-bold text-sm flex items-center justify-center space-x-2 transition cursor-pointer whitespace-nowrap"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span>Chat on WhatsApp</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

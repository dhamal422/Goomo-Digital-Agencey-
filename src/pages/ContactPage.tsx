import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: name,
          clientEmail: email,
          selectedService: 'General Contact Form',
          message
        })
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      }
    } catch (err) {
      alert('Error submitting inquiry');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-transparent text-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#b2ebf2] bg-slate-800/90 px-3.5 py-1.5 rounded-full border border-slate-700 inline-block mb-3">
            Client Onboarding
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Contact Goomo Digital Agency
          </h1>
          <p className="text-base text-slate-400 mt-2">
            Speak directly with our senior full-stack architects and social growth experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 bg-[#131b26] border border-slate-800 rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white border-b border-slate-800 pb-4">
              Agency Headquarters
            </h3>

            <div className="space-y-6 text-sm">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#1a2332] text-[#b2ebf2] border border-slate-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white">General & Enterprise Inquiries</div>
                  <div className="text-slate-400 text-xs mt-0.5">contact@goomodigital.com</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#1a2332] text-[#b2ebf2] border border-slate-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white">Direct Advisory Phone Line</div>
                  <div className="text-slate-400 text-xs mt-0.5">+1 (800) 555-GOOMO</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#1a2332] text-[#b2ebf2] border border-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white">Global Offices</div>
                  <div className="text-slate-400 text-xs mt-0.5">
                    Silicon Valley, CA • Mayfair, London • Marina Bay, Singapore
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#1a2332] rounded-2xl border border-slate-700 text-xs space-y-1">
              <div className="font-bold text-white">Enterprise SLA Response</div>
              <div className="text-slate-400">
                All client messages are routed to our designated on-duty technical lead and answered within 2 hours.
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#131b26] border border-slate-800 rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Message
            </h3>

            {submitted ? (
              <div className="p-8 bg-[#1a2332] border border-emerald-500/40 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Message Delivered</h4>
                <p className="text-xs text-slate-400">
                  Thank you for reaching out. We will review your project brief and follow up promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-bold text-[#b2ebf2] underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-700 text-white text-sm bg-[#1a2332] focus:border-cyan-300 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Business Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-700 text-white text-sm bg-[#1a2332] focus:border-cyan-300 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Project Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Please describe your requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-700 text-white text-sm bg-[#1a2332] focus:border-cyan-300 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 btn-cyan-primary text-slate-950 font-black rounded-xl text-sm transition flex items-center justify-center space-x-2 cursor-pointer shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Transmitting...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </div>
  );
};

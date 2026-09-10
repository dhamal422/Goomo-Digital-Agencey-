import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HelpCircle, ChevronDown, Search, MessageSquare, Sparkles, ArrowRight } from 'lucide-react';

interface FaqPageProps {
  navigate: (route: string, slug?: string) => void;
}

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: '1',
    category: 'General & Pricing',
    question: 'How does Goomo Digital Agency fixed pricing work?',
    answer: 'All our 38+ micro-services feature fixed, transparent pricing without hidden retainers or surprise fees. Registered clients get full rate transparency and direct instant checkout.'
  },
  {
    id: '2',
    category: 'General & Pricing',
    question: 'How do I unlock agency member rates?',
    answer: 'Click the "Login / Register" button at the top right of the navigation bar to sign in or create an account. Registered users immediately unlock live rates across all services.'
  },
  {
    id: '3',
    category: 'AI & WhatsApp Automation',
    question: 'What is a 24/7 AI WhatsApp Agent?',
    answer: 'A custom AI agent trained on your business knowledge base that automatically handles customer inquiries on WhatsApp, sends product catalogs, qualifies leads, and collects payments via UPI/Razorpay 24/7.'
  },
  {
    id: '4',
    category: 'AI & WhatsApp Automation',
    question: 'Can the AI Agent handle custom FAQs and CRM syncing?',
    answer: 'Yes! We configure the agent with your business data, product pricing, and CRM integrations (like HubSpot, Google Sheets, or custom webhooks).'
  },
  {
    id: '5',
    category: 'Payments & Razorpay',
    question: 'Which payment methods do you accept?',
    answer: 'We support instant Razorpay checkout (Cards, Netbanking, UPI, Wallet), Stripe International, PhonePe/Google Pay direct, and PayPal Global.'
  },
  {
    id: '6',
    category: 'Payments & Razorpay',
    question: 'Is my payment secure?',
    answer: 'Absolutely. All payments are processed through Razorpay / Stripe bank-grade SSL encrypted payment gateways with instant transaction validation.'
  },
  {
    id: '7',
    category: 'Delivery & SLAs',
    question: 'What is the standard delivery timeline for services?',
    answer: 'Turnaround times range from 24-48 hours for micro-tasks up to 5-10 business days for complete custom websites and complex AI CRM setups.'
  },
  {
    id: '8',
    category: 'Delivery & SLAs',
    question: 'Can I request custom revisions or features?',
    answer: 'Yes, every delivered project includes a 14-day revision period and dedicated technical support from our lead engineering team.'
  }
];

export const FaqPage: React.FC<FaqPageProps> = ({ navigate }) => {
  const [openId, setOpenId] = useState<string>('1');
  const [search, setSearch] = useState<string>('');
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const categories = ['All', 'General & Pricing', 'AI & WhatsApp Automation', 'Payments & Razorpay', 'Delivery & SLAs'];

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCat = selectedCat === 'All' || faq.category === selectedCat;
    const matchesSearch = search === '' || 
      faq.question.toLowerCase().includes(search.toLowerCase()) || 
      faq.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-[#064e3b] text-white min-h-screen">
      {/* Header */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-emerald-900/40">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-extrabold uppercase tracking-widest backdrop-blur-sm">
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span>Frequently Asked Questions</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Got Questions? <span className="text-emerald-300">We Have Answers.</span>
          </h1>
          <p className="text-base sm:text-lg text-emerald-100/80 font-normal">
            Everything you need to know about our 38+ agency services, AI integrations, Razorpay payments, and execution SLAs.
          </p>

          {/* Search Box */}
          <div className="pt-4 max-w-lg mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search questions or keywords..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-emerald-500/30 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 bg-[#131b26] shadow-inner"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Categories & List */}
      <section className="py-16 bg-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none justify-start sm:justify-center"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition cursor-pointer ${
                  selectedCat === cat
                    ? 'btn-cyan-primary text-slate-950 shadow-md font-black'
                    : 'bg-[#131b26] text-slate-300 border border-emerald-500/20 hover:border-emerald-400/50 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Accordion list */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            {filteredFaqs.length === 0 ? (
              <div className="p-8 bg-[#131b26] border border-emerald-500/20 rounded-2xl text-center text-sm text-slate-400">
                No matching questions found. Try resetting your search.
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-[#131b26]/90 border border-emerald-500/20 rounded-2xl overflow-hidden transition shadow-xl hover:border-emerald-500/40 backdrop-blur-md"
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? '' : faq.id)}
                      className="w-full p-5 text-left font-bold text-sm text-white flex items-center justify-between hover:text-emerald-300 transition cursor-pointer"
                    >
                      <span className="flex items-center space-x-3 pr-4">
                        <span className="text-xs px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-extrabold rounded-md uppercase tracking-wider">
                          {faq.category}
                        </span>
                        <span>{faq.question}</span>
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-emerald-400' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-emerald-900/30 bg-slate-900/40">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </motion.div>

          {/* Still Need Help Box */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 p-8 bg-[#131b26]/95 border border-emerald-500/30 rounded-3xl text-center space-y-4 shadow-2xl backdrop-blur-md"
          >
            <h3 className="text-lg font-black text-white">Still have questions?</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Our lead agency strategy team is ready to assist you with custom project scope inquiries or technical questions.
            </p>
            <button
              onClick={() => navigate('contact')}
              className="px-6 py-3 btn-cyan-primary text-slate-950 text-xs font-black rounded-xl transition inline-flex items-center space-x-2 shadow-lg cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Agency Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

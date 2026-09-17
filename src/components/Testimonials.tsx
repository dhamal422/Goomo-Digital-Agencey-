import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle2, Quote, TrendingUp, Sparkles, ChevronDown } from 'lucide-react';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState<number>(10);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch('/api/testimonials');
      const data = await res.json();
      if (data.success) {
        setTestimonials(data.data);
      }
    } catch (err) {
      console.error('Failed to load testimonials:', err);
    } finally {
      setLoading(false);
    }
  };

  const categories: string[] = ['All', ...(Array.from(new Set(testimonials.map(t => String(t.serviceCategory)))) as string[])];

  const filteredTestimonials = testimonials.filter(t => 
    selectedCategory === 'All' || t.serviceCategory === selectedCategory
  );

  const displayedTestimonials = filteredTestimonials.slice(0, visibleCount);

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setVisibleCount(10);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 10);
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    const totalStars = 5;
    const emptyStars = totalStars - fullStars - (hasHalf ? 1 : 0);

    return (
      <div className="inline-flex items-center space-x-1.5 shrink-0 whitespace-nowrap flex-nowrap">
        <div className="flex items-center space-x-0.5 shrink-0 flex-nowrap">
          {/* Filled black stars for customer rating */}
          {[...Array(fullStars)].map((_, idx) => (
            <Star key={`full-${idx}`} className="w-3.5 h-3.5 fill-black stroke-black stroke-[1.5] text-black shrink-0" />
          ))}
          {hasHalf && (
            <div className="relative w-3.5 h-3.5 shrink-0">
              <Star className="w-3.5 h-3.5 fill-black/15 stroke-black/30 stroke-[1.5] absolute inset-0" />
              <div className="overflow-hidden w-1/2 absolute inset-0">
                <Star className="w-3.5 h-3.5 fill-black stroke-black stroke-[1.5] text-black shrink-0" />
              </div>
            </div>
          )}
          {/* Remaining unrated stars */}
          {[...Array(Math.max(0, emptyStars))].map((_, idx) => (
            <Star key={`empty-${idx}`} className="w-3.5 h-3.5 fill-black/15 stroke-black/30 stroke-[1.5] shrink-0" />
          ))}
        </div>
        <span className="text-[11px] font-black text-black bg-black/15 px-1.5 py-0.5 rounded-md border border-black/30 whitespace-nowrap shrink-0 leading-tight">
          {rating.toFixed(1)} ★
        </span>
      </div>
    );
  };

  return (
    <section className="py-20 bg-white rounded-[2.5rem] sm:rounded-[3rem] my-8 max-w-7xl mx-auto border border-slate-200/80 shadow-xl relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-200 text-black border border-slate-300 text-xs font-bold mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span className="text-black font-extrabold">Verified Social Proof & ROI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
            Trusted By 30+ Growth Leaders & Gaming Platforms
          </h2>
          <p className="text-sm text-black font-medium mt-3 leading-relaxed">
            See how Indian founders, Gaming Platforms, E-Commerce brands, and AI startups scale their operations and revenue with Goomo Digital Agency.
          </p>
        </motion.div>

        {/* TRUST METRICS BAR (DOUBLE-NESTED CONTAINER) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#131b26] border border-slate-800 rounded-3xl p-6 mb-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-4xl mx-auto shadow-2xl"
        >
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center space-x-1 text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-500" />
              ))}
            </div>
            <div className="text-2xl font-black text-white">4.5 / 5.0</div>
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Average Client Satisfaction</div>
          </div>

          <div className="flex flex-col items-center justify-center border-t sm:border-t-0 sm:border-l border-slate-800 pt-4 sm:pt-0">
            <div className="text-2xl font-black text-[#b2ebf2]">120+</div>
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Projects Completed</div>
          </div>

          <div className="flex flex-col items-center justify-center border-t sm:border-t-0 sm:border-l border-slate-800 pt-4 sm:pt-0">
            <div className="text-2xl font-black text-emerald-400">100%</div>
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">SLA Guaranteed Delivery</div>
          </div>
        </motion.div>

        {/* CATEGORY FILTER TABS */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center space-x-2 overflow-x-auto pb-4 scrollbar-none mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategorySelect(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center space-x-1.5 cursor-pointer ${
                selectedCategory === cat
                  ? 'btn-cyan-primary text-slate-950 shadow-md'
                  : 'pill-tag-dark text-slate-300'
              }`}
            >
              <span>{cat}</span>
              {cat !== 'All' ? (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  selectedCategory === cat ? 'bg-slate-950/20 text-slate-950 font-black' : 'bg-slate-800 text-slate-400'
                }`}>
                  {testimonials.filter(t => t.serviceCategory === cat).length}
                </span>
              ) : (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  selectedCategory === cat ? 'bg-slate-950/20 text-slate-950 font-black' : 'bg-slate-800 text-slate-400'
                }`}>
                  {testimonials.length}
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* TESTIMONIALS CARDS GRID */}
        {loading ? (
          <div className="py-16 text-center text-xs text-slate-400 font-medium">
            Fetching verified client reviews...
          </div>
        ) : filteredTestimonials.length === 0 ? (
          <div className="py-12 bg-[#131b26] border border-slate-800 rounded-2xl text-center text-slate-400 text-xs">
            No testimonials found for this category.
          </div>
        ) : (
          <>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08
                  }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {displayedTestimonials.map((t, idx) => (
                <motion.div
                  key={t.id}
                  variants={{
                    hidden: { 
                      opacity: 0, 
                      x: idx % 2 === 0 ? -50 : 50,
                      rotateY: idx % 2 === 0 ? -8 : 8 
                    },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      rotateY: 0,
                      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                    }
                  }}
                  whileHover={{ scale: 1.025, rotateY: idx % 2 === 0 ? -2 : 2, rotateX: 2 }}
                  style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                  className="bg-gradient-to-r from-[#009245] to-[#fcee21] hover:from-[#00a850] hover:to-[#fff13c] border border-emerald-700/50 hover:border-yellow-500 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group text-white"
                >
                  <div>
                    {/* Top Bar: Category Pill & Star Rating */}
                    <div className="flex items-center justify-between gap-2 mb-4 flex-nowrap">
                      <span className="px-2.5 py-1 bg-black/20 backdrop-blur-sm border border-white/30 text-white text-[10px] font-black uppercase rounded-md tracking-wider shrink-0 truncate max-w-[130px]">
                        {t.serviceCategory}
                      </span>
                      {renderStars(t.rating)}
                    </div>

                    {/* Impact Metric Highlight */}
                    <div className="mb-4 inline-flex items-center space-x-1.5 px-3 py-1 bg-black/20 backdrop-blur-sm border border-white/30 text-white rounded-lg text-xs font-black">
                      <TrendingUp className="w-3.5 h-3.5 text-white" />
                      <span>Impact: {t.metricImpact}</span>
                    </div>

                    {/* Client Quote Body */}
                    <div className="relative mb-6">
                      <Quote className="w-6 h-6 text-white/30 absolute -top-2 -left-2 -z-0" />
                      <p className="text-xs text-white leading-relaxed font-bold relative z-10 italic drop-shadow-sm indent-4 pl-1">
                        "{t.quote}"
                      </p>
                    </div>
                  </div>

                  {/* Author Info & Verified Badge */}
                  <div className="pt-4 border-t border-white/25 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white/25 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-sm border border-white/40">
                        {t.clientName.split(' ').map(n => n.charAt(0)).join('')}
                      </div>
                      <div>
                        <div className="text-xs font-black text-white leading-tight flex items-center space-x-1">
                          <span>{t.clientName}</span>
                        </div>
                        <div className="text-[11px] text-white/90 font-medium">
                          {t.clientRole}, <span className="font-black text-white">{t.companyName}</span>
                        </div>
                      </div>
                    </div>

                    {t.verified && (
                      <div className="flex items-center text-white text-[10px] font-black shrink-0 px-2 py-0.5 rounded-full bg-black/20 border border-white/30" title="Verified Client Project">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-white" />
                        <span className="hidden sm:inline">Verified</span>
                      </div>
                    )}
                  </div>

                </motion.div>
              ))}
            </motion.div>

            {/* SHOW MORE BUTTON */}
            {visibleCount < filteredTestimonials.length && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mt-12 text-center"
              >
                <button
                  onClick={handleLoadMore}
                  className="px-8 py-3.5 bg-gradient-to-r from-[#a9f1df] to-[#ffbbbb] hover:from-[#9be8d7] hover:to-[#ffa4a4] border border-emerald-300/60 hover:border-pink-300 text-black text-xs sm:text-sm font-black rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2 mx-auto cursor-pointer"
                >
                  <span className="text-black font-black">Load More Reviews ({displayedTestimonials.length} of {filteredTestimonials.length})</span>
                  <ChevronDown className="w-4 h-4 text-black" />
                </button>
              </motion.div>
            )}
          </>
        )}

      </div>
    </section>
  );
};

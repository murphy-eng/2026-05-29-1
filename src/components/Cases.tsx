/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ArrowUpRight, TrendingUp, HelpCircle, Lightbulb, Users, Tag, Award, X, Sparkles, RefreshCw } from 'lucide-react';
import { CASE_STUDIES } from '../data';
import { CaseStudy } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface CasesProps {
  onQuoteOpen: () => void;
}

export default function Cases({ onQuoteOpen }: CasesProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web-design' | 'brand-cis' | 'marketing'>('all');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const filters = [
    { id: 'all', label: '全部案例' },
    { id: 'web-design', label: '網頁設計' },
    { id: 'brand-cis', label: '品牌識別' },
    { id: 'marketing', label: '行銷成效' },
  ];

  const filteredCases = activeFilter === 'all' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(c => c.category === activeFilter);

  return (
    <section className="py-20 bg-white border-b border-brand-charcoal/5 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section block */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-yellow">
              Our Premium Selected Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-charcoal tracking-tight mt-2">
              精選合作案例
            </h2>
            <p className="text-xs text-brand-gray mt-2 leading-relaxed">
              點擊案例即可深入研讀「個案詳情、突破點與轉化數據指標明細」。
            </p>
          </div>

          {/* Filter switcher */}
          <div className="flex flex-wrap gap-1.5 bg-brand-cream p-1 rounded-xl border border-brand-charcoal/5 self-start">
            {filters.map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveFilter(item.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${activeFilter === item.id ? 'bg-brand-charcoal text-brand-yellow shadow-sm' : 'text-brand-gray hover:text-brand-charcoal'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCases.map((work) => (
            <div 
              key={work.id}
              onClick={() => setSelectedCase(work)}
              className="group cursor-pointer flex flex-col space-y-4 rounded-3xl overflow-hidden border border-brand-charcoal/5 p-4 bg-brand-cream hover:border-brand-yellow/30 hover:shadow-lg transition-all"
            >
              {/* Image Frame */}
              <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden relative bg-brand-slate">
                <img 
                  src={work.imageUrl} 
                  alt={work.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 opacity-92"
                />
                
                {/* Year Label */}
                <span className="absolute top-4 right-4 bg-brand-charcoal/80 backdrop-blur text-brand-yellow font-mono text-[9px] font-bold py-1 px-2.5 rounded-md uppercase tracking-wider">
                  Case Study // {work.year}
                </span>

                {/* Ambient action cue */}
                <div className="absolute inset-0 bg-brand-charcoal/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-brand-yellow text-brand-charcoal text-xs font-bold py-2.5 px-5 rounded-xl flex items-center space-x-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <span>展開數據與策略</span>
                    <ArrowUpRight size={14} className="stroke-[2.5]" />
                  </span>
                </div>
              </div>

              {/* Text metadata */}
              <div className="px-1 space-y-2">
                <div className="flex flex-wrap gap-1.5">
                  {work.tags.slice(0, 3).map((tg, i) => (
                    <span key={i} className="text-[10px] font-bold text-brand-gray bg-white border border-brand-charcoal/5 px-2.5 py-0.5 rounded-full">
                      {tg}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg font-black text-brand-charcoal group-hover:text-brand-yellow transition-colors leading-snug">
                      {work.client} — {work.title}
                    </h3>
                    <p className="text-xs text-brand-gray line-clamp-2 mt-1leading-relaxed font-sans">
                      {work.subtitle}
                    </p>
                  </div>
                  <div className="p-2 rounded-xl bg-blend-multiply bg-brand-charcoal/5 text-brand-charcoal group-hover:bg-brand-charcoal group-hover:text-brand-yellow transition-all flex-shrink-0 mt-1">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Detail Modal with Charts and Metrics (Satisfies "包含數據之個案詳情頁") */}
        <AnimatePresence>
          {selectedCase && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-charcoal/90 backdrop-blur-md overflow-y-auto">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                className="relative bg-brand-cream border border-brand-charcoal/10 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
              >
                {/* Modal close bar header */}
                <div className="sticky top-0 z-10 bg-brand-cream-dark px-6 py-4 border-b border-brand-charcoal/5 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono uppercase bg-brand-charcoal text-brand-yellow font-bold py-1 px-2 rounded-md">
                      Interactive Case Database
                    </span>
                    <span className="text-xs font-bold text-brand-gray font-mono">
                      CODE://{selectedCase.id.toUpperCase()}
                    </span>
                  </div>
                  
                  <button 
                    type="button" 
                    onClick={() => setSelectedCase(null)} 
                    className="p-1.5 rounded-full hover:bg-brand-charcoal/5 transition-colors text-brand-charcoal font-bold"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Scrollable contents */}
                <div className="overflow-y-auto p-6 md:p-10 space-y-8 flex-1">
                  
                  {/* Hero banner split */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-brand-charcoal/5 pb-8">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-1 text-brand-yellow">
                        <Award size={16} />
                        <span className="text-xs font-mono font-bold uppercase tracking-wider">
                          頂尖成效專案
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-black text-brand-charcoal tracking-tight">
                        {selectedCase.client}
                        <br />
                        <span className="text-brand-yellow bg-brand-charcoal px-2.5 py-0.5 rounded-lg inline-block mt-2">
                          {selectedCase.title}
                        </span>
                      </h2>
                      <p className="text-sm text-brand-gray font-sans font-medium leading-relaxed">
                        {selectedCase.subtitle}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        {selectedCase.tags.map((tag, i) => (
                          <span key={i} className="text-xs font-semibold text-brand-charcoal bg-white border border-brand-charcoal/5 px-3 py-1 rounded-md">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-brand-slate border border-brand-charcoal/10 relative shadow">
                      <img 
                        src={selectedCase.imageUrl} 
                        alt={selectedCase.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </div>

                  {/* Operational Data metrics section - satisfying requirement from mockup */}
                  <div className="bg-brand-charcoal text-white p-6 rounded-2xl border border-white/5 space-y-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-xs font-mono text-brand-yellow font-bold uppercase tracking-wider flex items-center space-x-1.5">
                        <TrendingUp size={14} />
                        <span>專案核心數據增幅指標 (Core Performance Metrics)</span>
                      </span>
                      <span className="text-[9px] font-mono text-white/40">REF_CONFIRMED_DATA_V1</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {selectedCase.metrics.map((metric, i) => (
                        <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between text-left relative hover:bg-white/8 transition-colors">
                          <span className="text-xs text-white/50">{metric.label}</span>
                          <div className="my-3 flex items-baseline gap-2">
                            <span className="text-3xl font-black font-display text-brand-yellow">{metric.value}</span>
                            <span className="text-[10px] font-mono text-green-400 font-bold">{metric.change}</span>
                          </div>
                          <span className="text-[10px] text-white/30 font-sans">{metric.subLabel}</span>
                          <div className="absolute top-4 right-4 text-brand-yellow opacity-[0.1]">
                            <TrendingUp size={24} />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Styled Visual SVG Bar simulation chart for conversion rate */}
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-left">
                      <div className="text-xs font-mono text-white/60 mb-3 flex justify-between">
                        <span>專案前後效益動態百分比 RATING CHART</span>
                        <span className="text-[#E6B822] font-bold">轉換效能 +192%</span>
                      </div>
                      <div className="space-y-2.5">
                        <div>
                          <div className="flex justify-between text-[10px] text-white/40 mb-1">
                            <span>合作前 (Old Funnel Performance)</span>
                            <span>24% 基礎力</span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-brand-gray w-[24%] rounded-full" />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-[10px] text-[#A6EFAB] mb-1 font-bold">
                            <span>合作後 ❖ (Morsign Engine Optimized)</span>
                            <span>92% 頂峰效應</span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-brand-yellow w-[92%] rounded-full animate-pulse" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Challenge & Solution analysis */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div className="space-y-3.5 p-5 bg-white border border-brand-charcoal/5 rounded-2xl">
                      <h4 className="text-sm font-bold text-brand-charcoal flex items-center space-x-1.5 border-b border-brand-charcoal/5 pb-2">
                        <HelpCircle size={16} className="text-brand-gray" />
                        <span>面臨之商務痛點 (The Challenge)</span>
                      </h4>
                      <p className="text-xs text-brand-gray leading-relaxed font-sans">
                        {selectedCase.challenge}
                      </p>
                    </div>

                    <div className="space-y-3.5 p-5 bg-white border border-brand-charcoal/5 rounded-2xl">
                      <h4 className="text-sm font-bold text-brand-charcoal flex items-center space-x-1.5 border-b border-brand-charcoal/5 pb-2">
                        <Lightbulb size={16} className="text-brand-yellow" />
                        <span>默聲對策與切入點 (The Solution)</span>
                      </h4>
                      <p className="text-xs text-brand-gray leading-relaxed font-sans">
                        {selectedCase.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results & Deliverables checklist */}
                  <div className="space-y-3 p-6 bg-brand-cream-dark border border-brand-charcoal/5 rounded-2xl text-left">
                    <h4 className="text-sm font-bold text-brand-charcoal uppercase tracking-wider font-mono">
                      最終交付成果與亮點 Deliverables
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
                      {selectedCase.results.map((res, i) => (
                        <div key={i} className="p-4 rounded-xl bg-white border border-brand-charcoal/5 text-xs text-brand-charcoal font-sans leading-relaxed relative font-medium">
                          <div className="w-5 h-5 rounded-full bg-brand-yellow/15 text-brand-yellow flex items-center justify-center text-[10px] font-mono font-bold mb-2">
                            {i + 1}
                          </div>
                          {res}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Client Testimonial if available */}
                  {selectedCase.testimonial && (
                    <div className="border-t border-brand-charcoal/5 pt-8">
                      <blockquote className="relative p-6 bg-white border-l-4 border-brand-yellow rounded-r-2xl text-left">
                        <p className="text-xs italic text-brand-gray leading-relaxed font-sans font-medium">
                          " {selectedCase.testimonial.text} "
                        </p>
                        <footer className="mt-4 flex items-center space-x-2">
                          <div className="w-7 h-7 rounded-full bg-brand-charcoal flex items-center justify-center text-brand-yellow text-[10px] font-mono font-bold">
                            {selectedCase.testimonial.author[0]}
                          </div>
                          <div className="text-left leading-tight">
                            <cite className="text-xs font-bold text-brand-charcoal not-italic">
                              {selectedCase.testimonial.author}
                            </cite>
                            <span className="text-[10px] text-brand-gray block">
                              {selectedCase.testimonial.role} — 共同致謝
                            </span>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  )}

                  {/* Custom External Redirect button simulation matching requirement */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 sm:justify-center">
                    <button
                      type="button"
                      onClick={() => {
                        alert('模擬連線：即將為您打開線上預覽站台網址 (RWD/RTL/Audit Passed)');
                      }}
                      className="px-6 py-3 bg-brand-charcoal text-brand-yellow hover:bg-brand-slate text-xs font-bold tracking-wider rounded-xl transition-all flex items-center justify-center space-x-1.5"
                    >
                      <span>前往實體站外連線 ➔</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCase(null);
                        onQuoteOpen();
                      }}
                      className="px-6 py-3 bg-white text-brand-charcoal hover:bg-brand-cream-dark border border-brand-charcoal/10 text-xs font-bold tracking-wider rounded-xl transition-all text-center"
                    >
                      預約同類型專案諮詢
                    </button>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

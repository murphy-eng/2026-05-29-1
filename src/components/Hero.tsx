/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Star, ChevronRight, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { PageId } from '../types';

interface HeroProps {
  setCurrentPage: (page: PageId) => void;
  openQuoteModal: () => void;
}

export default function Hero({ setCurrentPage, openQuoteModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-cream pt-10 pb-20 md:py-28 border-b border-brand-charcoal/5">
      {/* Decorative ambient blurred blobs */}
      <div className="absolute top-10 right-[-10%] w-96 h-96 bg-brand-yellow/12 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-[-10%] w-80 h-80 bg-brand-cream-dark rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content block */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center self-start px-3.5 py-1.5 rounded-full bg-brand-yellow-light text-brand-yellow border border-brand-yellow/20">
              <Sparkles size={14} className="mr-1.5 text-brand-yellow stroke-[2.5]" />
              <span className="text-xs font-bold uppercase tracking-wider font-sans">
                網頁設計 × 品牌識別 × 整合行銷
              </span>
            </div>

            {/* Display Heading statement */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-charcoal leading-[1.12] tracking-tight">
              讓品牌從設計到流量，
              <br className="hidden sm:inline" />
              <span className="text-brand-yellow bg-brand-charcoal px-3 py-1 rounded-xl inline-block mt-2">
                一站到位
              </span>
            </h1>

            {/* Subheading description paragraph */}
            <p className="text-brand-gray text-base sm:text-lg max-w-xl leading-relaxed">
              我們為企業量身打造數位基石，整合創意設計與數位行銷，助您在競爭激烈的市場中贏得目光、建立高溢價品牌信任、並創造實質的增長收益。
            </p>

            {/* Micro Tags pills row */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['網頁設計', '品牌識別', 'SEO 關鍵字', 'SEM 廣告投放', '電商架站', '短影音行銷'].map((tag, idx) => (
                <span 
                  key={idx} 
                  className="text-xs font-bold text-brand-charcoal bg-brand-cream-dark px-3 py-1 rounded-md border border-brand-charcoal/5 font-sans"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Call to Actions buttons row */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:items-center">
              <button
                type="button"
                onClick={openQuoteModal}
                className="px-8 py-4 bg-brand-yellow text-brand-charcoal font-bold text-sm tracking-wider rounded-xl hover:bg-brand-yellow/98 hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2 shadow-sm"
              >
                <span>立即諮詢專案</span>
                <ChevronRight size={16} />
              </button>
              
              <button
                type="button"
                onClick={() => setCurrentPage('cases')}
                className="px-8 py-4 bg-white text-brand-charcoal font-bold text-sm tracking-wider rounded-xl hover:bg-brand-cream-dark border border-brand-charcoal/10 transition-all flex items-center justify-center space-x-2"
              >
                <span>精選品牌案例</span>
              </button>
            </div>
          </div>

          {/* Right Visual Image Block - matching image_0 */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backing decorative frame shadow */}
              <div className="absolute inset-0 bg-brand-slate/10 rounded-3xl transform rotate-3 translate-x-1.5 translate-y-1.5 -z-10" />

              {/* Main Visual box containing a premium modern gradient dashboard */}
              <div className="overflow-hidden bg-brand-slate text-white aspect-[4/3] rounded-3xl shadow-xl border-4 border-white relative flex flex-col p-6 select-none">
                
                {/* Header controls layout simulation */}
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                  <div className="flex space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-[10px] font-mono tracking-wider text-white/40">
                    MORCEPT_AI_ANALYTICS_V4
                  </div>
                </div>

                {/* Ambient dynamic graphic content */}
                <div className="flex-1 flex flex-col justify-between py-2">
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs text-white/60 tracking-tight font-sans">月均自然曝光強度 (Organic Strength)</span>
                      <span className="text-xs font-mono font-bold text-brand-yellow">+284.5%</span>
                    </div>
                    {/* Simulated elegant bar charts */}
                    <div className="h-20 flex items-end space-x-2.5 pt-3">
                      {[32, 45, 18, 55, 78, 42, 60, 95, 82, 110].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end h-full">
                          <div 
                            style={{ height: `${h}%` }} 
                            className={`w-full rounded-t-sm transition-all duration-1000 ${i === 7 ? 'bg-brand-yellow' : i > 7 ? 'bg-brand-yellow/80' : 'bg-white/30'}`} 
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlight card info bubble overlay */}
                  <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 flex justify-between items-center mt-3">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-lg bg-brand-yellow flex items-center justify-center text-brand-slate">
                        <Star size={16} className="fill-brand-slate" />
                      </div>
                      <div className="text-left">
                        <div className="text-[10px] text-white/50 tracking-wide">Brand Authority Score</div>
                        <div className="text-xs font-bold font-display text-white">市場心智領先指標</div>
                      </div>
                    </div>
                    <span className="text-sm font-mono font-bold text-brand-yellow">A+ Grade</span>
                  </div>
                </div>

                {/* Small overlay capsule */}
                <div className="absolute top-6 right-6 bg-brand-yellow text-brand-charcoal text-[9px] font-mono font-bold py-1 px-2.5 rounded-md uppercase tracking-wider shadow">
                  Live ROI Tracking
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

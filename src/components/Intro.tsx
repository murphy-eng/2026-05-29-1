/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Play, Pause, Disc, ArrowUpRight, Award, Compass, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function Intro() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="py-20 bg-white border-b border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text & Stats Column */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-yellow">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-charcoal tracking-tight">
              我們是誰？
              <br className="hidden sm:inline" />
              整合思維的創意夥伴
            </h2>
            <p className="text-brand-gray text-base leading-relaxed">
              <strong>默聲設計 (Morsign) </strong>
              不只是幫您做精美圖面的設計公司，更是與您並肩作戰、帶動商業成長的策略顧問。我們深信，缺乏商業思維的設計只是單純的擺設；而缺乏美感與使用體驗的策略，則難以深入顧客心坎。我們的核心任務是用有效的品牌定位、極致網站體驗與數據行銷，為品牌注入永續增值的戰鬥力。
            </p>

            {/* Stats list - matching image_0 spacing */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              
              {/* Stat Card 1 */}
              <div className="p-5 rounded-2xl bg-brand-cream border border-brand-charcoal/5 flex flex-col space-y-2 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-lg bg-brand-charcoal text-brand-yellow flex items-center justify-center">
                  <Award size={16} />
                </div>
                <div>
                  <div className="text-2xl font-black text-brand-charcoal font-display">8年+</div>
                  <div className="text-[11px] text-brand-gray tracking-tight leading-normal mt-1">品牌與行銷深耕經驗</div>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="p-5 rounded-2xl bg-brand-cream border border-brand-charcoal/5 flex flex-col space-y-2 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-lg bg-brand-charcoal text-brand-yellow flex items-center justify-center">
                  <Compass size={16} />
                </div>
                <div>
                  <div className="text-2xl font-black text-brand-charcoal font-display font-sans">5 據點</div>
                  <div className="text-[11px] text-brand-gray tracking-tight leading-normal mt-1">台北・桃園・東京核心布局</div>
                </div>
              </div>

              {/* Stat Card 3 */}
              <div className="p-5 rounded-2xl bg-brand-cream border border-brand-charcoal/5 flex flex-col space-y-2 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-lg bg-brand-charcoal text-brand-yellow flex items-center justify-center">
                  <Users size={16} />
                </div>
                <div>
                  <div className="text-2xl font-black text-brand-charcoal font-display">500+</div>
                  <div className="text-[11px] text-brand-gray tracking-tight leading-normal mt-1">跨國與本土交付專案</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Sleek Audio/Console Mock Interface */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              
              {/* Decorative side accent blur */}
              <div className="absolute top-12 left-1/4 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl -z-10" />

              {/* Smartphone or display frame mockup */}
              <div className="bg-brand-charcoal text-white rounded-[32px] p-6 shadow-2xl border-8 border-brand-slate relative overflow-hidden flex flex-col space-y-6 aspect-[4/5] justify-between">
                
                {/* Audio mock header status */}
                <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-white/40 border-b border-white/5 pb-3">
                  <span>MORSIGN SYSTEM 9.0</span>
                  <span className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-ping" />
                    <span>AUDIO_CORE_PLAYING</span>
                  </span>
                </div>

                {/* Rotating Vinyl Graphic Simulator */}
                <div className="flex-1 flex flex-col items-center justify-center py-4 space-y-5">
                  <div className="relative">
                    {/* Outer glow aura */}
                    <div className="absolute inset-[-10px] rounded-full bg-brand-yellow/5 border border-brand-yellow/10 animate-pulse" />
                    <motion.div 
                      animate={isPlaying ? { rotate: 360 } : {}}
                      transition={{ repeat: Infinity, ease: 'linear', duration: 15 }}
                      className="w-36 h-36 rounded-full bg-slate-900 border-4 border-brand-slate flex items-center justify-center relative shadow-xl"
                    >
                      {/* Groove lines on simulated record */}
                      <div className="absolute inset-3 border border-white/5 rounded-full" />
                      <div className="absolute inset-8 border border-white/5 rounded-full" />
                      <div className="absolute inset-12 border border-white/10 rounded-full" />
                      
                      {/* Gold core label */}
                      <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center text-brand-charcoal font-black text-[10px] font-display">
                        CIS
                      </div>
                    </motion.div>
                  </div>

                  {/* Track information label */}
                  <div className="text-center">
                    <h3 className="text-sm font-bold text-white tracking-tight">01. 品牌策略・靈魂共振</h3>
                    <p className="text-[10px] text-brand-yellow font-mono tracking-normal leading-normal mt-1.5">
                      "Make Your Identity Audibly Clear" — 2026 Edition
                    </p>
                  </div>
                </div>

                {/* Interactive Play Controls */}
                <div className="bg-brand-slate px-4 py-3.5 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-mono text-white/50 uppercase tracking-widest">目前狀態</span>
                    <span className="text-xs font-bold text-white font-sans mt-0.5">
                      {isPlaying ? '定位音律播放中...' : '音律暫停中'}
                    </span>
                  </div>

                  {/* Play & Pause Trigger Buttons */}
                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-10 h-10 rounded-xl bg-brand-yellow hover:bg-brand-yellow/90 text-brand-charcoal flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                    >
                      {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} className="ml-0.5" fill="currentColor" />}
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

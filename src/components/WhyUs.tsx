/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, MapPin, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyUs() {
  const points = [
    {
      num: '01',
      title: '全方位一站式整合',
      desc: '徹底消弭跨部門與外包團隊溝通斷層，確保品牌從核心定位 ➔ 視覺設計 ➔ 程式開發 ➔ 日常營運與數據推廣的完美高精準貫穿。',
    },
    {
      num: '02',
      title: '台日雙市場專案經驗',
      desc: '團隊擁有多名精通日語與日本商業邏輯的資深規劃師與開發隊友。協助無數企業在台灣深耕、乃至日本展開拓荒行銷與在地化運維。',
    },
    {
      num: '03',
      title: '專屬窗口責任制',
      desc: '拒絕外行客服或層層轉達。專案統一指派技術背景或大廠行銷出身的專責經理，全權負責進度推動、有問必答、隨時回報進展。',
    },
    {
      num: '04',
      title: '8年專注商業實效',
      desc: '我們拒絕花哨無用的炫技。設計與編碼一律立足於「幫客戶提昇客單價、擴增自然流量、拉高付費廣告獲客 ROI」的核心目標運作。',
    },
  ];

  return (
    <section className="py-20 bg-brand-cream border-b border-brand-charcoal/5 text-left overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section text */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-yellow">
            Our Competitive Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-charcoal tracking-tight mt-2">
            為什麼選擇 默聲？
          </h2>
          <p className="text-brand-gray text-xs sm:text-sm mt-3 leading-relaxed">
            我們以前瞻格局與頂級手工藝，在混亂與削價競爭的數位浪潮中，為追求極致品質的品牌指明方向。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Cards Grid (4 bullet points) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((pt, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-white border border-brand-charcoal/5 hover:translate-y-[-2px] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Number Header */}
                  <div className="text-3xl font-black font-mono text-brand-yellow/30 tracking-wider">
                    {pt.num}
                  </div>
                  
                  {/* Focus Header */}
                  <h3 className="text-sm font-bold text-brand-charcoal tracking-tight mt-3">
                    {pt.title}
                  </h3>
                  
                  {/* Description text */}
                  <p className="text-[11px] text-brand-gray mt-2 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Vector Graphic Map block */}
          <div className="lg:col-span-5 relative">
            <div className="bg-brand-cream-dark p-6 rounded-3xl border border-brand-charcoal/5 shadow-inner flex flex-col justify-between aspect-[4/3] relative overflow-hidden">
              
              {/* Soft decorative background compass grid representation */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
                <svg width="100%" height="100%">
                  <circle cx="50%" cy="50%" r="40%" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                  <circle cx="50%" cy="50%" r="25%" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                  <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="1" />
                  <line x1="50%" y1="0" x2="50%" y2="100%" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>

              {/* Taiwan & Japan coordinates and mapping connector simulation */}
              <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-[#B0B4AC] border-b border-brand-charcoal/5 pb-3">
                <span>CROSS-BORDER MATRIX</span>
                <span>TAIWAN & JAPAN ACTIVE</span>
              </div>

              {/* Graphical nodes map connector mockup - custom CSS render of the East Asia map coordinates */}
              <div className="flex-1 flex items-center justify-center relative py-6">
                
                {/* Taiwan Point */}
                <div className="absolute bottom-[20%] left-[25%] flex flex-col items-center">
                  <div className="relative">
                    <span className="absolute inset-[-6px] rounded-full bg-brand-yellow/30 animate-ping" />
                    <div className="w-3.5 h-3.5 rounded-full bg-brand-charcoal border-2 border-brand-yellow flex items-center justify-center relative z-10 shadow" />
                  </div>
                  <div className="bg-brand-charcoal text-brand-yellow text-[9px] font-mono leading-none py-1 px-1.5 rounded mt-2 uppercase font-bold tracking-wider shadow">
                    Taiwan (HQ-台北/桃園)
                  </div>
                </div>

                {/* Simulated connecting path dots curve */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M 120, 180 Q 200, 110 260, 60" 
                    fill="none" 
                    stroke="var(--color-brand-yellow)" 
                    strokeWidth="2" 
                    strokeDasharray="4 4" 
                    className="animate-[dash_2s_linear_infinite]"
                  />
                </svg>

                {/* Japan Point */}
                <div className="absolute top-[18%] right-[22%] flex flex-col items-center">
                  <div className="relative">
                    <span className="absolute inset-[-6px] rounded-full bg-[#E6B822]/30 animate-pulse" />
                    <div className="w-3 h-3 rounded-full bg-brand-charcoal border-2 border-brand-yellow flex items-center justify-center relative z-10 shadow" />
                  </div>
                  <div className="bg-brand-charcoal font-sans text-white text-[9px] leading-none py-1 px-1.5 rounded mt-2 font-bold tracking-wider shadow flex items-center gap-1">
                    <MapPin size={9} className="text-brand-yellow shrink-0" />
                    <span>Japan (東京-板橋)</span>
                  </div>
                </div>

                {/* Coordinate label overlay */}
                <div className="absolute top-[48%] left-[45%] bg-white/70 backdrop-blur px-3 py-1.5 rounded-lg border border-brand-charcoal/5 text-[9px] font-mono text-brand-gray text-center leading-normal shadow-sm">
                  <div className="font-bold text-brand-charcoal">台日跨國通訊陣列</div>
                  <div>Ping Latency ~ 28ms</div>
                </div>

              </div>

              {/* Bottom tag statement */}
              <div className="bg-brand-charcoal text-brand-yellow text-[10px] py-1.5 px-3 rounded-xl uppercase tracking-wider font-mono font-bold flex items-center justify-between shadow-sm">
                <span>跨國伺服部署維護與語系合規</span>
                <Navigation size={12} className="rotate-45" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

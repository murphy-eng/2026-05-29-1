/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { HelpCircle, Sparkles, Send, LineChart, Cpu, CalendarClock } from 'lucide-react';

export default function Process() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const steps = [
    {
      idx: '01',
      title: '了解需求',
      subtitle: '需求訪談與對焦',
      icon: <HelpCircle className="w-5 h-5" />,
      desc: '首次點對點訪談，詳細梳理您的商業邏輯、定位盲區，與目標預算對焦。',
    },
    {
      idx: '02',
      title: '策略規劃',
      subtitle: '競品分析與定位',
      icon: <Sparkles className="w-5 h-5" />,
      desc: '深入產業情報與大數據監測，找出具備最高溢價與自然流量的突圍點。',
    },
    {
      idx: '03',
      title: '設計研發',
      subtitle: '視覺與結構初稿',
      icon: <Cpu className="w-5 h-5" />,
      desc: '展開高規格展示板, CIS 標誌幾何推衍與動態 UI 網頁交互。',
    },
    {
      idx: '04',
      title: '進度上線',
      subtitle: '開發測試與上線',
      icon: <Send className="w-5 h-5" />,
      desc: '程式編寫、載入速度最佳底層壓縮、雲端防火牆架設，進行沙盒測試後上線。',
    },
    {
      idx: '05',
      title: '數據校正',
      subtitle: '數據追蹤與修正',
      icon: <LineChart className="w-5 h-5" />,
      desc: '部署 Google Analytics & 關鍵字監測漏斗，即時校正點擊行為與轉化阻力。',
    },
    {
      idx: '06',
      title: '持續優化',
      subtitle: '流量監測與拓展',
      icon: <CalendarClock className="w-5 h-5" />,
      desc: '配合節日策創品牌推廣、SEO 文案代筆以及定期主機與資安防護檢查。',
    },
  ];

  return (
    <section className="py-20 bg-brand-cream-dark border-b border-brand-charcoal/5 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title block */}
        <div className="max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-yellow">
            Service Blueprint & Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-charcoal tracking-tight mt-2">
            專業服務流程
          </h2>
          <p className="text-brand-gray text-xs sm:text-sm mt-3 leading-relaxed">
            我們拒绝对外行客戶封閉黑箱作業。我們將整個企劃拆分為六大精準節點，提供透明、清晰的合作成果交付標準。
          </p>
        </div>

        {/* Stepper Grid - matching step circles connect design */}
        <div className="relative">
          {/* Connecting line behind circles */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-brand-charcoal/5 -translate-y-8 hidden lg:block z-0" />

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((item, id) => {
              const isHovered = hoveredIdx === id;
              return (
                <div 
                  key={item.idx}
                  onMouseEnter={() => setHoveredIdx(id)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="flex flex-col items-center group cursor-default"
                >
                  {/* Step Cycle Number & Node */}
                  <div className={`w-16 h-16 rounded-full flex flex-col items-center justify-center border-2 transition-all duration-300 relative ${isHovered ? 'bg-brand-yellow text-brand-charcoal border-brand-charcoal shadow-md scale-105' : 'bg-white text-brand-charcoal border-brand-charcoal/10'}`}>
                    <span className="text-[10px] font-mono leading-none tracking-normal font-black mb-1">
                      {item.idx}
                    </span>
                    <div className="opacity-90 scale-90">
                      {item.icon}
                    </div>

                    {/* Glowing outer boundary circle when hovered */}
                    {isHovered && (
                      <span className="absolute inset-[-4px] rounded-full border border-brand-yellow/30 animate-pulse pointer-events-none" />
                    )}
                  </div>

                  {/* Step Metadata Title */}
                  <h4 className="text-sm font-black text-brand-charcoal mt-4 group-hover:text-brand-yellow transition-colors tracking-tight">
                    {item.title}
                  </h4>
                  <span className="text-[10px] text-brand-gray font-mono font-bold mt-1">
                    {item.subtitle}
                  </span>

                  {/* Micro Popup details */}
                  <div className="mt-3 bg-white p-3.5 rounded-xl border border-brand-charcoal/5 shadow-sm text-left max-w-[200px] text-[10px] text-brand-gray leading-relaxed hidden lg:block opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all pointer-events-none duration-250">
                    {item.desc}
                  </div>
                  
                  {/* Mobile details always showing underneath */}
                  <p className="text-[10px] text-brand-gray leading-relaxed mt-2 text-center max-w-[130px] block lg:hidden font-sans">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

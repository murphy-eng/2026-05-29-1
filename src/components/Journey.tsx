/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Target, Palette, Box, Laptop, Megaphone, Terminal, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Journey() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: '品牌定位',
      desc: '深入訪談與競品分析，找出最突出的核心競爭優勢與核心故事。',
      longDesc: '我們與創辦團隊共同召開工作坊，剖析品牌DNA，界定核心受眾。定義具有溢價潛力的商業利基，並輸出品牌戰略白皮書。',
      icon: <Target className="w-5 h-5" />,
    },
    {
      id: 2,
      title: '品牌設計',
      desc: '重新詮釋商標、色彩體系，確立風格一致的客製化 CIS 識別規範。',
      longDesc: '跳脫呆板的圖形，結合前瞻幾何規律與大器排版，將核心價值轉化為極致觸感。包含名片、包裝、字體延伸至商標授權全套規範。',
      icon: <Palette className="w-5 h-5" />,
    },
    {
      id: 3,
      title: '體驗設計',
      desc: '全端規劃原型 (Wireframe & Prototype) 確保流暢的介面操作動線。',
      longDesc: '分析使用者點擊習慣與心智模型，設計令人驚豔的現代網頁動效。保證客戶從進入首頁到完成詢價、結帳，每一步都合乎直覺。',
      icon: <Box className="w-5 h-5" />,
    },
    {
      id: 4,
      title: '官網建置',
      desc: '高性能前端程式切切、後台結合，實現極致載入速度與防滲透保護。',
      longDesc: '使用符合國際最新資安規範之架構與代碼優化。保證首頁加載速度低於 1 秒內，且具备黑客 CC 攻擊之全球節點防火牆彈性負載。',
      icon: <Laptop className="w-5 h-5" />,
    },
    {
      id: 5,
      title: '整合行銷',
      desc: 'SEO排版優化與精準SEM關鍵字投放，拉高自然與付費獲客精確度。',
      longDesc: '以「白帽長效自然流量」作為基底，搭配 ROI 點對點廣告漏斗與當前最爆款「短影音企劃」，實現有轉化、有對話、不盲目的流量洪流。',
      icon: <Megaphone className="w-5 h-5" />,
    },
    {
      id: 6,
      title: '日常營運',
      desc: '節慶行銷檔期策劃與流量監測，保障網站運行與長期商業效益再發酵。',
      longDesc: '提供 7x24 小時資安通報與日常資料安全備份。配合年度大節日策劃吸睛促銷，定期产出關鍵字效果健檢報告，讓平台歷久彌新。',
      icon: <Terminal className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-20 bg-brand-cream-dark border-b border-brand-charcoal/5 relative overflow-hidden">
      
      {/* Design accents backdrop */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-brand-charcoal/10 -translate-y-12 hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading header block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-yellow">
            Project Lifecycle Progress
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-charcoal tracking-tight mt-3">
            從品牌定位到日常營運，我們全程參與
          </h2>
          <p className="text-brand-gray text-xs sm:text-sm mt-3 leading-relaxed">
            透過標準化的六大進程，確保品牌在每一個數字接觸點都能展現極致精準的商業價值，徹底達成預期轉換目標。
          </p>
        </div>

        {/* Pipeline horizontal row nodes */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-4 relative z-10 mb-12">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div 
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left cursor-pointer transition-all ${isActive ? 'bg-brand-charcoal text-brand-yellow border-brand-charcoal shadow-lg -translate-y-1' : 'bg-white text-brand-charcoal hover:bg-brand-cream border-brand-charcoal/5 hover:translate-y-[-2px]'}`}
              >
                {/* Number & Icon node */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono font-black px-2 py-0.5 rounded ${isActive ? 'bg-brand-yellow text-brand-charcoal' : 'bg-brand-cream-dark text-brand-gray'}`}>
                    0{step.id}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isActive ? 'bg-brand-yellow text-brand-charcoal' : 'bg-brand-cream-dark text-brand-gray/80'}`}>
                    {step.icon}
                  </div>
                </div>

                {/* Short Title */}
                <h4 className="text-sm font-bold tracking-tight">{step.title}</h4>
                
                {/* Minimal preview description text */}
                <p className={`text-[10px] mt-1.5 leading-relaxed line-clamp-2 ${isActive ? 'text-brand-yellow-light/80' : 'text-brand-gray'}`}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Card with animations */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-brand-charcoal text-white rounded-3xl p-6 md:p-10 border border-white/5 shadow-xl text-left relative overflow-hidden"
          >
            {/* Soft decorative visual background coordinates */}
            <div className="absolute top-6 right-6 font-mono text-white/5 text-5xl md:text-8xl select-none font-bold">
              PHASE_0{activeStep + 1}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
              
              {/* Step indicator left Column */}
              <div className="md:col-span-8 space-y-4">
                <div className="flex items-center space-x-3 text-brand-yellow">
                  <CheckCircle2 size={20} className="stroke-[2.5]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    細部分流與輸出成果 Deliverables
                  </span>
                </div>
                
                <h3 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
                  <span>0{steps[activeStep].id}. {steps[activeStep].title}</span>
                  <span className="text-xs font-normal text-brand-yellow bg-white/10 px-2 py-0.5 rounded font-mono">ACTIVE_PHASE</span>
                </h3>

                <p className="text-sm text-brand-yellow-light/95 leading-relaxed max-w-2xl font-sans">
                  {steps[activeStep].longDesc}
                </p>
              </div>

              {/* Quick CTA right column inside box */}
              <div className="md:col-span-4 flex justify-end">
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl w-full max-w-xs text-left">
                  <div className="text-[10px] font-mono text-white/40 tracking-wider">MORSIGN ASSURANCE</div>
                  <div className="text-xs font-bold text-white mt-1.5">100% 流程透明與節點點驗</div>
                  <p className="text-[10px] text-white/50 mt-1 leading-relaxed">
                    我們提供雲端專案追蹤看板，客戶隨時可檢視進度，拒絕封閉作業與合約外惡意追加。
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

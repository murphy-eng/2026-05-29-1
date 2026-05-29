/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Shield, Sparkles, Globe, ShoppingBag, Landmark, ArrowRight, HeartHandshake, Film, Play, BookOpen, MessageSquare, Briefcase, Calendar, Clock, Terminal, Check, Monitor, Search, Lock, Cpu, Zap, ChevronDown, ChevronUp, Eye, ShieldCheck, TrendingUp } from 'lucide-react';
import { ARTICLES } from '../data';
import { PageId, Article } from '../types';

interface SubPagesProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openQuoteModal: () => void;
}

export default function SubPages({ currentPage, setCurrentPage, activeTab, setActiveTab, openQuoteModal }: SubPagesProps) {
  // 1. WEB DESIGN SUBPAGE
  function WebDesignSub() {
    const [currentStep, setCurrentStep] = useState<number>(1); // Step 02 highlighted initially as requested
    const [faqOpen, setFaqOpen] = useState<number[]>([0]); // First FAQ open by default

    const toggleFaq = (idx: number) => {
      setFaqOpen(prev => 
        prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
      );
    };

    const workflowSteps = [
      {
        num: "01",
        title: "需求探索",
        desc: "了解品牌定位與受眾。",
        detailedDesc: "深入訪談企業願景、品牌痛點與商業模式，確定核心流量來源、分析競爭者架構，並精準鎖定受眾偏好與網站轉換死角。"
      },
      {
        num: "02",
        title: "策略確定",
        desc: "確認設計方向與時程。",
        detailedDesc: "確立資訊架構 (Sitemap)、網頁基礎骨架規劃線框圖 (Wireframe) 與視覺情緒板 (Moodboard)，確認里程碑與專案最終交付時限。"
      },
      {
        num: "03",
        title: "設計執行",
        desc: "品質設計與客戶確認。",
        detailedDesc: "量身定做客製 UI 概念精緻設計，烘托卓越品牌力；加入優雅精緻的微動態與排版美學交互反饋，讓每一次點擊都有極致反饋。"
      },
      {
        num: "04",
        title: "內容上架",
        desc: "功能測試與文章導入。",
        detailedDesc: "全站前端 RWD 響應式佈局代碼與高流暢度加載優化，後台管理系統 CMS 架設串接，全面填補企業介紹文案與動態作品。"
      },
      {
        num: "05",
        title: "結果交付",
        desc: "線上交付與維護說明。",
        detailedDesc: "部署至專屬高速雲端伺服器，埋設 GA4 追蹤代碼與完整的基礎白帽 SEO 骨架，進行 1 對 1 操作訓練說明，提供首年安全常規補丁防護。"
      }
    ];

    const faqData = [
      {
        question: "網站完成後，我能自己修改內容嗎？",
        answer: "是的，完全可以。我們所有的網站方案皆包含最現代、直覺的自定義後台管理系統（CMS），並附贈 1 小時的一對一線上視訊教育訓練。您可以隨時輕鬆更新、新增或刪除公司的最新消息、產品項目、部落格文章、行銷圖片與聯絡文字，不需要任何編程或工程背景。"
      },
      {
        question: "網站製作需要多長時間？",
        answer: "主要取決於您選用的方案複雜度與素材預備進度。一般一頁式 / Landing Page 方案在文案完備下約需 10-14 個工作日；最受歡迎的企業官網多頁方案（包含自訂後台 CMS 與追蹤代碼）通常需要約 4-6 週；若為高規格大型電商購物平台，則需要約 6-8 週的時間進行設計與金物流串接開發。"
      },
      {
        question: "費用包含首年主機與網域嗎？",
        answer: "是的。所有方案的費用皆已包含「首年」高速安全雲端主機代管服務（配備 SSL 安全性加密憑證、多區域點 CDN 網路提速與自動每日雲端備份）以及頂級國際專屬網域。從第二年起，主機與網域之續費租賃將會以完全透明的實報實銷形式供您續約，我們絕無任何惡意追加費或綑綁定價。"
      },
      {
        question: "如果你們在台北，我們在南部可以合作嗎？",
        answer: "完全可以。我們的服務與指標客戶涵蓋全台灣甚至跨國市場。團隊已建立起非常成熟的線上工作與溝通模式，主要透過 Google Meet 視訊或 Slack 進行高效率的即時線上討論，並搭配專案時程看板控管。我們會主動在各階段回報當前開發進度，您可以實時線上驗收網頁，體驗甚至比在同一個辦公室還要順暢、透明。"
      }
    ];

    return (
      <div className="space-y-24 py-12 text-left">
        {/* Top Header info */}
        <div className="border-b border-brand-charcoal/10 pb-8">
          <span className="text-[10px] font-mono font-bold bg-brand-charcoal text-brand-yellow px-3 py-1 rounded-md">
            CORE_ENGINE // WEB_EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-charcoal mt-4 tracking-tight font-display">
            網頁設計與開發服務
          </h2>
          <p className="text-sm text-brand-gray mt-2 leading-relaxed max-w-2xl font-sans">
            我們拒絕對照套版，承諾為注重質感的精銳品牌提供 RWD 響應式佈局、直覺自訂 CMS、極速安全與最佳轉化率的一站式高端數位體驗。
          </p>
          
          {/* Internal sub tabs */}
          <div className="flex flex-wrap gap-2 mt-6">
            {[
              { id: 'overview', name: '方案與核心價值' },
              { id: 'ecommerce', name: '電商與功能特色' },
              { id: 'pricing', name: '價格與方案明細' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs font-bold px-4 py-2.5 rounded-xl border transition-all duration-300 ${activeTab === tab.id ? 'bg-brand-charcoal text-brand-yellow border-brand-charcoal shadow-sm' : 'bg-white text-brand-gray hover:bg-brand-cream-dark border-brand-charcoal/5 hover:translate-y-[-1px]'}`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* --- MAIN CONTINUOUS PAGE (Renders for overview or pricing) --- */}
        {(activeTab === 'overview' || activeTab === 'pricing') && (
          <div className="space-y-24">
            
            {/* Section 1: Hero Subsection */}
            <div className="relative p-8 sm:p-12 md:p-16 rounded-[32px] bg-white border border-brand-charcoal/5 shadow-sm overflow-hidden flex flex-col items-center text-center space-y-6">
              {/* Background grid accents */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #151C31 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
              <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-yellow/10 blur-[80px] pointer-events-none" />
              
              <span className="text-xs font-mono font-bold tracking-widest text-brand-yellow uppercase bg-brand-yellow/10 px-3 py-1 rounded-full">
                WEB DESIGN SERVICES
              </span>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-brand-charcoal max-w-3xl leading-[1.12] tracking-tight font-display">
                打造具備品牌力與<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-yellow-hover font-extrabold" style={{ textShadow: '0 0 30px rgba(248, 203, 42, 0.2)' }}>轉換率</span>的數位體驗
              </h1>
              
              <p className="text-sm md:text-base text-brand-gray max-w-2xl leading-relaxed font-sans">
                不只是美觀。我們結合 RWD 響應式設計與商業邏輯，為您的品牌建立堅實的數位據點，讓每一位訪客都成為潛在客戶。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('pricing-grid');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3.5 bg-brand-yellow text-brand-charcoal hover:bg-brand-yellow-hover-hover font-bold text-xs tracking-wider rounded-xl transition-all shadow-md active:translate-y-0.5"
                >
                  查看方案內容
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('workflow-timeline');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3.5 bg-white border border-brand-charcoal hover:bg-brand-cream-dark text-brand-charcoal font-bold text-xs tracking-wider rounded-xl transition-all shadow-sm active:translate-y-0.5"
                >
                  深入了解流程
                </button>
              </div>
            </div>

            {/* Section 2: Core Features (網頁設計核心價值) */}
            <div className="space-y-12">
              <div className="text-center max-w-md mx-auto space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-brand-yellow bg-brand-yellow/10 px-2.5 py-0.5 rounded-full font-bold">
                  CORE VALUES
                </span>
                <h3 className="text-2xl font-black text-brand-charcoal tracking-tight font-display">
                  網頁設計核心價值
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "RWD 響應式佈局",
                    icon: <Monitor className="text-brand-yellow shrink-0" size={18} />,
                    desc: "確保網站在手機、平板、桌機都能呈現完美比例與最佳操作體驗。"
                  },
                  {
                    title: "SEO 搜尋優化友善",
                    icon: <Sparkles className="text-brand-yellow shrink-0" size={18} />,
                    desc: "內建搜尋引擎優化骨架，讓您的品牌更容易在 Google 搜尋結果中被發現。"
                  },
                  {
                    title: "SSL 高安全性保障",
                    icon: <Shield className="text-brand-yellow shrink-0" size={18} />,
                    desc: "全站採用 SSL 加密與安全防護機制，保護企業與客戶的資料傳輸安全。"
                  },
                  {
                    title: "後台簡易管理",
                    icon: <Cpu className="text-brand-yellow shrink-0" size={18} />,
                    desc: "直覺式的內容管理系統，讓您無需工程背景也能輕鬆更新網站內容。"
                  }
                ].map((feat, idx) => (
                  <div key={idx} className="group p-6 bg-white border border-brand-charcoal/5 rounded-2xl hover:border-brand-yellow/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full hover:translate-y-[-2px]">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-charcoal flex items-center justify-center shadow-inner relative overflow-hidden group-hover:scale-105 transition-transform">
                        <div className="absolute inset-0 bg-white/2 pointer-events-none" />
                        {feat.icon}
                      </div>
                      <h4 className="text-base font-bold text-brand-charcoal tracking-tight">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-brand-gray leading-relaxed font-sans">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Workflow Section (合作流程) */}
            <div id="workflow-timeline" className="space-y-12">
              <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 border-b border-brand-charcoal/5 pb-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-brand-yellow bg-brand-yellow/10 px-2.5 py-0.5 rounded-full font-bold uppercase">
                    Workflow
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-brand-charcoal tracking-tight font-display">
                    合作流程，清楚透明
                  </h3>
                </div>
                <div className="max-w-xs text-xs text-brand-gray md:text-right leading-relaxed font-sans">
                  每個案子都有清楚的時程與交付標準，你隨時知道目前進度在哪裡。
                </div>
              </div>

              {/* Timeline Horizontal / Vertical */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 relative">
                <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-brand-charcoal/5 -translate-y-1/2 hidden lg:block pointer-events-none z-0" />
                
                {workflowSteps.map((step, idx) => {
                  const isActive = idx === currentStep;
                  return (
                    <div 
                      key={idx}
                      onClick={() => setCurrentStep(idx)}
                      className={`relative z-10 cursor-pointer p-5 sm:p-6 rounded-2xl border transition-all duration-300 text-left flex flex-col justify-between aspect-auto min-h-[140px] ${
                        isActive 
                          ? 'bg-brand-charcoal text-white border-brand-yellow shadow-lg scale-102 ring-1 ring-brand-yellow/50' 
                          : 'bg-white text-brand-charcoal border-brand-charcoal/5 hover:border-brand-yellow/30 hover:bg-brand-cream/20'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span className={`text-2xl font-black font-mono tracking-tight ${isActive ? 'text-brand-yellow' : 'text-brand-charcoal/10'}`}>
                          {step.num}
                        </span>
                        {isActive && (
                          <span className="text-[9px] bg-brand-yellow text-brand-charcoal font-black rounded px-1.5 py-0.5 font-sans leading-none">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold tracking-tight mb-1">{step.title}</h4>
                        <p className={`text-[11px] leading-relaxed ${isActive ? 'text-gray-300' : 'text-brand-gray'}`}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Workflow Details explanation block */}
              <div className="p-6 sm:p-8 bg-brand-cream-dark rounded-2xl border border-brand-charcoal/5 relative overflow-hidden animate-fadeIn">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-yellow" />
                <h5 className="text-xs font-mono font-bold uppercase text-brand-yellow tracking-wider mb-2">
                  STEP {workflowSteps[currentStep].num} DESIGN LOGIC // {workflowSteps[currentStep].title} 詳解
                </h5>
                <p className="text-xs md:text-sm text-brand-charcoal leading-relaxed font-medium font-sans max-w-4xl">
                  {workflowSteps[currentStep].detailedDesc}
                </p>
              </div>
            </div>

            {/* Section 4: 服務方案與價格 (Dark Blue Background) */}
            <div id="pricing-grid" className="bg-brand-charcoal text-white rounded-[32px] p-6 sm:p-10 md:p-16 relative overflow-hidden ring-1 ring-white/5 shadow-2xl">
              {/* Glow spots */}
              <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-yellow/5 blur-[120px] pointer-events-none" />
              <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-brand-yellow/8 blur-[120px] pointer-events-none" />
              
              <div className="text-center max-w-md mx-auto space-y-3 mb-16 relative z-10">
                <span className="text-xs font-mono font-black tracking-widest text-brand-yellow uppercase bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  SERVICES AND PRICING
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight font-display">
                  服務方案與價格
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed max-w-xs mx-auto font-sans font-medium">
                  根據您的品牌規模與業務需求選擇最適合方案
                </p>
              </div>

              {/* Glowing Packages 3 Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 items-stretch">
                
                {/* Package 1: Single Page */}
                <div className="bg-white/3 border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between h-full hover:border-white/20 hover:bg-white/5 transition-all duration-300 relative group">
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold text-white tracking-tight">Single Page</h4>
                      <p className="text-xs text-gray-300/80 leading-relaxed font-sans">
                        適合新創品牌、單一產品推廣或活動 Landing Page。
                      </p>
                    </div>

                    <div className="pt-2">
                      <span className="text-2xl sm:text-3xl font-black font-display text-brand-yellow tracking-tight">
                        NT$ 25,000
                      </span>
                      <span className="text-xs text-gray-400 font-bold ml-1">起</span>
                    </div>

                    <div className="border-t border-white/5 pt-6 space-y-3">
                      {[
                        "一頁式 RWD 響應式設計",
                        "基礎 SEO 關鍵字設定",
                        "聯絡表單整合",
                        "交付期：約 10-14 個工作日"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-2.5 text-xs text-gray-200">
                          <Check size={14} className="text-brand-yellow shrink-0 mt-0.5" />
                          <span className="font-sans font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      type="button"
                      onClick={openQuoteModal}
                      className="w-full py-3 bg-white/5 hover:bg-white/10 text-white font-bold text-xs tracking-wider rounded-xl transition-all border border-white/10"
                    >
                      立即諮詢
                    </button>
                  </div>
                </div>

                {/* Package 2: Corporate Catalog (Most Popular) */}
                <div className="bg-white/5 border-2 border-brand-yellow p-6 sm:p-8 rounded-2xl flex flex-col justify-between h-full relative shadow-3xl hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: '0 10px 40px -10px rgba(248, 203, 42, 0.2)' }}>
                  {/* Popular badge */}
                  <div className="absolute top-0 right-6 -translate-y-1/2 bg-brand-yellow text-brand-charcoal font-black text-[9px] tracking-widest px-3 py-1 rounded-full uppercase shadow">
                    MOST POPULAR // 推薦
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold text-white tracking-tight">Corporate Catalog</h4>
                      <p className="text-xs text-gray-200/80 leading-relaxed font-sans">
                        最受企業歡迎，包含品牌介紹、服務項目、聯絡我們等完整架構。
                      </p>
                    </div>

                    <div className="pt-2">
                      <span className="text-2xl sm:text-3xl font-black font-display text-brand-yellow tracking-tight">
                        NT$ 60,000
                      </span>
                      <span className="text-xs text-gray-400 font-bold ml-1">起</span>
                    </div>

                    <div className="border-t border-white/10 pt-6 space-y-3">
                      {[
                        "完整多頁面規劃 (5-10 頁)",
                        "自定義後台管理系統",
                        "動態作品/文章發佈功能",
                        "Google Analytics 4 埋設",
                        "交付期：約 4-6 週"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-2.5 text-xs text-white">
                          <Check size={14} className="text-brand-yellow shrink-0 mt-0.5" />
                          <span className="font-sans font-bold">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      type="button"
                      onClick={openQuoteModal}
                      className="w-full py-3 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-charcoal font-black text-xs tracking-wider rounded-xl transition-all shadow-md hover:scale-[1.01]"
                    >
                      選擇此方案
                    </button>
                  </div>
                </div>

                {/* Package 3: E-commerce */}
                <div className="bg-white/3 border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between h-full hover:border-white/20 hover:bg-white/5 transition-all duration-300 relative group">
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold text-white tracking-tight">E-commerce</h4>
                      <p className="text-xs text-gray-300/80 leading-relaxed font-sans">
                        強大的電商功能，包含購物車、金流支付與庫存管理系統。
                      </p>
                    </div>

                    <div className="pt-2">
                      <span className="text-2xl sm:text-3xl font-black font-display text-brand-yellow tracking-tight">
                        NT$ 120,000
                      </span>
                      <span className="text-xs text-gray-400 font-bold ml-1">起</span>
                    </div>

                    <div className="border-t border-white/5 pt-6 space-y-3">
                      {[
                        "購物商城全功能串接",
                        "第三方金流、物流串接",
                        "會員系統與折扣代碼",
                        "支援多國幣別與語言",
                        "交付期：專案評估"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-2.5 text-xs text-gray-200">
                          <Check size={14} className="text-brand-yellow shrink-0 mt-0.5" />
                          <span className="font-sans font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      type="button"
                      onClick={openQuoteModal}
                      className="w-full py-3 bg-white/5 hover:bg-white/10 text-white font-bold text-xs tracking-wider rounded-xl transition-all border border-white/10"
                    >
                      客製化評估
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Section 5: FAQ Section (常見問題解答) */}
            <div className="space-y-12">
              <div className="text-center max-w-sm mx-auto space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-brand-yellow bg-brand-yellow/10 px-2.5 py-0.5 rounded-full font-bold uppercase">
                  FAQ
                </span>
                <h3 className="text-2xl font-black text-brand-charcoal tracking-tight font-display">
                  常見問題解答
                </h3>
              </div>

              <div className="max-w-3xl mx-auto space-y-4">
                {faqData.map((faq, idx) => {
                  const isOpen = faqOpen.includes(idx);
                  return (
                    <div 
                      key={idx} 
                      className="bg-white rounded-2xl border border-brand-charcoal/5 overflow-hidden transition-all duration-300 hover:border-brand-yellow/30"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                      >
                        <span className="text-sm font-bold text-brand-charcoal tracking-tight font-sans">
                          {faq.question}
                        </span>
                        <div className="p-1 rounded bg-brand-cream-dark text-brand-charcoal">
                          {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-brand-gray leading-relaxed font-sans font-normal border-t border-brand-charcoal/5 pt-4 animate-fadeIn">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section 6: Yellow CTA Banner (準備好讓您的品牌說話了嗎？) */}
            <div className="bg-brand-yellow text-brand-charcoal rounded-[32px] p-8 sm:p-12 md:p-14 relative overflow-hidden ring-1 ring-brand-yellow-hover shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-xl text-left">
                <h4 className="text-2xl sm:text-3xl font-black tracking-tight font-display">
                  準備好讓您的品牌說話了嗎？
                </h4>
                <p className="text-xs sm:text-sm text-brand-charcoal/90 font-medium font-sans">
                  預約 15 分鐘免費諮詢，我們幫你找出最適合的品牌方案。
                </p>
              </div>
              <button 
                type="button" 
                onClick={openQuoteModal} 
                className="px-6 py-4 bg-brand-charcoal text-brand-yellow font-bold text-xs tracking-wider rounded-xl hover:bg-brand-slate transition-all shrink-0 shadow-lg"
              >
                立即預約免費諮詢 →
              </button>
            </div>

          </div>
        )}

        {/* --- E-COMMERCE SPECIAL TAB (Kept for rich functionality) --- */}
        {activeTab === 'ecommerce' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fadeIn">
            {/* Text description */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-brand-charcoal tracking-tight font-display">
                極致高流暢、轉化率優先之電商系統
              </h3>
              
              <p className="text-xs text-brand-gray leading-relaxed font-sans">
                多數電商網站流失 40% 的交易，全因爲結帳過程太慢或付款彈窗干擾。默聲特別規劃「一頁快速結帳流」，完美整合 LINE Pay、Apple Pay、綠界串接以及伺服器端庫存拋接。
              </p>

              <div className="space-y-3">
                {[
                  '極致一秒載入速，點擊加載跳動流失率下降 60%',
                  '精緻美學版型，烘托高端精品、伴手禮產品的高貴感',
                  '完美的會員積點、折價券與節慶檔期策劃模塊',
                  '行動裝置(Mobile-first)單手滑動網宇極致支付體驗'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-brand-slate font-medium font-sans">
                    <Check size={14} className="text-brand-yellow shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button type="button" onClick={openQuoteModal} className="px-6 py-3.5 bg-brand-charcoal text-brand-yellow font-bold text-xs tracking-wider rounded-xl hover:bg-brand-slate transition-colors shadow">
                  開案諮詢購物站
                </button>
              </div>
            </div>

            {/* Simulated UI block */}
            <div className="bg-brand-cream-dark p-6 rounded-3xl border border-brand-charcoal/5 flex flex-col justify-between aspect-[4/3] relative overflow-hidden">
              <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-brand-gray font-bold">
                <span>CART_CONVERSION_BOOSTER</span>
                <span>STATUS: HIGH_CONVERSION</span>
              </div>
              
              <div className="flex-1 flex flex-col justify-center space-y-3.5">
                <div className="p-3 bg-white rounded-xl border border-brand-charcoal/5 flex justify-between items-center shadow-xs">
                  <span className="text-xs font-bold text-brand-charcoal font-sans">台灣蕎麥和風禮盒</span>
                  <span className="text-xs font-mono font-bold text-brand-yellow bg-brand-charcoal px-2 py-0.5 rounded">NT$ 820</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-brand-charcoal/5 text-left border-l-4 border-l-green-400 shadow-xs">
                  <div className="text-[9px] font-mono text-brand-gray uppercase font-bold">Smart checkout enabled</div>
                  <div className="text-xs font-bold text-brand-charcoal mt-1 font-sans">✓ LINE Pay / Apple Pay 整合完畢</div>
                </div>
              </div>

              <div className="bg-brand-charcoal p-3.5 rounded-2xl text-center text-brand-yellow text-xs font-bold shadow-sm cursor-pointer hover:bg-brand-slate transition-colors" onClick={openQuoteModal}>
                閃電付（一頁 3 秒無痛買單）➔
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // 2. BRAND CIS SUBPAGE
  function BrandCisSub() {
    const [brandFaqOpen, setBrandFaqOpen] = useState<number[]>([0]);

    const toggleBrandFaq = (idx: number) => {
      setBrandFaqOpen(prev => 
        prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
      );
    };

    return (
      <div className="space-y-24 py-12 text-left animate-fadeIn font-sans">
        
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold font-sans text-brand-yellow uppercase tracking-widest bg-brand-yellow/10 px-3.5 py-1.5 rounded-full inline-block">
              品牌識別服務
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-[44px] font-black text-brand-charcoal tracking-tight font-display leading-[1.15]" id="brand_hero_heading">
              讓你的品牌，<br className="hidden md:inline" />值得被記住
            </h1>
            <p className="text-xs sm:text-sm text-brand-gray leading-relaxed max-w-xl font-sans">
              我們相信好的設計不只是美觀，更是品牌靈魂的具象化。透過策略引導，為您的企業打造具備競爭力與記憶點的視覺系統。
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                type="button"
                onClick={openQuoteModal}
                className="px-8 py-3.5 bg-brand-yellow text-brand-charcoal hover:bg-brand-yellow/90 font-bold text-xs tracking-wider rounded-xl transition-all shadow-md active:translate-y-0.5 cursor-pointer"
                id="brand_cta_quote"
              >
                立即諮詢
              </button>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('brand_portfolio_section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3.5 bg-white border border-brand-charcoal/20 hover:bg-brand-cream-dark text-brand-charcoal font-bold text-xs tracking-wider rounded-xl transition-all shadow-sm active:translate-y-0.5 cursor-pointer"
              >
                精選案例
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Elegant Offset Collage Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="w-full aspect-square rounded-[24px] overflow-hidden bg-brand-cream-dark transition-transform hover:scale-[1.015] duration-500 shadow-sm border border-brand-charcoal/5">
                  <img 
                    src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?auto=format&fit=crop&q=80&w=600" 
                    alt="Packaging Box Mockup" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-brand-cream-dark transition-transform hover:scale-[1.015] duration-500 shadow-sm border border-brand-charcoal/5">
                  <img 
                    src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=600" 
                    alt="Brand Folder Setup" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-brand-cream-dark transition-transform hover:scale-[1.015] duration-500 shadow-sm border border-brand-charcoal/5">
                  <img 
                    src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=600" 
                    alt="Sage green Bottle packaging dropper" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-full aspect-square rounded-[24px] overflow-hidden bg-brand-cream-dark transition-transform hover:scale-[1.015] duration-500 shadow-sm border border-brand-charcoal/5">
                  <img 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600" 
                    alt="Isometric minimalist paper textures shadow" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* THREE BENEFIT CARDS SECTION (Light Blue Accent Box) */}
        <div className="bg-[#F3F6FC] rounded-[32px] p-8 md:p-12 border border-brand-charcoal/5 shadow-inner">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-[20px] shadow-sm hover:shadow-md transition-shadow flex flex-col items-start space-y-4 border border-brand-charcoal/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-yellow/30 group-hover:bg-brand-yellow transition-colors" />
              <div className="bg-brand-yellow/10 p-3 rounded-xl text-brand-charcoal">
                <Eye size={20} className="stroke-[2]" />
              </div>
              <h3 className="text-base font-bold text-brand-charcoal tracking-tight font-sans">
                讓品牌被記住
              </h3>
              <p className="text-xs text-brand-gray leading-relaxed font-sans mt-0.5">
                透過獨特且具有延展性的視覺符號，讓消費者在短時間內建立深刻的品牌聯想與記憶點。
              </p>
            </div>

            <div className="bg-white p-7 rounded-[20px] shadow-sm hover:shadow-md transition-shadow flex flex-col items-start space-y-4 border border-brand-charcoal/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-yellow/30 group-hover:bg-brand-yellow transition-colors" />
              <div className="bg-brand-yellow/10 p-3 rounded-xl text-brand-charcoal">
                <ShieldCheck size={20} className="stroke-[2]" />
              </div>
              <h3 className="text-base font-bold text-brand-charcoal tracking-tight font-sans">
                建立專業可信度
              </h3>
              <p className="text-xs text-brand-gray leading-relaxed font-sans mt-0.5">
                高品質的視覺溝通，是品牌與專業最直接的連結。我們協助您建立值得信賴的第一印象，縮短成交距離。
              </p>
            </div>

            <div className="bg-white p-7 rounded-[20px] shadow-sm hover:shadow-md transition-shadow flex flex-col items-start space-y-4 border border-brand-charcoal/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-yellow/30 group-hover:bg-brand-yellow transition-colors" />
              <div className="bg-brand-yellow/10 p-3 rounded-xl text-brand-charcoal">
                <TrendingUp size={20} className="stroke-[2]" />
              </div>
              <h3 className="text-base font-bold text-brand-charcoal tracking-tight font-sans">
                支撐長期品牌成長
              </h3>
              <p className="text-xs text-brand-gray leading-relaxed font-sans mt-0.5">
                不只是當下的美感，我們考量未來的擴充性，確保識別系統能隨著企業成長靈活應用於各種媒體。
              </p>
            </div>
          </div>
        </div>

        {/* TIMELINE SECTION */}
        <div className="space-y-12">
          <div className="text-center max-w-md mx-auto space-y-2">
            <h2 className="text-2xl md:text-3xl font-black text-brand-charcoal tracking-tight font-display text-center">
              完整的品牌識別進化旅程
            </h2>
            <div className="w-12 h-1 bg-brand-yellow mx-auto mt-3 rounded-full" />
          </div>

          <div className="space-y-8">
            
            {/* STAGE 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[24px] overflow-hidden bg-white border border-brand-charcoal/5 group hover:border-brand-yellow/20 hover:shadow-md transition-all">
              {/* Vertical Ribbon Left */}
              <div className="lg:col-span-2 bg-[#EEF2FC] p-6 lg:p-0 flex lg:flex-col justify-between items-center lg:justify-center lg:space-y-6 relative border-b lg:border-b-0 lg:border-r border-brand-charcoal/5">
                <div className="w-10 h-10 rounded-full bg-brand-yellow text-brand-charcoal font-black text-sm flex items-center justify-center shadow-sm">
                  01
                </div>
                <div className="font-display font-medium text-[10px] sm:text-xs text-brand-gray lg:rotate-90 origin-center whitespace-nowrap tracking-[0.2em] transform lg:py-6 uppercase">
                  STAGE ONE
                </div>
              </div>

              {/* Main Contents Middle */}
              <div className="lg:col-span-5 p-8 flex flex-col justify-between space-y-6 text-left">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-brand-yellow block font-sans">
                    LOGO設計（品牌起點）
                  </span>
                  <h3 className="text-xl font-bold text-brand-charcoal tracking-tight font-sans">
                    建立品牌第一印象
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      '品牌方向討論',
                      '3 種風格方向提案',
                      'LOGO 主標副標圖標',
                      '各式檔案格式交付'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700 font-sans font-medium">
                        <Check size={14} className="text-brand-yellow shrink-0 font-bold" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-brand-cream/40 rounded-xl border-l-4 border-l-brand-yellow text-xs text-brand-gray leading-relaxed font-sans">
                  完成後可升級CIS系統，確保視覺應用的高度一致。
                </div>
              </div>

              {/* Action image Right */}
              <div className="lg:col-span-5 h-[280px] lg:h-auto overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800" 
                  alt="Action sketch mockup drawing" 
                  className="w-full h-full object-cover group-hover:scale-[1.012] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* STAGE 2 (Alternating: Image Left -> Text Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[24px] overflow-hidden bg-white border border-brand-charcoal/5 group hover:border-brand-yellow/20 hover:shadow-md transition-all">
              {/* Action image Left */}
              <div className="lg:col-span-5 h-[280px] lg:h-auto overflow-hidden relative order-3 lg:order-1 col-span-1">
                <img 
                  src="https://images.unsplash.com/photo-1616628188506-4bd8d62af17e?auto=format&fit=crop&q=80&w=800" 
                  alt="Flatlay stationery design tools" 
                  className="w-full h-full object-cover group-hover:scale-[1.012] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Main Contents Middle */}
              <div className="lg:col-span-5 p-8 flex flex-col justify-center space-y-4 text-left order-2 lg:order-2 col-span-1">
                <span className="text-xs font-bold text-brand-yellow block font-sans">
                  CIS企業識別（系統建立）
                </span>
                <h3 className="text-xl font-bold text-brand-charcoal tracking-tight font-sans">
                  從LOGO延伸完整識別系統
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    '品牌色票字型規範',
                    '名片信封信紙設計',
                    '品牌使用規範手冊',
                    '數位印刷雙規格'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700 font-sans font-medium">
                      <Check size={14} className="text-brand-yellow shrink-0 font-bold" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vertical Ribbon Right */}
              <div className="lg:col-span-2 bg-[#F6F5F0] p-6 lg:p-0 flex lg:flex-col justify-between items-center lg:justify-center lg:space-y-6 relative border-b lg:border-b-0 lg:border-l border-brand-charcoal/5 order-1 lg:order-3">
                <div className="w-10 h-10 rounded-full bg-[#151C31] text-brand-yellow font-black text-sm flex items-center justify-center shadow-sm">
                  02
                </div>
                <div className="font-display font-medium text-[10px] sm:text-xs text-brand-gray lg:rotate-90 origin-center whitespace-nowrap tracking-[0.2em] transform lg:py-6 uppercase">
                  STAGE TWO
                </div>
              </div>
            </div>

            {/* STAGE 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[24px] overflow-hidden bg-white border border-brand-charcoal/5 group hover:border-brand-yellow/20 hover:shadow-md transition-all">
              {/* Vertical Ribbon Left */}
              <div className="lg:col-span-2 bg-[#151C31] p-6 lg:p-0 flex lg:flex-col justify-between items-center lg:justify-center lg:space-y-6 relative border-b lg:border-b-0 lg:border-r border-white/5">
                <div className="w-10 h-10 rounded-full bg-brand-yellow text-brand-charcoal font-black text-sm flex items-center justify-center shadow-sm">
                  03
                </div>
                <div className="font-display font-medium text-[10px] sm:text-xs text-gray-400 lg:rotate-90 origin-center whitespace-nowrap tracking-[0.2em] transform lg:py-6 uppercase">
                  STAGE THREE
                </div>
              </div>

              {/* Main Contents Middle */}
              <div className="lg:col-span-5 p-8 flex flex-col justify-between space-y-6 text-left">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-brand-yellow block font-sans">
                    品牌延伸應用（全面落地）
                  </span>
                  <h3 className="text-xl font-bold text-brand-charcoal tracking-tight font-sans">
                    讓品牌識別落地到每個接觸點
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      '包裝設計',
                      '環境空間識別',
                      '社群視覺模板',
                      '行銷物料設計'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700 font-sans font-medium">
                        <Check size={14} className="text-brand-yellow shrink-0 font-bold" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-brand-cream/40 rounded-xl border-l-4 border-l-brand-yellow text-xs text-brand-gray leading-relaxed font-sans">
                  搭配網頁設計方案，讓線上線下品牌質感無縫接軌。
                </div>
              </div>

              {/* Action image Right */}
              <div className="lg:col-span-5 h-[280px] lg:h-auto overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=800" 
                  alt="Packaging and smartphone presentation mockup" 
                  className="w-full h-full object-cover group-hover:scale-[1.012] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>

        {/* PORTFOLIO SECTION */}
        <div className="space-y-12" id="brand_portfolio_section">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-brand-charcoal/10 pb-6">
            <div className="space-y-2 text-left">
              <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#E6B822] uppercase bg-brand-yellow/15 px-2.5 py-1 rounded">
                PORTFOLIO
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-charcoal tracking-tight font-sans">
                精選品牌案例
              </h2>
            </div>
            <button
              onClick={() => setCurrentPage('cases')}
              className="text-xs sm:text-sm font-bold text-brand-charcoal hover:text-brand-yellow transition-all flex items-center space-x-1.5 shrink-0 group cursor-pointer"
            >
              <span>查看全部作品</span>
              <span className="group-hover:translate-x-1 transition-transform">➔</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case 1 */}
            <div className="group space-y-4 text-left">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-brand-cream-dark border border-brand-charcoal/5 shadow-sm relative">
                <img 
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=600" 
                  alt="L'Artiste Cafe" 
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-extrabold text-[#151C31] tracking-tight hover:text-brand-yellow transition-colors cursor-pointer" onClick={() => setCurrentPage('cases')}>
                  L'Artiste Cafe
                </h4>
                <p className="text-[11px] sm:text-xs text-brand-gray font-sans font-semibold">
                  CIS品牌識別 / 包裝設計
                </p>
              </div>
            </div>

            {/* Case 2 */}
            <div className="group space-y-4 text-left">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-brand-cream-dark border border-brand-charcoal/5 shadow-sm relative">
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600" 
                  alt="Nebula Tech" 
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-extrabold text-[#151C31] tracking-tight hover:text-brand-yellow transition-colors cursor-pointer" onClick={() => setCurrentPage('cases')}>
                  Nebula Tech
                </h4>
                <p className="text-[11px] sm:text-xs text-brand-gray font-sans font-semibold">
                  LOGO設計 / 數位介面規範
                </p>
              </div>
            </div>

            {/* Case 3 */}
            <div className="group space-y-4 text-left">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-brand-cream-dark border border-brand-charcoal/5 shadow-sm relative">
                <img 
                  src="https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&q=80&w=600" 
                  alt="Solid Architecture" 
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-extrabold text-[#151C31] tracking-tight hover:text-brand-yellow transition-colors cursor-pointer" onClick={() => setCurrentPage('cases')}>
                  Solid Architecture
                </h4>
                <p className="text-[11px] sm:text-xs text-brand-gray font-sans font-semibold">
                  CIS品牌識別 / 環境指標設計
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Brand FAQs Accordion Section */}
        <div className="space-y-12">
          <div className="text-center max-w-sm mx-auto space-y-2">
            <h3 className="text-2xl font-black text-brand-charcoal tracking-tight font-display text-center">
              關於品牌設計的常見問題
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'LOGO和CIS有什麼差別？',
                answer: 'LOGO（商標）是品牌最核心的視覺符號，像是一個人的臉；而 CIS（企業識別系統）則是一整套完整的視覺規範與延伸，包含品牌的主輔色、標準字、名片、包裝、甚至是實體空間的視覺感受，它能確保品牌在各種場合下的一致性，就像是一個人整體的穿搭風格與談吐。'
              },
              {
                question: '一定要三個階段都做嗎？',
                answer: '不一定。您可以根據目前的企業發展階段來彈性調整。新創或小規模組織可先從第一階段（LOGO 設計）出發，隨著業務擴張再逐步升級到第二、第三階段。如果是具有規模的傳產轉型或中大型企業，我們則強烈建議進行一站式的完整 CIS 規劃，以最高效率建立強大的品牌資產。'
              },
              {
                question: '可以先做LOGO之後再做CIS嗎？',
                answer: '完全可以！我們提供極具彈性的升級服務。在首期 LOGO 交付完畢後，我们会保留您的核心設計細節。當未來您的業務需要延伸名片、包裝、甚至是網站等更全面的應用時，我們可無痛接軌升級，並補足後續的視覺規範，不會產生重複收費或定位不對稱的問題。'
              }
            ].map((faq, idx) => {
              const isOpen = brandFaqOpen.includes(idx);
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl border border-brand-charcoal/5 overflow-hidden transition-all duration-300 hover:border-brand-yellow/30"
                >
                  <button
                    type="button"
                    onClick={() => toggleBrandFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-sm font-bold text-brand-charcoal tracking-tight font-sans">
                      {faq.question}
                    </span>
                    <div className="p-1 rounded bg-brand-cream-dark text-brand-charcoal">
                      {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </div>
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-brand-gray leading-relaxed font-sans font-normal border-t border-brand-charcoal/5 pt-4 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Deep Gold CTA Block */}
        <div className="bg-[#6D5A12] text-white rounded-[32px] p-10 sm:p-16 text-center relative overflow-hidden ring-1 ring-[#6D5A12]/20 shadow-xl space-y-6">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #FCF6E9 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
            準備好讓品牌被記住了嗎？
          </h2>
          <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
            現在就預約免費諮詢，讓專業設計師為您打造專屬的識別戰略。
          </p>
          
          <div className="pt-2 flex justify-center">
            <button
              type="button"
              onClick={openQuoteModal}
              className="px-8 py-3.5 bg-brand-charcoal text-white hover:bg-brand-slate transition-all font-bold text-xs tracking-wider rounded-xl flex items-center space-x-2 shadow-lg cursor-pointer"
            >
              <span>免費諮詢</span>
              <span>➔</span>
            </button>
          </div>
        </div>

      </div>
    );
  }

  // 3. MARKETING SUBPAGE with Interactive Cost Calculator
  function MarketingSub() {
    const [videos, setVideos] = useState(4);
    const [actors, setActors] = useState(false);
    const [shootInStudio, setShootInStudio] = useState(true);

    const calculatedPriceMin = (videos * 7000) + (actors ? 15000 : 0) + (shootInStudio ? 5000 : 12000);

    return (
      <div className="space-y-16 py-12 text-left animate-fadeIn">
        <div className="border-b border-brand-charcoal/10 pb-8">
          <span className="text-xs font-mono font-bold bg-brand-charcoal text-brand-yellow px-2.5 py-1 rounded">
            GROWTH_ENGINE // NATURAL_TRAFFIC
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-charcoal mt-4 tracking-tight">
            行銷服務: 整合流量與轉化引擎
          </h2>
          <p className="text-xs sm:text-sm text-brand-gray mt-2 leading-relaxed max-w-2xl">
            提供 SEO 搜尋優化、SEM 關鍵字精準廣告投放、短影音行銷一站式包辦。拒絕無效流量，只為您的轉換負責。
          </p>
        </div>

        {/* Detailed Marketing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'SEO 搜尋優化', desc: '站內底層結構代碼重整，痛點長尾詞全面佈局、長期獲取 Google 免費精準流量。', tag: '長效自然流量' },
            { title: 'SEM 關鍵字廣告', desc: '即時 ROI 儀表板架設，為您精細配重廣告預算、不花冤枉錢。', tag: '高速高轉化' },
            { title: '爆款 Reels 短影音', desc: '我們全盤代管！影片鉤子企劃、拍攝導演、吸睛節奏剪輯三合一。', tag: '社群病毒擴散' },
            { title: '整合行銷大禮包', desc: '小預算起步、月費制、專門指派資深行銷規劃師配合檔期策劃。', tag: '全套策略包案' },
          ].map((item, id) => (
            <div key={id} className="p-5 bg-white border border-brand-charcoal/5 rounded-2xl hover:shadow h-full flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-brand-yellow font-mono">{item.tag}</span>
                <h3 className="text-sm font-bold text-brand-charcoal mt-1 tracking-tight">{item.title}</h3>
                <p className="text-xs text-brand-gray mt-2 leading-relaxed">{item.desc}</p>
              </div>
              <span className="text-[10px] font-bold text-brand-charcoal hover:text-brand-yellow cursor-pointer mt-6 flex justify-end" onClick={openQuoteModal}>
                了解規格 ➔
              </span>
            </div>
          ))}
        </div>

        {/* Interactive Reels short video calculator */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-brand-cream-dark p-6 md:p-8 rounded-3xl border border-brand-charcoal/5">
          <div className="md:col-span-7 space-y-4">
            <span className="text-xs font-mono font-bold text-[#E6B822]">MORSIGN SHORT VIDEO ESTIMATOR</span>
            <h3 className="text-xl font-bold tracking-tight text-brand-charcoal">社群短影音企劃月費快速預算試算</h3>
            <p className="text-xs text-brand-gray leading-relaxed font-sans">
              想知道您每月委託默聲團隊進行代筆、代拍、代剪，需要投入多少基本預算嗎？歡迎撥動下方拉桿進行快速初步試算！
            </p>

            <div className="space-y-4 pt-2">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-brand-slate font-bold">
                  <span>每月委託企劃拍攝支數：</span>
                  <span className="text-brand-yellow bg-brand-charcoal px-2 py-0.5 rounded text-[11px] font-mono">{videos} 支</span>
                </div>
                <input 
                  type="range" 
                  min={1} 
                  max={20} 
                  value={videos} 
                  onChange={(e) => setVideos(parseInt(e.target.value))}
                  className="w-full accent-brand-yellow text-brand-yellow" 
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <label className="flex items-center space-x-2 text-xs font-bold text-brand-slate cursor-pointer select-none">
                  <input 
                    type="checkbox" 
                    checked={actors} 
                    onChange={(e) => setActors(e.target.checked)}
                    className="w-3.5 h-3.5 accent-brand-charcoal" 
                  />
                  <span>包含默聲媒合專業演員模特？(+ $15,000)</span>
                </label>

                <label className="flex items-center space-x-2 text-xs font-bold text-brand-slate cursor-pointer select-none">
                  <input 
                    type="checkbox" 
                    checked={!shootInStudio} 
                    onChange={(e) => setShootInStudio(!e.target.checked)}
                    className="w-3.5 h-3.5 accent-brand-charcoal" 
                  />
                  <span>需出機上門現場拍攝？(+ $7,000 外景費)</span>
                </label>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 bg-white p-6 rounded-2xl border border-brand-charcoal/5 flex flex-col justify-between align-middle h-full text-center">
            <span className="text-[10px] font-mono uppercase text-brand-gray max-w-sm">估計專案包案月費預算</span>
            <div className="my-4">
              <div className="text-2xl font-black font-display text-brand-charcoal">
                NT$ {calculatedPriceMin.toLocaleString()}
              </div>
              <div className="text-[10px] text-brand-gray mt-1 font-mono">（起 / 全套包含腳本與三秒鉤包裝）</div>
            </div>
            <button type="button" onClick={openQuoteModal} className="w-full py-2.5 bg-brand-charcoal text-brand-yellow font-bold text-xs rounded-xl hover:bg-brand-slate shadow">
              以此配置申請正式企劃合約
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 4. KNOWLEDGE SHARE SUBPAGE (Satisfies article click dynamic rendering)
  function KnowledgeSub() {
    const [selectedArt, setSelectedArt] = useState<Article | null>(null);
    const [artFilter, setArtFilter] = useState<'all' | 'web' | 'seo' | 'video' | 'brand'>('all');

    const filtered = artFilter === 'all' 
      ? ARTICLES 
      : ARTICLES.filter(a => a.category === artFilter);

    if (selectedArt) {
      return (
        <div className="max-w-3xl mx-auto py-12 text-left space-y-6 animate-fadeIn">
          <button 
            type="button" 
            onClick={() => setSelectedArt(null)}
            className="text-xs font-bold text-brand-charcoal hover:text-brand-yellow transition-colors flex items-center space-x-1 border border-brand-charcoal/10 rounded-xl px-3 py-1.5 bg-white shadow-sm"
          >
            <span>← 返回知識列表</span>
          </button>

          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-[11px] font-mono text-brand-gray font-bold">
              <span className="bg-brand-charcoal text-brand-yellow py-0.5 px-2 rounded-md">
                {selectedArt.categoryLabel}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar size={11} /> {selectedArt.publishDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock size={11} /> 閱讀需 {selectedArt.readTime}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-brand-charcoal tracking-tight leading-snug">
              {selectedArt.title}
            </h2>
          </div>

          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-brand-slate border border-brand-charcoal/5 relative shadow">
            <img 
              src={selectedArt.imageUrl} 
              alt={selectedArt.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Render article body nicely styled */}
          <div className="text-slate-800 text-sm leading-relaxed whitespace-pre-line font-sans pt-4 space-y-4">
            {selectedArt.content}
          </div>

          <div className="pt-8 border-t border-brand-charcoal/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-brand-gray">
              覺得內容受用？歡迎分享此文章 或 線上諮詢我們獲得一對一建置方案。
            </div>
            <button 
              type="button" 
              onClick={() => {
                setSelectedArt(null);
                openQuoteModal();
              }}
              className="px-5 py-2.5 bg-brand-yellow text-brand-charcoal font-bold text-xs rounded-xl shadow hover:bg-brand-yellow/90 shrink-0"
            >
              與作者約診詢價專案 ➔
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-12 py-12 text-left animate-fadeIn">
        <div className="border-b border-brand-charcoal/10 pb-8 flex flex-col md:flex-row justify-between md:items-end gap-4">
          <div>
            <span className="text-xs font-mono font-bold bg-brand-charcoal text-brand-yellow px-2.5 py-1 rounded">
              LATEST_KNOWLEDGE // ARTICLES
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-brand-charcoal mt-4 tracking-tight">
              默聲知識分享，與您同步前沿美學
            </h2>
            <p className="text-xs sm:text-sm text-brand-gray mt-2 leading-relaxed max-w-xl">
              提煉我們日常為各指標客戶解決的真實策略痛點。拒絕空泛廢話，給您高含金量的乾貨讀本。
            </p>
          </div>

          {/* Filter switcher */}
          <div className="flex flex-wrap gap-1 bg-brand-cream p-1 rounded-xl border border-brand-charcoal/5 self-start">
            {[
              { id: 'all', label: '全部文章' },
              { id: 'web', label: '網頁設計' },
              { id: 'seo', label: 'SEO & 行銷' },
              { id: 'video', label: '短影音' },
              { id: 'brand', label: '品牌識別' }
            ].map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => setArtFilter(item.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${artFilter === item.id ? 'bg-brand-charcoal text-brand-yellow shadow-sm' : 'text-brand-gray hover:text-brand-charcoal'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Article list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map(art => (
            <div 
              key={art.id}
              onClick={() => setSelectedArt(art)}
              className="group cursor-pointer flex flex-col space-y-4 rounded-2xl overflow-hidden border border-brand-charcoal/5 p-4 bg-white hover:border-brand-yellow/30 hover:shadow transition-all"
            >
              <div className="aspect-[16/10] rounded-xl overflow-hidden bg-brand-slate relative">
                <img 
                  src={art.imageUrl} 
                  alt={art.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" 
                />
              </div>

              <div className="space-y-2 mt-2">
                <div className="flex items-center space-x-2 text-[10px] font-mono text-brand-gray">
                  <span className="font-bold text-brand-charcoal">{art.categoryLabel}</span>
                  <span>•</span>
                  <span>{art.publishDate}</span>
                </div>
                
                <h3 className="text-base font-bold text-brand-charcoal group-hover:text-brand-yellow transition-colors leading-snug">
                  {art.title}
                </h3>
                
                <p className="text-xs text-brand-gray line-clamp-2 leading-relaxed">
                  {art.excerpt}
                </p>

                <span className="text-xs font-bold text-brand-yellow mt-3.5 inline-block">
                  繼續閱讀全文 ➔
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 5. ABOUT SUBPAGE
  function AboutSub() {
    return (
      <div className="space-y-16 py-12 text-left animate-fadeIn">
        <div className="border-b border-brand-charcoal/10 pb-8">
          <span className="text-xs font-mono font-bold bg-brand-charcoal text-brand-yellow px-2.5 py-1 rounded">
            THE_TEAM // IDENTITY
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-charcoal mt-4 tracking-tight">
            關於默聲設計 Morsign Studio
          </h2>
          <p className="text-xs sm:text-sm text-brand-gray mt-2 leading-relaxed max-w-2xl">
            我們的願景是：消弭工程科技的枯燥，與視覺創意的空泛。以極致專業交付為品牌撬動實質紅利。
          </p>
        </div>

        {/* Split layouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-brand-charcoal leading-tight">
              堅持最高品質與手工藝，與本土/跨國客戶同行
            </h3>
            
            <p className="text-xs text-brand-gray leading-relaxed font-sans font-medium">
              默聲成立於 2018 年，是由數位大廠背景出身之產品總監、資深全端工程師、廣告優化師與前衛視覺設計師共同組成的「前瞻數位與品牌再造團隊」。我們專注為講求效率、在意質感的高端企業提供一站式顧問和建置方案。
            </p>

            <div className="p-5 rounded-2xl bg-brand-cream-dark border border-brand-charcoal/5 space-y-2">
              <h4 className="text-xs font-bold text-brand-charcoal">台日雙市場：跨域連結，落地無縫</h4>
              <p className="text-[11px] text-brand-gray leading-relaxed font-sans">
                除台灣本土市場外，我們在東京設有穩定溝通與合作團隊，專門代行日本市場資產合規、當地 SEO 架設。是企業品牌邁入國際、或引進日系禪意感視覺的不二人選。
              </p>
            </div>
          </div>

          <div className="p-6 bg-brand-charcoal text-white rounded-3xl space-y-6">
            <span className="text-xs font-mono text-brand-yellow tracking-widest block uppercase font-bold">Morsign Local coordinates</span>
            
            <div className="space-y-4 font-mono text-xs">
              <div className="border-b border-white/10 pb-3 flex justify-between items-center">
                <span className="text-white/40">台北大同戰略點</span>
                <span className="text-white font-bold font-sans">Taipei Central Office</span>
              </div>
              <div className="border-b border-white/10 pb-3 flex justify-between items-center">
                <span className="text-white/40">桃園八德開發點</span>
                <span className="text-white font-bold font-sans">Taoyuan Dev Base</span>
              </div>
              <div className="border-b border-white/10 pb-3 flex justify-between items-center">
                <span className="text-white/40">日本東京板橋支部</span>
                <span className="text-white font-bold font-sans">Tokyo (Itabashi-ku) Post</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-white/40">官方聯絡通訊</span>
                <span className="text-[#E6B822] font-black uppercase font-mono bg-white/10 px-2.5 py-1 rounded text-[10px]">
                  hello@morcept.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Master Switch rendering depending on current active view page
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {currentPage === 'web-design' ? (
        <WebDesignSub />
      ) : currentPage === 'brand-cis' ? (
        <BrandCisSub />
      ) : currentPage === 'marketing' ? (
        <MarketingSub />
      ) : currentPage === 'about' ? (
        <AboutSub />
      ) : (
        <KnowledgeSub />
      )}
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Globe, HeartHandshake, Eye, BarChart, Film, ShoppingBag, CheckCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServiceCard {
  title: string;
  category: 'web' | 'brand' | 'marketing' | 'video' | 'ecommerce';
  categoryLabel: string;
  icon: React.ReactNode;
  items: string[];
  description: string;
  gradient: string;
}

export default function ServicesGrid() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: '全部服務' },
    { id: 'web', label: '網頁設計' },
    { id: 'brand', label: '品牌識別' },
    { id: 'marketing', label: '數位行銷' },
    { id: 'video', label: '影音行銷' },
    { id: 'ecommerce', label: '電商營運' },
  ];

  const services: ServiceCard[] = [
    {
      title: '高質量網頁設計',
      category: 'web',
      categoryLabel: '網頁設計',
      icon: <Globe className="w-5 h-5 text-brand-yellow" />,
      items: ['品牌企業形象網站', '極速 RWD 響應式佈局', '中英日多國語系適配', '極致資安防護與加密驗證'],
      description: '極力跳脫傳統套底版網頁。我們運用高精緻 Display typography、流暢的捲動動畫及尖端編碼，讓官網成為最強點對點開發工具。',
      gradient: 'from-[#FFF8E7] to-[#FFFBF1]'
    },
    {
      title: '品牌識別與 CIS 再造',
      category: 'brand',
      categoryLabel: '品牌識別',
      icon: <HeartHandshake className="w-5 h-5 text-brand-yellow" />,
      items: ['LOGO / CIS 體系重新定位', '標準幾何學商標美化', '色彩比例與視覺手冊規範', '名片與包裝印刷工藝延伸'],
      description: '為您的公司或產品打造過目難忘的鮮明人設。將傳統企業的厚重感美學進化為國際級簡約，大幅提高品牌精神與產品客單價。',
      gradient: 'from-[#FDF5DB] to-[#FCF8F0]'
    },
    {
      title: '精準廣告投放（SEM）',
      category: 'marketing',
      categoryLabel: '數位行銷',
      icon: <BarChart className="w-5 h-5 text-brand-yellow" />,
      items: ['Meta / IG 視覺廣告優化', 'Google 搜尋防禦與強攻廣告', '關鍵字大數據比對剖析', 'ROI 即時儀表板監測追蹤'],
      description: '不搞盲目跟風流量。每一分廣告費都投放於高意圖商業轉化關鍵字，配合專業落地頁(Landing Page)設計，用科學數據把預算變營收。',
      gradient: 'from-[#FFF8E7] to-[#FFFBF1]'
    },
    {
      title: '白帽 SEO 搜尋優化',
      category: 'marketing',
      categoryLabel: '數位行銷',
      icon: <Eye className="w-5 h-5 text-brand-yellow" />,
      items: ['首頁大結構核心代碼整建', '高關聯痛點長尾詞挖掘', '原創深度專題文章策劃撰寫', '外鏈資產建立與排名防禦'],
      description: '讓 Google 24 小時免費幫您推薦潛在買家！透過站內程式效能優化與高價值原創內容行銷，攻佔搜尋首頁，建立高防禦門檻。',
      gradient: 'from-[#FDF5DB] to-[#FCF8F0]'
    },
    {
      title: '短影音爆款企劃行銷',
      category: 'video',
      categoryLabel: '影音行銷',
      icon: <Film className="w-5 h-5 text-brand-yellow" />,
      items: ['Reels / Shorts 自媒體定位', '3 秒鉤眼球黃金腳本撰寫', '專業高清現場導演拍攝', '節奏音效動感剪輯與包裝'],
      description: '全面搶佔直向螢幕红利！一站式代管自媒體影音流，協助鎖定高消費潛力客群。讓好影片帶來自然高點讚，狂吸線下實體諮詢預約。',
      gradient: 'from-[#FFF8E7] to-[#FFFBF1]'
    },
    {
      title: '品牌電商與日常維護',
      category: 'ecommerce',
      categoryLabel: '電商營運',
      icon: <ShoppingBag className="w-5 h-5 text-brand-yellow" />,
      items: ['一頁結帳網頁流優化', '日常檔期活動Banner視覺設計', '主機安全備份與效能監測', 'LINE Pay / 綠界 金流輕鬆整合'],
      description: '網頁上線只是品牌數位征途的起點。我們提供頂級大管家服務，幫您監測日常效能、修復潛在漏洞，保證營運安全無虞。',
      gradient: 'from-[#FDF5DB] to-[#FCF8F0]'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <section className="py-20 bg-white border-b border-brand-charcoal/5 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-yellow">
              Professional Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-charcoal tracking-tight mt-2">
              我們擅長的服務內容
            </h2>
          </div>
          
          {/* Tabs switch panel */}
          <div className="flex flex-wrap gap-1.5 bg-brand-cream p-1.5 rounded-xl border border-brand-charcoal/5 self-start">
            {tabs.map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === tab.id ? 'bg-brand-charcoal text-brand-yellow shadow-sm' : 'text-brand-gray hover:text-brand-charcoal hover:bg-brand-charcoal/5'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services grid displaying standard list matching image_0 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((srv, idx) => (
              <motion.div
                key={srv.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                className={`p-6 rounded-2xl border border-brand-charcoal/5 flex flex-col justify-between hover:shadow-lg transition-all hover:border-brand-yellow/30 relative overflow-hidden bg-gradient-to-br ${srv.gradient}`}
              >
                <div>
                  {/* Category icon header bubble */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-10 h-10 rounded-xl bg-brand-charcoal text-brand-yellow flex items-center justify-center">
                      {srv.icon}
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-brand-gray font-bold px-2 py-0.5 bg-brand-charcoal/5 rounded">
                      {srv.categoryLabel}
                    </span>
                  </div>

                  {/* Service Card Title */}
                  <h3 className="text-lg font-black text-brand-charcoal tracking-tight">
                    {srv.title}
                  </h3>
                  
                  {/* Description statement */}
                  <p className="text-xs text-brand-gray mt-2 leading-relaxed">
                    {srv.description}
                  </p>

                  {/* Features dot lists - beautiful styling */}
                  <div className="mt-5 space-y-2 border-t border-brand-charcoal/5 pt-5">
                    {srv.items.map((item, idy) => (
                      <div key={idy} className="flex items-start space-x-2 text-xs text-brand-slate">
                        <CheckCircle size={14} className="text-brand-yellow shrink-0 mt-0.5 stroke-[2.5]" />
                        <span className="font-sans leading-normal font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-brand-charcoal/5 flex items-center justify-between text-[11px] font-bold text-brand-charcoal hover:text-brand-yellow transition-colors cursor-pointer group">
                  <span>了解專案執行規格</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

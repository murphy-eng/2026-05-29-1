/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Shield, Sparkles, Globe, ShoppingBag, Landmark, ArrowRight, HeartHandshake, Film, Play, BookOpen, MessageSquare, Briefcase, Calendar, Clock, Terminal, Check } from 'lucide-react';
import { ARTICLES } from '../data';
import { PageId, Article } from '../types';

interface SubPagesProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openQuoteModal: () => void;
}

export default function SubPages({ activeTab, setActiveTab, openQuoteModal }: SubPagesProps) {
  // 1. WEB DESIGN SUBPAGE
  function WebDesignSub() {
    return (
      <div className="space-y-16 py-12 text-left">
        {/* Top Header info */}
        <div className="border-b border-brand-charcoal/10 pb-8">
          <span className="text-xs font-mono font-bold bg-brand-charcoal text-brand-yellow px-2.5 py-1 rounded">
            DESIGN_ENGINE // WEB_CORE
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-charcoal mt-4 tracking-tight">
            卓越一站式網頁設計與開發
          </h2>
          <p className="text-xs sm:text-sm text-brand-gray mt-2 leading-relaxed max-w-2xl">
            拒絕套用呆底版！我們從架構、效能、視覺與資安完整度出發，為企業建置能自動轉化商機、承載巨量訪問實力的現代化網站。
          </p>
          
          {/* Internal sub tabs */}
          <div className="flex gap-2 mt-6">
            {[
              { id: 'overview', name: '服務與五大形象方案' },
              { id: 'ecommerce', name: '電商購物系統建置' },
              { id: 'pricing', name: '方案與價格明細' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs font-bold px-3.5 py-2.5 rounded-lg border transition-all ${activeTab === tab.id ? 'bg-brand-charcoal text-brand-yellow border-brand-charcoal' : 'bg-white text-brand-gray hover:bg-brand-cream-dark border-brand-charcoal/5'}`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Outline list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: '企業基礎展示方案', price: 'NT$ 45,000 起', desc: '適合快速建立官方站與新產品發表、包含基礎 SEO 與一頁式展示結構。' },
                { title: '品牌卓越形象方案', price: 'NT$ 85,000 起', desc: '適用中大型傳產與新创品牌，深度企業故事、卓越互動微動態、多國語系檢索。' },
                { title: '資安研發高規入口站', price: 'NT$ 160,000 起', desc: '針對需要高強度 Web3 滲透防護、雲端負載均衡与多節點 CDN 分發的科技巨頭。' },
                { title: '傳產數位轉型特化案', price: 'NT$ 98,000 起', desc: '附帶產品極致 3D 渲染，多語系外銷詢價轉換，大幅降低重複客訴答疑時間。' },
                { title: '客製高階 SaaS 整合站', price: '客製報價', desc: '深度綁定您現有的 ERP / CRM 系列、高併發高性能，專為複雜業務流程定製。' }
              ].map((pack, i) => (
                <div key={i} className="p-6 bg-white border border-brand-charcoal/5 rounded-2xl hover:shadow h-full flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-brand-yellow font-bold font-mono">MODEL 0{i + 1}</span>
                    <h3 className="text-base font-bold text-brand-charcoal mt-1 tracking-tight">{pack.title}</h3>
                    <p className="text-xs text-brand-gray mt-2 leading-relaxed">{pack.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-brand-charcoal/5 flex justify-between items-center">
                    <span className="text-xs font-black font-mono text-brand-charcoal">{pack.price}</span>
                    <span className="text-[10px] font-bold text-brand-charcoal hover:text-brand-yellow cursor-pointer" onClick={openQuoteModal}>
                      詢價 ➔
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Sec info: cybersecurity & heritage legacy */}
            <div className="p-8 rounded-3xl bg-brand-charcoal text-white grid grid-cols-1 md:grid-cols-12 gap-6 items-center border border-white/5">
              <div className="md:col-span-8 space-y-3">
                <span className="text-xs font-mono font-bold text-brand-yellow">ENTERPRISE SAFETY ARCHITECTURE</span>
                <h3 className="text-xl font-bold tracking-tight">深諳資安防護與傳統產業轉型邏輯</h3>
                <p className="text-xs text-brand-yellow-light/80 leading-relaxed max-w-2xl font-sans">
                  我們不像一般工作室只在意封面。我們由具備科技大廠背景之資深工程團隊把關，站台遵循嚴格之防駭滲透規範，防止外銷郵件詢價單遭受冒名攔截；並具備自動多雲份備、多層防火牆、SSL 完整鎖定，為您在打拼海外市場時提供堅實後盾。
                </p>
              </div>
              <div className="md:col-span-4 flex md:justify-end">
                <button type="button" onClick={openQuoteModal} className="px-6 py-3 bg-brand-yellow text-brand-charcoal font-bold text-xs tracking-wider rounded-xl hover:bg-brand-yellow/90 shadow">
                  預約資安健檢諮詢
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ecommerce' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fadeIn">
            {/* Text description */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-brand-charcoal tracking-tight">
                極致高點跳動、轉化率優先之電商系統
              </h3>
              
              <p className="text-xs text-brand-gray leading-relaxed font-sans">
                多數電商網站流失 40% 的交易，全因爲結帳過程太慢、付款彈窗干擾。默聲特別規劃「一頁快速結帳流」，完美整合 LINE Pay、Apple Pay、綠界金流以及統一庫存、拋接至 ERP。
              </p>

              <div className="space-y-3">
                {[
                  '極致一秒載入，點擊加載跳動率下降 60%',
                  '客製化版型氛圍，烘托高端伴手禮/精品感',
                  '完美的會員積點、折價券與節慶檔期策劃模塊',
                  '行動裝置(Mobile-first)單手滑動極致結帳體驗'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-brand-slate font-medium">
                    <Check size={14} className="text-brand-yellow shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button type="button" onClick={openQuoteModal} className="px-6 py-3.5 bg-brand-charcoal text-brand-yellow font-bold text-xs tracking-wider rounded-xl hover:bg-brand-slate transition-colors">
                  開案諮詢購物站
                </button>
              </div>
            </div>

            {/* Simulated UI block */}
            <div className="bg-brand-cream-dark p-6 rounded-3xl border border-brand-charcoal/5 flex flex-col justify-between aspect-[4/3] relative overflow-hidden">
              <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-brand-gray">
                <span>CART_CONVERSION_BOOSTER</span>
                <span>STATUS: HIGH_CONVERSION</span>
              </div>
              
              <div className="flex-1 flex flex-col justify-center space-y-3.5">
                <div className="p-3 bg-white rounded-xl border border-brand-charcoal/5 flex justify-between items-center">
                  <span className="text-xs font-bold text-brand-charcoal">台灣蕎麥和風禮盒</span>
                  <span className="text-xs font-mono font-bold text-brand-yellow">NT$ 820</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-brand-charcoal/5 text-left border-l-4 border-l-green-400">
                  <div className="text-[9px] font-mono text-brand-gray uppercase">Smart checkout enabled</div>
                  <div className="text-xs font-bold text-brand-charcoal mt-1">✓ LINE Pay / Apple Pay 整合完畢</div>
                </div>
              </div>

              <div className="bg-brand-charcoal p-3 rounded-2xl text-center text-brand-yellow text-xs font-bold shadow-sm">
                閃電付（一頁 3 秒無痛買單）➔
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pricing' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Pricing Head */}
            <div className="text-center max-w-md mx-auto">
              <h3 className="text-xl font-bold text-brand-charcoal">簡潔透明的網頁報價架構</h3>
              <p className="text-xs text-brand-gray mt-1">我們承諾：合約簽訂後絕無莫名追加追加款，所有功能與頁面清楚明列。</p>
            </div>

            {/* Pricing Comparison Matrix */}
            <div className="border border-brand-charcoal/10 rounded-2xl bg-white overflow-hidden shadow-sm">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-brand-cream-dark border-b border-brand-charcoal/10 font-bold text-brand-charcoal">
                    <th className="p-4 sm:p-5 w-1/3">核心功能項目 / 規格</th>
                    <th className="p-4 sm:p-5 text-center bg-brand-yellow-light/20">品牌形象推薦</th>
                    <th className="p-4 sm:p-5 text-center">購物/電商專案</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-charcoal/5 font-medium text-brand-slate">
                  <tr>
                    <td className="p-4 text-brand-charcoal font-bold">頁面數量 & 結構</td>
                    <td className="p-4 text-center bg-brand-yellow-light/10">不限頁面/客製 5 個核心單元</td>
                    <td className="p-4 text-center">無限產品上架、行銷文章模塊</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-brand-charcoal font-bold">多國語系適配</td>
                    <td className="p-4 text-center bg-brand-yellow-light/10">中/英 雙語基礎建置</td>
                    <td className="p-4 text-center">支援多國語與多幣值顯示結帳</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-brand-charcoal font-bold">資安安全防火牆</td>
                    <td className="p-4 text-center bg-brand-yellow-light/10">SSL、CC 安全防護</td>
                    <td className="p-4 text-center">SSL、防偽詢問、安全金流</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-brand-charcoal font-bold">專案報價概預算</td>
                    <td className="p-4 text-center bg-brand-yellow-light/25 text-base font-black text-brand-yellow">NT$ 85,000 起</td>
                    <td className="p-4 text-center text-base font-black text-brand-charcoal">NT$ 120,000 起</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center pt-2">
              <button type="button" onClick={openQuoteModal} className="px-8 py-3 bg-brand-charcoal text-brand-yellow hover:bg-brand-slate text-xs font-bold tracking-wider rounded-xl transition-all shadow">
                獲取客製化專案詳細報價單
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // 2. BRAND CIS SUBPAGE
  function BrandCisSub() {
    return (
      <div className="space-y-16 py-12 text-left animate-fadeIn">
        <div className="border-b border-brand-charcoal/10 pb-8">
          <span className="text-xs font-mono font-bold bg-brand-charcoal text-brand-yellow px-2.5 py-1 rounded">
            CIS_STANDARD // SYSTEMATIC
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-charcoal mt-4 tracking-tight">
            品牌識別設計: 從定位 ➔ CIS 識別 ➔ 延伸應用
          </h2>
          <p className="text-xs sm:text-sm text-brand-gray mt-2 leading-relaxed max-w-2xl">
            重新定義品牌的視覺資產。我們以極簡幾何學及商業定位為靈魂，幫企業進行商標再造 (Logo Redesign) 與一整套對外識別。
          </p>
        </div>

        {/* Process Flow detail columns: Logo -> CIS -> Applications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { id: 'logo', title: '1. LOGO 定位再造', icon: <Sparkles className="text-brand-yellow" />, desc: '透過對品牌歷史DNA的深挖，保留企業內核，精簡繁瑣圖案，重構出具備高感度、國際視野、幾何黃金比例的可讀標記設計。' },
            { id: 'cis', title: '2. CIS 視覺設計體系', icon: <HeartHandshake className="text-brand-yellow" />, desc: '規範精準的商標主輔色比例、品牌標準英中文字體、反白輔助標誌。輸出完整品牌設計工具書，保證在全世界的行銷物件上統一尊貴氣派。' },
            { id: 'ext', title: '3. 品牌周邊延伸應用', icon: <Shield className="text-brand-yellow" />, desc: '名片、包裝提袋盒、員工制服、日常禮品、甚至實體展示看板印刷工法建議一站對齊。更包含對網頁、APP、簡報PPT模板之數位端配重。' }
          ].map((item, i) => (
            <div key={item.id} className="p-6 bg-white border border-brand-charcoal/5 rounded-2xl space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-brand-charcoal flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-brand-charcoal tracking-tight">{item.title}</h3>
              <p className="text-xs text-brand-gray leading-relaxed font-sans font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="p-8 rounded-3xl bg-brand-cream-dark border border-brand-charcoal/5 flex flex-col md:flex-row gap-6 justify-between items-center">
          <div className="space-y-2">
            <h4 className="text-lg font-black text-brand-charcoal tracking-tight">需要為傳統產業重新披上尊榮黑金外衣嗎？</h4>
            <p className="text-xs text-brand-gray leading-relaxed max-w-xl">
              我們的台日團隊合作豐富，特別擅長將在產業打拼數十年的家族老招牌重新提煉，打造出深具人文底蘊、又合身現代網頁介面的精品包裝。
            </p>
          </div>
          <button type="button" onClick={openQuoteModal} className="px-6 py-3 bg-brand-charcoal text-brand-yellow font-bold text-xs tracking-wider rounded-xl hover:bg-brand-slate transition-all shrink-0">
            開始品牌重塑對接
          </button>
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
      {activeTab.startsWith('overview') || activeTab.startsWith('ecommerce') || activeTab.startsWith('pricing') ? (
        <WebDesignSub />
      ) : activeTab.startsWith('brand') ? (
        <BrandCisSub />
      ) : activeTab.startsWith('seo') || activeTab.startsWith('sem') || activeTab.startsWith('shorts') || activeTab.startsWith('package') ? (
        <MarketingSub />
      ) : activeTab.startsWith('web-design') || activeTab.startsWith('marketing') ? (
        // For fallback navigation matching
        <MarketingSub />
      ) : (
        <KnowledgeSub />
      )}
    </div>
  );
}

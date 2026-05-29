/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronDown, Menu, X, Globe, Star, Sparkles, Megaphone, FolderKanban, BookOpen, Quote, HelpCircle, Shield, Play } from 'lucide-react';
import { PageId, NavItem } from '../types';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  setActiveTab: (tab: string) => void;
  openQuoteModal: () => void;
}

export default function Navbar({ currentPage, setCurrentPage, setActiveTab, openQuoteModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationStructure: NavItem[] = [
    {
      title: '網頁設計',
      badge: '熱門',
      subItems: [
        { id: 'web-overview', title: '服務總覽', description: '含五大企業形象方案介紹 (傳產、資安研發)', pageId: 'web-design', tabId: 'overview' },
        { id: 'web-ecommerce', title: '電商購物網站', description: '高轉化率、一鍵拋接支付與庫存系統', pageId: 'web-design', tabId: 'ecommerce' },
        { id: 'web-pricing', title: '方案價格', description: '透明公道，拒絕不合理追加與隱藏收費', pageId: 'web-design', tabId: 'pricing' },
      ]
    },
    {
      title: '品牌識別',
      badge: '新加入',
      subItems: [
        { id: 'brand-overview', title: '服務總覽', description: '從 LOGO 定位 ➔ CIS 識別規範 ➔ 品牌延伸應用', pageId: 'brand-cis', tabId: 'overview' },
      ]
    },
    {
      title: '行銷服務',
      badge: '全新',
      subItems: [
        { id: 'marketing-seo', title: 'SEO 搜尋優化', description: '白帽自然流量，攻佔 Google 搜尋第一頁', pageId: 'marketing', tabId: 'seo' },
        { id: 'marketing-sem', title: 'SEM 關鍵字廣告', description: '精準預算配重，高速回收廣告投資報酬 (ROI)', pageId: 'marketing', tabId: 'sem' },
        { id: 'marketing-shorts', title: '短影音行銷', description: 'Reels / Shorts 企劃、拍攝、剪輯一站式包辦', pageId: 'marketing', tabId: 'shorts' },
        { id: 'marketing-package', title: '行銷套案組合', description: '量身客製化月費，小預算也能撬動大效益', pageId: 'marketing', tabId: 'package' },
      ]
    },
    {
      title: '客戶案例',
      subItems: [
        { id: 'cases-web', title: '網頁設計案例列表', description: '代表性客製化官方站、電商平台案例 (外連)', pageId: 'cases', tabId: 'web-design' },
        { id: 'cases-marketing', title: '行銷成效個案分享', description: '數據佐證，看我們如何拉抬 +180% 轉化率', pageId: 'cases', tabId: 'marketing' },
      ]
    },
    {
      title: '關於默聲',
      pageId: 'about'
    },
    {
      title: '知識分享',
      subItems: [
        { id: 'knowledge-web', title: '網站設計知識', description: '提煉 15 年前瞻 UI/UX 與加載效能心法', pageId: 'knowledge', tabId: 'web' },
        { id: 'knowledge-seo', title: 'SEO / 行銷文章', description: '解析 Google 新演算法與文案誘餌公式', pageId: 'knowledge', tabId: 'seo' },
        { id: 'knowledge-video', title: '短影音趨勢', description: '解析爆款影片結構，打造破百萬播放黃金秘辛', pageId: 'knowledge', tabId: 'video' },
        { id: 'knowledge-brand', title: '品牌設計知識', description: '傳統產業與新創公司如何重塑視覺資產', pageId: 'knowledge', tabId: 'brand' },
      ]
    }
  ];

  const handleSubItemClick = (pageId: PageId, tabId?: string) => {
    setCurrentPage(pageId);
    if (tabId) {
      setActiveTab(tabId);
    }
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const handleMainItemClick = (item: NavItem) => {
    if (item.pageId) {
      setCurrentPage(item.pageId);
      setActiveDropdown(null);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-brand-cream/92 backdrop-blur-md border-b border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand Title */}
          <div 
            onClick={() => handleSubItemClick('home')} 
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-charcoal flex items-center justify-center text-brand-yellow font-bold text-lg font-display tracking-tight transition-transform group-hover:scale-105 shadow-sm">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-brand-charcoal leading-none tracking-tight text-lg">
                默聲設計 <span className="text-brand-yellow">Morsign</span>
              </span>
              <span className="text-[9px] text-brand-gray font-mono tracking-widest leading-none mt-1 uppercase">
                Digital & Creative Agency
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationStructure.map((item, index) => {
              const hasSub = !!item.subItems;
              const isItemActive = hasSub 
                ? item.subItems?.some(sub => sub.pageId === currentPage)
                : item.pageId === currentPage;

              return (
                <div 
                  key={index} 
                  className="relative group"
                  onMouseEnter={() => hasSub && setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() => !hasSub && handleMainItemClick(item)}
                    className={`px-4 py-2 text-sm font-medium tracking-tight rounded-xl flex items-center space-x-1.5 transition-all text-brand-charcoal hover:bg-brand-charcoal/5 ${isItemActive ? 'bg-brand-charcoal/5 font-semibold text-brand-yellow' : ''}`}
                  >
                    <span>{item.title}</span>
                    {item.badge && (
                      <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-bold scale-90 ${item.badge === '熱門' ? 'bg-red-500 text-white' : item.badge === '全新' ? 'bg-brand-yellow text-brand-charcoal' : 'bg-brand-slate text-brand-yellow-light'}`}>
                        {item.badge}
                      </span>
                    )}
                    {hasSub && <ChevronDown size={14} className="text-brand-gray transition-transform group-hover:rotate-180" />}
                  </button>

                  {/* Dropdown Menu Desktop */}
                  {hasSub && activeDropdown === item.title && (
                    <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-80 bg-white border border-brand-charcoal/10 rounded-2xl shadow-xl overflow-hidden p-2 z-50">
                      <div className="grid grid-cols-1 gap-1">
                        {item.subItems?.map((sub) => (
                          <div
                            key={sub.id}
                            onClick={() => handleSubItemClick(sub.pageId, sub.tabId)}
                            className="p-3 rounded-xl hover:bg-brand-cream hover:text-brand-charcoal transition-all cursor-pointer group/sub flex items-start space-x-2.5"
                          >
                            <div className="p-1.5 rounded-lg bg-brand-cream-dark text-brand-charcoal group-hover/sub:bg-brand-charcoal group-hover/sub:text-brand-yellow transition-colors shrink-0 mt-0.5">
                              {sub.pageId === 'web-design' && sub.tabId === 'pricing' ? <Quote size={13} /> :
                               sub.pageId === 'web-design' ? <Globe size={13} /> :
                               sub.pageId === 'brand-cis' ? <Sparkles size={13} /> :
                               sub.pageId === 'marketing' && sub.tabId === 'seo' ? <Shield size={13} /> :
                               sub.pageId === 'marketing' && sub.tabId === 'shorts' ? <Play size={13} /> :
                               sub.pageId === 'marketing' ? <Megaphone size={13} /> :
                               sub.pageId === 'cases' ? <FolderKanban size={13} /> :
                               <BookOpen size={13} />}
                            </div>
                            <div>
                              <div className="text-xs font-bold text-brand-charcoal group-hover/sub:text-brand-charcoal">
                                {sub.title}
                              </div>
                              {sub.description && (
                                <p className="text-[10px] text-brand-gray group-hover/sub:text-brand-charcoal/80 mt-1 leading-normal font-sans">
                                  {sub.description}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center">
            <button
              type="button"
              onClick={openQuoteModal}
              className="px-5 py-2.5 bg-brand-yellow text-brand-charcoal font-bold text-sm tracking-wider rounded-xl hover:bg-brand-yellow/98 hover:-translate-y-0.5 transition-all flex items-center space-x-1.5 shadow-sm active:translate-y-0"
              id="cta_instant_quote_desktop"
            >
              <span>立即報價</span>
              <span>➔</span>
            </button>
          </div>

          {/* Mobile hamburger trigger */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-xl text-brand-charcoal hover:bg-brand-charcoal/5 transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-brand-charcoal/70 backdrop-blur-sm flex justify-end">
          <div className="w-4/5 max-w-sm h-full bg-brand-cream flex flex-col p-6 shadow-2xl overflow-y-auto">
            <div className="flex justify-between items-center pb-5 border-b border-brand-charcoal/5">
              <span className="font-display font-medium text-brand-charcoal">選單目錄 Navigation</span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full hover:bg-brand-charcoal/5 transition-colors text-brand-charcoal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 py-6 space-y-4">
              {navigationStructure.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="text-xs font-bold text-brand-gray tracking-wider uppercase font-mono px-2 py-1">
                    {item.title}
                  </div>
                  {item.subItems ? (
                    <div className="space-y-1 pl-2">
                      {item.subItems.map(sub => (
                        <div
                          key={sub.id}
                          onClick={() => handleSubItemClick(sub.pageId, sub.tabId)}
                          className="px-3 py-2 rounded-lg text-xs font-bold text-brand-charcoal hover:bg-brand-charcoal/5 cursor-pointer flex justify-between items-center"
                        >
                          <span>{sub.title}</span>
                          <span className="text-[10px] text-brand-gray font-normal font-sans tracking-wide">
                            {sub.pageId === 'web-design' && sub.tabId === 'pricing' ? '查看價格' : '了解詳情'}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="pl-2">
                      <div
                        onClick={() => item.pageId && handleSubItemClick(item.pageId)}
                        className="px-3 py-2 rounded-lg text-xs font-bold text-brand-charcoal hover:bg-brand-charcoal/5 cursor-pointer"
                      >
                        前往頻道
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-brand-charcoal/5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full py-3 bg-brand-yellow text-brand-charcoal font-bold text-xs tracking-wider rounded-xl hover:bg-brand-yellow/90 transition-all flex items-center justify-center space-x-1.5 text-center shadow"
              >
                <span>立即報價 ➔</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

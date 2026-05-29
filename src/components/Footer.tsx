/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, MapPin, Globe, Sparkles, Instagram, Facebook, Share2 } from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
  setActiveTab: (tab: string) => void;
  openQuoteModal: () => void;
}

export default function Footer({ setCurrentPage, setActiveTab, openQuoteModal }: FooterProps) {
  const handleNavClick = (pageId: PageId, tabId?: string) => {
    setCurrentPage(pageId);
    if (tabId) {
      setActiveTab(tabId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-12 border-t border-brand-slate text-left select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-brand-slate pb-12">
          
          {/* Col 1: Brand description intro */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-lg bg-brand-yellow text-brand-charcoal flex items-center justify-center font-bold font-display text-base">
                M
              </div>
              <span className="font-display font-black text-xl tracking-tight text-white">
                默聲設計 <span className="text-brand-yellow text-sm font-normal">Morsign</span>
              </span>
            </div>
            
            <p className="text-xs text-white/50 leading-relaxed max-w-sm font-sans pt-1">
              與優秀者同行，將前瞻科技與獨特美感巧妙整合，為注重品質的指標性客戶打造強悍無比的數位行銷與品牌成長引擎。
            </p>

            <div className="flex space-x-3 pt-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#B0B4AC] font-black">
                Morsign Holding Studio Ltd.
              </span>
            </div>
          </div>

          {/* Col 2: Web Solutions links */}
          <div className="md:col-span-2.5 flex flex-col space-y-3.5">
            <h4 className="text-xs font-bold text-[#E6B822] uppercase tracking-wider font-mono">
              網頁設計 & 規劃
            </h4>
            <ul className="space-y-2 text-xs text-white/60 font-sans">
              <li className="hover:text-brand-yellow hover:translate-x-1 transition-all cursor-pointer" onClick={() => handleNavClick('web-design', 'overview')}>
                五大形象企業方案
              </li>
              <li className="hover:text-brand-yellow hover:translate-x-1 transition-all cursor-pointer" onClick={() => handleNavClick('web-design', 'ecommerce')}>
                電商系統建置
              </li>
              <li className="hover:text-brand-yellow hover:translate-x-1 transition-all cursor-pointer" onClick={() => handleNavClick('web-design', 'pricing')}>
                透明方案與價格
              </li>
              <li className="hover:text-brand-yellow hover:translate-x-1 transition-all cursor-pointer" onClick={() => handleNavClick('brand-cis', 'overview')}>
                品牌 CIS 定位
              </li>
            </ul>
          </div>

          {/* Col 3: Marketing links */}
          <div className="md:col-span-2 flex flex-col space-y-3.5">
            <h4 className="text-xs font-bold text-[#E6B822] uppercase tracking-wider font-mono">
              數位推廣 & 行銷
            </h4>
            <ul className="space-y-2 text-xs text-white/60 font-sans">
              <li className="hover:text-brand-yellow hover:translate-x-1 transition-all cursor-pointer" onClick={() => handleNavClick('marketing', 'seo')}>
                SEO 搜尋自然排名
              </li>
              <li className="hover:text-brand-yellow hover:translate-x-1 transition-all cursor-pointer" onClick={() => handleNavClick('marketing', 'sem')}>
                SEM 關鍵字精準廣告
              </li>
              <li className="hover:text-brand-yellow hover:translate-x-1 transition-all cursor-pointer" onClick={() => handleNavClick('marketing', 'shorts')}>
                爆款 Reels 短影音
              </li>
              <li className="hover:text-brand-yellow hover:translate-x-1 transition-all cursor-pointer" onClick={() => handleNavClick('marketing', 'package')}>
                行銷套裝月費組合
              </li>
            </ul>
          </div>

          {/* Col 4: Contact links */}
          <div className="md:col-span-2.5 flex flex-col space-y-3.5">
            <h4 className="text-xs font-bold text-[#E6B822] uppercase tracking-wider font-mono">
              聯絡我們 Contact
            </h4>
            <div className="space-y-2.5 text-xs text-white/70 font-sans">
              <a href="mailto:hello@morcept.com" className="flex items-center space-x-2 group hover:text-brand-yellow">
                <Mail size={12} className="text-white/45 group-hover:text-brand-yellow transition-colors" />
                <span>hello@morcept.com</span>
              </a>

              <div className="flex items-start space-x-2">
                <MapPin size={12} className="text-white/45 mt-0.5 shrink-0" />
                <span className="leading-tight">
                  台北市 | 桃園市 | 東京 (板橋)
                </span>
              </div>

              <div className="flex items-center space-x-1.5 pt-1.5">
                <button 
                  type="button"
                  onClick={() => alert('歡迎關注 默聲官方 IG @morsign_studio')}
                  className="p-1.5 rounded bg-white/5 hover:bg-brand-yellow hover:text-brand-charcoal transition-colors text-white"
                >
                  <Instagram size={13} />
                </button>
                <button 
                  type="button"
                  onClick={() => alert('歡迎關注 默聲官方 Facebook @morsign')}
                  className="p-1.5 rounded bg-white/5 hover:bg-brand-yellow hover:text-brand-charcoal transition-colors text-white"
                >
                  <Facebook size={13} />
                </button>
                <button 
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('網站網址已成功複製至剪貼簿！');
                  }}
                  className="p-1.5 rounded bg-white/5 hover:bg-brand-yellow hover:text-brand-charcoal transition-colors text-white"
                  title="分享此網站"
                >
                  <Share2 size={13} />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright declaration strip */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/40 text-[10px] font-mono">
          <div>
            © {new Date().getFullYear()} Morsign 默聲設計 ｜ Morcept Studio. All Rights Reserved.
          </div>
          <div className="flex space-x-4">
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('about')}>
              關於我們門
            </span>
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('knowledge')}>
              知識共享
            </span>
            <span className="hover:text-white transition-colors cursor-pointer" onClick={openQuoteModal}>
              客製智能報價
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

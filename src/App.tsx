/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PageId } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Partners from './components/Partners';
import Journey from './components/Journey';
import ServicesGrid from './components/ServicesGrid';
import WhyUs from './components/WhyUs';
import Cases from './components/Cases';
import Process from './components/Process';
import Footer from './components/Footer';
import InstantQuoteModal from './components/InstantQuoteModal';
import SubPages from './components/SubPages';
import { MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [activeTab, setActiveTab] = useState<string>('all');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  // Helper to switch pages and reset scroll to top smoothly
  const handlePageChange = (pageId: PageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const openQuoteModal = () => {
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal selection:bg-brand-yellow font-sans relative flex flex-col justify-between">
      
      {/* Dynamic top bar notification alert */}
      <div className="bg-brand-charcoal text-brand-yellow-light text-[10px] md:text-xs py-2 px-4 text-center font-mono tracking-wider flex justify-center items-center gap-2 border-b border-brand-slate">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-ping" />
        <span>【台日雙核心戰略佈局】Morsign 2026 年度企業轉型形象與一站式行銷代管開案受理中</span>
        <button 
          onClick={openQuoteModal} 
          className="underline hover:text-white transition-colors cursor-pointer font-bold shrink-0 ml-1.5"
        >
          立即排程線上諮詢 ➔
        </button>
      </div>

      {/* Main Corporate Header navbar */}
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        setActiveTab={setActiveTab}
        openQuoteModal={openQuoteModal}
      />

      {/* Content channel controller */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <div className="animate-fadeIn">
            {/* L1: Standard display header block */}
            <Hero setCurrentPage={handlePageChange} openQuoteModal={openQuoteModal} />
            
            {/* L2: Intro stats block */}
            <Intro />
            
            {/* L3: Infinite rolling logos bar */}
            <Partners />
            
            {/* L4: Pipeline Timeline process section */}
            <Journey />
            
            {/* L5: Services dynamic catalog cards */}
            <ServicesGrid />
            
            {/* L6: Target matrix of coordinates section */}
            <WhyUs />
            
            {/* L7: Selected cases showcase */}
            <Cases onQuoteOpen={openQuoteModal} />
            
            {/* L8: Service pipeline detailed delivery stages */}
            <Process />

            {/* L9: Big Yellow bottom CTA banner exactly matching image_0 */}
            <section className="py-16 bg-brand-yellow text-brand-charcoal text-center relative overflow-hidden">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
                  準備好讓默聲幫你打造品牌數位全貌了嗎？
                </h2>
                <div className="text-xs sm:text-sm text-brand-charcoal/85 max-w-xl mx-auto leading-relaxed">
                  不再因外包溝通而無助、不再被無效流量而吞噬預算。我們提供極致品質的網頁與品牌再造，助您建立大器的數字帝國。
                </div>
                
                <div className="pt-2 flex justify-center">
                  <button
                    type="button"
                    onClick={openQuoteModal}
                    className="px-8 py-3.5 bg-brand-charcoal text-brand-yellow hover:bg-brand-slate transition-all font-bold text-xs tracking-wider rounded-xl flex items-center space-x-1.5 shadow"
                  >
                    <span>立即諮詢 ➔</span>
                  </button>
                </div>
              </div>
              
              {/* Soft background aesthetics to give modern touch */}
              <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-black/5 rounded-full blur-3xl pointer-events-none" />
            </section>
          </div>
        )}

        {/* Subpages renderer for details */}
        {currentPage !== 'home' && (
          <div className="bg-white min-h-[50vh]">
            {currentPage === 'cases' ? (
              <Cases onQuoteOpen={openQuoteModal} />
            ) : (
              <SubPages 
                activeTab={activeTab === 'all' ? (currentPage === 'web-design' ? 'overview' : currentPage === 'brand-cis' ? 'overview' : currentPage === 'marketing' ? 'seo' : 'list') : activeTab}
                setActiveTab={setActiveTab}
                openQuoteModal={openQuoteModal}
              />
            )}
          </div>
        )}
      </main>

      {/* Floating consult CTA button to always assist user */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={openQuoteModal}
          className="w-14 h-14 bg-brand-charcoal text-brand-yellow hover:text-white rounded-full flex items-center justify-center transition-all shadow-xl border border-brand-slate/40 group relative"
          title="快速預算估價試算"
        >
          <MessageSquare size={22} className="stroke-[2.5]" />
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-brand-charcoal text-brand-yellow text-[10px] uppercase font-mono font-bold py-1 px-3 rounded-lg border border-brand-slate/30 shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            試算報價估算
          </span>
        </button>
      </div>

      {/* Corporate bottom footer */}
      <Footer 
        setCurrentPage={handlePageChange}
        setActiveTab={setActiveTab}
        openQuoteModal={openQuoteModal}
      />

      {/* Global Interactive Quotation modal wizard */}
      <InstantQuoteModal 
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />

    </div>
  );
}

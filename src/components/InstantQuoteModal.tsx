/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { X, Check, Calculator, Clock, Star, Landmark, ShieldCheck, Mail, Phone, Building, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InstantQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InstantQuoteModal({ isOpen, onClose }: InstantQuoteModalProps) {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState('30-50');
  const [timeline, setTimeline] = useState('immediate');
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesList = [
    { id: 'web-brand', name: '企業品牌形象網站', priceMin: 80000, category: '網頁設計' },
    { id: 'web-shop', name: 'RWD 購物/電商網站', priceMin: 120000, category: '網頁設計' },
    { id: 'web-portal', name: '安全資安級主頁入口', priceMin: 200000, category: '網頁設計' },
    { id: 'brand-logo', name: 'LOGO 視覺再造', priceMin: 45000, category: '品牌識別' },
    { id: 'brand-cis', name: 'CIS 完整識別與延伸應用', priceMin: 90000, category: '品牌識別' },
    { id: 'seo', name: '全站 SEO 搜尋優化', priceMin: 35000, category: '行銷服務' },
    { id: 'sem', name: 'Google/Meta 精準投放', priceMin: 25000, category: '行銷服務' },
    { id: 'video-short', name: 'Reels/Shorts 短影音爆款企劃量產', priceMin: 50000, category: '行銷服務' },
    { id: 'marketing-package', name: '年度整合行銷策略大禮包', priceMin: 150000, category: '行銷服務' },
  ];

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter(s => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const estimatedPrice = useMemo(() => {
    if (selectedServices.length === 0) return { min: 0, max: 0 };
    let sumMin = 0;
    selectedServices.forEach(id => {
      const match = servicesList.find(s => s.id === id);
      if (match) sumMin += match.priceMin;
    });
    // Give a neat discount for multiple choices to encourage engagement
    const discountFactor = selectedServices.length > 2 ? 0.85 : selectedServices.length > 1 ? 0.92 : 1.0;
    const finalMin = Math.round((sumMin * discountFactor) / 1000) * 1000;
    return {
      min: finalMin,
      max: Math.round((finalMin * 1.35) / 1000) * 1000,
    };
  }, [selectedServices]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.contactName || !formData.email || !formData.phone) {
      alert('請填寫所有聯絡的必填欄位！');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetQuote = () => {
    setStep(1);
    setSelectedServices([]);
    setBudget('30-50');
    setTimeline('immediate');
    setFormData({
      companyName: '',
      contactName: '',
      phone: '',
      email: '',
      message: '',
    });
    setIsSubmitted(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-charcoal/85 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="relative w-full max-w-3xl overflow-hidden bg-brand-cream border border-brand-charcoal/10 rounded-2xl shadow-2xl flex flex-col max-h-[92vh]"
      >
        {/* Decorative ambient top bar */}
        <div className="h-2 w-full bg-gradient-to-r from-brand-yellow via-brand-slate to-brand-charcoal" />

        {/* Modal Header */}
        <div className="p-6 border-b border-brand-charcoal/5 flex justify-between items-center bg-brand-cream-dark">
          <div>
            <span className="text-[10px] font-mono tracking-wider text-brand-yellow font-bold uppercase py-1 px-2.5 bg-brand-charcoal text-white rounded-md">
              Instant Estimate Builder
            </span>
            <h2 className="text-xl font-bold text-brand-charcoal mt-2 tracking-tight">智能線上專案預算估算</h2>
          </div>
          <button 
            type="button" 
            onClick={onClose} 
            className="p-1.5 rounded-full hover:bg-brand-charcoal/5 transition-colors text-brand-gray hover:text-brand-charcoal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="px-8 py-3 bg-brand-cream border-b border-brand-charcoal/5 flex justify-between items-center text-xs font-mono font-medium">
          <div className="flex items-center space-x-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center border ${step >= 1 ? 'bg-brand-charcoal text-brand-yellow border-brand-charcoal' : 'border-brand-gray/30 text-brand-gray'}`}>1</span>
            <span className={step >= 1 ? 'text-brand-charcoal font-bold' : 'text-brand-gray'}>需求選擇</span>
          </div>
          <div className="w-12 h-px bg-brand-gray/20" />
          <div className="flex items-center space-x-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center border ${step >= 2 ? 'bg-brand-charcoal text-brand-yellow border-brand-charcoal' : 'border-brand-gray/30 text-brand-gray'}`}>2</span>
            <span className={step >= 2 ? 'text-brand-charcoal font-bold' : 'text-brand-gray'}>時程與預算</span>
          </div>
          <div className="w-12 h-px bg-brand-gray/20" />
          <div className="flex items-center space-x-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center border ${step >= 3 ? 'bg-brand-charcoal text-brand-yellow border-brand-charcoal' : 'border-brand-gray/30 text-brand-gray'}`}>3</span>
            <span className={step >= 3 ? 'text-brand-charcoal font-bold' : 'text-brand-gray'}>聯絡諮詢</span>
          </div>
        </div>

        {/* Main Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {isSubmitted ? (
            <div className="text-center py-12 px-4 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-brand-yellow/15 flex items-center justify-center text-brand-yellow mb-6">
                <Check size={36} className="stroke-[3]" />
              </div>
              <h3 className="text-2xl font-bold text-brand-charcoal">您的報價需求已完美送達！</h3>
              <p className="text-brand-gray text-sm mt-3 max-w-md mx-auto leading-relaxed">
                感謝您對 <strong>默聲設計</strong> 的青睞。我們的專屬顧問陳先生 (或資深企劃專員) 將在 24 小時之內 (不含假日) 與您取得聯繫，為您進行免費的一對一需求剖析。
              </p>
              
              {selectedServices.length > 0 && (
                <div className="mt-8 bg-brand-cream-dark p-6 rounded-xl border border-brand-charcoal/5 text-left w-full max-w-md">
                  <div className="text-xs font-mono text-brand-gray uppercase tracking-wider mb-2">估算需求明細</div>
                  <div className="text-sm font-bold text-brand-charcoal mb-4">
                    已選 {selectedServices.length} 項服務
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-brand-charcoal/5 font-mono text-sm">
                    <span className="text-brand-gray">網頁線上預估區間</span>
                    <span className="font-bold text-brand-yellow bg-brand-charcoal px-2 py-1 rounded text-xs">
                      NT$ {estimatedPrice.min.toLocaleString()} ~ {estimatedPrice.max.toLocaleString()}
                    </span>
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={resetQuote}
                className="mt-8 px-6 py-2.5 bg-brand-charcoal text-brand-yellow hover:bg-brand-slate text-sm font-bold tracking-wider rounded-xl transition-all"
              >
                再次估算需求
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Step 1: Services Selection */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h4 className="text-base font-bold text-brand-charcoal">第一步：勾選您需要的服務內容</h4>
                      <p className="text-xs text-brand-gray mt-1">支持多選，系統將啟動智能套餐折扣計算。</p>
                    </div>
                    {selectedServices.length > 0 && (
                      <div className="bg-brand-charcoal text-brand-yellow px-4 py-2 rounded-xl text-right shrink-0">
                        <div className="text-[10px] uppercase font-mono tracking-widest text-brand-gray">線上預估價</div>
                        <div className="text-sm font-bold">
                          NT$ {estimatedPrice.min.toLocaleString()} ~ {estimatedPrice.max.toLocaleString()}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-4">
                    {/* Web Design category */}
                    <div className="md:col-span-2 text-xs font-bold text-brand-gray/80 pb-1 border-b border-brand-charcoal/5 uppercase tracking-wider font-mono">
                      網頁設計 & 系統開發
                    </div>
                    {servicesList.filter(s => s.category === '網頁設計').map(s => {
                      const isSelected = selectedServices.includes(s.id);
                      return (
                        <div 
                          key={s.id}
                          onClick={() => toggleService(s.id)}
                          className={`p-4 rounded-xl border transition-all cursor-pointer flex justify-between items-center ${isSelected ? 'bg-brand-yellow-light border-brand-yellow shadow-sm' : 'bg-white hover:bg-brand-cream-dark border-brand-charcoal/5'}`}
                        >
                          <div>
                            <div className="text-sm font-bold text-brand-charcoal">{s.name}</div>
                            <div className="text-xs text-brand-gray mt-1 font-mono">起估：NT$ {s.priceMin.toLocaleString()}</div>
                          </div>
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${isSelected ? 'bg-brand-charcoal text-brand-yellow border-brand-charcoal' : 'border-brand-gray/30 bg-white'}`}>
                            {isSelected && <Check size={12} className="stroke-[3]" />}
                          </div>
                        </div>
                      );
                    })}

                    {/* Brand CIS category */}
                    <div className="md:col-span-2 text-xs font-bold text-brand-gray/80 pt-4 pb-1 border-b border-brand-charcoal/5 uppercase tracking-wider font-mono">
                      品牌再造 & 視覺識別 (CIS)
                    </div>
                    {servicesList.filter(s => s.category === '品牌識別').map(s => {
                      const isSelected = selectedServices.includes(s.id);
                      return (
                        <div 
                          key={s.id}
                          onClick={() => toggleService(s.id)}
                          className={`p-4 rounded-xl border transition-all cursor-pointer flex justify-between items-center ${isSelected ? 'bg-brand-yellow-light border-brand-yellow shadow-sm' : 'bg-white hover:bg-brand-cream-dark border-brand-charcoal/5'}`}
                        >
                          <div>
                            <div className="text-sm font-bold text-brand-charcoal">{s.name}</div>
                            <div className="text-xs text-brand-gray mt-1 font-mono">起估：NT$ {s.priceMin.toLocaleString()}</div>
                          </div>
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${isSelected ? 'bg-brand-charcoal text-brand-yellow border-brand-charcoal' : 'border-brand-gray/30 bg-white'}`}>
                            {isSelected && <Check size={12} className="stroke-[3]" />}
                          </div>
                        </div>
                      );
                    })}

                    {/* Marketing category */}
                    <div className="md:col-span-2 text-xs font-bold text-brand-gray/80 pt-4 pb-1 border-b border-brand-charcoal/5 uppercase tracking-wider font-mono">
                      客製行銷、SEO 廣告與短影音
                    </div>
                    {servicesList.filter(s => s.category === '行銷服務').map(s => {
                      const isSelected = selectedServices.includes(s.id);
                      return (
                        <div 
                          key={s.id}
                          onClick={() => toggleService(s.id)}
                          className={`p-4 rounded-xl border transition-all cursor-pointer flex justify-between items-center ${isSelected ? 'bg-brand-yellow-light border-brand-yellow shadow-sm' : 'bg-white hover:bg-brand-cream-dark border-brand-charcoal/5'}`}
                        >
                          <div>
                            <div className="text-sm font-bold text-brand-charcoal">{s.name}</div>
                            <div className="text-xs text-brand-gray mt-1 font-mono">起估：NT$ {s.priceMin.toLocaleString()}</div>
                          </div>
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${isSelected ? 'bg-brand-charcoal text-brand-yellow border-brand-charcoal' : 'border-brand-gray/30 bg-white'}`}>
                            {isSelected && <Check size={12} className="stroke-[3]" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Budget and Timeline */}
              {step === 2 && (
                <div className="space-y-8">
                  <div>
                    <h4 className="text-base font-bold text-brand-charcoal">第二步：設定您的專案預估預算與預期時程</h4>
                    <p className="text-xs text-brand-gray mt-1">讓我們能精確為您挑選並安排最切合需求的專案顧問及客製框架。</p>
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-brand-charcoal flex items-center space-x-2">
                      <Landmark size={16} className="text-brand-yellow" />
                      <span>預期投入的專案整體概算：</span>
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { id: 'under-10', label: 'NT$ 10 萬以下', desc: '適用輕量級或試水溫' },
                        { id: '10-30', label: 'NT$ 10 ~ 30 萬', desc: '典型品牌再造基本款' },
                        { id: '30-50', label: 'NT$ 30 ~ 50 萬', desc: '完整全站規劃/常規行銷' },
                        { id: 'above-50', label: 'NT$ 50 萬以上', desc: '旗艦級電商與全套定位' },
                      ].map(b => (
                        <div
                          key={b.id}
                          onClick={() => setBudget(b.id)}
                          className={`p-3.5 rounded-xl border cursor-pointer text-center transition-all ${budget === b.id ? 'bg-brand-charcoal text-brand-yellow border-brand-charcoal' : 'bg-white hover:bg-brand-cream-dark border-brand-charcoal/5'}`}
                        >
                          <div className="text-sm font-bold">{b.label}</div>
                          <div className={`text-[10px] mt-1 ${budget === b.id ? 'text-brand-yellow-light/70' : 'text-brand-gray'}`}>{b.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline Selector */}
                  <div className="space-y-3 pt-4">
                    <label className="text-sm font-bold text-brand-charcoal flex items-center space-x-2">
                      <Clock size={16} className="text-brand-yellow" />
                      <span>預計什麼時候開案啟動：</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {[
                        { id: 'immediate', label: '即刻啟動', desc: '需求明確，期望在一個月內召開點對點會議' },
                        { id: '1-3months', label: '2-3 個月內', desc: '正進行前置資料收集與提案階段' },
                        { id: 'undecided', label: '目前僅做市場行情評估', desc: '尚無明確時間表，主要為預算參考' },
                      ].map(t => (
                        <div
                          key={t.id}
                          onClick={() => setTimeline(t.id)}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${timeline === t.id ? 'bg-brand-charcoal text-brand-yellow border-brand-charcoal' : 'bg-white hover:bg-brand-cream-dark border-brand-charcoal/5'}`}
                        >
                          <div className="text-sm font-bold">{t.label}</div>
                          <div className={`text-xs mt-1 leading-relaxed ${timeline === t.id ? 'text-brand-yellow-light/70' : 'text-brand-gray'}`}>{t.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Details */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-base font-bold text-brand-charcoal">第三步：留下您的基本聯絡方式</h4>
                    <p className="text-xs text-brand-gray mt-1">我們極度尊重隱私，您的資料僅供 默聲設計 評估本專案使用，絕對不對外公開發佈或提供他用。</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-brand-charcoal flex items-center space-x-1.5">
                        <Building size={14} className="text-brand-gray" />
                        <span>公司名稱 / 組織法人 <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="例：台灣蕎麥農創股份有限公司"
                        className="w-full px-4 py-2.5 bg-white border border-brand-charcoal/10 rounded-xl text-sm focus:outline-none focus:border-brand-yellow transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-brand-charcoal flex items-center space-x-1.5">
                        <User size={14} className="text-brand-gray" />
                        <span>聯絡人姓名 <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        required
                        value={formData.contactName}
                        onChange={handleInputChange}
                        placeholder="例：王小明 經理"
                        className="w-full px-4 py-2.5 bg-white border border-brand-charcoal/10 rounded-xl text-sm focus:outline-none focus:border-brand-yellow transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-brand-charcoal flex items-center space-x-1.5">
                        <Phone size={14} className="text-brand-gray" />
                        <span>聯絡電話 <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="例：0912-345678"
                        className="w-full px-4 py-2.5 bg-white border border-brand-charcoal/10 rounded-xl text-sm focus:outline-none focus:border-brand-yellow transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-brand-charcoal flex items-center space-x-1.5">
                        <Mail size={14} className="text-brand-gray" />
                        <span>電子郵件 Email <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="例：hannah@company.com"
                        className="w-full px-4 py-2.5 bg-white border border-brand-charcoal/10 rounded-xl text-sm focus:outline-none focus:border-brand-yellow transition-all"
                      />
                    </div>

                    <div className="space-y-1.5 md:col-span-2">
                      <label className="text-xs font-bold text-brand-charcoal">補充說明 / 描述您的具體需求</label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="例：我們希望為明年中秋檔期推出新包裝，並建立一個快速收款的一頁電商網頁，預期有中英雙語版本..."
                        className="w-full px-4 py-2.5 bg-white border border-brand-charcoal/10 rounded-xl text-sm focus:outline-none focus:border-brand-yellow transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Summary recap inside step 3 */}
                  <div className="bg-brand-cream-dark p-4 rounded-xl border border-brand-charcoal/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs leading-relaxed text-brand-gray">
                    <div>
                      <span className="font-bold text-brand-charcoal">估算摘要：</span> 
                      已選擇 {selectedServices.length || '0'} 項服務。 預算區間：
                      <span className="font-bold text-brand-charcoal"> {budget === 'under-10' ? '10萬以下' : budget === '10-30' ? '10~30萬' : budget === '30-50' ? '30~50萬' : '50萬以上'}</span>。
                    </div>
                    {selectedServices.length > 0 && (
                      <div className="font-mono text-xs font-bold text-brand-charcoal bg-white border border-brand-charcoal/5 px-2.5 py-1 rounded">
                        預計：NT$ {estimatedPrice.min.toLocaleString()}~{estimatedPrice.max.toLocaleString()}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Navigation buttons inside modal */}
              <div className="mt-8 pt-4 border-t border-brand-charcoal/5 flex justify-between items-center bg-brand-cream">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-5 py-2 border border-brand-charcoal/10 rounded-xl font-bold bg-white text-brand-charcoal hover:bg-brand-cream-dark text-xs transition-colors"
                  >
                    上一步
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => {
                      if (step === 1 && selectedServices.length === 0) {
                        alert('如欲獲得估算，請至少勾選一項需要的服務，或直接點選下一步填寫聯絡資料！');
                      }
                      setStep(step + 1);
                    }}
                    className="px-6 py-2.5 bg-brand-charcoal text-brand-yellow hover:bg-brand-slate text-xs font-bold tracking-wider rounded-xl transition-colors flex items-center space-x-1"
                  >
                    <span>繼續下一步</span>
                    <span>➔</span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 bg-brand-yellow text-brand-charcoal hover:bg-brand-yellow/98 text-xs font-bold tracking-wider rounded-xl transition-all flex items-center space-x-1.5 shadow"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-brand-charcoal border-t-transparent rounded-full animate-spin" />
                        <span>傳送中...</span>
                      </>
                    ) : (
                      <>
                        <span>送出需求諮詢</span>
                        <span>➔</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}

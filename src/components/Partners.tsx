/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flame, Anchor, ShieldAlert, BadgePlus, Building2, Layers, Lightbulb, Hexagon } from 'lucide-react';

export default function Partners() {
  const partners = [
    { name: 'SHARP 台灣夏普', icon: <Building2 size={16} /> },
    { name: '必勝客 PIZZA HUT', icon: <Flame size={16} /> },
    { name: 'FPCC 台塑石化', icon: <Layers size={16} /> },
    { name: '長庚醫療財團法人', icon: <BadgePlus size={16} /> },
    { name: '肯司派 CONSULTING', icon: <Lightbulb size={16} /> },
    { name: 'OCEAN ALEXANDER', icon: <Anchor size={16} /> },
    { name: '雙盟海產 BSM MARINE', icon: <Hexagon size={16} /> },
  ];

  // Double list for infinite scroll seamless looping animation
  const scrollingItems = [...partners, ...partners, ...partners];

  return (
    <section className="py-12 bg-brand-cream border-b border-brand-charcoal/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Little header subtitle */}
        <span className="text-[10px] font-mono font-medium uppercase tracking-widest text-brand-gray/80">
          與我們攜手並肩的前行合作夥伴 Our Premium Clients
        </span>

        {/* Outer scrolling container viewport */}
        <div className="relative mt-8 w-full select-none">
          {/* Edge gradient masks to create smooth faded entrances and exits */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-brand-cream to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-brand-cream to-transparent z-10" />

          {/* Infinite Scroll Element Group */}
          <div className="w-full overflow-hidden">
            <div className="animate-infinite-scroll flex space-x-12 items-center py-2">
              {scrollingItems.map((partner, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2.5 text-brand-charcoal opacity-65 hover:opacity-100 transition-opacity whitespace-nowrap cursor-default"
                >
                  <div className="w-6 h-6 rounded bg-brand-charcoal/5 flex items-center justify-center text-brand-charcoal font-sans">
                    {partner.icon}
                  </div>
                  <span className="font-display font-semibold tracking-tight text-xs md:text-sm uppercase">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

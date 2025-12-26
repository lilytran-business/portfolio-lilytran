
import React from 'react';
import { SectionTitle } from './SectionTitle';
import { TOOLS } from '../constants';

export const Toolkit: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 mb-12">
        <SectionTitle title="The VA Toolkit" align="center" />
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex items-center gap-16 pr-16">
          {TOOLS.concat(TOOLS).map((tool, i) => (
            <div key={i} className="flex items-center gap-4 grayscale hover:grayscale-0 transition-all group flex-shrink-0">
              <img src={tool.icon} alt={tool.name} className="w-10 h-10 object-contain group-hover:scale-110 transition-transform" />
              <span className="text-2xl font-black text-gray-600 group-hover:text-white transition-colors">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

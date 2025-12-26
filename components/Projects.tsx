
import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Layout, Palette, Image as ImageIcon } from 'lucide-react';

export const Projects: React.FC = () => {
  const colorMap: Record<string, string> = {
    blue: "#00FFFF",
    orange: "#FF4500",
    mint: "#00FF7F"
  };

  return (
    <section id="projects" className="py-24 halftone-bg">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Execution Chronicles" 
          subtitle="A visual breakdown of strategy and results."
        />

        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className="bg-white pop-border hard-shadow-dark overflow-hidden group">
              {/* Project Header */}
              <div className="bg-[#1A1A1A] p-6 flex justify-between items-center">
                 <h3 className="text-2xl font-black text-white uppercase tracking-widest">{project.title}</h3>
                 <span className="accent-font text-xl" style={{ color: colorMap[project.color] }}>Project 0{index + 1}</span>
              </div>

              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-12 gap-12">
                  {/* Left Column: Stats & Meta */}
                  <div className="lg:col-span-4 space-y-10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 px-4 py-1 bg-[#F5F5F0] pop-border font-black text-xs uppercase tracking-widest w-fit">
                         <Layout size={14} /> Overview
                      </div>
                      <p className="text-[#4A4A4A] font-bold text-sm leading-relaxed">
                        {project.plot}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 px-4 py-1 bg-[#F5F5F0] pop-border font-black text-xs uppercase tracking-widest w-fit">
                         <Palette size={14} /> Brand Color
                      </div>
                      <div className="flex gap-3">
                         <div className="w-12 h-12 pop-border" style={{ backgroundColor: colorMap[project.color] }} />
                         <div className="w-12 h-12 pop-border bg-[#1A1A1A]" />
                         <div className="w-12 h-12 pop-border bg-[#F5F5F0]" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 px-4 py-1 bg-[#F5F5F0] pop-border font-black text-xs uppercase tracking-widest w-fit">
                         <ImageIcon size={14} /> Highlights
                      </div>
                      <div className="bg-[#1A1A1A] text-white p-6 pop-border hard-shadow-mint">
                         <p className="accent-font text-2xl text-[#00FF7F] mb-2">{project.result}</p>
                         <p className="text-[10px] uppercase font-black tracking-widest opacity-70">Verified Outcome</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visuals */}
                  <div className="lg:col-span-8 space-y-8">
                    <div className="relative aspect-video pop-border overflow-hidden bg-[#F5F5F0]">
                      <img 
                        src={`https://picsum.photos/seed/${project.id}/1200/800`} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 opacity-10 halftone-bg pointer-events-none"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                       {[1,2,3,4].map(n => (
                         <div key={n} className="aspect-square pop-border overflow-hidden bg-white">
                            <img src={`https://picsum.photos/seed/${project.id}-v${n}/400/400`} className="w-full h-full object-cover grayscale" />
                         </div>
                       ))}
                    </div>

                    <div className="p-8 bg-[#F5F5F0] pop-border">
                       <h5 className="font-black text-[#1A1A1A] mb-3 uppercase tracking-widest">Strategy Sequence:</h5>
                       <p className="text-gray-600 font-bold leading-relaxed italic">
                         "{project.strategy}"
                       </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t-2 border-[#1A1A1A] flex justify-end">
                 <a 
                   href={`#/project/${project.id}`}
                   className="flex items-center gap-2 font-black text-[#1A1A1A] hover:text-[#FF4500] transition-colors group px-6 py-2 pop-border hard-shadow-dark bg-white"
                 >
                    FULL CASE STUDY <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

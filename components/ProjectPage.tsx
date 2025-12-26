
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowLeft, CheckCircle2, Zap, Layout, Target, BarChart3 } from 'lucide-react';

interface ProjectPageProps {
  id: string;
}

export const ProjectPage: React.FC<ProjectPageProps> = ({ id }) => {
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32 halftone-bg">
        <div className="text-center">
          <h1 className="text-6xl font-black mb-4">Project Not Found</h1>
          <a href="#/" className="text-[#FF4500] font-black text-xl hover:underline uppercase tracking-widest">Back to Base</a>
        </div>
      </div>
    );
  }

  const colorMap: Record<string, string> = {
    blue: "#00FFFF",
    orange: "#FF4500",
    mint: "#00FF7F"
  };

  const accentColor = colorMap[project.color];

  return (
    <div className="min-h-screen pt-32 pb-24 halftone-bg">
      <div className="container mx-auto px-6">
        {/* Back Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <a href="#/" className="inline-flex items-center gap-2 px-6 py-2 bg-white pop-border hard-shadow-dark font-black text-sm uppercase tracking-widest hover:-translate-y-1 hover:translate-x-1 transition-all">
            <ArrowLeft size={16} /> Return to Chronicles
          </a>
        </motion.div>

        {/* Project Hero */}
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8"
          >
            <div 
              className="inline-block px-4 py-1 text-black font-black text-xs uppercase tracking-[0.3em] mb-6 pop-border rotate-[-1deg]"
              style={{ backgroundColor: accentColor }}
            >
              Case Study // {project.tag}
            </div>
            <h1 className="text-6xl lg:text-8xl font-black leading-none mb-6 text-[#1A1A1A] tracking-tighter uppercase">
              {project.title}
            </h1>
            <p className="text-2xl lg:text-3xl font-bold text-gray-500 italic">"{project.subtitle}"</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="p-8 bg-white pop-border hard-shadow-dark -rotate-3">
              <p className="accent-font text-5xl text-[#1A1A1A] mb-2">{project.result}</p>
              <p className="text-xs font-black uppercase tracking-widest text-[#FF4500]">Quantified Success</p>
            </div>
          </motion.div>
        </div>

        {/* Main Case Study Content */}
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-16">
            {/* The Plot */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1A1A1A] flex items-center justify-center text-white pop-border shadow-[4px_4px_0px_#FF4500]">
                  <Target size={24} />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter">The Plot (Challenge)</h2>
              </div>
              <p className="text-xl text-[#4A4A4A] leading-relaxed font-medium">
                {project.plot}
              </p>
              <div className="p-8 bg-white pop-border hard-shadow-mint">
                <p className="text-sm font-bold text-gray-500 italic uppercase mb-2">Internal Assessment:</p>
                <p className="text-lg font-black text-[#1A1A1A]">
                  "The gap between a 'million-dollar idea' and operational reality was vast, threatening the scalability of the entire enterprise."
                </p>
              </div>
            </motion.section>

            {/* The Strategy */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1A1A1A] flex items-center justify-center text-white pop-border shadow-[4px_4px_0px_#00FFFF]">
                  <Layout size={24} />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter">The Strategy (Execution)</h2>
              </div>
              <div className="text-xl text-[#4A4A4A] leading-relaxed space-y-6">
                <p>{project.strategy}</p>
                <ul className="space-y-4">
                   <li className="flex gap-4 p-4 bg-[#F5F5F0] pop-border border-l-[12px] border-l-[#00FFFF]">
                      <div className="mt-1 text-[#1A1A1A]"><CheckCircle2 size={20} /></div>
                      <span className="font-black text-sm uppercase tracking-wide">Phase 1: Standardization & Audit</span>
                   </li>
                   <li className="flex gap-4 p-4 bg-[#F5F5F0] pop-border border-l-[12px] border-l-[#FF4500]">
                      <div className="mt-1 text-[#1A1A1A]"><CheckCircle2 size={20} /></div>
                      <span className="font-black text-sm uppercase tracking-wide">Phase 2: Digital Ecosystem Launch</span>
                   </li>
                   <li className="flex gap-4 p-4 bg-[#F5F5F0] pop-border border-l-[12px] border-l-[#00FF7F]">
                      <div className="mt-1 text-[#1A1A1A]"><CheckCircle2 size={20} /></div>
                      <span className="font-black text-sm uppercase tracking-wide">Phase 3: High-Frequency Optimization</span>
                   </li>
                </ul>
              </div>
            </motion.section>

            {/* Visual Gallery */}
            <section className="space-y-8">
               <h2 className="text-3xl font-black uppercase tracking-tighter flex items-center gap-3">
                 <Zap className="text-[#FF4500]" /> Visual Evidence
               </h2>
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="pop-border hard-shadow-dark bg-white overflow-hidden aspect-video relative group">
                   <img src={`https://picsum.photos/seed/${id}-gal1/800/600`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                   <div className="absolute top-4 left-4 bg-[#1A1A1A] text-white px-2 py-1 text-[10px] font-black uppercase">Asset_01</div>
                 </div>
                 <div className="pop-border hard-shadow-dark bg-white overflow-hidden aspect-video relative group">
                   <img src={`https://picsum.photos/seed/${id}-gal2/800/600`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                   <div className="absolute top-4 left-4 bg-[#1A1A1A] text-white px-2 py-1 text-[10px] font-black uppercase">Asset_02</div>
                 </div>
                 <div className="md:col-span-2 pop-border hard-shadow-dark bg-white overflow-hidden aspect-[21/9] relative group">
                   <img src={`https://picsum.photos/seed/${id}-gal3/1200/500`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                   <div className="absolute top-4 left-4 bg-[#1A1A1A] text-white px-2 py-1 text-[10px] font-black uppercase">Full_Ecosystem_View</div>
                 </div>
               </div>
            </section>
          </div>

          <div className="lg:col-span-5 space-y-12">
            {/* Tools Stack */}
            <div className="bg-[#1A1A1A] p-10 pop-border hard-shadow-mint text-white">
               <h3 className="text-2xl font-black mb-8 border-b-2 border-white/20 pb-4 uppercase italic">Project Toolkit</h3>
               <div className="grid grid-cols-2 gap-6">
                  {["HubSpot", "Meta Ads", "Google Ads", "Power BI"].map((tool) => (
                    <div key={tool} className="flex items-center gap-3 p-3 bg-white/10 pop-border border-white/20 hover:bg-white/20 transition-all">
                       <Zap size={14} className="text-[#00FF7F]" />
                       <span className="font-bold text-xs uppercase tracking-widest">{tool}</span>
                    </div>
                  ))}
               </div>
            </div>

            {/* Results Deep Dive */}
            <div className="bg-white p-10 pop-border hard-shadow-orange space-y-8">
               <div className="flex items-center gap-3">
                 <BarChart3 className="text-[#FF4500]" size={32} />
                 <h3 className="text-2xl font-black uppercase tracking-tighter">Final Outcome</h3>
               </div>
               <div className="space-y-6">
                  <div className="border-l-4 border-l-[#FF4500] pl-6">
                     <p className="text-5xl font-black text-[#1A1A1A]">{project.result}</p>
                     <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">Growth Metric Achieved</p>
                  </div>
                  <p className="text-lg font-bold text-[#4A4A4A] leading-relaxed italic">
                    "I successfully built an investor pipeline attracting qualified prospects from multiple continents, reactivating organic flows that had been dormant for months."
                  </p>
               </div>
            </div>

            {/* CTA */}
            <div className="bg-[#00FFFF] p-12 pop-border hard-shadow-dark text-center space-y-6">
               <h4 className="text-2xl font-black uppercase">Ready for these results?</h4>
               <p className="font-bold text-[#1A1A1A]">Let's duplicate this success for your business model.</p>
               <a href="#contact" className="block w-full py-4 bg-[#1A1A1A] text-white font-black uppercase tracking-widest pop-border hover:-translate-y-1 transition-all">
                  Start Execution
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

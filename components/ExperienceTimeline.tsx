
import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { EXPERIENCES } from '../constants';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <SectionTitle 
              title="Work Journey" 
              subtitle="The evolution of an execution-first professional."
            />
            <div className="accent-font text-4xl text-[#00FFFF] mt-10 rotate-[-10deg]">
              Expertise Unlocked
            </div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-12 border-l-4 border-[#1A1A1A] pb-10"
              >
                {/* Timeline Pin */}
                <div className="absolute -left-[14px] top-0 w-6 h-6 bg-[#FF4500] pop-border rounded-full" />
                
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h3 className="text-3xl font-black text-[#1A1A1A] uppercase tracking-tighter">{exp.role}</h3>
                    <div className="px-4 py-1 bg-[#1A1A1A] text-white font-black text-xs uppercase tracking-widest rotate-2">
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-[#00FFFF] font-black uppercase text-sm tracking-widest bg-[#1A1A1A] w-fit px-3 py-0.5">
                    <Briefcase size={14} />
                    {exp.company}
                  </div>
                  
                  <p className="text-[#4A4A4A] font-bold text-lg leading-relaxed">
                    {exp.summary}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 pt-4">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-[#F5F5F0] pop-border group hover:bg-[#00FF7F] transition-colors">
                        <div className="mt-1 text-[#1A1A1A]"><CheckCircle2 size={14} /></div>
                        <span className="text-sm font-black text-[#1A1A1A] leading-tight">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

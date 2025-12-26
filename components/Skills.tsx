
import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { SKILLS } from '../constants';
import { Zap } from 'lucide-react';

export const Skills: React.FC = () => {
  const colorMap: Record<string, string> = {
    blue: "#00FFFF",
    orange: "#FF4500",
    mint: "#00FF7F"
  };

  return (
    <section id="skills" className="py-24 bg-[#F5F5F0] border-y-4 border-[#1A1A1A]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <SectionTitle 
            title="The Multiverse" 
            subtitle="My core dimensions of execution and digital growth."
          />
          <div className="accent-font text-3xl text-[#FF4500] rotate-[-5deg] mb-12">
            Skill Stack v2.5
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {SKILLS.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white pop-border hard-shadow-dark p-10 group hover:-translate-y-2 transition-all"
            >
              <div 
                className="w-16 h-16 pop-border flex items-center justify-center mb-8 text-[#1A1A1A] group-hover:rotate-12 transition-transform"
                style={{ backgroundColor: colorMap[skill.color] }}
              >
                {skill.icon}
              </div>
              
              <h3 className="text-2xl font-black mb-3 uppercase tracking-tighter">{skill.title}</h3>
              <p className="font-bold text-gray-500 mb-8 text-sm italic">"{skill.description}"</p>
              
              <ul className="space-y-3">
                {skill.strengths.map((str, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-black text-[#1A1A1A]">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colorMap[skill.color] }} />
                    {str}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

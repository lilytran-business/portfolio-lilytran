
import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { Globe, ShieldCheck, Zap, Mail, Linkedin, Instagram } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full aspect-square pop-border hard-shadow-orange bg-[#F5F5F0] overflow-hidden mb-8"
            >
               <img src="https://picsum.photos/seed/va-intro/800/800" className="w-full h-full object-cover grayscale" alt="Intro" />
            </motion.div>
            
            <div className="w-full space-y-4">
               <h2 className="text-5xl font-black text-[#1A1A1A]">I'm the <br/>Solution.</h2>
               <p className="accent-font text-2xl text-[#FF4500]">A High-Execution Specialist</p>
               
               <div className="pt-8 space-y-4">
                  <h4 className="text-xl font-black uppercase tracking-widest border-b-2 border-[#1A1A1A] pb-2">Contact</h4>
                  <div className="space-y-3">
                    <a href="mailto:hello@va-exec.com" className="flex items-center gap-3 text-lg font-bold hover:text-[#00FFFF] transition-colors">
                      <Mail size={20} className="text-[#FF4500]" /> hello@va-exec.com
                    </a>
                    <a href="#" className="flex items-center gap-3 text-lg font-bold hover:text-[#00FFFF] transition-colors">
                      <Linkedin size={20} className="text-[#00FFFF]" /> @va_execution
                    </a>
                    <a href="#" className="flex items-center gap-3 text-lg font-bold hover:text-[#00FFFF] transition-colors">
                      <Instagram size={20} className="text-[#00FF7F]" /> @va_life
                    </a>
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <SectionTitle 
              title="The Exporter of Solutions" 
              subtitle="Bridging Worlds: From International Business Classrooms to the Digital Battlefield."
            />
            
            <div className="space-y-8 text-lg text-[#4A4A4A] leading-relaxed">
              <p>
                I began my journey with maps of global trade, where <span className="text-[#1A1A1A] font-black underline decoration-[#00FF7F] decoration-4">numerical precision</span> and strict process compliance were non-negotiable. But I soon realized that in today’s flat world, the most valuable ‘commodity’ is <span className="text-[#FF4500] font-black uppercase tracking-widest">execution power.</span>
              </p>
              
              <p>
                With solid experience in Marketing Communications, I don’t just see numbers — I see the stories behind them. I deeply understand the pain operators face when they have a global vision, yet remain trapped in the chaos of internal operations.
              </p>

              <div className="bg-[#FDFDF5] pop-border hard-shadow-mint p-8 relative">
                <p className="italic font-bold text-xl text-[#1A1A1A]">
                  "I chose to become a high-execution VA because I love the process of ‘logisticizing’ creativity: turning vague content ideas into automated lead funnels."
                </p>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FF4500] pop-border flex items-center justify-center text-white rotate-12">
                   <Zap size={24} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 pt-8">
                <div className="space-y-4">
                   <h4 className="text-xl font-black uppercase tracking-widest bg-[#1A1A1A] text-white inline-block px-4 py-1">Education</h4>
                   <ul className="space-y-4">
                      <li>
                        <p className="font-black text-[#1A1A1A]">International Business Major</p>
                        <p className="text-sm font-bold text-[#FF4500]">Numerical Precision & Compliance</p>
                      </li>
                      <li>
                        <p className="font-black text-[#1A1A1A]">Marketing Communication</p>
                        <p className="text-sm font-bold text-[#00FFFF]">Creative Strategy & Digital Ops</p>
                      </li>
                   </ul>
                </div>
                <div className="space-y-4">
                   <h4 className="text-xl font-black uppercase tracking-widest bg-[#00FF7F] text-[#1A1A1A] inline-block px-4 py-1">Key Values</h4>
                   <ul className="space-y-3 font-bold text-[#1A1A1A]">
                      <li className="flex gap-2"><div className="mt-2 w-2 h-2 bg-[#FF4500]"/> Standardized Workflows</li>
                      <li className="flex gap-2"><div className="mt-2 w-2 h-2 bg-[#00FFFF]"/> Performance Accountability</li>
                      <li className="flex gap-2"><div className="mt-2 w-2 h-2 bg-[#00FF7F]"/> AI-Driven Speed</li>
                   </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

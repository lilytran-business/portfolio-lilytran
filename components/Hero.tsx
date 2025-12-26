
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight, Zap, Cpu, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const rotate = useTransform(scrollY, [0, 500], [0, 10]);

  const pillars = [
    "Operations Management & CRM",
    "Digital Marketing & SEO",
    "AI Workflow Automation"
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden halftone-bg">
      {/* Decorative Background Shapes */}
      <motion.div 
        style={{ y: y1, rotate: 15 }}
        className="absolute top-40 -left-20 w-80 h-80 border-4 border-[#1A1A1A] bg-[#00FFFF] opacity-20 hidden lg:block"
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-64 h-64 border-4 border-[#1A1A1A] bg-[#FF4500] opacity-10 rounded-full hidden lg:block"
      />

      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <div className="inline-block px-6 py-2 bg-[#00FF7F] pop-border hard-shadow-dark font-black text-sm uppercase tracking-[0.2em] mb-10 -rotate-2">
            HIGH-EXECUTION VA
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black leading-[1] mb-8 tracking-tighter text-[#1A1A1A]">
            I'm the <span className="text-[#FF4500]">Link</span> <br />
            You Need To <span className="text-[#00FFFF]">Scale</span>.
          </h1>
          
          <div className="space-y-4 mb-12">
            {pillars.map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="flex items-center gap-3 group"
              >
                <div className="w-6 h-6 bg-[#1A1A1A] flex items-center justify-center text-[#00FF7F] group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={16} />
                </div>
                <p className="text-xl text-[#1A1A1A] font-bold tracking-tight">{pillar}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#projects" className="px-10 py-5 bg-[#FF4500] text-white pop-border hard-shadow-dark font-black text-lg flex items-center justify-center gap-3 group transition-all hover:-translate-y-1 hover:translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-none">
              VIEW PROJECTS <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-10 py-5 bg-white text-[#1A1A1A] pop-border hard-shadow-dark font-black text-lg flex items-center justify-center transition-all hover:-translate-y-1 hover:translate-x-1">
              LET'S TALK
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative z-10 p-4 bg-white pop-border hard-shadow-dark rotate-3 group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1000" 
              alt="Profile" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
            />
            {/* Pop Art Overlay */}
            <div className="absolute inset-0 opacity-20 halftone-bg pointer-events-none"></div>
            
            <div className="absolute -bottom-6 -right-6 px-6 py-4 bg-[#00FFFF] pop-border hard-shadow-dark rotate-[-6deg]">
               <h4 className="font-black text-xl italic text-[#1A1A1A]">STATUS: READY</h4>
            </div>
          </div>

          {/* Floating Element */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-10 -left-10 w-24 h-24 bg-[#00FF7F] pop-border hard-shadow-dark flex items-center justify-center z-20 -rotate-12"
          >
            <Zap className="text-[#1A1A1A]" size={40} />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#1A1A1A]">
        <span className="accent-font text-lg">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>
    </section>
  );
};

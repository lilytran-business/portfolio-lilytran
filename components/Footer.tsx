
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Linkedin, Mail, Twitter, Instagram, ArrowRight, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 bg-[#F5F5F0] relative overflow-hidden border-t-4 border-[#1A1A1A]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 mb-24">
          <div>
            <h2 className="text-6xl lg:text-8xl font-black mb-10 leading-none text-[#1A1A1A]">
              Let's <br />
              <span className="text-[#FF4500]">Scale</span> <br />
              Together.
            </h2>
            <p className="text-xl text-[#4A4A4A] font-bold mb-12 max-w-md italic">
              "Efficiency is my native language. I turn operational chaos into digital-first systems."
            </p>

            <div className="flex flex-wrap gap-10">
              <a href="mailto:hello@va-exec.com" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-white pop-border hard-shadow-dark flex items-center justify-center text-[#FF4500] group-hover:bg-[#FF4500] group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase font-black text-gray-400">Email Me</p>
                  <p className="text-lg font-black text-[#1A1A1A] group-hover:text-[#FF4500] transition-colors">hello@va-exec.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-14 h-14 bg-white pop-border hard-shadow-dark flex items-center justify-center text-[#00FFFF] group-hover:bg-[#00FFFF] group-hover:text-[#1A1A1A] transition-all">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase font-black text-gray-400">Network</p>
                  <p className="text-lg font-black text-[#1A1A1A] group-hover:text-[#00FFFF] transition-colors">/va-execution</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 pop-border hard-shadow-dark relative"
          >
            <div className="absolute -top-8 -right-8 bg-[#00FF7F] text-[#1A1A1A] p-5 pop-border hard-shadow-dark rotate-12">
               <MessageCircle size={32} />
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-[#1A1A1A] tracking-widest">Name</label>
                  <input type="text" placeholder="John" className="w-full bg-[#F5F5F0] border-2 border-[#1A1A1A] px-4 py-4 focus:bg-white outline-none transition-all font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-[#1A1A1A] tracking-widest">Email</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-[#F5F5F0] border-2 border-[#1A1A1A] px-4 py-4 focus:bg-white outline-none transition-all font-bold" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-[#1A1A1A] tracking-widest">Project Type</label>
                <select className="w-full bg-[#F5F5F0] border-2 border-[#1A1A1A] px-4 py-4 focus:bg-white outline-none transition-all font-black uppercase">
                  <option>Scale Operations</option>
                  <option>Digital Marketing</option>
                  <option>AI Automation</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-[#1A1A1A] tracking-widest">Message</label>
                <textarea rows={4} placeholder="Let's grow..." className="w-full bg-[#F5F5F0] border-2 border-[#1A1A1A] px-4 py-4 focus:bg-white outline-none transition-all font-bold"></textarea>
              </div>
              <button className="w-full py-5 bg-[#FF4500] text-white pop-border hard-shadow-dark font-black text-xl flex items-center justify-center gap-3 hover:-translate-y-1 hover:translate-x-1 transition-all">
                SEND MESSAGE <Send size={22} />
              </button>
            </form>
          </motion.div>
        </div>

        <div className="pt-12 border-t-2 border-[#1A1A1A] flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-black flex items-center gap-2">
            <div className="w-10 h-10 bg-[#1A1A1A] flex items-center justify-center text-[#00FF7F]">
              V
            </div>
            <span className="tracking-tighter text-[#1A1A1A]">VA<span className="text-[#FF4500]">EXEC</span></span>
          </div>
          
          <div className="flex gap-6 text-[#1A1A1A]">
            <a href="#" className="hover:scale-125 transition-transform"><Twitter size={20} /></a>
            <a href="#" className="hover:scale-125 transition-transform"><Instagram size={20} /></a>
            <a href="#" className="hover:scale-125 transition-transform"><Linkedin size={20} /></a>
          </div>

          <p className="text-sm text-[#1A1A1A] font-black uppercase tracking-widest">
            &copy; {new Date().getFullYear()} High-Execution VA.
          </p>
        </div>
      </div>
    </footer>
  );
};

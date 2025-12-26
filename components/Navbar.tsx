
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#/#about' },
    { name: 'Multiverse', href: '#/#skills' },
    { name: 'Chronicles', href: '#/#projects' },
    { name: 'Journey', href: '#/#timeline' },
    { name: 'Contact', href: '#/#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black"
        >
          <a href="#/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#1A1A1A] flex items-center justify-center text-[#00FF7F] pop-border">
              V
            </div>
            <span className="tracking-tighter text-[#1A1A1A]">VA<span className="text-[#FF4500]">EXEC</span></span>
          </a>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-bold text-sm uppercase tracking-widest hover:text-[#FF4500] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#/#contact" className="px-6 py-2.5 bg-[#1A1A1A] text-white hover:bg-[#FF4500] pop-border hard-shadow-mint transition-all font-black text-xs uppercase tracking-widest">
            LET'S WORK
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#1A1A1A]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-[#FDFDF5] border-b-4 border-[#1A1A1A] px-6 py-8"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-xl font-black uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#/#contact" className="w-full text-center px-6 py-4 bg-[#FF4500] text-white pop-border hard-shadow-dark font-black uppercase tracking-widest">
              GET IN TOUCH
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

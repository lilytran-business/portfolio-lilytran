
import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'left' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
        {title.split(' ').map((word, i) => (
          <span key={i} className={i % 2 === 0 ? '' : 'text-gradient-blue'}>
            {word}{' '}
          </span>
        ))}
      </h2>
      {subtitle && <p className="text-xl text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
      <div className={`mt-4 h-1.5 w-24 bg-gradient-to-r from-blue-500 to-mint-500 rounded-full ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </motion.div>
  );
};

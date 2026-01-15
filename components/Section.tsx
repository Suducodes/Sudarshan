import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const Section: React.FC<SectionProps> = ({ id, children, className = "", title, subtitle }) => {
  return (
    <section id={id} className={`min-h-screen w-full flex flex-col justify-center py-20 relative z-10 px-4 sm:px-8 max-w-7xl mx-auto ${className}`}>
      {title && (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 tracking-tight">
            {title} <span className="text-brand-primary">.</span>
          </h2>
          {subtitle && (
            <p className="text-white/60 text-lg md:text-xl max-w-2xl font-light">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}
      
      <div className="w-full">
        {children}
      </div>
    </section>
  );
};
import React from 'react';
import { Home, User, Briefcase, Cpu, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', id: 'home', icon: Home },
  { name: 'About', id: 'about', icon: User },
  { name: 'Research', id: 'research', icon: Briefcase },
  { name: 'Projects', id: 'projects', icon: Cpu },
  { name: 'Connect', id: 'contact', icon: Mail },
];

export const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[90%] sm:max-w-fit">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-panel px-2 py-2 rounded-full flex items-center justify-between sm:justify-center gap-1 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/10 overflow-x-auto"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="relative group px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10 flex items-center gap-2 shrink-0"
          >
            <item.icon size={16} className="text-white/70 group-hover:text-brand-primary transition-colors" />
            <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors hidden sm:block">
              {item.name}
            </span>
            <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
          </button>
        ))}
      </motion.div>
    </div>
  );
};
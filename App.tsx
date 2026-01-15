import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { ThreeBackground } from './components/ThreeBackground.tsx';
import { Section } from './components/Section.tsx';
import { ProjectCard } from './components/ProjectCard.tsx';
import { RESEARCH_PROJECTS, TECH_PROJECTS, SKILLS, EDUCATION } from './constants.ts';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Mail, FileText, Award, Crosshair } from 'lucide-react';

const App: React.FC = () => {
  const { scrollY } = useScroll();
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);
  const scaleHero = useTransform(scrollY, [0, 500], [1, 0.95]);

  return (
    <div className="relative w-full min-h-screen font-sans selection:bg-brand-primary selection:text-brand-dark">
      <Navbar />
      <ThreeBackground />

      {/* Hero Section */}
      <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-0">
        {/* Background Light - Radiating Radial Gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] bg-[radial-gradient(circle_at_center,rgba(0,243,255,0.25)_0%,rgba(0,85,255,0.15)_30%,rgba(5,5,5,0.8)_70%)] z-0 pointer-events-none" />
        
        <motion.div 
          style={{ opacity: opacityHero, scale: scaleHero }}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left Column: Huge Title */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-1 lg:col-span-4 text-center lg:text-left z-0"
          >
             <h2 className="text-xl md:text-2xl font-light text-brand-primary mb-2 tracking-widest uppercase shadow-brand-primary/50 drop-shadow-lg">
                Sudarshan V.
             </h2>
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] text-white">
                Bio<br/>
                <span className="text-white/20">Medical</span><br/>
                Engineer<span className="text-brand-primary drop-shadow-[0_0_15px_rgba(0,243,255,0.8)]">.</span>
             </h1>
          </motion.div>

          {/* Center Column: Cutout Image (No Box) */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="col-span-1 lg:col-span-4 flex justify-center items-end h-[50vh] lg:h-[70vh] relative z-10"
          >
            {/* The image should be a transparent PNG. Using a placeholder here. */}
            <img 
               src="/images/my-photo.png" 
               alt="Sudarshan Vasanthakumar" 
               className="h-full w-auto object-contain drop-shadow-[0_0_60px_rgba(0,243,255,0.25)]"
            />
            
            {/* 3D floating badge element in front of image */}
            <div className="absolute bottom-10 right-0 glass-panel p-4 rounded-xl border border-brand-primary/30 shadow-[0_0_30px_rgba(0,243,255,0.2)] animate-float hidden md:block backdrop-blur-xl">
                <p className="text-xs font-bold text-brand-primary uppercase">Status</p>
                <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span>
                    <span className="text-sm text-white">Open for Research</span>
                </div>
            </div>
          </motion.div>

          {/* Right Column: Description & Actions */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="col-span-1 lg:col-span-4 text-center lg:text-right flex flex-col items-center lg:items-end z-20"
          >
            <p className="text-lg md:text-xl text-white/70 max-w-sm font-light leading-relaxed mb-8">
              Innovating at the intersection of <span className="text-brand-primary font-medium drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">Biology</span> and <span className="text-white font-medium">Technology</span> to create next-generation healthcare solutions.
            </p>

            <div className="flex flex-col gap-4 w-full sm:w-auto">
              <a href="#projects" className="px-8 py-4 bg-white text-brand-dark rounded-full font-bold hover:bg-brand-primary transition-all duration-300 flex items-center justify-center lg:justify-end gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="mailto:sudarshanvasanthakumar@gmail.com" className="px-8 py-4 text-white hover:text-brand-primary font-medium transition-all duration-300 flex items-center justify-center lg:justify-end gap-2 hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] rounded-full">
                <Mail size={18} /> Contact Me
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Smooth Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent z-30 pointer-events-none" />
      </section>

      {/* About Section */}
      <Section id="about" title="About Me" subtitle="A disciplined researcher and cadet with a passion for innovation.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-brand-primary relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-24 bg-brand-primary/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-brand-primary/20 transition-all" />
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 relative z-10">
                 <Award className="text-brand-primary" /> Awards & Achievements
              </h3>
              <ul className="space-y-4 text-white/80 relative z-10">
                <li className="flex gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-primary shrink-0 shadow-[0_0_10px_rgba(0,243,255,0.8)]" />
                  <span><strong>3rd Rank</strong> in B.E. Biomedical Engineering (2023-27 Batch).</span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-primary shrink-0 shadow-[0_0_10px_rgba(0,243,255,0.8)]" />
                  <span><strong>Poster Presentation:</strong> Innovation in carbon capture at Green Gala (PSG Tech, 2024).</span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-primary shrink-0 shadow-[0_0_10px_rgba(0,243,255,0.8)]" />
                  <span><strong>4th Place Nationally:</strong> All India Best Cadet Competition (NCC).</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-white/90">Education</h3>
              <div className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative pl-8 border-l border-white/10">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-brand-primary shadow-[0_0_10px_rgba(0,243,255,0.8)]" />
                    <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                    <p className="text-brand-primary/80">{edu.institution}</p>
                    <p className="text-sm text-white/50 mb-1">{edu.year}</p>
                    <p className="text-sm text-white/70 italic">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
             {/* Decorative element resembling a stylized cell or lens */}
             <div className="absolute inset-0 bg-brand-primary/10 rounded-full blur-[80px]" />
             <div className="relative glass-panel p-8 rounded-3xl aspect-square flex flex-col justify-center items-center text-center border border-white/5 shadow-[0_0_30px_rgba(0,243,255,0.05)]">
                <Crosshair size={64} className="text-brand-primary mb-6 drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]" />
                <p className="text-2xl font-display font-bold leading-relaxed text-white">
                  "Design solutions that communicate with clarity and intent. I craft bold, modern visuals that help brands stand out with confidence."
                </p>
                <div className="mt-8 flex gap-4 text-sm font-medium text-brand-primary uppercase tracking-widest">
                  <span>Medicine</span> • <span>Code</span> • <span>Design</span>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* Research Section */}
      <Section id="research" title="Research" subtitle="Exploring the frontiers of biomaterials and regenerative medicine.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESEARCH_PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Tech Projects" subtitle="Software and tools built to visualize and analyze biological data.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECH_PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Capabilities" subtitle="Technical arsenal for solving biomedical challenges.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl hover:border-brand-primary/30 transition-colors duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.1)]"
            >
              <h3 className="text-xl font-bold mb-6 text-brand-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm text-white/80 hover:text-white hover:border-brand-primary/50 transition-colors cursor-default hover:shadow-[0_0_10px_rgba(0,243,255,0.2)]">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-5xl mx-auto glass-panel rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-brand-primary/20 shadow-[0_0_40px_rgba(0,243,255,0.05)]">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-primary/5 to-black/40 pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">Let's Collaborate.</h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="mailto:sudarshanvasanthakumar@gmail.com" 
                className="px-8 py-4 bg-brand-primary text-brand-dark rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)]"
              >
                Send an Email
              </a>
              <a 
                href="https://suducodes.github.io/Sudarshan-Biomedical/" 
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 glass-panel border border-white/20 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
              >
                View Old Portfolio
              </a>
            </div>

            <div className="mt-20 pt-10 border-t border-white/10 text-white/40 text-sm">
              <p>© {new Date().getFullYear()} Sudarshan Vasanthakumar. All rights reserved.</p>
              <p className="mt-2">Built with React, Three.js & Tailwind.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default App;

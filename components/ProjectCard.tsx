import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { Project } from '../types.ts';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-32 bg-brand-primary/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-brand-primary/30 transition-all duration-500" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-brand-primary text-xs font-bold tracking-widest uppercase mb-2 block">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-brand-primary transition-colors">
              {project.title}
            </h3>
          </div>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors text-white group-hover:text-brand-primary"
            >
              <Github size={20} />
            </a>
          )}
        </div>
        
        <p className="text-white/70 mb-6 leading-relaxed">
          {project.description}
        </p>

        <ul className="mb-6 space-y-2">
            {project.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-white/50">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-primary flex-shrink-0" />
                    <span>{point}</span>
                </li>
            ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/60 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
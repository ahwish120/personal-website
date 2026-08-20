import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FolderGit, ExternalLink } from 'lucide-react';
import type { Project } from '../data/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/portfolio/${project.id}`}
        className="glass glass-hover rounded-2xl p-6 flex flex-col text-center group relative block"
      >
        {/* Image */}
        <div className="w-full h-48 rounded-xl mb-5 overflow-hidden bg-gradient-to-br from-[#0A0A12] to-[#12122A] border border-white/[0.04] flex items-center justify-center">
          {project.image ? (
            <img
              src={`/personal-website/${project.image}`}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center">
              <div className="text-4xl mb-2 opacity-30">
                {project.playUrl ? '🕹️' : project.category === 'frontend' ? '🎨' : project.category === 'backend' ? '⚙️' : '🚀'}
              </div>
              <span className="text-xs text-[#5E5E72] font-medium">{project.title}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white group-hover:text-[#00D4FF] transition-colors duration-300 mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-[#8E8EA0] mb-4 leading-relaxed">{project.description}</p>

          {/* Action buttons */}
          <div className="flex justify-center gap-2 mb-4">
            {project.githubUrl && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(project.githubUrl, '_blank', 'noopener');
                }}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[#A855F7] hover:text-white hover:bg-[#A855F7]/10 transition-all text-xs cursor-pointer"
                aria-label="GitHub"
              >
                <FolderGit className="w-3.5 h-3.5" />
                源码
              </button>
            )}
            {project.playUrl && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(project.playUrl, '_blank', 'noopener');
                }}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[#FF6B8A] hover:text-white hover:bg-[#FF6B8A]/10 transition-all text-xs cursor-pointer"
                aria-label="Play"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                游玩
              </button>
            )}
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap justify-center gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-[#A855F7]/6 text-[#8E8EA0] border border-[#A855F7]/10 hover:border-[#A855F7]/25 hover:text-[#A855F7] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Playable badge */}
        {project.playUrl && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-[#FF6B8A]/12 text-[#FF6B8A] border border-[#FF6B8A]/20 flex items-center gap-1">
              <ExternalLink className="w-2.5 h-2.5 fill-current" />
              可游玩
            </span>
          </div>
        )}
      </Link>
    </motion.div>
  );
}

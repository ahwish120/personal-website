import { motion } from 'framer-motion';
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
      className="glass glass-hover rounded-2xl p-6 flex flex-col group relative"
    >
      {/* Image */}
      <div className="w-full h-48 rounded-xl mb-5 overflow-hidden bg-gradient-to-br from-[#0a0a12] to-[#12122a] border border-white/[0.04] flex items-center justify-center">
        {project.image ? (
          <img
            src={`/personal-website/${project.image}`}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center">
            <div className="text-4xl mb-2 opacity-30">
              {project.category === 'frontend' ? '🎨' : project.category === 'backend' ? '⚙️' : '🚀'}
            </div>
            <span className="text-xs text-gray-600 font-mono">{project.title}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-white group-hover:text-[#00d4ff] transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                aria-label="GitHub"
              >
                <FolderGit className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-gray-400 hover:text-[#00d4ff] hover:bg-white/10 transition-all"
                aria-label="Live demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.playUrl && !project.liveUrl && (
              <a
                href={project.playUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-gray-400 hover:text-[#00d4ff] hover:bg-white/10 transition-all"
                aria-label="Play demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-400 border border-white/5 hover:border-[#00d4ff]/30 hover:text-[#00d4ff] transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-3 right-3">
          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-[#00d4ff]/20 to-[#7b2ff7]/20 text-[#00d4ff] border border-[#00d4ff]/20">
            Featured
          </span>
        </div>
      )}
    </motion.div>
  );
}

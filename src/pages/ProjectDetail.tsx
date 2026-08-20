import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, FolderGit, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolio';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">项目未找到</h1>
        <Link to="/portfolio" className="text-[#00D4FF] hover:text-[#A855F7] transition-colors">
          返回作品集
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      {/* Back */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-6"
      >
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-[#5E5E72] hover:text-[#00D4FF] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">返回作品集</span>
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-6 mb-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              <span className="neon-text">{project.title}</span>
            </h1>
            <p className="text-[#8E8EA0] text-sm leading-relaxed max-w-2xl">{project.longDescription}</p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-[#A855F7] hover:text-white transition-colors focus-ring"
              >
                <FolderGit className="w-4 h-4" />
                源码
              </a>
            )}
            {project.playUrl && (
              <a
                href={project.playUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-[#FF6B8A] hover:text-white transition-colors focus-ring"
              >
                <ExternalLink className="w-4 h-4" />
                新窗口游玩
              </a>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-[#A855F7]/6 text-[#8E8EA0] border border-[#A855F7]/10"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Image gallery */}
      {project.images && project.images.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-6"
        >
          <h2 className="text-xl font-semibold text-white mb-4">项目展示</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="glass rounded-2xl overflow-hidden border border-white/[0.04]">
              <img
                src={`/personal-website/${project.image}`}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
            {project.images.slice(1).length > 0 && (
              <div className={`grid gap-6 ${project.images.length > 2 ? 'md:grid-cols-2' : ''}`}>
                {project.images.slice(1).map((img) => (
                  <div key={img} className="glass rounded-2xl overflow-hidden border border-white/[0.04]">
                    <img
                      src={`/personal-website/${img}`}
                      alt={`${project.title} 图片`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Demo / placeholder */}
      {project.playUrl ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl overflow-hidden border border-white/[0.04]"
        >
          <iframe
            src={project.playUrl}
            title={project.title}
            className="w-full min-h-[600px] border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-12 text-center"
        >
          <p className="text-[#8E8EA0]">该项目暂无可交互演示</p>
        </motion.div>
      )}
    </div>
  );
}

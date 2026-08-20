import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, FolderGit, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolio';
import SectionTitle from '../components/SectionTitle';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <h1 className="text-3xl font-bold mb-4 text-white">项目不存在</h1>
        <Link to="/portfolio" className="text-[#00d4ff] hover:underline">
          ← 返回作品集
        </Link>
      </div>
    );
  }

  const gallery = project.images && project.images.length > 0 ? project.images : [project.image];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00d4ff] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          返回作品集
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-6">
        <div className="flex items-center gap-3 flex-wrap mb-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="neon-text">{project.title}</span>
          </h1>
          {project.featured && (
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-[#00d4ff]/20 to-[#7b2ff7]/20 text-[#00d4ff] border border-[#00d4ff]/20">
              Featured
            </span>
          )}
        </div>
        <p className="text-gray-400 text-lg">{project.description}</p>
      </motion.div>

      {/* Cover image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15 }}
        className="rounded-2xl overflow-hidden border border-white/10 mb-6 bg-gradient-to-br from-[#0a0a12] to-[#12122a]"
      >
        <img
          src={`/personal-website/${project.image}`}
          alt={project.title}
          className="w-full h-auto max-h-[560px] object-cover"
        />
      </motion.div>

      {/* Long description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass rounded-2xl p-6 md:p-8 mb-6"
      >
        <h2 className="text-xl font-semibold text-white mb-3">项目介绍</h2>
        <p className="text-gray-400 leading-relaxed whitespace-pre-line">{project.longDescription}</p>
      </motion.div>

      {/* Tech tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mb-10"
      >
        <h2 className="text-xl font-semibold text-white mb-3">技术栈</h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 text-sm font-medium rounded-full bg-white/5 text-gray-300 border border-white/10 hover:border-[#00d4ff]/30 hover:text-[#00d4ff] transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Gallery */}
      {gallery.length > 1 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <SectionTitle title="更多图片" subtitle="作品的更多细节展示" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
            {gallery.slice(1).map((img, i) => (
              <div
                key={img}
                className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0a0a12] to-[#12122a]"
              >
                <img
                  src={`/personal-website/${img}`}
                  alt={`${project.title} 图片 ${i + 2}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Links */}
      {(project.githubUrl || project.liveUrl || project.playUrl) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap gap-4 pb-16"
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass glass-hover text-sm font-medium text-gray-300 hover:text-white"
            >
              <FolderGit className="w-4 h-4" /> GitHub 仓库
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass glass-hover text-sm font-medium text-gray-300 hover:text-white"
            >
              <ExternalLink className="w-4 h-4" /> 在线预览
            </a>
          )}
          {project.playUrl && !project.liveUrl && (
            <a
              href={project.playUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass glass-hover text-sm font-medium text-gray-300 hover:text-white"
            >
              <ExternalLink className="w-4 h-4" /> 在线试玩
            </a>
          )}
        </motion.div>
      )}
    </div>
  );
}

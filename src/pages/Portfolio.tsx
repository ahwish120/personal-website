import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, categories, type CategoryKey } from '../data/portfolio';
import ProjectCard from '../components/ProjectCard';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          <span className="neon-text">作品集</span>
        </h1>
        <p className="text-[#8E8EA0] text-lg">我参与和独立完成的项目</p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center mb-12"
      >
        <div className="glass rounded-2xl p-1.5 flex flex-wrap justify-center gap-1">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`relative px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 focus-ring ${
                activeCategory === cat.key ? 'text-white' : 'text-[#8E8EA0] hover:text-white'
              }`}
            >
              {activeCategory === cat.key && (
                <motion.div
                  layoutId="category-bg"
                  className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/12 to-[#A855F7]/12 border border-[#00D4FF]/15 rounded-xl"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div layout className="flex flex-wrap justify-center gap-6 pb-16">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <div key={project.id} className="w-full md:w-[340px]">
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-[#8E8EA0] text-lg">该分类下暂无项目，看看其他分类吧</p>
        </motion.div>
      )}
    </div>
  );
}

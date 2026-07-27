import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Briefcase, Heart, ChevronRight, FolderGit, BriefcaseBusiness, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/resume';
import SectionTitle from '../components/SectionTitle';

const quickLinks = [
  {
    to: '/resume',
    icon: FileText,
    title: '个人简历',
    desc: '工作经历、技能和学历',
    color: '#00d4ff',
    gradient: 'from-[#00d4ff]/20 to-[#00d4ff]/5',
  },
  {
    to: '/portfolio',
    icon: Briefcase,
    title: '作品集',
    desc: '项目和作品展示',
    color: '#7b2ff7',
    gradient: 'from-[#7b2ff7]/20 to-[#7b2ff7]/5',
  },
  {
    to: '/hobbies',
    icon: Heart,
    title: '个人爱好',
    desc: '生活中的热爱',
    color: '#ff2d95',
    gradient: 'from-[#ff2d95]/20 to-[#ff2d95]/5',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-[80vh] flex flex-col justify-center items-center text-center py-20"
      >
        {/* Avatar */}
        <motion.div
          variants={itemVariants}
          className="w-32 h-32 rounded-2xl mb-8 overflow-hidden border border-[#00d4ff]/20 shadow-[0_0_48px_rgba(0,212,255,0.1)]"
        >
          <img
            src="/personal-website/avatar.jpg"
            alt="xiaoLiu的头像"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-[#00d4ff] font-mono text-sm tracking-widest uppercase mb-4"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="neon-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-400 mb-4"
        >
          {personalInfo.title}
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-gray-500 max-w-2xl text-lg leading-relaxed mb-8"
        >
          {personalInfo.bio}
        </motion.p>

        {/* Location */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 text-gray-500 mb-8"
        >
          <MapPin className="w-4 h-4 text-[#ff2d95]" />
          <span className="text-sm">{personalInfo.location}</span>
        </motion.div>

        {/* Social */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-12">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover p-3 rounded-xl text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FolderGit className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover p-3 rounded-xl text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <BriefcaseBusiness className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="glass glass-hover p-3 rounded-xl text-gray-400 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.section>

      {/* Quick Nav Section */}
      <section className="pb-20">
        <SectionTitle title="了解更多" subtitle="点击卡片了解更多关于我的信息" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {quickLinks.map((link) => (
            <motion.div key={link.to} variants={itemVariants}>
              <Link to={link.to} className="block group">
                <div
                  className={`glass glass-hover rounded-2xl p-8 h-full bg-gradient-to-br ${link.gradient} transition-all duration-500`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${link.color}15`,
                      border: `1px solid ${link.color}20`,
                    }}
                  >
                    <link.icon className="w-6 h-6" style={{ color: link.color }} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{link.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{link.desc}</p>
                  <div className="flex items-center text-sm font-medium" style={{ color: link.color }}>
                    查看详情
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

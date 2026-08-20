import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Briefcase, Heart, ChevronRight, FolderGit, BriefcaseBusiness, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/resume';
import SectionTitle from '../components/SectionTitle';
import FloatContainer from '../components/FloatContainer';

const quickLinks = [
  {
    to: '/resume',
    icon: FileText,
    title: '个人简历',
    desc: '项目经历、技能和学历',
    accent: '#00D4FF',
    glow: 'rgba(0,212,255,0.1)',
  },
  {
    to: '/portfolio',
    icon: Briefcase,
    title: '作品集',
    desc: '项目和作品展示',
    accent: '#A855F7',
    glow: 'rgba(168,85,247,0.1)',
  },
  {
    to: '/hobbies',
    icon: Heart,
    title: '个人爱好',
    desc: '生活中的热爱',
    accent: '#FF6B8A',
    glow: 'rgba(255,107,138,0.1)',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-[70vh] flex flex-col justify-center items-center text-center pb-8"
      >
        {/* Avatar */}
        <motion.div variants={itemVariants}>
          <FloatContainer strength={0.06} floatRange={10}>
            <motion.div
              variants={itemVariants}
              className="w-32 h-32 rounded-2xl mb-8 overflow-hidden border border-[#00D4FF]/20 shadow-[0_0_48px_rgba(0,212,255,0.1)]"
            >
              <img
                src="/personal-website/avatar.jpg"
                alt="xiaoLiu的头像"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </FloatContainer>
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-[#00D4FF] font-medium text-sm tracking-[0.2em] uppercase mb-4"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="neon-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-[#8E8EA0] font-light mb-4">
          {personalInfo.title}
        </motion.p>

        {/* Bio */}
        <motion.p variants={itemVariants} className="text-[#5E5E72] max-w-2xl text-lg leading-relaxed mb-8">
          {personalInfo.bio}
        </motion.p>

        {/* Location */}
        <motion.div variants={itemVariants} className="flex items-center gap-2 text-[#5E5E72] mb-8">
          <MapPin className="w-4 h-4 text-[#FF6B8A]/60" />
          <span className="text-sm">{personalInfo.location}</span>
        </motion.div>

        {/* Social */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover p-3 rounded-xl text-[#8E8EA0] hover:text-white transition-colors focus-ring"
            aria-label="GitHub"
          >
            <FolderGit className="w-5 h-5" />
          </a>
          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover p-3 rounded-xl text-[#8E8EA0] hover:text-white transition-colors focus-ring"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness className="w-5 h-5" />
            </a>
          )}
          <a
            href={`mailto:${personalInfo.email}`}
            className="glass glass-hover p-3 rounded-xl text-[#8E8EA0] hover:text-white transition-colors focus-ring"
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
          className="flex flex-wrap justify-center gap-6"
        >
          {quickLinks.map((link) => (
            <motion.div key={link.to} variants={itemVariants} className="w-full md:w-72">
              <FloatContainer strength={0.03} floatRange={6}>
                <Link to={link.to} className="block group">
                  <div className="glass glass-hover rounded-2xl p-8 h-full text-center">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 mx-auto transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${link.accent}15`,
                        border: `1px solid ${link.accent}25`,
                        boxShadow: `0 0 20px ${link.glow}`,
                      }}
                    >
                      <link.icon className="w-6 h-6" style={{ color: link.accent }} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{link.title}</h3>
                    <p className="text-[#8E8EA0] text-sm mb-4">{link.desc}</p>
                    <div className="flex items-center justify-center text-sm font-medium" style={{ color: link.accent }}>
                      查看详情
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </FloatContainer>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

import { motion } from 'framer-motion';
import { Mail, MapPin, Globe, Download } from 'lucide-react';
import { personalInfo, experiences, education, skills } from '../data/resume';
import SectionTitle from '../components/SectionTitle';
import TimelineItem from '../components/TimelineItem';
import SkillBar from '../components/SkillBar';

function groupSkillsByCategory(skills: typeof import('../data/resume').skills) {
  const groups: Record<string, typeof skills> = {
    hardware: [],
    web: [],
    circuit: [],
    tools: [],
  };
  skills.forEach((s) => {
    groups[s.category]?.push(s);
  });
  return {
    '硬件开发': groups.hardware,
    'Web 开发': groups.web,
    '电路设计': groups.circuit,
    '工具与仪器': groups.tools,
  };
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Resume() {
  const skillGroups = groupSkillsByCategory(skills);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="neon-text">个人简历</span>
        </h1>
        <p className="text-gray-500 text-lg">我的职业经历与技能</p>
      </motion.div>

      {/* Personal Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass rounded-2xl p-6 mb-16 flex flex-col sm:flex-row items-start gap-6"
      >
        <div className="w-20 h-20 rounded-xl border border-[#7b2ff7]/15 flex items-center justify-center text-3xl flex-shrink-0 overflow-hidden">
          <img
            src="/personal-website/avatar.jpg"
            alt="xiaoLiu的头像"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white mb-1">{personalInfo.name}</h2>
          <p className="text-[#00d4ff] text-sm font-medium mb-3">{personalInfo.title}</p>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">{personalInfo.bio}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#7b2ff7]" />
              {personalInfo.email}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#ff2d95]" />
              {personalInfo.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#00d4ff]" />
              {personalInfo.website}
            </span>
          </div>
        </div>
        <button className="glass glass-hover px-5 py-2.5 rounded-xl text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2 flex-shrink-0">
          <Download className="w-4 h-4" />
          下载简历
        </button>
      </motion.div>

      {/* Work Experience */}
      <section className="mb-20">
        <SectionTitle title="工作经历" align="left" />
        <div>
          {experiences.map((exp, i) => (
            <TimelineItem
              key={exp.id}
              title={exp.company}
              subtitle={exp.position}
              period={exp.period}
              description={exp.description}
              tech={exp.tech}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-20">
        <SectionTitle title="专业技能" align="left" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {Object.entries(skillGroups).map(([groupName, groupSkills]) => (
            <motion.div key={groupName} variants={itemVariants} className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00d4ff]" />
                {groupName}
              </h3>
              <div className="space-y-4">
                {groupSkills.map((skill, i) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Education */}
      <section className="mb-20">
        <SectionTitle title="教育背景" align="left" />
        <div>
          {education.map((edu, i) => (
            <TimelineItem
              key={edu.id}
              title={edu.school}
              subtitle={edu.degree}
              period={edu.period}
              description={[edu.description]}
              index={i}
              isLast={i === education.length - 1}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

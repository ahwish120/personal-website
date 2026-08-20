import { motion } from 'framer-motion';
import { Mail, MapPin, Globe, Download } from 'lucide-react';
import { personalInfo, experiences, education, skills } from '../data/resume';
import SectionTitle from '../components/SectionTitle';

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
    '网页开发': groups.web,
    '电路设计': groups.circuit,
    '工具与软件': groups.tools,
  };
}

function SkillTag({ name, index }: { name: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="text-center"
    >
      <span className="text-sm font-medium text-[#EDEDF5] hover:text-[#A855F7] transition-colors duration-200 cursor-default">
        {name}
      </span>
    </motion.div>
  );
}

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
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          <span className="neon-text">个人简历</span>
        </h1>
        <p className="text-[#8E8EA0] text-lg">我的项目经历与技能</p>
      </motion.div>

      {/* Personal Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass rounded-2xl p-6 mb-16 flex flex-col items-center text-center gap-6"
      >
        <div className="w-20 h-20 rounded-xl border border-[#A855F7]/15 flex items-center justify-center text-3xl flex-shrink-0 overflow-hidden accent-glow-purple">
          <img
            src="/personal-website/avatar.jpg"
            alt="xiaoLiu的头像"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white mb-1">{personalInfo.name}</h2>
          <p className="text-[#00D4FF] text-sm font-medium mb-3">{personalInfo.title}</p>
          <p className="text-[#8E8EA0] text-sm leading-relaxed mb-4">{personalInfo.bio}</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-[#5E5E72]">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#00D4FF]/60" />
              {personalInfo.email}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FF6B8A]/60" />
              {personalInfo.location}
            </span>
            {personalInfo.website && (
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#A855F7]/60" />
                {personalInfo.website}
              </span>
            )}
          </div>
        </div>
        <button className="glass glass-hover px-5 py-2.5 rounded-xl text-sm font-medium text-[#8E8EA0] hover:text-white transition-colors flex items-center gap-2 focus-ring">
          <Download className="w-4 h-4" />
          下载简历
        </button>
      </motion.div>

      {/* Experience */}
      <section className="mb-20">
        <SectionTitle title="项目经历" variant="purple" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl p-6 text-left"
            >
              <h3 className="text-lg font-semibold text-white mb-1">{exp.company}</h3>
              <p className="text-[#00D4FF] text-sm font-medium mb-2">{exp.position}</p>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#A855F7]/6 text-[#8E8EA0] border border-[#A855F7]/10 inline-block mb-3">
                {exp.period}
              </span>
              <ul className="space-y-1.5 mb-4">
                {exp.description.map((d, i2) => (
                  <li key={i2} className="text-sm text-[#8E8EA0]">
                    {d}
                  </li>
                ))}
              </ul>
              {exp.tech && exp.tech.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs font-medium rounded-full bg-[#00D4FF]/5 text-[#5E5E72] border border-[#00D4FF]/8"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-20">
        <SectionTitle title="专业技能" variant="cyan-purple" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-wrap justify-center gap-8"
        >
          {Object.entries(skillGroups).map(([groupName, groupSkills], gi) => (
            <motion.div
              key={groupName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass rounded-2xl p-6 w-full md:w-72 text-center"
            >
              <h3 className="text-lg font-semibold text-white mb-5 flex items-center justify-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${['bg-[#00D4FF]', 'bg-[#A855F7]', 'bg-[#FF9A56]', 'bg-[#FF6B8A]'][gi]}`}
                />
                {groupName}
              </h3>
              <div className="space-y-4">
                {groupSkills.map((skill, si) => (
                  <SkillTag key={skill.name} name={skill.name} index={si} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Education */}
      <section className="mb-20">
        <SectionTitle title="教育背景" variant="coral" />
        <div className="max-w-3xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center pb-12"
            >
              <div className="relative z-10 w-4 h-4 rounded-full bg-[#FF6B8A] shadow-[0_0_12px_rgba(255,107,138,0.3)] mb-4">
                <div className="absolute inset-1 rounded-full bg-white/20" />
              </div>
              {i !== education.length - 1 && (
                <div className="w-0.5 h-8 bg-gradient-to-b from-[#FF6B8A] to-[#FF6B8A]/10 mb-4" />
              )}
              <div className="w-full max-w-lg glass rounded-2xl p-6 hover:border-[#FF6B8A]/15 transition-all duration-300 text-center">
                <h3 className="text-lg font-semibold text-white mb-1">{edu.school}</h3>
                <p className="text-[#FF9A56] text-sm font-medium mb-2">{edu.degree}</p>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#FF6B8A]/6 text-[#8E8EA0] border border-[#FF6B8A]/10 inline-block mb-3">
                  {edu.period}
                </span>
                <p className="text-sm text-[#8E8EA0]">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

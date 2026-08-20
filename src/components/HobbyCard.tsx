import { motion } from 'framer-motion';
import { iconMap } from '../data/hobbies';
import type { Hobby } from '../data/hobbies';

const accentColors = [
  { accent: '#FF6B8A', glow: 'rgba(255,107,138,0.12)' },
  { accent: '#A855F7', glow: 'rgba(168,85,247,0.12)' },
  { accent: '#00D4FF', glow: 'rgba(0,212,255,0.12)' },
  { accent: '#FF9A56', glow: 'rgba(255,154,86,0.12)' },
];

interface HobbyCardProps {
  hobby: Hobby;
  index: number;
}

export default function HobbyCard({ hobby, index }: HobbyCardProps) {
  const Icon = iconMap[hobby.icon];
  const color = accentColors[index % accentColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass glass-hover rounded-2xl p-6 group text-center h-full flex flex-col"
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 mx-auto transition-all duration-300 group-hover:scale-110"
        style={{
          backgroundColor: `${color.accent}14`,
          border: `1px solid ${color.accent}25`,
          boxShadow: `0 0 20px ${color.glow}`,
        }}
      >
        {Icon && <Icon className="w-7 h-7" style={{ color: color.accent }} />}
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold mb-3 transition-colors duration-300" style={{ color: color.accent }}>
        {hobby.title}
      </h3>
      <p className="text-sm text-[#8E8EA0] mb-5 leading-relaxed">{hobby.description}</p>

      {/* Details list */}
      <ul className="space-y-2.5 mt-auto">
        {hobby.details.map((detail, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.08 + i * 0.08 }}
            className="text-sm text-[#5E5E72] leading-relaxed"
          >
            {detail}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

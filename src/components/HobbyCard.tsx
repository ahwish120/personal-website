import { motion } from 'framer-motion';
import { iconMap } from '../data/hobbies';
import type { Hobby } from '../data/hobbies';

interface HobbyCardProps {
  hobby: Hobby;
  index: number;
}

export default function HobbyCard({ hobby, index }: HobbyCardProps) {
  const Icon = iconMap[hobby.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass glass-hover rounded-2xl p-6 group"
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${hobby.color}20, ${hobby.color}08)`,
          border: `1px solid ${hobby.color}20`,
          boxShadow: `0 0 20px ${hobby.color}10`,
        }}
      >
        {Icon && <Icon className="w-7 h-7" style={{ color: hobby.color }} />}
      </div>

      {/* Content */}
      <h3
        className="text-lg font-semibold mb-2 transition-colors duration-300"
        style={{ color: hobby.color }}
      >
        {hobby.title}
      </h3>
      <p className="text-sm text-gray-400 mb-4 leading-relaxed">
        {hobby.description}
      </p>

      {/* Details list */}
      <ul className="space-y-2">
        {hobby.details.map((detail, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1 + i * 0.1 }}
            className="flex items-start gap-2 text-sm text-gray-400"
          >
            <span
              className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: hobby.color }}
            />
            {detail}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

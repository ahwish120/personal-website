import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description: string[];
  tech?: string[];
  index: number;
  isLast?: boolean;
}

export default function TimelineItem({
  title,
  subtitle,
  period,
  description,
  tech,
  index,
  isLast,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex items-start gap-6 pb-12"
    >
      {/* Timeline line and dot */}
      <div className="hidden md:flex flex-col items-center">
        {/* Dot */}
        <div className="relative z-10 w-4 h-4 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#7b2ff7] shadow-[0_0_12px_rgba(0,212,255,0.4)] flex-shrink-0">
          <div className="absolute inset-1 rounded-full bg-white/20" />
        </div>
        {/* Line */}
        {!isLast && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-[#00d4ff] to-[#7b2ff7] mt-2" />
        )}
      </div>

      {/* Content card */}
      <div className="flex-1 glass rounded-2xl p-6 hover:border-[#00d4ff]/20 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-[#00d4ff] text-sm font-medium">{subtitle}</p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5 whitespace-nowrap">
            {period}
          </span>
        </div>

        <ul className="space-y-1.5">
          {description.map((item, i) => (
            <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-[#7b2ff7] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-xs font-medium rounded-full bg-white/5 text-gray-500 border border-white/5"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

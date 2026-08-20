import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  variant?: 'purple' | 'coral' | 'cyan-purple';
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  variant = 'cyan-purple',
}: SectionTitleProps) {
  const textClass =
    variant === 'purple' ? 'neon-text-purple' : variant === 'coral' ? 'neon-text-coral' : 'neon-text';
  const lineClass =
    variant === 'purple'
      ? 'from-[#A855F7] to-[#A855F7]/20'
      : variant === 'coral'
        ? 'from-[#FF6B8A] to-[#FF6B8A]/20'
        : 'from-[#00D4FF] to-[#A855F7]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
        <span className={textClass}>{title}</span>
      </h2>
      {subtitle && <p className="text-[#8E8EA0] text-lg max-w-2xl mx-auto">{subtitle}</p>}
      <div className={`mt-4 flex ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        <div className={`h-0.5 w-16 bg-gradient-to-r ${lineClass} rounded-full`} />
      </div>
    </motion.div>
  );
}

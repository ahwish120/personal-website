import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionTitle({ title, subtitle, align = 'center' }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="neon-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      {/* Decorative line */}
      <div className={`mt-4 flex ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        <div className="h-0.5 w-16 bg-gradient-to-r from-[#00d4ff] to-[#7b2ff7] rounded-full" />
      </div>
    </motion.div>
  );
}

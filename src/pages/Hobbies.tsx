import { motion } from 'framer-motion';
import { hobbies } from '../data/hobbies';
import HobbyCard from '../components/HobbyCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

export default function Hobbies() {
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
          <span className="accent-text">个人爱好</span>
        </h1>
        <p className="text-[#8E8EA0] text-lg">工作之外，这些是我生活中的热爱</p>
      </motion.div>

      {/* Hobbies Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 pb-16"
      >
        {hobbies.map((hobby, i) => (
          <HobbyCard key={hobby.id} hobby={hobby} index={i} />
        ))}
      </motion.div>
    </div>
  );
}

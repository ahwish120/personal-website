import { motion } from 'framer-motion';
import { hobbies } from '../data/hobbies';
import HobbyCard from '../components/HobbyCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="neon-text">个人爱好</span>
        </h1>
        <p className="text-gray-500 text-lg">工作之外，这些是我生活中的热爱</p>
      </motion.div>

      {/* Quote */}
      <motion.blockquote
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-16 py-8 px-6 rounded-2xl glass border-l-2 border-[#00d4ff]/30"
      >
        <p className="text-lg text-gray-300 italic leading-relaxed max-w-2xl mx-auto">
          "代码是我的职业，但它们也是我的热情所在。
          在键盘之外，我用相机捕捉光影，用吉他弹奏旋律，
          用脚步丈量世界。生活不只有代码，还有诗和远方。"
        </p>
        <footer className="mt-3 text-sm text-gray-500">— Alex Chen</footer>
      </motion.blockquote>

      {/* Hobbies Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16"
      >
        {hobbies.map((hobby, i) => (
          <HobbyCard key={hobby.id} hobby={hobby} index={i} />
        ))}
      </motion.div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { House } from 'lucide-react';
import FloatContainer from '../components/FloatContainer';

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[70vh] flex flex-col items-center justify-center text-center">
      <FloatContainer strength={0.05} floatRange={8}>
        <div className="text-9xl font-bold tracking-tight mb-6 select-none">
          <span className="accent-text-strong">404</span>
        </div>
      </FloatContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-2xl font-semibold text-white mb-3">页面未找到</h1>
        <p className="text-[#8E8EA0] mb-8 max-w-md leading-relaxed">
          你访问的页面不存在或已被移动。请检查链接是否正确，或返回首页继续浏览。
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 glass glass-hover px-6 py-3 rounded-xl text-sm font-medium text-[#00C6FF] hover:text-white transition-colors focus-ring"
        >
          <House className="w-4 h-4" />
          返回首页
        </Link>
      </motion.div>
    </div>
  );
}

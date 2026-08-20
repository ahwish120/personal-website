import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface FloatContainerProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  floatRange?: number;
}

export default function FloatContainer({
  children,
  className = '',
  strength = 0.05,
  floatRange = 10,
}: FloatContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const x = useTransform(sx, [-1, 1], [floatRange, -floatRange]);
  const y = useTransform(sy, [-1, 1], [floatRange, -floatRange]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = ((e.clientX - cx) / (rect.width / 2)) * strength;
      const dy = ((e.clientY - cy) / (rect.height / 2)) * strength;
      mx.set(dx);
      my.set(dy);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mx, my, strength]);

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className={className}
      animate={{ y: [0, -6, 0, 6, 0], x: [0, 3, 0, -3, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', repeatType: 'loop' }}
    >
      {children}
    </motion.div>
  );
}

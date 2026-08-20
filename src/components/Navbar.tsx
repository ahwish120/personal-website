import { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { path: '/', label: '首页', num: '00' },
  { path: '/resume', label: '简历', num: '01' },
  { path: '/portfolio', label: '作品集', num: '02' },
  { path: '/hobbies', label: '爱好', num: '03' },
];

function NavContent({ onClick }: { onClick?: () => void }) {
  const location = useLocation();

  return (
    <>
      <Link to="/" onClick={onClick} className="flex flex-col items-center gap-1 group mb-12">
        <Terminal className="w-6 h-6 text-[#00D4FF] group-hover:text-[#A855F7] transition-colors duration-300" />
        <span className="text-[10px] font-bold neon-text whitespace-nowrap">xiaoLiu</span>
      </Link>
      <div className="flex flex-col items-center gap-2 flex-1">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={onClick}
            className={`relative w-14 h-14 flex flex-col items-center justify-center rounded-xl text-xs font-medium transition-colors duration-300 group ${
              location.pathname === link.path ? 'text-[#00D4FF]' : 'text-[#8E8EA0] hover:text-white'
            }`}
          >
            {location.pathname === link.path && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute inset-0 bg-[#00D4FF]/8 rounded-xl border border-[#00D4FF]/15"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 text-[10px] text-[#00D4FF]/70 font-medium">{link.num}</span>
            <span className="relative z-10">{link.label}</span>
          </Link>
        ))}
      </div>
      <div className="h-4" />
    </>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      {/* Desktop vertical nav */}
      <div className="fixed top-0 right-0 bottom-0 z-50 glass border-l border-white/[0.04] flex flex-col items-center py-6 w-20 hidden md:flex">
        <NavContent />
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed top-4 right-4 z-[60] md:hidden p-2.5 glass rounded-xl text-[#8E8EA0] hover:text-white transition-colors focus-ring"
        aria-label="Toggle menu"
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={close}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 glass border-l border-white/[0.04] flex flex-col items-center py-6 w-20 md:hidden"
            >
              <NavContent onClick={close} />
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

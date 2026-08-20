import { FolderGit, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.04] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-[#8E8EA0] font-light tracking-wide">不断进步，持续创造</p>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/ahwish120"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-[#5E5E72] hover:text-[#00D4FF] hover:bg-[#00D4FF]/8 transition-all duration-300 focus-ring"
              aria-label="GitHub"
            >
              <FolderGit className="w-4 h-4" />
            </a>
            <a
              href="mailto:1461507618@qq.com"
              className="p-2 rounded-full text-[#5E5E72] hover:text-[#FF6B8A] hover:bg-[#FF6B8A]/8 transition-all duration-300 focus-ring"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <p className="text-xs text-[#5E5E72]">
            Built with React + TypeScript + Vite © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

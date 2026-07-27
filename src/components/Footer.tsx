import { FolderGit, BriefcaseBusiness, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ahwish120"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-400 hover:text-[#00d4ff] hover:bg-white/5 transition-all duration-300"
              aria-label="GitHub"
            >
              <FolderGit className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/ahwish120"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-400 hover:text-[#00d4ff] hover:bg-white/5 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness className="w-5 h-5" />
            </a>
            <a
              href="mailto:1461507618@qq.com"
              className="p-2 rounded-full text-gray-400 hover:text-[#00d4ff] hover:bg-white/5 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-[#ff2d95] fill-[#ff2d95]" /> by xiaoLiu
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

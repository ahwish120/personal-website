import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import VideoBackground from './VideoBackground';

export default function Layout() {
  return (
    <div className="relative min-h-screen">
      <VideoBackground />
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-20 pb-8 min-h-screen"
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND_DETAILS } from '@/constants/brand';

export const SplashScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Only show splash screen once per session
    const hasSeenSplash = sessionStorage.getItem('slc_splash_seen');
    if (!hasSeenSplash) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('slc_splash_seen', 'true');
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-bg text-white px-4"
      >
        {/* Brand Emblem Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-6"
        >
          <div className="w-24 h-24 rounded-2xl bg-dark-card border border-gold-500/50 flex items-center justify-center gold-border-glow shadow-2xl">
            <span className="font-serif font-extrabold text-3xl text-gold-500 tracking-wider">
              {BRAND_DETAILS.shortName}
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-serif font-bold text-2xl text-slate-100 mb-1"
        >
          {BRAND_DETAILS.name}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xs text-gold-400 uppercase tracking-widest mb-6 font-semibold"
        >
          Premium Travel Partner Since {BRAND_DETAILS.establishedYear}
        </motion.p>

        {/* Golden Line Loader */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '180px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 rounded-full"
        />
      </motion.div>
    </AnimatePresence>
  );
};

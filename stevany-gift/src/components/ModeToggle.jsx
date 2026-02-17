import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Heart, GraduationCap, PartyPopper } from 'lucide-react';

const ModeToggle = ({ mode, setMode }) => {
  const toggleMode = () => {
    setMode(mode === 'guru' ? 'bucin' : 'guru');
  };

  return (
    <div className="flex flex-col items-center justify-center my-8 z-20 relative">
      <motion.div
        className={`relative w-64 h-24 rounded-full flex items-center px-2 cursor-pointer transition-colors duration-500 shadow-2xl ${
          mode === 'guru' ? 'bg-slate-800 border-2 border-blue-500' : 'bg-pink-900 border-2 border-pink-500'
        }`}
        onClick={toggleMode}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Sliding Circle */}
        <motion.div
          className={`absolute w-20 h-20 rounded-full shadow-lg flex items-center justify-center ${
            mode === 'guru' ? 'bg-blue-500' : 'bg-pink-500'
          }`}
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          style={{
            left: mode === 'guru' ? '0.5rem' : 'calc(100% - 5.5rem)',
          }}
        >
          {mode === 'guru' ? (
            <GraduationCap size={40} className="text-white" />
          ) : (
            <Heart size={40} className="text-white fill-current" />
          )}
        </motion.div>

        {/* Text Labels */}
        <div className="absolute w-full flex justify-between px-8 text-white font-bold pointer-events-none">
          <span className={`transition-opacity duration-300 ${mode === 'guru' ? 'opacity-0' : 'opacity-100'}`}>
             Bucin Mode
          </span>
          <span className={`transition-opacity duration-300 ${mode === 'guru' ? 'opacity-100' : 'opacity-0'}`}>
            Guru Mode
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        key={mode} // Re-animate on mode change
        className="mt-4 text-center"
      >
        <p className={`text-lg font-medium ${mode === 'guru' ? 'text-blue-300' : 'text-pink-300'}`}>
          {mode === 'guru' ? (
            <span className="flex items-center gap-2 justify-center">
              <BookOpen size={20} /> Awas! Ibu Guru sedang galak, murid harap tenang!
            </span>
          ) : (
            <span className="flex items-center gap-2 justify-center">
              <PartyPopper size={20} /> Mode Ayang diaktifkan. Waktunya istirahat dan disayang!
            </span>
          )}
        </p>
      </motion.div>
    </div>
  );
};

export default ModeToggle;

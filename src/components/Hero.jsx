import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const Hero = ({ mode }) => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${mode === 'bucin' ? 'bg-pink-500' : 'bg-blue-500'}`}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
            }}
          />
        ))}
      </div>

      <div className="z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <div className="text-xl md:text-2xl text-gray-400 font-mono mb-2">
            System Initialized...
          </div>
          <h1 className="text-4xl md:text-6xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
            <Typewriter
              options={{
                strings: ['Welcome, Ibu Guru Stevany Rianty 💖', 'Loading Love Modules...', 'Preparing Surprises...'],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </h1>
        </motion.div>
        
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg text-gray-300 mt-4 max-w-lg mx-auto"
        >
          {mode === 'guru' 
            ? "Access granted. Teaching modules are online." 
            : "Warning: High levels of affection detected."}
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;

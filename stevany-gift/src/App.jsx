import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import Hero from './components/Hero';
import ModeToggle from './components/ModeToggle';
import TerminalReport from './components/TerminalReport';
import SecurityQuiz from './components/SecurityQuiz';

function App() {
  const [mode, setMode] = useState('guru');
  const { width, height } = useWindowSize();

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${mode === 'guru' ? 'bg-slate-900' : 'bg-pink-950'}`}>
      
      {/* Bucin Mode Confetti */}
      <AnimatePresence>
        {mode === 'bucin' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-50"
          >
            <Confetti
              width={width}
              height={height}
              numberOfPieces={200}
              recycle={true}
              colors={['#ff00ff', '#bf00ff', '#ff69b4', '#ffffff']}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <Hero mode={mode} />
        
        <ModeToggle mode={mode} setMode={setMode} />
        
        <motion.div
          layout
          className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 lg:gap-12 items-start"
        >
          <TerminalReport />
          <div className="flex flex-col items-center justify-center h-full">
             <SecurityQuiz />
          </div>
        </motion.div>

        <footer className="mt-16 text-center text-gray-500 text-sm pb-8">
          <p>Created with ❤️ by Fajar Alhuzain for Stevany Rianty</p>
          <p className="text-xs mt-2 opacity-50">v1.0.0 // Operation Bucin Protocol</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

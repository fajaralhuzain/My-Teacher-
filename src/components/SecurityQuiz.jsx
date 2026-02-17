import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { Lock, Unlock, XCircle, CheckCircle } from 'lucide-react';

const SecurityQuiz = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [wrongBtnPos, setWrongBtnPos] = useState({ x: 0, y: 0 });

  const handleWrongHover = () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setWrongBtnPos({ x: randomX, y: randomY });
  };

  const handleCorrect = () => {
    setIsUnlocked(true);
  };

  return (
    <div className="flex justify-center my-12">
      {isUnlocked && <Confetti recycle={false} numberOfPieces={500} />}

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold shadow-lg shadow-purple-500/50 flex items-center gap-2"
      >
        {isUnlocked ? <Unlock size={20} /> : <Lock size={20} />}
        {isUnlocked ? "Message Unlocked" : "Unlock Secret Message"}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => !isUnlocked && setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.5, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 100 }}
              className="bg-slate-900 border border-purple-500 p-8 rounded-2xl max-w-md w-full text-center relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {!isUnlocked ? (
                <>
                  <h2 className="text-2xl font-bold text-white mb-6">Security Clearance Required</h2>
                  <p className="text-gray-300 mb-8">Siapa murid paling bandel tapi paling sayang sama Ibu Guru?</p>
                  
                  <div className="flex flex-col gap-4">
                    <motion.button
                      onClick={handleCorrect}
                      whileHover={{ scale: 1.05 }}
                      className="w-full py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white font-bold transition-colors"
                    >
                      Ayang Fajar 💖
                    </motion.button>
                    
                    <motion.button
                      animate={{ x: wrongBtnPos.x, y: wrongBtnPos.y }}
                      onHoverStart={handleWrongHover}
                      className="w-full py-3 bg-gray-700 text-gray-400 rounded-lg font-bold"
                    >
                      Murid Lain
                    </motion.button>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.2, rotate: 360 }}
                    className="inline-block mb-4 p-4 bg-white/10 rounded-full"
                  >
                    <CheckCircle size={64} className="text-green-500" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-4">
                    Access Granted!
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Sayang, makasih ya udah jadi guru yang hebat dan sabar. 
                    Semoga lelahmu jadi lillah, dan semoga aku bisa terus jadi alasan di balik senyum manismu.
                    <br/><br/>
                    I Love You, Bu Guru! 🍎📚💌
                  </p>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="mt-8 text-sm text-gray-500 hover:text-white underline"
                  >
                    Close Message
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SecurityQuiz;

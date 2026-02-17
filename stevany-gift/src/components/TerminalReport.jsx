import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const TerminalReport = () => {
  const [lines, setLines] = useState([]);
  
  const logs = [
    { text: "Initialize Daily Report... [OK]", delay: 500 },
    { text: "Scanning Heart Rate... [ELEVATED]", delay: 1500 },
    { text: "[Status]: Target rindu hari ini tercapai 200%.", delay: 2500 },
    { text: "[Aktivitas]: Menunggu Ibu Guru Stevany selesai koreksi nilai...", delay: 4000 },
    { text: "[Log Ramadhan]: Persiapan menu buka puasa bersama terekam dalam sistem.", delay: 6000 },
    { text: "System Notes: Jangan lupa minum air putih, Sayang! 💧", delay: 8000 },
  ];

  useEffect(() => {
    let timeouts = [];
    logs.forEach((log, index) => {
      const timeout = setTimeout(() => {
        setLines((prev) => [...prev, log.text]);
      }, log.delay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="w-full max-w-2xl mx-auto my-10 p-1"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <div className="bg-slate-900 rounded-lg shadow-2xl overflow-hidden border border-slate-700 font-mono text-sm sm:text-base">
        {/* Terminal Header */}
        <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="ml-4 text-slate-400 text-xs flex items-center gap-2">
            <Terminal size={14} />
            user@heart-terminal:~
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 h-64 overflow-y-auto custom-scrollbar bg-black/90 text-green-400">
          {lines.map((line, index) => (
            <div key={index} className="mb-2">
              <span className="text-pink-500 mr-2">➜</span>
              <span className="typing-text">{line}</span>
            </div>
          ))}
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2.5 h-4 bg-green-500 ml-1 align-middle"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalReport;

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler le temps de chargement des ressources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 secondes de loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[150] flex flex-col items-center justify-center bg-street-dark"
        >
          {/* Effet de bruit de fond pour le loader aussi */}
          <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20"></div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo clignotant façon Néon */}
            <motion.h1 
              className="text-6xl md:text-8xl font-display text-transparent text-glow mb-4"
              style={{ WebkitTextStroke: '2px var(--color-street-accent)' }}
              animate={{ 
                opacity: [0.2, 1, 0.2, 1, 1, 0.5, 1],
                textShadow: [
                  "0 0 0px rgba(250,204,21,0)",
                  "0 0 20px rgba(250,204,21,0.8)",
                  "0 0 0px rgba(250,204,21,0)",
                  "0 0 30px rgba(250,204,21,1)"
                ]
              }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
            >
              STREET<span className="text-white" style={{ WebkitTextStroke: '0px' }}>FOOD</span>
            </motion.h1>

            {/* Barre de progression stylisée */}
            <div className="w-64 h-1 bg-street-gray relative overflow-hidden mt-4">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-street-danger"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>
            
            <motion.p 
              className="text-street-accent font-display tracking-widest mt-4 text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              CHAUFFE DE LA PLAQUE...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
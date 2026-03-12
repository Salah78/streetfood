"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Hero() {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = buttonRef.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-screen pt-24 pb-12 flex items-center justify-center overflow-hidden bg-street-dark">
      {/* Background texture */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-street-dark via-street-dark/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2000&auto=format&fit=crop" 
          alt="Texture fond" 
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="container relative z-10 px-4 flex flex-col lg:flex-row items-center justify-between gap-12 mt-10">
        
        {/* Left Column : Texts & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left lg:w-1/2 z-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="bg-street-danger text-white px-4 py-1 text-sm font-bold uppercase tracking-widest mb-6 transform -rotate-2"
          >
            Nouveau Burger Smashé
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display leading-[0.8] mb-6 drop-shadow-2xl">
            <span className="block text-transparent" style={{ WebkitTextStroke: '2px white' }}>FAT</span>
            <span className="block text-street-accent text-glow">SMASH</span>
          </h1>
          
          <p className="max-w-xl text-gray-300 text-lg md:text-xl mb-10 border-l-4 border-street-accent pl-4">
            Double steak smashé, croûte caramélisée, double cheddar fondu et notre sauce secrète. 
            L'expérience street food ultime.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <motion.a 
              ref={buttonRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{ x: position.x * 0.3, y: position.y * 0.3 }}
              transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
              whileTap={{ scale: 0.95 }}
              href="#menu" 
              className="group relative px-8 py-4 bg-street-accent text-street-dark font-display text-2xl uppercase overflow-hidden shadow-[0_0_20px_rgba(250,204,21,0.4)]"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 pointer-events-none">Commander</span>
              <div className="absolute inset-0 h-full w-0 bg-street-danger transition-all duration-300 ease-out group-hover:w-full z-0" />
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#gallery" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-display text-2xl uppercase hover:bg-white hover:text-street-dark transition-colors"
            >
              Voir le Spot
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column : Giant Animated Burger */}
        <div className="lg:w-1/2 relative h-[400px] md:h-[600px] w-full flex items-center justify-center z-30 pointer-events-none">
          {/* Le Burger Animé */}
          <motion.div
            initial={{ opacity: 0, scale: 0.2, y: -500, x: 200, rotate: 45 }}
            animate={{ opacity: 1, scale: 1.2, y: 0, x: 0, rotate: -5 }}
            transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.2 }}
            whileInView={{
              y: [0, -30, 0],
              rotate: [-5, 5, -5],
              transition: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.5 }
            }}
            className="relative z-20 w-[120%] max-w-[800px] flex justify-center drop-shadow-[0_40px_40px_rgba(0,0,0,0.9)]"
          >
            <img 
              src="/burger_food.png"
              alt="Giant Smashed Burger Food Porn"
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Effet de vitesse (speed lines) derrière le burger pendant l'apparition */}
          <motion.div
            initial={{ opacity: 1, height: "200%" }}
            animate={{ opacity: 0, height: "0%" }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="absolute top-0 w-full bg-gradient-to-b from-white/10 to-transparent blur-[2px] transform -skew-x-12 z-10"
          />
        </div>
      </div>

      {/* Decorative infinite text banner */}
      <div className="absolute bottom-5 left-0 w-full overflow-hidden whitespace-nowrap z-0 opacity-20 pointer-events-none bg-street-accent text-street-dark py-2 transform -rotate-2 scale-110">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="flex gap-8 text-4xl font-display uppercase font-bold"
        >
          <span>100% FAT</span> <span>•</span> <span>SMASH BURGER</span> <span>•</span> <span>FRENCH TACOS</span> <span>•</span> <span>100% FAT</span> <span>•</span> <span>SMASH BURGER</span> <span>•</span> <span>FRENCH TACOS</span> <span>•</span><span>100% FAT</span> <span>•</span> <span>SMASH BURGER</span> <span>•</span> <span>FRENCH TACOS</span> <span>•</span>
        </motion.div>
      </div>
    </section>
  );
}
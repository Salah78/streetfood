"use client";

import { motion } from "framer-motion";

export default function Hero() {
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#menu" 
              className="group relative px-8 py-4 bg-street-accent text-street-dark font-display text-2xl uppercase overflow-hidden shadow-[0_0_20px_rgba(250,204,21,0.4)]"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Commander</span>
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
          {/* Cercles néons derrière le burger pour le mettre en valeur */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-street-accent/20 rounded-full blur-[80px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-street-danger/20 rounded-full blur-[60px]"
          />

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
            className="relative z-20 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden drop-shadow-[0_30px_30px_rgba(0,0,0,0.8)] border-4 border-street-accent/30"
          >
            <img 
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000&auto=format&fit=crop"
              alt="Giant Smashed Burger Food Porn"
              className="w-full h-full object-cover transform scale-110 hover:scale-125 transition-transform duration-500"
            />
            {/* Inner shadow pour un effet bulle 3D */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] pointer-events-none" />
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
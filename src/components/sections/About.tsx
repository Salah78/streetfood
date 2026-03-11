"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-street-dark relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Image placeholder with street effects */}
              <div className="absolute inset-0 bg-street-accent transform translate-x-4 translate-y-4" />
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop" 
                alt="Chef preparing food" 
                className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              {/* "Sticker" detail */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-street-danger text-white font-display text-2xl p-4 transform -rotate-12">
                100% FAT
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-5xl md:text-7xl font-display mb-6">NOTRE <span className="text-street-danger">VIBE</span></h2>
            <div className="space-y-6 text-gray-300 text-lg">
              <p>
                Ici, on ne compte pas les calories. On a créé <strong>STREET FOOD</strong> pour ceux qui aiment la vraie bouffe, celle qui tache les doigts et qui fait du bien à l'âme.
              </p>
              <p>
                Nos steaks sont smashés à la perfection sur une plaque brûlante pour cette croûte caramélisée inimitable. Nos frites sont coupées sur place. Nos sauces sont secrètes (et on ne vous les donnera pas).
              </p>
              <p className="text-xl font-display text-street-accent tracking-wide pt-4">
                Pas de chichi. Juste le goût.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background texture text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display text-white/5 pointer-events-none whitespace-nowrap z-0">
        NO DIET
      </div>
    </section>
  );
}
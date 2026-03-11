"use client";

import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop",
    alt: "Néon du restaurant la nuit",
    className: "col-span-2 row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000&auto=format&fit=crop",
    alt: "Ambiance street food",
    className: "col-span-2 md:col-span-1 row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1000&auto=format&fit=crop",
    alt: "Gros plan sur un burger",
    className: "col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=1000&auto=format&fit=crop",
    alt: "Cuisine en action",
    className: "col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1625938144755-652e08e359b7?q=80&w=1000&auto=format&fit=crop",
    alt: "Mur tagué et néons",
    className: "col-span-2 md:col-span-1 row-span-1"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-street-gray border-t border-street-dark relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
          <div>
            <h2 className="text-5xl md:text-7xl font-display text-white mb-2">
              LE <span className="text-street-accent">SPOT</span>
            </h2>
            <div className="h-2 w-24 bg-street-danger" />
          </div>
          <p className="text-gray-400 max-w-sm uppercase font-bold tracking-wider text-sm md:text-right">
            L'ambiance. Le crew. La street. <br />
            Viens comme tu es.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[250px] gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group overflow-hidden ${img.className} bg-street-dark`}
            >
              {/* Overlay coloré au survol */}
              <div className="absolute inset-0 bg-street-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay" />
              
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
              />
              
              {/* Effet ruban adhésif (tape) aléatoire sur certaines images */}
              {index % 2 === 0 && (
                <div className="absolute -top-3 -right-3 w-16 h-8 bg-street-danger transform rotate-45 z-20 opacity-90 mix-blend-difference" />
              )}
              {index === 1 && (
                <div className="absolute -bottom-4 -left-4 w-20 h-10 bg-street-accent transform -rotate-12 z-20 opacity-90 mix-blend-difference" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Texture en fond */}
      <div className="absolute top-10 right-10 text-[15vw] font-display text-white/5 pointer-events-none whitespace-nowrap z-0 select-none">
        URBAN
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Flame } from "lucide-react";
import { playSizzleSound, playHoverSound } from "@/lib/sounds";

const menuItems = [
  { 
    id: 1, 
    name: "Le Classic Smash", 
    category: "Burger",
    desc: "Double steak smashé, double cheddar, pickles, sauce secrète, potato bun.", 
    price: "9.90€", 
    spicy: false,
    image: "/burger_food.png",
    bgAccent: "bg-street-accent",
    ingredients: ["bg-yellow-400", "bg-red-500", "bg-green-500", "bg-amber-700", "bg-yellow-200"]
  },
  { 
    id: 2, 
    name: "L'Inferno", 
    category: "Burger",
    desc: "Double steak, pepper jack, jalapeños frais, sauce piquante maison qui arrache.", 
    price: "11.50€", 
    spicy: true,
    image: "/burger_food.png", 
    bgAccent: "bg-street-danger",
    ingredients: ["bg-red-600", "bg-orange-500", "bg-yellow-500", "bg-red-700", "bg-amber-800"]
  },
  { 
    id: 3, 
    name: "Ghetto Truffe", 
    category: "Burger",
    desc: "Double steak, crème de truffe, champignons grillés, roquette.", 
    price: "12.90€", 
    spicy: false,
    image: "/burger_food.png", 
    bgAccent: "bg-white",
    ingredients: ["bg-stone-300", "bg-stone-600", "bg-green-800", "bg-amber-900", "bg-stone-200"]
  },
  { 
    id: 4, 
    name: "L'Original", 
    category: "French Tacos",
    desc: "Viande hachée, poulet mariné, frites, sauce fromagère maison.", 
    price: "10.00€", 
    spicy: false,
    image: "/burger_food.png", 
    bgAccent: "bg-street-accent",
    ingredients: ["bg-yellow-300", "bg-orange-300", "bg-amber-500", "bg-yellow-200", "bg-white"]
  },
  { 
    id: 5, 
    name: "Le Blindé", 
    category: "French Tacos",
    desc: "3 viandes au choix, frites, double sauce fromagère gratinée, œuf.", 
    price: "14.50€", 
    spicy: false,
    image: "/burger_food.png",
    bgAccent: "bg-street-danger",
    ingredients: ["bg-yellow-300", "bg-yellow-600", "bg-white", "bg-amber-600", "bg-yellow-500"]
  },
  { 
    id: 6, 
    name: "Wrap Crispy", 
    category: "Wraps",
    desc: "Tenders de poulet maison, salade, tomate, sauce mayo épicée.", 
    price: "8.50€", 
    spicy: true,
    image: "/burger_food.png",
    bgAccent: "bg-white",
    ingredients: ["bg-orange-400", "bg-green-500", "bg-red-500", "bg-orange-200", "bg-white"]
  },
  { 
    id: 7, 
    name: "Frites Cheddar Bacon", 
    category: "Sides",
    desc: "Frites croustillantes, sauce cheddar fondue, bacon crispy.", 
    price: "5.50€", 
    spicy: false,
    image: "/burger_food.png",
    bgAccent: "bg-street-accent",
    ingredients: ["bg-yellow-400", "bg-yellow-500", "bg-red-800", "bg-red-900", "bg-yellow-300"]
  }
];

export default function Menu() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExploding, setIsExploding] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % menuItems.length);
    setIsExploding(false);
    playHoverSound();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? menuItems.length - 1 : prev - 1));
    setIsExploding(false);
    playHoverSound();
  };

  const handleOrderClick = () => {
    playSizzleSound();
    setIsExploding(true);
    setTimeout(() => setIsExploding(false), 1500); // Reset after animation
  };

  const activeItem = menuItems[currentIndex];

  return (
    <section id="menu" className="py-24 bg-street-gray relative overflow-hidden">
      {/* Decorative texts */}
      <div className="absolute top-10 left-[-5%] text-[15vw] font-display text-white/5 pointer-events-none whitespace-nowrap z-0">
        MENU
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-5xl md:text-7xl font-display text-white mb-2 text-center">
            NOTRE <span className="text-street-accent text-glow">SÉLECTION</span>
          </h2>
          <div className="h-1 w-32 bg-street-danger mt-4" />
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between mt-16 md:mt-24 gap-12 md:gap-0">
          
          {/* Info Gauche */}
          <div className="md:w-1/3 text-center md:text-left order-2 md:order-1 z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id + "-info"}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <span className="text-street-accent font-bold uppercase tracking-widest text-sm border border-street-accent px-3 py-1">
                    {activeItem.category}
                  </span>
                  {activeItem.spicy && <Flame className="text-street-danger" size={20} />}
                </div>
                
                <h3 className="text-4xl md:text-5xl font-display mb-4 leading-none">
                  {activeItem.name}
                </h3>
                <p className="text-gray-400 mb-6 text-lg">
                  {activeItem.desc}
                </p>
                
                <div className="text-4xl font-display text-white mb-8">
                  {activeItem.price}
                </div>
                
                <button 
                  onClick={handleOrderClick}
                  onMouseEnter={playHoverSound}
                  className={`px-8 py-4 ${activeItem.bgAccent} ${activeItem.bgAccent === 'bg-white' ? 'text-street-dark' : 'text-street-dark'} font-display text-2xl uppercase hover:scale-105 transition-transform active:scale-95 shadow-xl`}
                >
                  Ajouter au panier
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Centrale avec Explosion */}
          <div className="md:w-1/3 flex justify-center items-center relative order-1 md:order-2 h-[300px] md:h-[400px]">
            {/* Background Halo */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id + "-halo"}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className={`absolute w-64 h-64 md:w-96 md:h-96 rounded-full blur-[80px] opacity-20 pointer-events-none ${activeItem.bgAccent}`}
              />
            </AnimatePresence>

            {/* Ingrédients qui explosent au clic */}
            {isExploding && activeItem.ingredients.map((color, i) => (
              <motion.div
                key={`explosion-${i}`}
                initial={{ opacity: 1, x: 0, y: 0, scale: 0 }}
                animate={{ 
                  opacity: 0,
                  x: (Math.random() - 0.5) * 400,
                  y: (Math.random() - 0.5) * 400,
                  scale: Math.random() * 2 + 1,
                  rotate: Math.random() * 360
                }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`absolute w-4 h-4 md:w-6 md:h-6 rounded-full ${color} z-30 shadow-lg`}
              />
            ))}

            <AnimatePresence mode="wait">
              <motion.img
                key={activeItem.id + "-img"}
                src={activeItem.image}
                alt={activeItem.name}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                onClick={handleOrderClick}
                className="relative z-20 w-full max-w-[300px] md:max-w-[400px] object-contain drop-shadow-2xl cursor-pointer"
              />
            </AnimatePresence>
          </div>

          {/* Contrôles Droite */}
          <div className="md:w-1/3 flex justify-center md:justify-end gap-4 order-3 z-20">
            <button 
              onClick={prevSlide}
              className="w-16 h-16 rounded-full border-2 border-street-dark flex items-center justify-center text-white hover:border-street-accent hover:text-street-accent transition-colors bg-street-gray shadow-lg"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-16 h-16 rounded-full border-2 border-street-dark flex items-center justify-center text-white hover:border-street-accent hover:text-street-accent transition-colors bg-street-gray shadow-lg"
            >
              <ChevronRight size={32} />
            </button>
          </div>

        </div>

        {/* Menu Pucks (Dots) */}
        <div className="flex justify-center gap-3 mt-16 relative z-20">
          {menuItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                playHoverSound();
              }}
              className={`h-2 transition-all duration-300 ${idx === currentIndex ? 'w-12 bg-street-accent' : 'w-4 bg-street-dark'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
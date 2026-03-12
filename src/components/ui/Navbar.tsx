"use client";

import { useState, useEffect } from "react";
import { Menu as MenuIcon, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { playHoverSound } from "@/lib/sounds";
import { useCartStore } from "@/lib/store";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toggleCart, items } = useCartStore();

  const cartItemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-street-dark/90 backdrop-blur-md border-b border-street-gray py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-3xl font-display tracking-wider text-street-accent text-glow">
          STREET<span className="text-white">FOOD</span>
        </a>
        
        {/* Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#menu" onMouseEnter={playHoverSound} className="text-sm font-bold uppercase hover:text-street-accent transition-colors">Menu</a>
          <a href="#about" onMouseEnter={playHoverSound} className="text-sm font-bold uppercase hover:text-street-accent transition-colors">La Vibe</a>
          <a href="#gallery" onMouseEnter={playHoverSound} className="text-sm font-bold uppercase hover:text-street-accent transition-colors">Le Spot</a>
          <a href="#contact" onMouseEnter={playHoverSound} className="text-sm font-bold uppercase hover:text-street-accent transition-colors">Contact</a>
          
          <button 
            onClick={toggleCart}
            onMouseEnter={playHoverSound}
            className="relative p-2 hover:text-street-accent transition-colors"
          >
            <ShoppingBag size={24} />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-street-danger text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartItemCount}
              </span>
            )}
          </button>

          <a href="#menu" onMouseEnter={playHoverSound} className="bg-street-accent text-street-dark px-6 py-2 font-bold uppercase transform -skew-x-12 hover:bg-white transition-colors">
            <span className="block skew-x-12">Commander</span>
          </a>
        </div>

        {/* Mobile toggle & cart */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleCart}
            className="relative p-2 text-white"
          >
            <ShoppingBag size={24} />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-street-danger text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartItemCount}
              </span>
            )}
          </button>
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="fixed inset-0 bg-street-dark z-40 flex flex-col justify-center items-center gap-8 md:hidden"
          >
            {/* Background Texture in menu */}
            <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20 pointer-events-none"></div>
            
            <a href="#menu" onClick={() => setIsOpen(false)} className="text-6xl font-display text-white hover:text-street-accent transition-colors relative z-10">Menu</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-6xl font-display text-white hover:text-street-accent transition-colors relative z-10">La Vibe</a>
            <a href="#gallery" onClick={() => setIsOpen(false)} className="text-6xl font-display text-white hover:text-street-accent transition-colors relative z-10">Le Spot</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-6xl font-display text-white hover:text-street-accent transition-colors relative z-10">Contact</a>
            
            <button 
              onClick={() => { setIsOpen(false); toggleCart(); }} 
              className="mt-8 bg-street-accent text-street-dark px-12 py-4 font-display text-3xl uppercase hover:bg-white transition-colors relative z-10 shadow-[0_0_20px_rgba(250,204,21,0.4)]"
            >
              Commander
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
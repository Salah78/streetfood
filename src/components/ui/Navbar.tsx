"use client";

import { useState, useEffect } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
          <a href="#menu" className="text-sm font-bold uppercase hover:text-street-accent transition-colors">Menu</a>
          <a href="#about" className="text-sm font-bold uppercase hover:text-street-accent transition-colors">La Vibe</a>
          <a href="#gallery" className="text-sm font-bold uppercase hover:text-street-accent transition-colors">Le Spot</a>
          <a href="#contact" className="text-sm font-bold uppercase hover:text-street-accent transition-colors">Contact</a>
          <a href="#menu" className="bg-street-accent text-street-dark px-6 py-2 font-bold uppercase transform -skew-x-12 hover:bg-white transition-colors">
            <span className="block skew-x-12">Commander</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-street-dark border-b border-street-gray py-6 px-4 flex flex-col gap-6 md:hidden"
        >
          <a href="#menu" onClick={() => setIsOpen(false)} className="text-2xl font-display">Menu</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-2xl font-display">La Vibe</a>
          <a href="#gallery" onClick={() => setIsOpen(false)} className="text-2xl font-display">Le Spot</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-2xl font-display">Contact</a>
          <a href="#menu" onClick={() => setIsOpen(false)} className="bg-street-accent text-street-dark px-6 py-3 font-bold uppercase text-center mt-4">
            Commander
          </a>
        </motion.div>
      )}
    </nav>
  );
}
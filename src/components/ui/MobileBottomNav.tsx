"use client";

import { Home, Utensils, MapPin, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/lib/store";
import { useEffect, useState } from "react";
import { triggerHaptic } from "@/lib/haptics";

export default function MobileBottomNav() {
  const { toggleCart, items } = useCartStore();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const cartItemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Si on est tout en haut, toujours afficher
      if (currentScrollY < 100) {
        setIsVisible(true);
      } 
      // Si on scrolle vers le bas, on cache la barre pour libérer l'écran
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } 
      // Si on scrolle vers le haut, on la réaffiche
      else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Ne pas rendre le composant du tout sur Desktop (géré par tailwind 'md:hidden' mais plus propre ici aussi)
  if (typeof window !== "undefined" && window.innerWidth > 768) {
    return null;
  }

  const handleNavClick = () => {
    triggerHaptic('light');
  };

  const handleCartClick = () => {
    triggerHaptic('medium');
    toggleCart();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-street-dark/95 backdrop-blur-xl border border-white/10 rounded-full z-[90] px-6 py-4 flex justify-between items-center shadow-[0_20px_40px_rgba(0,0,0,0.8)] md:hidden"
        >
          <a href="#" onClick={handleNavClick} className="flex flex-col items-center gap-1 text-gray-400 hover:text-street-accent transition-colors">
            <Home size={24} />
          </a>
          
          <a href="#menu" onClick={handleNavClick} className="flex flex-col items-center gap-1 text-gray-400 hover:text-street-accent transition-colors">
            <Utensils size={24} />
          </a>

          <a href="#gallery" onClick={handleNavClick} className="flex flex-col items-center gap-1 text-gray-400 hover:text-street-accent transition-colors">
            <MapPin size={24} />
          </a>

          <button onClick={handleCartClick} className="relative flex flex-col items-center gap-1 text-white">
            <div className="bg-street-accent text-street-dark p-3 rounded-full -mt-8 shadow-[0_0_15px_rgba(250,204,21,0.5)]">
              <ShoppingBag size={24} />
              {cartItemCount > 0 && (
                <span className="absolute -top-6 -right-2 bg-street-danger text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-street-dark">
                  {cartItemCount}
                </span>
              )}
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
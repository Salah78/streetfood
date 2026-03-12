"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { playHoverSound } from "@/lib/sounds";
import { triggerHaptic } from "@/lib/haptics";
import { useEffect, useState } from "react";

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem } = useCartStore();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const total = items.reduce((acc, item) => {
    const price = parseFloat(item.price.replace("€", ""));
    return acc + (price * item.quantity);
  }, 0);

  const handleRemove = (id: number) => {
    triggerHaptic('medium');
    removeItem(id);
  };

  const handleCheckout = () => {
    triggerHaptic('success');
    // Logique de validation ici
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay sombre */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-street-dark/80 backdrop-blur-sm z-[100]"
          />

          {/* Tiroir (Right on Desktop, Bottom on Mobile) */}
          <motion.div
            initial={isMobile ? { y: "100%" } : { x: "100%" }}
            animate={isMobile ? { y: 0 } : { x: 0 }}
            exit={isMobile ? { y: "100%" } : { x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            drag={isMobile ? "y" : false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              if (offset.y > 100 || velocity.y > 500) {
                closeCart();
              }
            }}
            className={`fixed z-[101] bg-street-gray border-street-dark flex flex-col shadow-2xl
              ${isMobile 
                ? "bottom-0 left-0 right-0 h-[85vh] rounded-t-3xl border-t" 
                : "top-0 right-0 h-full w-[450px] border-l"
              }
            `}
          >
            {/* Poignée de drag pour mobile */}
            {isMobile && (
              <div className="w-full flex justify-center pt-4 pb-2 active:cursor-grabbing cursor-grab touch-none">
                <div className="w-16 h-1.5 bg-gray-600 rounded-full" />
              </div>
            )}

            {/* Header du panier */}
            <div className={`p-6 border-b border-street-dark flex justify-between items-center bg-street-dark ${isMobile ? 'rounded-t-3xl' : ''}`}>
              <h2 className="text-3xl font-display flex items-center gap-3">
                <ShoppingBag className="text-street-accent" /> MON <span className="text-street-accent">PANIER</span>
              </h2>
              <button 
                onClick={closeCart} 
                onMouseEnter={playHoverSound}
                className="p-2 hover:text-street-danger transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            {/* Contenu du panier */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 overscroll-contain">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500 opacity-50">
                  <ShoppingBag size={64} className="mb-4" />
                  <p className="font-display text-2xl uppercase">Ton panier est vide.</p>
                  <p>La faim n'attend pas !</p>
                </div>
              ) : (
                items.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 items-center bg-street-dark p-4 border border-white/5 rounded-xl"
                  >
                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center p-2 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold uppercase tracking-wider text-sm truncate">{item.name}</h4>
                      <p className="text-street-accent font-display text-xl">{item.price}</p>
                      <p className="text-gray-400 text-xs">Quantité: {item.quantity}</p>
                    </div>
                    <button 
                      onClick={() => handleRemove(item.id)}
                      onMouseEnter={playHoverSound}
                      className="text-gray-500 hover:text-street-danger transition-colors p-3 active:scale-90"
                    >
                      <Trash2 size={24} />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer du panier */}
            {items.length > 0 && (
              <div className="p-6 border-t border-street-dark bg-street-dark pb-safe">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xl text-gray-400 uppercase font-bold">Total</span>
                  <span className="text-4xl font-display text-white">{total.toFixed(2)}€</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  onMouseEnter={playHoverSound}
                  className="w-full py-4 rounded-xl bg-street-accent text-street-dark font-display text-2xl uppercase hover:bg-white transition-colors flex justify-center items-center gap-2 group active:scale-95"
                >
                  <span className="group-hover:scale-105 transition-transform">Valider la commande</span>
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
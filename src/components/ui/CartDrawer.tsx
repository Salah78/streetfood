"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { playHoverSound } from "@/lib/sounds";

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem } = useCartStore();

  const total = items.reduce((acc, item) => {
    const price = parseFloat(item.price.replace("€", ""));
    return acc + (price * item.quantity);
  }, 0);

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

          {/* Tiroir */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-street-gray border-l border-street-dark z-[101] shadow-2xl flex flex-col"
          >
            {/* Header du panier */}
            <div className="p-6 border-b border-street-dark flex justify-between items-center bg-street-dark">
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
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
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
                    className="flex gap-4 items-center bg-street-dark p-4 border border-white/5"
                  >
                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center p-2">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold uppercase tracking-wider text-sm">{item.name}</h4>
                      <p className="text-street-accent font-display text-xl">{item.price}</p>
                      <p className="text-gray-400 text-xs">Quantité: {item.quantity}</p>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      onMouseEnter={playHoverSound}
                      className="text-gray-500 hover:text-street-danger transition-colors p-2"
                    >
                      <Trash2 size={20} />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer du panier */}
            {items.length > 0 && (
              <div className="p-6 border-t border-street-dark bg-street-dark">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xl text-gray-400 uppercase font-bold">Total</span>
                  <span className="text-4xl font-display text-white">{total.toFixed(2)}€</span>
                </div>
                <button 
                  onMouseEnter={playHoverSound}
                  className="w-full py-4 bg-street-accent text-street-dark font-display text-2xl uppercase hover:bg-white transition-colors flex justify-center items-center gap-2 group"
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
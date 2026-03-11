"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const categories = [
  {
    name: "Smash Burgers",
    items: [
      { id: 1, name: "Le Classic Smash", desc: "Double steak smashé, double cheddar, pickles, sauce secrète, potato bun.", price: "9.90€", spicy: false },
      { id: 2, name: "Ghetto Truffe", desc: "Double steak, crème de truffe, champignons grillés, roquette.", price: "12.90€", spicy: false },
      { id: 3, name: "Inferno", desc: "Double steak, pepper jack, jalapeños, sauce piquante maison.", price: "11.50€", spicy: true },
    ]
  },
  {
    name: "French Tacos",
    items: [
      { id: 4, name: "L'Original", desc: "Viande hachée, poulet mariné, frites, sauce fromagère maison.", price: "10.00€", spicy: false },
      { id: 5, name: "Le Blindé", desc: "3 viandes au choix, frites, double sauce fromagère, œuf.", price: "14.50€", spicy: false },
    ]
  },
  {
    name: "Wraps & Sides",
    items: [
      { id: 6, name: "Wrap Crispy", desc: "Tenders de poulet maison, salade, tomate, sauce mayo épicée.", price: "8.50€", spicy: false },
      { id: 7, name: "Frites Cheddar Bacon", desc: "Frites croustillantes, sauce cheddar fondue, bacon crispy.", price: "5.50€", spicy: false },
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-street-gray relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl font-display text-white mb-2">NOTRE <span className="text-street-accent">MENU</span></h2>
            <div className="h-2 w-24 bg-street-danger" />
          </div>
          <p className="text-gray-400 max-w-sm uppercase font-bold tracking-wider text-sm">
            Préparé à la commande. Produits frais. Portions généreuses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {categories.map((category, catIdx) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className={catIdx === 2 ? "lg:col-span-2 lg:w-1/2" : ""}
            >
              <h3 className="text-3xl font-display border-b-2 border-street-dark pb-4 mb-8 text-white">
                {category.name}
              </h3>
              
              <div className="flex flex-col gap-8">
                {category.items.map((item, i) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                    className="group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold uppercase tracking-wide group-hover:text-street-accent transition-colors flex items-center gap-2">
                        {item.name}
                        {item.spicy && <Flame size={18} className="text-street-danger" />}
                      </h4>
                      <span className="text-xl font-display text-street-accent">{item.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative tape */}
      <div className="absolute top-0 right-10 w-32 h-8 bg-street-accent transform rotate-12 -translate-y-4 mix-blend-difference opacity-80" />
      <div className="absolute bottom-10 left-10 w-40 h-10 bg-street-danger transform -rotate-6 translate-y-4 mix-blend-difference opacity-80" />
    </section>
  );
}
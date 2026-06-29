"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import MenuCard from "@/components/MenuCard";

const easeSpring = [0.32, 0.72, 0, 1] as const;

const categories = [
  { id: "all", label: "All" },
  { id: "pizza", label: "Pizza & Garlic Breads" },
  { id: "pasta", label: "Pasta" },
  { id: "chinese", label: "Chinese & Fast Food" },
  { id: "beverages", label: "Shakes & Beverages" },
  { id: "snacks", label: "Snacks" },
];

const menuItems = [
  {
    name: "Farming Pleasure Pizza",
    description:
      "Garden-fresh veggies on a crispy wood-fired crust with mozzarella.",
    price: "₹299",
    category: "pizza",
  },
  {
    name: "Garlic Pizza Bread",
    description:
      "Toasted garlic butter bread with melted cheese and herbs.",
    price: "₹199",
    category: "pizza",
  },
  {
    name: "Arrabbiata Pasta",
    description:
      "Spicy tomato-based pasta with garlic, chili, and fresh basil.",
    price: "₹249",
    category: "pasta",
  },
  {
    name: "Cheese Corn Cigar",
    description:
      "Crispy fried rolls stuffed with sweet corn and gooey cheese.",
    price: "₹179",
    category: "snacks",
  },
  {
    name: "Chocolate Caramel Shake",
    description:
      "Rich chocolate blended with caramel sauce and whipped cream.",
    price: "₹199",
    category: "beverages",
  },
  {
    name: "Happy Hakka Noodles",
    description:
      "Stir-fried noodles with vegetables in a tangy soy sauce.",
    price: "₹229",
    category: "chinese",
  },
  {
    name: "Peri Peri French Fries",
    description:
      "Crispy fries tossed in house peri-peri spice mix.",
    price: "₹149",
    category: "snacks",
  },
  {
    name: "Hunger Bhagao Box",
    description:
      "Massive combo: burger + fries + drink + dessert. Enough said.",
    price: "₹449",
    category: "chinese",
  },
  {
    name: "Margherita Pizza",
    description:
      "Classic tomato, mozzarella, and fresh basil on thin crust.",
    price: "₹249",
    category: "pizza",
  },
  {
    name: "White Sauce Pasta",
    description:
      "Creamy Alfredo-style pasta with mushrooms and bell peppers.",
    price: "₹269",
    category: "pasta",
  },
  {
    name: "Cold Coffee Frappe",
    description:
      "Chilled espresso blended with milk, ice cream, and chocolate.",
    price: "₹179",
    category: "beverages",
  },
  {
    name: "Chilli Garlic Noodles",
    description:
      "Spicy noodles tossed with garlic, chili, and spring onions.",
    price: "₹239",
    category: "chinese",
  },
];

export default function MenuPage() {
  const [active, setActive] = useState("all");
  const prefersReduced = useReducedMotion();

  const filtered =
    active === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === active);

  return (
    <section className="min-h-dvh pt-24 sm:pt-28 pb-28 sm:pb-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={
            prefersReduced ? {} : { opacity: 0, y: 20, filter: "blur(4px)" }
          }
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: easeSpring }}
          className="text-center mb-10 sm:mb-14"
        >
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-cream">
            Our <span className="text-amber">Menu</span>
          </h1>
          <p className="mt-3 font-body text-cream/50 max-w-lg mx-auto">
            Crafted with love. From wood-fired pizzas to barista-brewed
            coffee — every dish tells a story.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`font-body text-sm tracking-wide px-4 py-2.5 rounded-full border transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                active === cat.id
                  ? "bg-amber text-espresso border-amber font-semibold"
                  : "bg-transparent text-cream/60 border-amber/20 hover:text-amber hover:border-amber/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={
              prefersReduced ? {} : { opacity: 0, y: 10, filter: "blur(4px)" }
            }
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={prefersReduced ? {} : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: easeSpring }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {filtered.map((item, i) => (
              <MenuCard key={item.name} {...item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-center font-body text-cream/40 py-16">
            No items in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}

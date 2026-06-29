"use client";

import { motion, useReducedMotion } from "framer-motion";

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  category: string;
  index: number;
}

export default function MenuCard({
  name,
  description,
  price,
  category,
  index,
}: MenuCardProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
      whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={prefersReduced ? {} : { y: -4, scale: 1.02 }}
      className="group relative bg-charcoal border border-amber/10 rounded-2xl p-6 transition-all duration-500 hover:border-amber/30 hover:shadow-[0_0_30px_-5px_rgba(232,160,69,0.3)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-heading text-lg font-bold text-cream group-hover:text-amber transition-colors duration-300">
            {name}
          </h3>
          <p className="mt-1.5 font-body text-sm text-cream/50 line-clamp-2">
            {description}
          </p>
        </div>
        <span className="flex-shrink-0 font-heading text-lg font-bold text-amber bg-amber/10 px-3.5 py-1.5 rounded-full">
          {price}
        </span>
      </div>
      <span className="absolute top-3 right-3 font-body text-[10px] uppercase tracking-widest text-amber/30">
        {category}
      </span>
    </motion.div>
  );
}

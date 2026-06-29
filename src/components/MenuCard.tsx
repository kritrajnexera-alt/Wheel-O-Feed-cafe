"use client";

import { motion, useReducedMotion } from "framer-motion";

const easeSpring = [0.32, 0.72, 0, 1] as const;

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
      initial={
        prefersReduced
          ? {}
          : { opacity: 0, y: 30, filter: "blur(4px)" }
      }
      whileInView={
        prefersReduced ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: easeSpring }}
      whileHover={
        prefersReduced
          ? {}
          : { y: -4, scale: 1.02, transition: { duration: 0.4, ease: easeSpring } }
      }
      className="group"
    >
      <div className="p-1.5 rounded-[2rem] bg-amber/[0.03] border border-amber/10 shadow-[inset_0_1px_0_rgba(232,160,69,0.08)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_0_40px_-8px_rgba(232,160,69,0.2)]">
        <div className="rounded-[calc(2rem-0.375rem)] bg-charcoal p-6 shadow-[inset_0_1px_1px_rgba(245,240,235,0.06)]">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="font-heading text-lg font-bold text-cream group-hover:text-amber transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
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
        </div>
      </div>
    </motion.div>
  );
}

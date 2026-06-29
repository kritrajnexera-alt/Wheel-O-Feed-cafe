"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const images = [
  { src: "/images/espresso-1.jpg", label: "Espresso Shot" },
  { src: "/images/pizza.jpg", label: "Wood-Fired Pizza" },
  { src: "/images/pasta.jpg", label: "Arrabbiata Pasta" },
  { src: "/images/milkshake.jpg", label: "Chocolate Shake" },
  { src: "/images/pizza.jpg", label: "Garlic Bread" },
  { src: "/images/salad.jpg", label: "Fresh Salads" },
  { src: "/images/dessert.jpg", label: "Dessert Specials" },
  { src: "/images/fries.jpg", label: "Peri Peri Fries" },
  { src: "/images/burger.jpg", label: "Cheese Cigars" },
  { src: "/images/barista.jpg", label: "Barista at Work" },
  { src: "/images/noodles.jpg", label: "Hakka Noodles" },
  { src: "/images/cafe-interior.jpg", label: "Cafe Interior" },
];

export default function GalleryPage() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="min-h-dvh pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-cream">
            Our <span className="text-amber">Gallery</span>
          </h1>
          <p className="mt-3 font-body text-cream/50 max-w-lg mx-auto">
            A visual taste of Wheel O Feed — every plate, every pour,
            every vibe.
          </p>
        </motion.div>

        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={prefersReduced ? {} : { opacity: 0, scale: 0.9 }}
              whileInView={prefersReduced ? {} : { opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={prefersReduced ? {} : { scale: 1.02 }}
              className="group relative bg-charcoal border border-amber/10 rounded-2xl overflow-hidden break-inside-avoid transition-all duration-500 hover:border-amber/30 hover:shadow-[0_0_30px_-5px_rgba(232,160,69,0.25)]"
            >
              <div className="relative">
                <Image
                  src={img.src}
                  alt={img.label}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="font-heading text-sm font-semibold text-cream">
                    {img.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-14 sm:mt-16"
        >
          <p className="font-body text-cream/50 mb-4">
            Follow{" "}
            <a
              href="https://instagram.com/wheel_o_feed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber hover:underline"
            >
              @wheel_o_feed
            </a>{" "}
            on Instagram for the latest updates
          </p>
          <a
            href="https://instagram.com/wheel_o_feed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber text-espresso font-heading font-semibold px-6 py-3 rounded-full hover:bg-amber/90 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}

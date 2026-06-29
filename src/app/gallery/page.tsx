"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const easeSpring = [0.32, 0.72, 0, 1] as const;

const images = [
  { src: "/images/espresso-1.jpg", label: "Espresso Shot", w: 2, h: 3 },
  { src: "/images/pizza.jpg", label: "Wood-Fired Pizza", w: 800, h: 967 },
  { src: "/images/pasta.jpg", label: "Arrabbiata Pasta", w: 1, h: 1 },
  { src: "/images/milkshake.jpg", label: "Chocolate Shake", w: 2, h: 3 },
  { src: "/images/pizza.jpg", label: "Garlic Bread", w: 800, h: 967 },
  { src: "/images/salad.jpg", label: "Fresh Salads", w: 3, h: 2 },
  { src: "/images/dessert.jpg", label: "Dessert Specials", w: 4, h: 3 },
  { src: "/images/fries.jpg", label: "Peri Peri Fries", w: 2, h: 3 },
  { src: "/images/burger.jpg", label: "Cheese Cigars", w: 800, h: 665 },
  { src: "/images/barista.jpg", label: "Barista at Work", w: 2, h: 3 },
  { src: "/images/noodles.jpg", label: "Hakka Noodles", w: 1, h: 1 },
  { src: "/images/cafe-interior.jpg", label: "Cafe Interior", w: 3, h: 2 },
];

function GalleryImage({
  src,
  label,
  w,
  h,
  prefersReduced,
  delay,
}: {
  src: string;
  label: string;
  w: number;
  h: number;
  prefersReduced: boolean | null;
  delay: number;
}) {
  const [failed, setFailed] = useState(false);
  const [isTouch] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(hover: none)").matches
  );

  return (
    <motion.div
      initial={
        prefersReduced
          ? {}
          : { opacity: 0, scale: 0.9, filter: "blur(4px)" }
      }
      whileInView={
        prefersReduced ? {} : { opacity: 1, scale: 1, filter: "blur(0px)" }
      }
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: easeSpring }}
      whileHover={prefersReduced ? {} : { scale: 1.02 }}
      className="group break-inside-avoid"
    >
      <div className="p-1 rounded-[1.75rem] bg-amber/[0.03] border border-amber/10 shadow-[inset_0_1px_0_rgba(232,160,69,0.08)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-amber/30 hover:shadow-[0_0_30px_-5px_rgba(232,160,69,0.25)]">
        <div className="relative rounded-[calc(1.75rem-0.25rem)] overflow-hidden bg-charcoal shadow-[inset_0_1px_1px_rgba(245,240,235,0.06)]">
          <div className="relative" style={{ aspectRatio: `${w}/${h}` }}>
            {failed ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-espresso to-charcoal">
                <span className="font-heading text-2xl text-amber/40">{label}</span>
              </div>
            ) : (
              <Image
                src={src}
                alt={label}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                onError={() => setFailed(true)}
              />
            )}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent flex items-end p-4 transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                isTouch ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <span className="font-heading text-sm font-semibold text-cream">
                {label}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function InstaButton() {
  return (
    <a
      href="https://instagram.com/wheel_o_feed"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 font-heading font-semibold rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] group bg-amber text-espresso pl-7 pr-2 py-2 hover:bg-amber/90 hover:scale-105"
    >
      <span>Follow on Instagram</span>
      <span className="w-10 h-10 rounded-full bg-espresso/10 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </span>
    </a>
  );
}

export default function GalleryPage() {
  const prefersReduced = useReducedMotion();

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
            Our <span className="text-amber">Gallery</span>
          </h1>
          <p className="mt-3 font-body text-cream/50 max-w-lg mx-auto">
            A visual taste of Wheel O Feed — every plate, every pour,
            every vibe.
          </p>
        </motion.div>

        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          {images.map((img, i) => (
            <GalleryImage
              key={`${img.label}-${i}`}
              src={img.src}
              label={img.label}
              w={img.w}
              h={img.h}
              prefersReduced={prefersReduced}
              delay={i * 0.05}
            />
          ))}
        </div>

        <motion.div
          initial={
            prefersReduced ? {} : { opacity: 0, y: 20, filter: "blur(4px)" }
          }
          whileInView={
            prefersReduced ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }
          }
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeSpring }}
          className="text-center mt-16 sm:mt-20"
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
          <InstaButton />
        </motion.div>
      </div>
    </section>
  );
}

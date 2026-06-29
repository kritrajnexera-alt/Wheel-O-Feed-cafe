"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import Marquee from "@/components/Marquee";

const easeSpring = [0.32, 0.72, 0, 1] as const;

function DoubleBezelCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-1.5 rounded-[2rem] bg-amber/[0.03] border border-amber/10 shadow-[inset_0_1px_0_rgba(232,160,69,0.08)]">
      <div className="rounded-[calc(2rem-0.375rem)] bg-charcoal shadow-[inset_0_1px_1px_rgba(245,240,235,0.06)]">
        {children}
      </div>
    </div>
  );
}

function HighlightCard({
  image,
  title,
  desc,
  prefersReduced,
  index,
}: {
  image: string;
  title: string;
  desc: string;
  prefersReduced: boolean | null;
  index: number;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      initial={
        prefersReduced
          ? {}
          : { opacity: 0, y: 30, filter: "blur(4px)" }
      }
      whileInView={prefersReduced ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: easeSpring }}
      whileHover={
        prefersReduced
          ? {}
          : { y: -4, transition: { duration: 0.4, ease: easeSpring } }
      }
    >
      <DoubleBezelCard>
        <div className="relative h-48 sm:h-52 overflow-hidden rounded-[calc(2rem-0.375rem-0.125rem)] bg-espresso">
          {failed ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-espresso to-charcoal">
              <span className="font-heading text-4xl text-amber/30">🍽️</span>
            </div>
          ) : (
            <>
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
                onError={() => setFailed(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
            </>
          )}
        </div>
        <div className="p-8">
          <h3 className="font-heading text-xl font-bold text-cream mb-3">
            {title}
          </h3>
          <p className="font-body text-cream/50 leading-relaxed overflow-wrap-break">
            {desc}
          </p>
        </div>
      </DoubleBezelCard>
    </motion.div>
  );
}

function SafeInstaImage({
  src,
  alt,
  sizes,
}: {
  src: string;
  alt: string;
  sizes: string;
}) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className="absolute inset-0 bg-gradient-to-br from-espresso to-charcoal flex items-center justify-center">
      <span className="font-heading text-5xl text-amber/20">📸</span>
    </div>
  ) : (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes={sizes}
      onError={() => setFailed(true)}
    />
  );
}

function CTAButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "group inline-flex items-center gap-3 font-heading font-semibold rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]";
  const primary =
    "bg-amber text-espresso pl-8 pr-2 py-2 hover:bg-amber/90 shadow-lg shadow-amber/20 hover:scale-105";
  const secondary =
    "bg-transparent text-cream border border-cream/30 pl-8 pr-2 py-2 hover:border-amber hover:text-amber hover:scale-105";

  return (
    <Link
      href={href}
      className={`${base} ${variant === "primary" ? primary : secondary}`}
    >
      <span>{children}</span>
      <span className="w-10 h-10 rounded-full bg-espresso/10 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}

function InstaButton() {
  return (
    <a
      href="https://instagram.com/wheel_o_feed"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 font-heading font-semibold rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] bg-amber text-espresso pl-7 pr-2 py-2 hover:bg-amber/90 hover:scale-105"
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

const highlights = [
  {
    image: "/images/espresso-machine.jpg",
    title: "Professional Espresso Machine",
    desc: "Crafted coffee by trained baristas. Every cup precision-brewed.",
  },
  {
    image: "/images/food-spread.jpg",
    title: "Multi-Cuisine Menu",
    desc: "Italian, Chinese, Fast Food & Beverages — something for every craving.",
  },
  {
    image: "/images/cafe-sign.jpg",
    title: "Ankleshwar's #1 Cafe",
    desc: "Rated 4.5 ★ by 259+ happy customers. Top of 70 cafes in town.",
  },
];

export default function Home() {
  const prefersReduced = useReducedMotion();

  return (
    <>
      <section className="relative min-h-dvh flex items-start sm:items-center justify-center overflow-x-hidden pt-28 sm:pt-20">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber/5 rounded-full blur-3xl animate-steam" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-amber/5 rounded-full blur-3xl animate-steam-delayed" />
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-amber/5 rounded-full blur-3xl animate-steam-slower" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber/3 rounded-full blur-[100px] animate-steam-glow" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={
              prefersReduced
                ? {}
                : { opacity: 0, y: 40, filter: "blur(8px)" }
            }
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: easeSpring }}
          >
            <div className="inline-flex items-center gap-2 bg-amber/10 border border-amber/20 rounded-full px-5 py-2 mb-8">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#E8A045"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="font-body text-sm font-medium text-amber whitespace-nowrap">
                4.5 · 259 Reviews · #1 Cafe in Ankleshwar
              </span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream leading-[0.9] tracking-tight text-balance">
              EAT
              <span className="text-amber mx-2 sm:mx-4">·</span>
              TREAT
              <span className="text-amber mx-2 sm:mx-4">·</span>
              REPEAT
            </h1>

            <p className="mt-6 font-body text-lg sm:text-xl text-cream/60 max-w-xl mx-auto">
              Ankleshwar&apos;s #1 Cafe · GIDC · Open 1PM–10:30PM
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton href="/menu">Explore Menu</CTAButton>
              <CTAButton href="/contact" variant="secondary">
                Find Us
              </CTAButton>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-espresso to-transparent" />
      </section>

      <Marquee />

      <section className="py-28 sm:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={
              prefersReduced ? {} : { opacity: 0, y: 20, filter: "blur(4px)" }
            }
            whileInView={
              prefersReduced ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeSpring }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-cream">
              Why <span className="text-amber">Wheel O Feed</span>
            </h2>
            <p className="mt-3 font-body text-cream/50 max-w-lg mx-auto">
              Three reasons we&apos;re Ankleshwar&apos;s favorite cafe.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {highlights.map((item, i) => (
              <HighlightCard
                key={item.title}
                image={item.image}
                title={item.title}
                desc={item.desc}
                prefersReduced={prefersReduced}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 sm:py-36 bg-charcoal/50 border-y border-amber/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={
                prefersReduced
                  ? {}
                  : { opacity: 0, x: -20, filter: "blur(4px)" }
              }
              whileInView={
                prefersReduced ? {} : { opacity: 1, x: 0, filter: "blur(0px)" }
              }
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeSpring }}
              className="relative h-64 sm:h-80 rounded-[2rem] overflow-hidden bg-espresso border border-amber/10"
            >
              <SafeInstaImage
                src="/images/barista.jpg"
                alt="Barista making coffee at Wheel O Feed"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
            </motion.div>
            <motion.div
              initial={
                prefersReduced
                  ? {}
                  : { opacity: 0, x: 20, filter: "blur(4px)" }
              }
              whileInView={
                prefersReduced ? {} : { opacity: 1, x: 0, filter: "blur(0px)" }
              }
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeSpring, delay: 0.15 }}
              className="text-center md:text-left"
            >
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-cream mb-3">
                Follow{" "}
                <span className="text-amber">@wheel_o_feed</span> for daily
                specials
              </h2>
              <p className="font-body text-cream/50 max-w-md mx-auto md:mx-0 mb-6">
                Behind-the-scenes, new menu launches, and exclusive offers.
              </p>
              <InstaButton />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

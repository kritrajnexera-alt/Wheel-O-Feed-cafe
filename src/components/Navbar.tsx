"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    },
    []
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const lineBase =
    "absolute left-1/2 -translate-x-1/2 w-5 h-0.5 bg-current rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]";

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
          <div className="pointer-events-auto bg-espresso/90 backdrop-blur-2xl border border-amber/10 rounded-2xl sm:rounded-full px-5 sm:px-8 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                className="group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] flex-shrink-0"
              >
                <path
                  d="M17 8h1a4 4 0 1 1 0 8h-1"
                  stroke="#E8A045"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                />
                <path
                  d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"
                  stroke="#E8A045"
                  strokeWidth="1.25"
                />
                <path
                  d="M6 2v3M10 2v3M14 2v3"
                  stroke="#E8A045"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                />
                <path
                  d="M7 12h2M11 12h2"
                  stroke="#E8A045"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-heading text-xl sm:text-2xl font-bold text-cream tracking-tight">
                Wheel<span className="text-amber"> O </span>Feed
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-sm tracking-wide uppercase transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    pathname === link.href
                      ? "text-amber"
                      : "text-cream/70 hover:text-amber"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden relative w-11 h-11 flex items-center justify-center text-cream"
              aria-label="Toggle menu"
            >
              <span className="relative w-5 h-4">
                <span
                  className={`${lineBase} top-0 ${open ? "top-1/2 -translate-y-1/2 rotate-45" : ""}`}
                />
                <span
                  className={`${lineBase} top-1/2 -translate-y-1/2 ${open ? "opacity-0 scale-x-0" : ""}`}
                />
                <span
                  className={`${lineBase} bottom-0 ${open ? "top-1/2 -translate-y-1/2 -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-espresso/95 backdrop-blur-3xl flex items-center justify-center pointer-events-auto"
          >
            <nav className="flex flex-col items-center gap-6 sm:gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`font-heading text-3xl sm:text-4xl font-bold tracking-tight transition-colors duration-500 ${
                      pathname === link.href
                        ? "text-amber"
                        : "text-cream/60 hover:text-cream"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

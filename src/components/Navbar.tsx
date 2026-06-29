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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-espresso/95 backdrop-blur-md border-b border-amber/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <Link href="/" className="flex items-center gap-2.5 group">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="group-hover:scale-105 transition-transform duration-300 flex-shrink-0"
            >
              <path
                d="M17 8h1a4 4 0 1 1 0 8h-1"
                stroke="#E8A045"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"
                stroke="#E8A045"
                strokeWidth="1.5"
              />
              <path
                d="M6 2v3M10 2v3M14 2v3"
                stroke="#E8A045"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M7 12h2M11 12h2"
                stroke="#E8A045"
                strokeWidth="1.5"
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
                className={`font-body text-sm tracking-wide uppercase transition-colors duration-300 ${
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
            className="md:hidden relative w-8 h-8 flex items-center justify-center text-cream"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-current transition-all duration-300 absolute ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-current transition-all duration-300 absolute ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-current transition-all duration-300 absolute ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-charcoal/95 backdrop-blur-md border-t border-amber/10"
          >
            <div className="px-4 py-4 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 px-4 rounded-lg font-body text-sm tracking-wide uppercase transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-amber bg-amber/10"
                      : "text-cream/70 hover:text-amber hover:bg-amber/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

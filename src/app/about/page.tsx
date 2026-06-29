"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

function SafeImage({
  src,
  alt,
  sizes,
  background,
}: {
  src: string;
  alt: string;
  sizes: string;
  background?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return failed ? null : (
    <Image
      src={src}
      alt={alt}
      fill
      className={`object-cover ${background ? "opacity-30" : ""}`}
      sizes={sizes}
      onError={() => setFailed(true)}
    />
  );
}

export default function AboutPage() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="min-h-dvh pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.6 }}
        >
          <div className="text-center mb-14 sm:mb-16">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-amber/20 bg-espresso-light">
              <SafeImage
                src="/images/coffee-beans.jpg"
                alt="Coffee beans"
                sizes="96px"
              />
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-cream">
              Our <span className="text-amber">Story</span>
            </h1>
            <p className="mt-3 font-body text-cream/50 max-w-lg mx-auto">
              Ankleshwar&apos;s #1 cafe — where great coffee meets
              great company.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-10 sm:space-y-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={prefersReduced ? {} : { opacity: 0, x: -30 }}
                whileInView={prefersReduced ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-cream mb-4">
                  Made with love,
                  <br />
                  <span className="text-amber">Match your vibe</span>
                </h2>
                <p className="font-body text-cream/60 leading-relaxed">
                  Wheel O Feed isn&apos;t just a cafe — it&apos;s a
                  destination. Born in the heart of GIDC, Ankleshwar,
                  we brought together the world&apos;s best comfort
                  foods under one roof. From Italian classics to
                  Chinese street food, every dish is crafted with
                  passion and served with a smile.
                </p>
              </motion.div>

              <motion.div
                initial={prefersReduced ? {} : { opacity: 0, x: 30 }}
                whileInView={prefersReduced ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative aspect-square rounded-2xl overflow-hidden border border-amber/10 bg-espresso"
              >
                <SafeImage
                  src="/images/espresso-2.jpg"
                  alt="Professional espresso machine at Wheel O Feed"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-transparent flex items-end p-6">
                  <span className="font-heading text-lg font-bold text-amber">
                    Professional Espresso Machine
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-charcoal/60 border border-amber/10 rounded-2xl overflow-hidden min-h-[300px] flex items-center"
            >
              <div className="absolute inset-0">
                <SafeImage
                  src="/images/espresso-1.jpg"
                  alt="Coffee at Wheel O Feed"
                  sizes="100vw"
                  background
                />
              </div>
              <div className="relative p-8 sm:p-10 text-center w-full">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-cream mb-3">
                  Ankleshwar&apos;s #1 Cafe
                </h3>
                <p className="font-body text-cream/60 max-w-2xl mx-auto leading-relaxed">
                  Rated 4.5 stars on Google with 259+ reviews, we&apos;re
                  proud to be the top-rated cafe in Ankleshwar. Our
                  secret? Premium ingredients, a professional espresso
                  machine, and a team that genuinely cares about your
                  experience.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8A045" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
                      <polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
                    </svg>
                  ),
                  title: "Multi-Cuisine",
                  desc: "Italian, Chinese, Fast Food & Beverages",
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8A045" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                  title: "Open Daily",
                  desc: "1:00 PM – 10:30 PM",
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8A045" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  title: "GIDC, Ankleshwar",
                  desc: "F-7,8, First Floor, Ganesh Center Plaza",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
                  whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-charcoal border border-amber/10 rounded-xl p-6 text-center hover:border-amber/30 transition-all duration-500"
                >
                  <span className="mb-4 block">{item.icon}</span>
                  <h4 className="font-heading text-base font-bold text-cream mb-1">
                    {item.title}
                  </h4>
                  <p className="font-body text-sm text-cream/50">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

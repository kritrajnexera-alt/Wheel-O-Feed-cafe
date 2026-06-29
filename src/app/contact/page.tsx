"use client";

import { motion, useReducedMotion } from "framer-motion";

const details = [
  {
    icon: "📍",
    label: "Address",
    value: "F-7,8, First Floor, Ganesh Plaza, GIDC, Ankleshwar",
  },
  {
    icon: "🕐",
    label: "Timings",
    value: "1:00 PM – 10:30 PM (Daily)",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91 76000 00000",
  },
  {
    icon: "📸",
    label: "Instagram",
    value: "@wheel_o_feed",
    href: "https://instagram.com/wheel_o_feed",
  },
];

export default function ContactPage() {
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
            Get in <span className="text-amber">Touch</span>
          </h1>
          <p className="mt-3 font-body text-cream/50 max-w-lg mx-auto">
            Come visit us at GIDC, or reach out on Instagram and
            WhatsApp.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Contact Details */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: prefersReduced ? 0 : 0.6, delay: prefersReduced ? 0 : 0.1 }}
            className="space-y-4"
          >
            {details.map((item, i) => (
              <motion.div
                key={item.label}
                initial={prefersReduced ? {} : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReduced ? 0 : 0.4, delay: prefersReduced ? 0 : 0.2 + i * 0.08 }}
                className="bg-charcoal border border-amber/10 rounded-xl p-5 flex items-start gap-4 transition-all duration-300 hover:border-amber/30 hover:shadow-[0_0_20px_-5px_rgba(232,160,69,0.15)]"
              >
                <span className="text-2xl flex-shrink-0 mt-0.5" aria-hidden="true">
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <p className="font-body text-xs uppercase tracking-widest text-amber/60 mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading text-base sm:text-lg font-semibold text-cream hover:text-amber transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-heading text-base sm:text-lg font-semibold text-cream">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReduced ? 0 : 0.4, delay: prefersReduced ? 0 : 0.5 }}
              className="pt-2"
            >
              <a
                href="https://wa.me/917600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-amber text-espresso font-heading font-semibold px-7 py-3.5 rounded-full hover:bg-amber/90 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: prefersReduced ? 0 : 0.6, delay: prefersReduced ? 0 : 0.2 }}
            className="bg-charcoal border border-amber/10 rounded-2xl overflow-hidden min-h-[400px] flex items-center justify-center"
          >
            <div className="text-center p-8">
              <span className="text-6xl mb-4 block">🗺️</span>
              <h3 className="font-heading text-xl font-bold text-cream mb-2">
                Ganesh Plaza, GIDC
              </h3>
              <p className="font-body text-cream/50 mb-6 max-w-xs mx-auto">
                F-7,8, First Floor, Ganesh Plaza, GIDC, Ankleshwar
              </p>
              <a
                href="https://maps.google.com/?q=Ganesh+Plaza+GIDC+Ankleshwar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber/10 text-amber border border-amber/20 font-heading font-semibold px-5 py-2.5 rounded-full hover:bg-amber/20 transition-all duration-300"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Open in Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

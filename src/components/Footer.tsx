import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-amber/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex flex-col items-center text-center gap-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-cream">
            Ready to treat yourself?
          </h2>
          <p className="font-body text-cream/60 max-w-md">
            Ankleshwar&apos;s #1 multi-cuisine cafe awaits. Great coffee,
            amazing food, perfect vibes.
          </p>
          <a
            href="https://wa.me/917600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-amber text-espresso font-heading font-semibold rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] pl-7 pr-2 py-2 hover:bg-amber/90 hover:scale-105"
          >
            <span>Order on WhatsApp</span>
            <span className="w-10 h-10 rounded-full bg-espresso/10 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
          </a>
        </div>
        <div className="mt-12 pt-8 border-t border-amber/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-cream/50">
              &copy; {new Date().getFullYear()} Wheel O Feed. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/menu"
                className="font-body text-sm text-cream/50 hover:text-amber transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                Menu
              </Link>
              <Link
                href="/contact"
                className="font-body text-sm text-cream/50 hover:text-amber transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                Contact
              </Link>
              <a
                href="https://instagram.com/wheel_o_feed"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-cream/50 hover:text-amber transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

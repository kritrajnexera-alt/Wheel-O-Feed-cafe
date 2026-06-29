export default function Marquee() {
  const items = [
    "PIZZA",
    "PASTA",
    "ESPRESSO",
    "SHAKES",
    "GIDC ANKLESHWAR",
    "EAT TREAT REPEAT",
    "#1 CAFE",
  ];

  return (
    <div className="relative overflow-hidden bg-amber py-4">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, groupIdx) => (
          <span
            key={groupIdx}
            className="flex items-center gap-12 mx-6"
          >
            {items.map((item, i) => (
              <span
                key={`${groupIdx}-${i}`}
                className="font-heading text-sm sm:text-base font-bold tracking-[0.2em] text-espresso uppercase"
              >
                <span className="mx-3">✦</span>
                {item}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

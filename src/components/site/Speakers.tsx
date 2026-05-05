import { site } from "@/content/site";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function Speakers() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="speakers" className="py-24 md:py-32">
      <div className="container-x">
        <FadeIn delay={0.1} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[var(--deep)]/30" />
              <span className="text-xs uppercase tracking-[0.18em] text-[var(--deep)]/60">
                Speakers
              </span>
            </div>
            <h2 className="mt-5 font-display font-semibold text-[var(--deep)] text-3xl md:text-[44px] leading-[1.05] tracking-[-0.03em] text-balance max-w-2xl">
              Meet the voices shaping NexusCon Bengaluru '26.
            </h2>
          </div>
          <p className="text-sm text-[var(--deep)]/55 max-w-xs">
            Speaker line-up is announced in waves. Join the waitlist for first reveals.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} direction="up" className="relative group/carousel">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {site.speakers.map((sp, i) => {
                const isTbd = sp.role === "TBD";
                return (
                  <article
                    key={i}
                    className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_24%] relative aspect-[3/4.2] overflow-hidden rounded-2xl group bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl"
                  >
                    <img
                      src={(sp as any).image}
                      alt={sp.name}
                      className={[
                        "absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105",
                        isTbd ? "opacity-30 grayscale" : ""
                      ].join(" ")}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep)]/90 via-[var(--deep)]/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                    {/* Content Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-white transform transition-transform duration-300 group-hover:-translate-y-1">
                      <h3 className="font-display font-bold text-lg md:text-xl leading-tight tracking-tight">
                        {isTbd ? `Speaker #${String(i + 1).padStart(2, "0")}` : sp.name}
                      </h3>
                      <p className="mt-2 text-xs md:text-sm font-medium text-white/70 tracking-wide uppercase">
                        {isTbd ? "Coming Soon" : sp.role}
                      </p>
                    </div>

                    <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/30">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 mt-12 justify-end">
            <button
              onClick={scrollPrev}
              className="h-12 w-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="h-12 w-12 rounded-full bg-[var(--deep)] flex items-center justify-center text-white hover:bg-[var(--sea)] transition-all shadow-md"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

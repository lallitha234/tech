import { site } from "@/content/site";

export function SponsorMarquee() {
  const items = [...site.sponsorsPrev, ...site.sponsorsPrev];
  return (
    <section className="py-20 md:py-24 border-y border-[var(--deep)]/10 bg-[var(--deep)]">
      <div className="container-x">
        <div className="flex items-center gap-3 mb-10">
          <span className="h-px w-6 bg-[var(--frost)]/40" />
          <span className="text-xs uppercase tracking-[0.18em] text-[var(--frost)]/70">
            Previous Sponsors
          </span>
          <span className="text-xs text-[var(--frost)]/45 ml-auto hidden sm:inline">
            Brands that backed earlier TechNexus editions
          </span>
        </div>
      </div>
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="marquee py-4">
          {items.map((sponsor, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-8 md:px-12 whitespace-nowrap"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-20 md:h-24 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

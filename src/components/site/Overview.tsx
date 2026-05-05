import { site } from "@/content/site";
import { FadeIn } from "@/components/ui/FadeIn";

export function Overview() {
  return (
    <section id="overview" className="py-12 md:py-16 border-y hairline bg-[color-mix(in_oklab,var(--frost)_20%,transparent)]">
      <div className="container-x">
        <FadeIn delay={0.1}>
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-xs uppercase tracking-[0.18em] text-[var(--deep)]/60">
              Event Overview
            </h2>
            <span className="text-xs text-[var(--deep)]/50 tnum">01 / 09</span>
          </div>
        </FadeIn>
        <dl className="grid grid-cols-2 md:grid-cols-5 gap-px bg-[color-mix(in_oklab,var(--deep)_10%,transparent)] rounded-2xl overflow-hidden">
          {site.overview.map((item, i) => (
            <FadeIn key={item.label} delay={0.2 + (i * 0.1)}>
              <div className="bg-background h-full p-5 md:p-6 transition-all duration-300 hover:bg-slate-50 group cursor-default relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--sea)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <dt className="text-[11px] uppercase tracking-[0.14em] text-[var(--deep)]/55 group-hover:text-[var(--sea)] transition-colors">
                  {item.label}
                </dt>
                <dd className="mt-3 font-display font-semibold text-[var(--deep)] text-[17px] leading-snug transition-transform duration-300 group-hover:translate-x-1">
                  {item.value}
                </dd>
                <dd className="mt-1 text-[12px] text-[var(--deep)]/55">{item.note}</dd>
              </div>
            </FadeIn>
          ))}
        </dl>
      </div>
    </section>
  );
}

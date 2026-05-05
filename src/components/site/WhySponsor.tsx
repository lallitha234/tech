import { site } from "@/content/site";

export function WhySponsor() {
  return (
    <section id="sponsor" className="py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-[var(--deep)]/30" />
            <span className="text-xs uppercase tracking-[0.18em] text-[var(--deep)]/60">
              Why Sponsor Us
            </span>
          </div>
          <h2 className="mt-5 font-display font-semibold text-[var(--deep)] text-3xl md:text-[44px] leading-[1.05] tracking-[-0.03em] text-balance">
            Premium positioning with measurable outcomes.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[color-mix(in_oklab,var(--deep)_10%,transparent)] rounded-2xl overflow-hidden">
          {site.whySponsor.map((w) => (
            <div key={w.n} className="bg-background p-7 md:p-8 group cursor-default relative overflow-hidden transition-all duration-300 hover:bg-slate-50">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--sea)] to-[var(--mist)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="font-mono text-xs text-[var(--sea)] tnum transition-all duration-300 group-hover:text-[var(--mist)] group-hover:font-bold">{w.n}</div>
              <h3 className="mt-5 font-display font-semibold text-[var(--deep)] text-lg transition-transform duration-300 group-hover:translate-x-1">
                {w.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--deep)]/70">
                {w.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { site } from "@/content/site";
import { FadeIn } from "@/components/ui/FadeIn";

export function About() {
  const { kicker, title, paragraphs, audience } = site.about;
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <FadeIn className="md:col-span-5" delay={0.1}>
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[var(--deep)]/30" />
              <span className="text-xs uppercase tracking-[0.18em] text-[var(--deep)]/60">
                {kicker}
              </span>
            </div>
            <h2 className="mt-6 font-display font-semibold text-[var(--deep)] text-3xl md:text-[44px] leading-[1.05] tracking-[-0.03em] text-balance">
              {title}
            </h2>
          </FadeIn>
          <FadeIn className="md:col-span-7 md:pt-2" delay={0.2} direction="up">
            <div className="space-y-5 text-[15px] md:text-base leading-relaxed text-[var(--deep)]/75">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xs uppercase tracking-[0.18em] text-[var(--deep)]/60 mb-5">
                Who Will Attend
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {audience.map((a, idx) => (
                  <FadeIn
                    key={a}
                    delay={0.3 + (idx * 0.1)}
                    className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:bg-slate-50 group cursor-default"
                  >
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[var(--frost)] flex items-center justify-center group-hover:bg-[var(--sea)] group-hover:text-white transition-colors duration-300">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sea)] group-hover:text-white">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-[14px] font-semibold text-[var(--deep)]/90 group-hover:text-black transition-colors">
                      {a}
                    </span>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

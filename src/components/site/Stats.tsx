import { site } from "@/content/site";
import CountUp from "@/components/ui/CountUp";
import { FadeIn } from "@/components/ui/FadeIn";

const parseValue = (val: string) => {
  // Extract the number (including decimals)
  const numMatch = val.match(/[\d,.]+/);
  if (!numMatch) return { num: 0, prefix: val, suffix: "" };

  const numStr = numMatch[0];
  const num = parseFloat(numStr.replace(/,/g, ""));

  // Extract prefix (anything before the number)
  const prefix = val.split(numStr)[0];
  // Extract suffix (anything after the number)
  const suffix = val.split(numStr)[1];

  return { num, prefix, suffix };
};

export function Stats() {
  return (
    <section className="py-24 md:py-32 bg-white text-[var(--deep)] border-t hairline">
      <div className="container-x">
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3 mb-16">
            <span className="h-px w-6 bg-[var(--sea)]/30" />
            <span className="text-xs uppercase tracking-[0.18em] text-[var(--deep)]/60">
              Our Track Record
            </span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-24">
          {site.stats.map((s, i) => {
            const { num, prefix, suffix } = parseValue(s.value);
            return (
              <FadeIn key={s.label} delay={0.2 + (i * 0.1)}>
                <div className="group border-t border-slate-100 pt-8 transition-all duration-300">
                  <div className="font-display font-semibold text-3xl md:text-5xl tracking-[-0.03em] tnum flex items-baseline gap-0.5 group-hover:text-black transition-colors">
                    {prefix && <span className="text-2xl md:text-3xl text-[var(--sea)]/60">{prefix}</span>}
                    <CountUp to={num} duration={2} separator="," className="tabular-nums" />
                    {suffix && <span className="text-2xl md:text-3xl text-[var(--sea)]/60">{suffix}</span>}
                  </div>
                  <div className="mt-3 text-[15px] font-medium text-[var(--deep)]/80">{s.label}</div>
                  <div className="mt-1 text-xs text-slate-500">{s.note}</div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
          {site.trackRecord.map((t, i) => (
            <FadeIn key={i} delay={0.4 + (i * 0.1)} direction="up">
              <div
                className="flex gap-5 p-6 rounded-2xl border border-slate-50 bg-white shadow-[0_2px_15px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:bg-slate-50 group cursor-default"
              >
                <span className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-[var(--frost)]/50 text-[var(--sea)] font-display font-bold text-sm group-hover:bg-[var(--sea)] group-hover:text-white transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-relaxed text-slate-700 group-hover:text-black transition-colors">
                  {t}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

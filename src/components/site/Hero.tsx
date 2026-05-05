import { site } from "@/content/site";
import Grainient from "@/components/site/Grainient";

const highlightPhrase = "Tech Community";

const renderTitleLine = (line: string) => {
  if (line === highlightPhrase) {
    return (
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3282B8] to-[#BBE1FA]">
        {line}
      </span>
    );
  }

  if (line.includes(highlightPhrase)) {
    const [before, after] = line.split(highlightPhrase);
    return (
      <>
        {before}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3282B8] to-[#BBE1FA]">
          {highlightPhrase}
        </span>
        {after}
      </>
    );
  }

  return line;
};

export function Hero() {
  const { eyebrow, titleLines, meta, description, cta } = site.hero;

  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-br from-[#1B262C] to-[#0F4C75] pt-24 pb-24 md:pt-32 md:pb-32">
      <div className="absolute inset-0 -z-10 min-h-full w-full overflow-hidden">
        {/* Soft radial glow and background animation elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3282B8]/20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#BBE1FA]/10 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.03] bg-gradient-to-b from-white/[0.05] to-transparent p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-[20px] sm:p-10 md:p-12">
          <span className="pointer-events-none absolute right-8 top-8 hidden text-[7rem] font-black uppercase tracking-[-0.1em] text-white/[0.05] blur-[2px] xl:block">
            2026
          </span>

          <div className="relative">
            <div className="absolute -right-10 top-10 hidden h-[220px] w-[220px] rounded-full bg-cyan-200/10 blur-3xl md:block" />
            <div className="absolute -left-10 bottom-10 hidden h-[180px] w-[180px] rounded-full bg-white/10 blur-3xl md:block" />

            <div className="flex items-center gap-3 fade-up">
              <span className="h-px w-10 bg-slate-200/35" />
              <span className="text-xs uppercase tracking-[0.24em] text-slate-100/75">{eyebrow}</span>
            </div>

            <h1 className="mt-8 max-w-4xl text-[42px] font-display font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl md:text-[72px] lg:text-[84px] fade-up" style={{ animationDelay: "60ms" }}>
              {titleLines.map((line, index) => (
                <span key={index} className="block">
                  {renderTitleLine(line)}
                </span>
              ))}
            </h1>

            <p className="mt-8 max-w-2xl text-[15px] sm:text-base leading-relaxed text-slate-400 fade-up" style={{ animationDelay: "140ms" }}>
              {description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center fade-up" style={{ animationDelay: "200ms" }}>
              <a
                href="#rsvp"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0F4C75] to-[#3282B8] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(15,76,117,0.4)] transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(50,130,184,0.6)]"
              >
                {cta}
                <span aria-hidden>→</span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-7 py-3.5 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-white/10 hover:border-white/30"
              >
                Explore the conference
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

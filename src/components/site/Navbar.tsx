import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { useActiveSection, scrollToId } from "@/hooks/useActiveSection";
import { track, PROSPECTUS_URL } from "@/lib/track";

const SECTION_IDS = ["top", "about", "speakers", "sponsor", "rsvp"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS, 110);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToId(id);
  };

  const handleProspectus = (e: React.MouseEvent<HTMLAnchorElement>) => {
    track("prospectus_download", { asset: PROSPECTUS_URL, ref: "navbar" });
    // Let default anchor behavior continue (download attribute handles it).
    void e;
  };

  return (
    <header className="fixed top-4 inset-x-0 z-50 pointer-events-none transition-all duration-300">
      <div className="container-x flex justify-center">
        <nav
          className={[
            "pointer-events-auto flex items-center justify-between gap-4 rounded-full border px-2 sm:px-4 py-3 transition-all duration-300 w-full max-w-6xl",
            scrolled
              ? "bg-white/95 backdrop-blur-xl border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              : "bg-white border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.05)]",
          ].join(" ")}
        >
          <a
            href="#top"
            onClick={(e) => handleNav(e, "top")}
            className="flex items-center gap-3 pl-2 group transition-all duration-300"
          >
            <div className="h-12 w-12 overflow-hidden rounded-full transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(50,130,184,0.2)] group-hover:scale-105 bg-white flex items-center justify-center border border-slate-100 shadow-sm">
              <img src="/images/logo.png" alt="NexusCon" className="h-full w-full object-contain p-1" />
            </div>
            <span className="font-display font-semibold tracking-tight text-[17px] text-slate-800 group-hover:text-black transition-colors">
              {site.brand}
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1 text-sm">
            {site.nav.map((n) => {
              const id = n.href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={n.href}
                    onClick={(e) => handleNav(e, id)}
                    aria-current={isActive ? "true" : undefined}
                    className={[
                      "relative px-4 py-2 rounded-full transition-all duration-300 font-medium",
                      isActive
                        ? "text-white"
                        : "text-slate-600 hover:text-slate-900",
                    ].join(" ")}
                  >
                    <span className="relative z-10">{n.label}</span>
                    {isActive && (
                      <span
                        aria-hidden
                        className="absolute inset-0 rounded-full bg-[#0F4C75]/80 shadow-[0_0_15px_rgba(15,76,117,0.4)]"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2 pr-1">
            <a
              href={PROSPECTUS_URL}
              download
              onClick={handleProspectus}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-slate-600 border border-slate-200 bg-transparent hover:bg-slate-50 transition-all duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Prospectus
            </a>
            <a
              href="#rsvp"
              onClick={(e) => handleNav(e, "rsvp")}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0F4C75] to-[#3282B8] text-white px-5 py-2 text-sm font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(50,130,184,0.4)]"
            >
              Join Waitlist
              <span aria-hidden>→</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

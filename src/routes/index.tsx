import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Overview } from "@/components/site/Overview";
import { About } from "@/components/site/About";
import { PastEventsMasonry } from "@/components/site/PastEventsMasonry";
import { Stats } from "@/components/site/Stats";
import { Speakers } from "@/components/site/Speakers";
import { SponsorMarquee } from "@/components/site/SponsorMarquee";
import { WhySponsor } from "@/components/site/WhySponsor";
import { Testimonials } from "@/components/site/Testimonials";
import { Sponsorship } from "@/components/site/Sponsorship";
import { RSVP } from "@/components/site/RSVP";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Overview />
      <About />
      <PastEventsMasonry />
      <Stats />
      <Speakers />
      <SponsorMarquee />
      <WhySponsor />
      <Testimonials />
      <Sponsorship />
      <RSVP />
      <Footer />
    </main>
  );
}

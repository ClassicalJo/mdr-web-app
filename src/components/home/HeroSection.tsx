import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppDownloadButtons } from "./AppDownloadButtons";
import { HeroScreens } from "./HeroScreens";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -left-24 -top-28 size-96 rounded-full bg-soft-rose/35 blur-3xl" />
      <div className="absolute -right-16 top-40 size-80 rounded-full bg-sage/15 blur-3xl" />
      <div className="mx-auto grid min-h-[calc(100svh-69px)] max-w-6xl items-center gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[.92fr_1.08fr] lg:py-16">
        <div className="ritual-reveal relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-card/70 px-3 py-1 font-kick text-xs font-semibold uppercase text-primary ring-1 ring-foreground/5">
            <span className="size-1.5 rounded-full bg-sage" /> Wellness · Habits · Productivity
          </span>
          <h1 className="mt-5 max-w-xl font-display text-[2.85rem] font-medium leading-[1.03] text-balance sm:text-6xl lg:text-7xl">
            Turn daily habits into <span className="italic text-primary">meaningful rituals.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
            My Daily Ritual is the all-in-one wellness and productivity app designed for real life —
            bringing the systems you need to start and stay accountable into one calm daily flow.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button variant="ritual" size="store" asChild>
              <a href="#download">
                Get the app <ArrowRight />
              </a>
            </Button>
            <AppDownloadButtons compact />
          </div>
          <a
            href="#toolkit"
            className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Explore your toolkit <ArrowDown className="size-4" />
          </a>
        </div>
        <div className="ritual-reveal relative z-10 h-[500px] sm:h-[590px]">
          <div className="absolute inset-x-[14%] top-0 bottom-0">
            <HeroScreens />
          </div>
          <div className="ritual-float glass-panel absolute left-0 top-14 w-40 -rotate-6 rounded-2xl p-4 shadow-xl shadow-foreground/10 ring-1 ring-foreground/5 sm:w-48">
            <div className="flex items-center justify-between">
              <span className="font-kick text-xs font-semibold uppercase text-primary">
                Morning ritual
              </span>
              <span className="text-xs text-sage">3/5</span>
            </div>
            <div className="mt-3 space-y-2 text-xs">
              <p className="flex items-center gap-2">
                <span className="grid size-4 place-items-center rounded-full bg-sage text-primary-foreground">
                  <Check className="size-2.5" />
                </span>
                Gratitude
              </p>
              <p className="flex items-center gap-2">
                <span className="grid size-4 place-items-center rounded-full bg-sage text-primary-foreground">
                  <Check className="size-2.5" />
                </span>
                Mantra
              </p>
            </div>
          </div>
          <div className="ritual-float-alt glass-panel absolute bottom-20 right-0 w-36 rotate-6 rounded-2xl p-4 text-center shadow-xl shadow-foreground/10 ring-1 ring-foreground/5 sm:w-44">
            <span className="font-kick text-xs font-semibold uppercase text-primary">
              Your streak
            </span>
            <p className="mt-1 font-display text-4xl">12</p>
            <span className="text-xs text-muted-foreground">days of showing up</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowDown, ArrowRight, Check, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import lifestyle from "@/assets/mdr/lifestyle.jpg";
import homeScreen from "@/assets/mdr/home-screen.png";
import morningStretch from "@/assets/mdr/morning-stretch.png";
import progress from "@/assets/mdr/progress.png";
import gratitude from "@/assets/mdr/gratitude.jpg";
import mantra from "@/assets/mdr/mantra.jpg";
import meditation from "@/assets/mdr/meditation.jpg";
import liv from "@/assets/mdr/liv.jpg";
import { AppDownloadButtons } from "./AppDownloadButtons";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SectionHeading } from "./SectionHeading";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { reasons, ritualAreas, toolkit } from "./content";

export function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-primary/20">
      <Header />
      <main>
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
                My Daily Ritual is the all-in-one wellness and productivity app designed for real life — bringing the systems you need to start and stay accountable into one calm daily flow.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button variant="ritual" size="store" asChild><a href="#download">Get the app <ArrowRight /></a></Button>
                <AppDownloadButtons compact />
              </div>
              <a href="#toolkit" className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Explore your toolkit <ArrowDown className="size-4" />
              </a>
            </div>
            <div className="ritual-reveal relative z-10 h-[500px] sm:h-[590px]">
              <div className="absolute inset-x-[14%] top-0 bottom-0 overflow-hidden rounded-[2.25rem] bg-card p-2.5 shadow-2xl shadow-foreground/10 ring-1 ring-foreground/10">
                <img src={homeScreen} alt="My Daily Ritual app home screen" className="h-full w-full rounded-[1.75rem] object-cover object-top" fetchPriority="high" />
              </div>
              <div className="ritual-float glass-panel absolute left-0 top-14 w-40 -rotate-6 rounded-2xl p-4 shadow-xl shadow-foreground/10 ring-1 ring-foreground/5 sm:w-48">
                <div className="flex items-center justify-between"><span className="font-kick text-xs font-semibold uppercase text-primary">Morning ritual</span><span className="text-xs text-sage">3/5</span></div>
                <div className="mt-3 space-y-2 text-xs"><p className="flex items-center gap-2"><span className="grid size-4 place-items-center rounded-full bg-sage text-primary-foreground"><Check className="size-2.5" /></span>Gratitude</p><p className="flex items-center gap-2"><span className="grid size-4 place-items-center rounded-full bg-sage text-primary-foreground"><Check className="size-2.5" /></span>Mantra</p></div>
              </div>
              <div className="ritual-float-alt glass-panel absolute bottom-20 right-0 w-36 rotate-6 rounded-2xl p-4 text-center shadow-xl shadow-foreground/10 ring-1 ring-foreground/5 sm:w-44">
                <span className="font-kick text-xs font-semibold uppercase text-primary">Your streak</span>
                <p className="mt-1 font-display text-4xl">12</p><span className="text-xs text-muted-foreground">days of showing up</span>
              </div>
            </div>
          </div>
        </section>

        <section id="toolkit" className="border-t border-border bg-card/45 scroll-mt-20">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
            <SectionHeading eyebrow="01 — The toolkit" title="Your Ultimate Self-Care Toolkit" description="Mindset, planning, habits and wellness — living together in one calm place, instead of across a collection of half-used apps." />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {toolkit.map(({ title, text, icon: Icon }) => (
                <article key={title} className="group rounded-2xl bg-card p-6 ring-1 ring-foreground/5 transition-transform duration-300 hover:-translate-y-1">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary"><Icon className="size-5" /></span>
                  <h3 className="mt-5 font-display text-xl font-medium">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
            <SectionHeading eyebrow="02 — Made for real life" title="Why You'll Love My Daily Ritual" description="Thoughtfully designed to make showing up for yourself feel simpler, lighter and genuinely rewarding." />
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-6">
              {reasons.map((reason, index) => (
                <article key={reason.title} className={`rounded-2xl p-6 ring-1 ring-foreground/5 transition-transform duration-300 hover:-translate-y-1 ${index === 0 || index === 4 ? "bg-secondary/55 md:col-span-3" : "bg-card md:col-span-2"}`}>
                  <div className="flex items-center justify-between"><span className="font-kick text-xs font-semibold uppercase text-primary">{reason.number}</span><Sparkles className="size-4 text-primary/60" /></div>
                  <h3 className="mt-6 font-display text-xl font-medium">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-card/45">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
            <SectionHeading eyebrow="03 — Your daily rhythm" title="Support for every part of your day" description="From the first quiet breath to the last soft reflection, My Daily Ritual helps you move with intention." />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ritualAreas.map(({ time, title, text, icon: Icon }, index) => (
                <article key={title} className="group overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/5">
                  <div className={`h-1.5 ${index % 2 === 0 ? "bg-primary" : "bg-sage"}`} />
                  <div className="p-6">
                    <div className="flex items-center justify-between"><span className="font-kick text-xs font-semibold uppercase text-primary">{time}</span><Icon className="size-5 text-sage transition-transform group-hover:rotate-6" /></div>
                    <h3 className="mt-6 font-display text-xl font-medium">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
            <SectionHeading eyebrow="04 — What's inside" title="Your whole ritual, beautifully connected" description="Real app experiences for gratitude, movement, meditation, mood and progress — designed to work together throughout your day." />
            <div className="mt-12 grid gap-4 md:grid-cols-12 md:grid-rows-[310px_250px]">
              <figure className="group relative overflow-hidden rounded-2xl bg-secondary/60 ring-1 ring-foreground/5 md:col-span-5 md:row-span-2">
                <img src={gratitude} alt="Daily gratitude ritual in the app" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                <figcaption className="absolute inset-x-4 bottom-4 rounded-xl bg-background/85 p-4 backdrop-blur-md"><span className="font-kick text-xs font-semibold uppercase text-primary">Daily rituals</span><p className="mt-1 font-display text-xl">Gratitude, mantra & meditation</p></figcaption>
              </figure>
              <figure className="group relative overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/5 md:col-span-4">
                <img src={morningStretch} alt="Guided morning movement in the app" loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]" />
                <figcaption className="absolute inset-x-4 bottom-4 rounded-xl bg-background/85 p-3 backdrop-blur-md"><span className="font-display text-lg">Gentle movement</span></figcaption>
              </figure>
              <figure className="group relative overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/5 md:col-span-3 md:row-span-2">
                <img src={progress} alt="Progress and habit tracking in the app" loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]" />
                <figcaption className="absolute inset-x-4 bottom-4 rounded-xl bg-background/85 p-3 backdrop-blur-md"><span className="font-display text-lg">Progress tracking</span></figcaption>
              </figure>
              <div className="grid grid-cols-2 gap-4 md:col-span-4">
                <img src={mantra} alt="Mantra content in My Daily Ritual" loading="lazy" className="h-full min-h-48 w-full rounded-2xl object-cover ring-1 ring-foreground/5" />
                <img src={meditation} alt="Meditation content in My Daily Ritual" loading="lazy" className="h-full min-h-48 w-full rounded-2xl object-cover ring-1 ring-foreground/5" />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-card/45">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
            <SectionHeading eyebrow="05 — What people are saying" title="A ritual people return to" description="Real words from people building routines with My Daily Ritual." />
            <TestimonialCarousel />
          </div>
        </section>

        <section id="download" className="relative scroll-mt-20 overflow-hidden border-t border-border">
          <img src={lifestyle} alt="A calm My Daily Ritual wellness moment" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[center_54%]" />
          <div className="absolute inset-0 bg-foreground/55" />
          <div className="relative mx-auto max-w-3xl px-5 py-24 text-center text-background sm:px-8 lg:py-32">
            <span className="font-kick text-xs font-semibold uppercase text-background/75">Start today</span>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight text-balance sm:text-5xl">Ready to transform your daily routine?</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-background/80">Join thousands of users who are creating healthy habits, turning them into established routines until they become sacred rituals.</p>
            <div className="mt-8"><AppDownloadButtons centered /></div>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:py-24">
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-foreground/5">
              <img src={liv} alt="Liv Phyland, founder of My Daily Ritual" loading="lazy" className="aspect-square w-full object-cover" />
              <span className="absolute bottom-4 left-4 rounded-full bg-background/85 px-4 py-2 font-kick text-xs font-semibold uppercase text-primary backdrop-blur-md">Created by women, for women</span>
            </div>
            <div>
              <SectionHeading eyebrow="06 — The story" title="The Creation Of My Daily Ritual" />
              <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
                <p>My Daily Ritual was born from the real-world experience of founder Liv Phyland – TV presenter, certified health coach, founder of ‘Liv Your Life’ and ‘Girls Who Glow’. After years of coaching women who knew what they needed to feel better but struggled with consistency, Liv created the solution she wished existed.</p>
                <p>This isn't just another app from a tech company. It's a labour of love from someone who understands the daily juggle of modern life and believes that small, consistent actions can create extraordinary transformations.</p>
                <p>We're here because we believe everyone deserves access to tools that actually work – tools that meet you where you are, not where you think you should be.</p>
              </div>
              <div className="mt-7 flex items-center gap-3 font-display text-xl"><Heart className="size-5 fill-primary text-primary" /> Created by women, for women who want more from life.</div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-secondary/55">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 lg:py-20">
            <SectionHeading eyebrow="Begin again" title="One small ritual can change the shape of your day." centered />
            <div className="mt-7"><AppDownloadButtons dark centered /></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
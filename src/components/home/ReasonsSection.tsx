import { Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { reasons } from "./content";

export function ReasonsSection() {
  return (
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
  );
}

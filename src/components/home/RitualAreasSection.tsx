import { SectionHeading } from "./SectionHeading";
import { ritualAreas } from "./content";

export function RitualAreasSection() {
  return (
    <section className="border-t border-border bg-card/45">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="03 — Your daily rhythm"
          title="Support for every part of your day"
          description="From the first quiet breath to the last soft reflection, My Daily Ritual helps you move with intention."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ritualAreas.map(({ time, title, text, icon: Icon }, index) => (
            <article
              key={title}
              className="group overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/5"
            >
              <div className={`h-1.5 ${index % 2 === 0 ? "bg-primary" : "bg-sage"}`} />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="font-kick text-xs font-semibold uppercase text-primary">
                    {time}
                  </span>
                  <Icon className="size-5 text-sage transition-transform group-hover:rotate-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

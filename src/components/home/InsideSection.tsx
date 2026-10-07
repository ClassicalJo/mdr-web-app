import { SectionHeading } from "./SectionHeading";
import { insideScreens } from "./screens";

export function InsideSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading eyebrow="04 — What's inside" title="Look inside the app" description="Every part of your ritual lives in one calm, connected space — from gratitude and mantras to movement, habits, mood and progress." centered />
        <ul className="-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:gap-8">
          {insideScreens.map((s) => (
            <li key={s.category} className="w-[82%] max-w-sm shrink-0 snap-center sm:w-auto sm:max-w-none">
              <figure className="group h-full overflow-hidden rounded-3xl bg-card ring-1 ring-foreground/5 transition-transform duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img src={s.src} alt={s.alt} loading="lazy" className="aspect-square w-full object-cover" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-card to-transparent" />
                </div>
                <figcaption className="px-5 pb-5 pt-1 sm:px-6 sm:pb-6">
                  <span className="font-kick text-xs font-semibold uppercase text-primary">{s.category}</span>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.note}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

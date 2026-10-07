import { SectionHeading } from "./SectionHeading";
import { toolkit } from "./content";

export function ToolkitSection() {
  return (
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
  );
}

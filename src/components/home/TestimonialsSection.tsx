import { SectionHeading } from "./SectionHeading";
import { TestimonialCarousel } from "./TestimonialCarousel";

export function TestimonialsSection() {
  return (
    <section className="border-t border-border bg-card/45">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading eyebrow="05 — What people are saying" title="A ritual people return to" description="Real words from people building routines with My Daily Ritual." />
        <TestimonialCarousel />
      </div>
    </section>
  );
}

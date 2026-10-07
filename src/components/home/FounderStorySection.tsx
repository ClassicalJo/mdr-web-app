import { Heart } from "lucide-react";
import liv from "@/assets/mdr/liv.jpg";
import { SectionHeading } from "./SectionHeading";

export function FounderStorySection() {
  return (
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
  );
}

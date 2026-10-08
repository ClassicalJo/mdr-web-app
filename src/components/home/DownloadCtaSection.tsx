import lifestyle from "@/assets/mdr/lifestyle.jpg";
import { AppDownloadButtons } from "./AppDownloadButtons";

export function DownloadCtaSection() {
  return (
    <section id="download" className="relative scroll-mt-20 overflow-hidden border-t border-border">
      <img
        src={lifestyle}
        alt="A calm My Daily Ritual wellness moment"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-[center_54%]"
      />
      <div className="absolute inset-0 bg-foreground/55" />
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center text-background sm:px-8 lg:py-32">
        <span className="font-kick text-xs font-semibold uppercase text-background/75">
          Start today
        </span>
        <h2 className="mt-3 font-display text-4xl font-medium leading-tight text-balance sm:text-5xl">
          Ready to transform your daily routine?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-background/80">
          Join thousands of users who are creating healthy habits, turning them into established
          routines until they become sacred rituals.
        </p>
        <div className="mt-8">
          <AppDownloadButtons centered />
        </div>
      </div>
    </section>
  );
}

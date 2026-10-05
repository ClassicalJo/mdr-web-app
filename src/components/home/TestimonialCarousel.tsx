import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { testimonials } from "./content";

export function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const move = useCallback((direction: number) => {
    setActive((current) => (current + direction + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => move(1), 7000);
    return () => window.clearInterval(timer);
  }, [move]);

  return (
    <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-[1.35fr_.65fr]">
      <figure key={active} className="testimonial-slide flex min-h-72 flex-col justify-between rounded-2xl bg-card p-7 ring-1 ring-foreground/5 sm:p-10">
        <Quote className="size-8 text-primary" aria-hidden="true" />
        <blockquote className="mt-8 max-w-3xl font-display text-2xl leading-snug text-foreground sm:text-3xl">
          “{testimonials[active]}”
        </blockquote>
        <div className="mt-8 flex items-center justify-between gap-5">
          <div>
            <div className="text-primary" aria-label="5 out of 5 stars">★★★★★</div>
            <figcaption className="mt-1 text-sm text-muted-foreground">My Daily Ritual community</figcaption>
          </div>
          <div className="flex gap-2">
            <Button variant="ritualSoft" size="icon" aria-label="Previous testimonial" onClick={() => move(-1)}><ChevronLeft /></Button>
            <Button variant="ritualSoft" size="icon" aria-label="Next testimonial" onClick={() => move(1)}><ChevronRight /></Button>
          </div>
        </div>
      </figure>
      <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
        {testimonials.map((_, index) => (
          <Button key={index} variant="ghost" className={`h-auto justify-start rounded-xl border px-5 py-4 text-left ${active === index ? "border-primary bg-primary/10 text-primary" : "border-border bg-card/50 text-muted-foreground"}`} onClick={() => setActive(index)} aria-label={`Show testimonial ${index + 1}`}>
            <span className="font-kick text-xs uppercase">Review {String(index + 1).padStart(2, "0")}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
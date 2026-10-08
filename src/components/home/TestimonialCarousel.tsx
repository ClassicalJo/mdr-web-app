import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { testimonials } from "./content";

export function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const review = testimonials[active];
  const move = useCallback((direction: number) => {
    setActive((current) => (current + direction + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => move(1), 7000);
    return () => window.clearInterval(timer);
  }, [move, paused, active]);

  if (!review) return null;

  return (
    <div
      className="mt-8 grid items-center gap-8 lg:grid-cols-[1.15fr_.85fr]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <figure
        key={active}
        className="testimonial-slide flex min-h-72 flex-col justify-between rounded-2xl bg-card p-7 ring-1 ring-foreground/5 sm:p-10"
      >
        <Quote className="size-8 text-primary" aria-hidden="true" />
        <blockquote className="mt-8 max-w-3xl font-display text-2xl leading-snug text-foreground sm:text-3xl">
          “{review.quote}”
        </blockquote>
        <div className="mt-8 flex items-center justify-between gap-5">
          <div>
            <div className="text-primary" aria-label={`${review.rating} out of 5 stars`}>
              ★★★★★
            </div>
            <figcaption className="mt-1 break-all text-sm text-muted-foreground">
              {review.user}
            </figcaption>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ritualSoft"
              size="icon"
              aria-label="Previous testimonial"
              onClick={() => move(-1)}
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="ritualSoft"
              size="icon"
              aria-label="Next testimonial"
              onClick={() => move(1)}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </figure>
      <div className="flex min-w-0 items-center justify-center">
        <img
          key={review.user}
          src={review.image}
          alt={`Original five-star My Daily Ritual review by ${review.user}`}
          loading="lazy"
          className="testimonial-slide max-h-[460px] w-full object-contain"
        />
      </div>
    </div>
  );
}

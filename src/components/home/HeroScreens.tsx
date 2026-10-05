import { useEffect, useState } from "react";
import { appScreens } from "./screens";

export function HeroScreens() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = window.setInterval(() => setActive((i) => (i + 1) % appScreens.length), 4000);
    return () => window.clearInterval(t);
  }, [paused]);

  return (
    <div className="relative h-full w-full" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {appScreens.map((s, i) => (
        <img
          key={s.label}
          src={s.src}
          alt={`My Daily Ritual app — ${s.label}`}
          aria-hidden={i !== active}
          fetchPriority={i === 0 ? "high" : undefined}
          className={`absolute inset-0 h-full w-full rounded-[1.75rem] object-cover object-top transition-opacity duration-1000 ease-in-out ${i === active ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-x-0 bottom-3 flex justify-center">
        <div className="flex items-center gap-1.5 rounded-full bg-background/75 px-2.5 py-1.5 backdrop-blur-md">
          {appScreens.map((s, i) => (
            <button
              key={s.label}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${s.label} screen`}
              aria-current={i === active}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-5 bg-primary" : "w-1.5 bg-foreground/25 hover:bg-foreground/45"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

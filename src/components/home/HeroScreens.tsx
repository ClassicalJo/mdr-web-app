import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { appScreens, homeVideoUrl } from "./screens";

export function HeroScreens() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [videoFailed, setVideoFailed] = useState(false);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!video.current) return;
    if (paused || active !== 0 || reducedMotion) video.current.pause();
    else {
      video.current.currentTime = 0;
      void video.current.play().catch(() => setVideoFailed(true));
    }
  }, [active, paused, reducedMotion]);

  useEffect(() => {
    if (paused || reducedMotion || (active === 0 && !videoFailed)) return;
    const t = window.setInterval(() => setActive((i) => (i + 1) % appScreens.length), 4000);
    return () => window.clearInterval(t);
  }, [paused, reducedMotion, active, videoFailed]);

  return (
    <div className="relative h-full w-full">
      {appScreens.map((s, i) => (
        <img
          key={s.label}
          src={s.src}
          alt={`My Daily Ritual app — ${s.label}`}
          aria-hidden={i !== active}
          fetchPriority={i === 0 ? "high" : undefined}
           className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-1000 ease-in-out ${i === active ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      {!reducedMotion && !videoFailed && <video ref={video} src={homeVideoUrl} poster={appScreens[0]?.src} muted playsInline preload="auto" aria-label="My Daily Ritual Home app preview" aria-hidden={active !== 0} onEnded={() => setActive(1)} onError={() => setVideoFailed(true)} className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-1000 ${active === 0 ? "opacity-100" : "opacity-0"}`} />}
      <div className="absolute inset-x-0 bottom-3 flex justify-center">
        <div className="flex items-center gap-1.5 rounded-full bg-background/75 px-2.5 py-1.5 backdrop-blur-md">
          {appScreens.map((s, i) => (
            <Button
              key={s.label}
              type="button"
               variant="ghost"
               size="icon"
              onClick={() => setActive(i)}
              aria-label={`Show ${s.label} screen`}
              aria-current={i === active}
               className="size-6 rounded-full p-0"
            ><span className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-5 bg-primary" : "w-1.5 bg-foreground/25"}`} /></Button>
          ))}
          {!reducedMotion && <Button variant="ghost" size="icon" className="size-6" aria-label={paused ? "Play app preview" : "Pause app preview"} onClick={() => setPaused((value) => !value)}>{paused ? <Play className="size-3" /> : <Pause className="size-3" />}</Button>}
        </div>
      </div>
    </div>
  );
}

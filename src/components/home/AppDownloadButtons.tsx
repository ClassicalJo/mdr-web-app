import { Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_STORE_URL, PLAY_STORE_URL } from "./content";

type AppDownloadButtonsProps = {
  dark?: boolean;
  compact?: boolean;
  centered?: boolean;
};

export function AppDownloadButtons({
  dark = false,
  compact = false,
  centered = false,
}: AppDownloadButtonsProps) {
  const size = compact ? "default" : "store";
  return (
    <div className={`flex flex-wrap gap-3 ${centered ? "justify-center" : ""}`}>
      <Button variant={dark ? "ritualDark" : "ritualSoft"} size={size} asChild>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Download My Daily Ritual on the App Store"
        >
          <Apple /> <span>{compact ? "App Store" : "Download for iOS"}</span>
        </a>
      </Button>
      <Button variant={dark ? "ritualDark" : "ritualSoft"} size={size} asChild>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Get My Daily Ritual on Google Play"
        >
          <Play /> <span>{compact ? "Google Play" : "Get it on Android"}</span>
        </a>
      </Button>
    </div>
  );
}

import home from "@/assets/mdr/app-Home.png.asset.json";
import gratitude from "@/assets/mdr/app-Gratitude.png.asset.json";
import mantra from "@/assets/mdr/app-Mantra.png.asset.json";
import breathe from "@/assets/mdr/app-Breathe.png.asset.json";
import reflection from "@/assets/mdr/app-Reflection.png.asset.json";
import progress from "@/assets/mdr/app-ProgressTracker.png.asset.json";
import onboard from "@/assets/mdr/app-Onboard.png.asset.json";
import gratitudeLog from "@/assets/mdr/app-Gratitude2.png.asset.json";
import dailyMantra from "@/assets/mdr/app-Mantra2.png.asset.json";
import breathwork from "@/assets/mdr/app-Breathwork.png.asset.json";
import dailyReflection from "@/assets/mdr/app-Reflection1.png.asset.json";
import eveningReflection from "@/assets/mdr/app-Reflection2.png.asset.json";
import progressTracker from "@/assets/mdr/app-ProgressTracker2.png.asset.json";
import homeVideo from "@/assets/mdr/home-demo.mp4.asset.json";
import homeWebm from "@/assets/mdr/home-demo.webm.asset.json";

export const homeVideoUrl = homeVideo.url;
export const homeWebmUrl = homeWebm.url;

export const appScreens = [
  { label: "Home", src: home.url, tags: ["Daily rituals"] },
  { label: "Gratitude", src: gratitude.url, tags: ["Gratitude"] },
  { label: "Mantra", src: mantra.url, tags: ["Mantras"] },
  { label: "Breathe", src: breathe.url, tags: ["Breathwork"] },
  { label: "Reflection", src: reflection.url, tags: ["Habits", "Mood"] },
  { label: "Progress", src: progress.url, tags: ["Progress"] },
  { label: "Welcome", src: onboard.url, tags: ["Your ritual"] },
];

export const insideScreens = [
  {
    category: "Gratitude",
    note: "A dated page for the small things — written in words or saved as a photo.",
    alt: "Gratitude log screen with a weekly date picker, three written entries and a saved photo",
    src: gratitudeLog.url,
  },
  {
    category: "Daily Mantra",
    note: "A fresh line each morning, ready to keep or share when it lands.",
    alt: "Today's mantra screen showing a quote, its author and a share button",
    src: dailyMantra.url,
  },
  {
    category: "Breathwork & Meditation",
    note: "Press play and follow a short guided breath when the day gets loud.",
    alt: "Breathe screen with a guided deep breathing track and playback controls",
    src: breathwork.url,
  },
  {
    category: "Daily Reflection",
    note: "Sleep, steps, water and screen time, each logged with a tap.",
    alt: "Reflection screen showing sleep, social media, water and step counts above a mood slider",
    src: dailyReflection.url,
  },
  {
    category: "Evening Reflection",
    note: "Three prompts and a mood check to close the day with.",
    alt: "Evening reflection screen with a mood slider and written answers about joy and proud moments",
    src: eveningReflection.url,
  },
  {
    category: "Progress",
    note: "A week of sleep and screen time, laid out side by side.",
    alt: "Progress tracker screen with a weekly sleep bar chart and a social media trend line",
    src: progressTracker.url,
  },
];

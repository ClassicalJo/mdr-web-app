import home from "@/assets/mdr/app-Home.webp";
import gratitude from "@/assets/mdr/app-Gratitude.webp";
import mantra from "@/assets/mdr/app-Mantra.png";
import breathe from "@/assets/mdr/app-Breathe.png";
import reflection from "@/assets/mdr/app-Reflection.webp";
import progress from "@/assets/mdr/app-ProgressTracker.webp";
import onboard from "@/assets/mdr/app-Onboard.png";
import gratitudeLog from "@/assets/mdr/app-Gratitude2.png";
import dailyMantra from "@/assets/mdr/app-Mantra2.png";
import breathwork from "@/assets/mdr/app-Breathwork.png";
import dailyReflection from "@/assets/mdr/app-Reflection1.png";
import eveningReflection from "@/assets/mdr/app-Reflection2.png";
import progressTracker from "@/assets/mdr/app-ProgressTracker2.png";
import homeVideo from "@/assets/mdr/home-demo.mp4";
import homeWebm from "@/assets/mdr/home-demo.webm";

export const homeVideoUrl = homeVideo;
export const homeWebmUrl = homeWebm;

export const appScreens = [
  { label: "Home", src: home, tags: ["Daily rituals"] },
  { label: "Gratitude", src: gratitude, tags: ["Gratitude"] },
  { label: "Mantra", src: mantra, tags: ["Mantras"] },
  { label: "Breathe", src: breathe, tags: ["Breathwork"] },
  { label: "Reflection", src: reflection, tags: ["Habits", "Mood"] },
  { label: "Progress", src: progress, tags: ["Progress"] },
  { label: "Welcome", src: onboard, tags: ["Your ritual"] },
];

export const insideScreens = [
  {
    category: "Gratitude",
    note: "A dated page for the small things — written in words or saved as a photo.",
    alt: "Gratitude log screen with a weekly date picker, three written entries and a saved photo",
    src: gratitudeLog,
  },
  {
    category: "Daily Mantra",
    note: "A fresh line each morning, ready to keep or share when it lands.",
    alt: "Today's mantra screen showing a quote, its author and a share button",
    src: dailyMantra,
  },
  {
    category: "Breathwork & Meditation",
    note: "Press play and follow a short guided breath when the day gets loud.",
    alt: "Breathe screen with a guided deep breathing track and playback controls",
    src: breathwork,
  },
  {
    category: "Daily Reflection",
    note: "Sleep, steps, water and screen time, each logged with a tap.",
    alt: "Reflection screen showing sleep, social media, water and step counts above a mood slider",
    src: dailyReflection,
  },
  {
    category: "Evening Reflection",
    note: "Three prompts and a mood check to close the day with.",
    alt: "Evening reflection screen with a mood slider and written answers about joy and proud moments",
    src: eveningReflection,
  },
  {
    category: "Progress",
    note: "A week of sleep and screen time, laid out side by side.",
    alt: "Progress tracker screen with a weekly sleep bar chart and a social media trend line",
    src: progressTracker,
  },
];

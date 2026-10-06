import home from "@/assets/mdr/app-Home.png.asset.json";
import gratitude from "@/assets/mdr/app-Gratitude.png.asset.json";
import mantra from "@/assets/mdr/app-Mantra.png.asset.json";
import breathe from "@/assets/mdr/app-Breathe.png.asset.json";
import reflection from "@/assets/mdr/app-Reflection.png.asset.json";
import progress from "@/assets/mdr/app-ProgressTracker.png.asset.json";
import onboard from "@/assets/mdr/app-Onboard.png.asset.json";
import homeVideo from "@/assets/mdr/home-demo.mp4.asset.json";

export const homeVideoUrl = homeVideo.url;

export const appScreens = [
  { label: "Home", src: home.url, tags: ["Daily rituals"] },
  { label: "Gratitude", src: gratitude.url, tags: ["Gratitude"] },
  { label: "Mantra", src: mantra.url, tags: ["Mantras"] },
  { label: "Breathe", src: breathe.url, tags: ["Breathwork"] },
  { label: "Reflection", src: reflection.url, tags: ["Habits", "Mood"] },
  { label: "Progress", src: progress.url, tags: ["Progress"] },
  { label: "Welcome", src: onboard.url, tags: ["Your ritual"] },
];

export const insideTags = ["Daily rituals", "Gratitude", "Mantras", "Meditation", "Movement / Yoga", "Habits", "Mood tracking", "Progress tracking"];
